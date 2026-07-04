import "server-only";

import crypto from "node:crypto";

import {
  AI_LIMITS,
  AI_TABLES,
  supabaseAdmin,
} from "@/lib/supabase/server";

export class RateLimitError extends Error {
  readonly statusCode = 429;

  constructor(message: string) {
    super(message);
    this.name = "RateLimitError";
  }
}

export type RateLimitResult = {
  success: boolean;

  dailyRemaining: number;
  minuteRemaining: number;

  dailyUsed: number;
  minuteUsed: number;

  resetAt: string;
};

type EnforceRateLimitParams = {
  userId?: string | null;
  ip?: string | null;
};

function createIpHash(ip: string): string {
  return crypto
    .createHash("sha256")
    .update(ip)
    .digest("hex");
}

function createAnonymousUserId(ipHash: string): string {
  return `anon_${ipHash.slice(0, 24)}`;
}

function getUtcMinuteBucket(): string {
  const now = new Date();

  now.setUTCSeconds(0);
  now.setUTCMilliseconds(0);

  return now.toISOString();
}

function getUtcDayBucket(): string {
  return new Date().toISOString().split("T")[0]!;
}

function getResetTime(): string {
  const tomorrow = new Date();

  tomorrow.setUTCDate(
    tomorrow.getUTCDate() + 1,
  );

  tomorrow.setUTCHours(
    0,
    0,
    0,
    0,
  );

  return tomorrow.toISOString();
}

async function writeLog(
  userId: string,
  ipHash: string,
  eventType: string,
  message: string,
  metadata?: Record<string, unknown>,
) {
  try {
    await supabaseAdmin
      .from(AI_TABLES.LOGS)
      .insert({
        user_id: userId,
        ip_hash: ipHash,
        event_type: eventType,
        message,
        metadata: metadata ?? {},
      });
  } catch {
    // Logging should never block requests.
  }
}

export async function enforceRateLimit({
  userId,
  ip,
}: EnforceRateLimitParams): Promise<RateLimitResult> {
  const normalizedIp =
    ip?.trim() || "unknown";

  const ipHash =
    createIpHash(normalizedIp);

  const resolvedUserId =
    userId?.trim() ||
    createAnonymousUserId(ipHash);

  const dayBucket =
    getUtcDayBucket();

  const minuteBucket =
    getUtcMinuteBucket();

  /*
   * ==================================================
   * DAILY LIMIT
   * ==================================================
   */

  const {
    data: dailyRow,
    error: dailyFetchError,
  } = await supabaseAdmin
    .from("ai_daily_limits")
    .select(
      `
        id,
        request_count
      `,
    )
    .eq("user_id", resolvedUserId)
    .eq("day_bucket", dayBucket)
    .maybeSingle();

  if (dailyFetchError) {
    throw dailyFetchError;
  }

  const currentDailyCount =
    (dailyRow?.request_count ?? 0) + 1;

  if (
    currentDailyCount >
    AI_LIMITS.DAILY_REQUESTS
  ) {
    await writeLog(
      resolvedUserId,
      ipHash,
      "daily_rate_limit_exceeded",
      "Daily request limit exceeded.",
      {
        daily_count:
          currentDailyCount,
        limit:
          AI_LIMITS.DAILY_REQUESTS,
      },
    );

    throw new RateLimitError(
      "Daily AI request limit reached. Please try again tomorrow.",
    );
  }

  /*
   * ==================================================
   * MINUTE LIMIT
   * ==================================================
   */

  const {
    data: minuteRow,
    error: minuteFetchError,
  } = await supabaseAdmin
    .from("ai_minute_limits")
    .select(
      `
        id,
        request_count
      `,
    )
    .eq("user_id", resolvedUserId)
    .eq(
      "minute_bucket",
      minuteBucket,
    )
    .maybeSingle();

  if (minuteFetchError) {
    throw minuteFetchError;
  }

  const currentMinuteCount =
    (minuteRow?.request_count ??
      0) + 1;

  if (
    currentMinuteCount >
    AI_LIMITS.MINUTE_REQUESTS
  ) {
    await writeLog(
      resolvedUserId,
      ipHash,
      "minute_rate_limit_exceeded",
      "Minute request limit exceeded.",
      {
        minute_count:
          currentMinuteCount,
        limit:
          AI_LIMITS.MINUTE_REQUESTS,
      },
    );

    throw new RateLimitError(
      "Too many requests. Please wait a minute and try again.",
    );
  }

  /*
   * ==================================================
   * UPDATE DAILY COUNTER
   * ==================================================
   */

  const {
    error: dailyUpsertError,
  } = await supabaseAdmin
    .from("ai_daily_limits")
    .upsert(
      {
        user_id:
          resolvedUserId,

        ip_hash: ipHash,

        day_bucket:
          dayBucket,

        request_count:
          currentDailyCount,
      },
      {
        onConflict:
          "user_id,day_bucket",
      },
    );

  if (dailyUpsertError) {
    throw dailyUpsertError;
  }

  /*
   * ==================================================
   * UPDATE MINUTE COUNTER
   * ==================================================
   */

  const {
    error: minuteUpsertError,
  } = await supabaseAdmin
    .from("ai_minute_limits")
    .upsert(
      {
        user_id:
          resolvedUserId,

        ip_hash: ipHash,

        minute_bucket:
          minuteBucket,

        request_count:
          currentMinuteCount,
      },
      {
        onConflict:
          "user_id,minute_bucket",
      },
    );

  if (minuteUpsertError) {
    throw minuteUpsertError;
  }

  return {
    success: true,

    dailyUsed:
      currentDailyCount,

    minuteUsed:
      currentMinuteCount,

    dailyRemaining: Math.max(
      0,
      AI_LIMITS.DAILY_REQUESTS -
        currentDailyCount,
    ),

    minuteRemaining: Math.max(
      0,
      AI_LIMITS.MINUTE_REQUESTS -
        currentMinuteCount,
    ),

    resetAt: getResetTime(),
  };
}

export async function getRateLimitStatus({
  userId,
  ip,
}: EnforceRateLimitParams): Promise<RateLimitResult> {
  const normalizedIp =
    ip?.trim() || "unknown";

  const ipHash =
    createIpHash(normalizedIp);

  const resolvedUserId =
    userId?.trim() ||
    createAnonymousUserId(ipHash);

  const dayBucket =
    getUtcDayBucket();

  const minuteBucket =
    getUtcMinuteBucket();

  const [
    dailyResult,
    minuteResult,
  ] = await Promise.all([
    supabaseAdmin
      .from("ai_daily_limits")
      .select("request_count")
      .eq(
        "user_id",
        resolvedUserId,
      )
      .eq(
        "day_bucket",
        dayBucket,
      )
      .maybeSingle(),

    supabaseAdmin
      .from("ai_minute_limits")
      .select("request_count")
      .eq(
        "user_id",
        resolvedUserId,
      )
      .eq(
        "minute_bucket",
        minuteBucket,
      )
      .maybeSingle(),
  ]);

  if (dailyResult.error) {
    throw dailyResult.error;
  }

  if (minuteResult.error) {
    throw minuteResult.error;
  }

  const dailyUsed =
    dailyResult.data
      ?.request_count ?? 0;

  const minuteUsed =
    minuteResult.data
      ?.request_count ?? 0;

  return {
    success: true,

    dailyUsed,
    minuteUsed,

    dailyRemaining: Math.max(
      0,
      AI_LIMITS.DAILY_REQUESTS -
        dailyUsed,
    ),

    minuteRemaining: Math.max(
      0,
      AI_LIMITS.MINUTE_REQUESTS -
        minuteUsed,
    ),

    resetAt: getResetTime(),
  };
}

export async function cleanupExpiredRateLimits(): Promise<boolean> {
  const now = new Date();

  const minuteCutoff =
    new Date(now);

  minuteCutoff.setUTCDate(
    minuteCutoff.getUTCDate() - 2,
  );

  const dayCutoff =
    new Date(now);

  dayCutoff.setUTCDate(
    dayCutoff.getUTCDate() - 30,
  );

  const [
    minuteCleanup,
    dailyCleanup,
  ] = await Promise.all([
    supabaseAdmin
      .from("ai_minute_limits")
      .delete()
      .lt(
        "minute_bucket",
        minuteCutoff.toISOString(),
      ),

    supabaseAdmin
      .from("ai_daily_limits")
      .delete()
      .lt(
        "day_bucket",
        dayCutoff
          .toISOString()
          .split("T")[0]!,
      ),
  ]);

  if (minuteCleanup.error) {
    throw minuteCleanup.error;
  }

  if (dailyCleanup.error) {
    throw dailyCleanup.error;
  }

  return true;
}
