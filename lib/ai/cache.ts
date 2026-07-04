import "server-only";

import crypto from "crypto";

import {
  AI_LIMITS,
  AI_TABLES,
  supabaseAdmin,
  type AiCache,
} from "@/lib/supabase/server";

const CACHE_VERSION = "v1";

export type CacheResult = {
  hit: boolean;
  answer: string | null;
};

export type CacheEntry = {
  question: string;
  answer: string;
};

function normalizeQuestion(question: string): string {
  return question
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

export function createQuestionHash(question: string): string {
  return crypto
    .createHash("sha256")
    .update(`${CACHE_VERSION}:${normalizeQuestion(question)}`)
    .digest("hex");
}

export async function getCachedResponse(
  question: string,
): Promise<CacheResult> {
  const questionHash = createQuestionHash(question);

  const { data, error } = await supabaseAdmin
    .from(AI_TABLES.CACHE)
    .select("*")
    .eq("question_hash", questionHash)
    .gt("expires_at", new Date().toISOString())
    .maybeSingle<AiCache>();

  if (error) {
    console.error("[AI_CACHE_GET_ERROR]", error);

    return {
      hit: false,
      answer: null,
    };
  }

  if (!data) {
    return {
      hit: false,
      answer: null,
    };
  }

  void incrementCacheHitCount(data.id, data.hit_count);

  return {
    hit: true,
    answer: data.answer,
  };
}

export async function saveCachedResponse({
  question,
  answer,
}: CacheEntry): Promise<void> {
  const sanitizedQuestion = question.trim();
  const sanitizedAnswer = answer.trim();

  if (!sanitizedQuestion || !sanitizedAnswer) {
    return;
  }

  const questionHash = createQuestionHash(sanitizedQuestion);

  const expiresAt = new Date(
    Date.now() + AI_LIMITS.CACHE_TTL_HOURS * 60 * 60 * 1000,
  ).toISOString();

  const { error } = await supabaseAdmin
    .from(AI_TABLES.CACHE)
    .upsert(
      {
        question_hash: questionHash,
        question: sanitizedQuestion,
        answer: sanitizedAnswer,
        expires_at: expiresAt,
      },
      {
        onConflict: "question_hash",
        ignoreDuplicates: false,
      },
    );

  if (error) {
    console.error("[AI_CACHE_SAVE_ERROR]", error);
  }
}

async function incrementCacheHitCount(
  cacheId: string,
  currentHits: number,
): Promise<void> {
  const { error } = await supabaseAdmin
    .from(AI_TABLES.CACHE)
    .update({
      hit_count: currentHits + 1,
    })
    .eq("id", cacheId);

  if (error) {
    console.error("[AI_CACHE_HIT_INCREMENT_ERROR]", error);
  }
}

export async function deleteExpiredCache(): Promise<void> {
  const { error } = await supabaseAdmin
    .from(AI_TABLES.CACHE)
    .delete()
    .lt("expires_at", new Date().toISOString());

  if (error) {
    throw error;
  }
}

export async function invalidateCache(
  question: string,
): Promise<void> {
  const questionHash = createQuestionHash(question);

  const { error } = await supabaseAdmin
    .from(AI_TABLES.CACHE)
    .delete()
    .eq("question_hash", questionHash);

  if (error) {
    throw error;
  }
}

export async function clearAllCache(): Promise<void> {
  const { error } = await supabaseAdmin
    .from(AI_TABLES.CACHE)
    .delete()
    .neq("id", "");

  if (error) {
    throw error;
  }
}

export async function getCacheStats() {
  const now = new Date().toISOString();

  const [
    totalResult,
    activeResult,
    hitResult,
  ] = await Promise.all([
    supabaseAdmin
      .from(AI_TABLES.CACHE)
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabaseAdmin
      .from(AI_TABLES.CACHE)
      .select("*", {
        count: "exact",
        head: true,
      })
      .gt("expires_at", now),

    supabaseAdmin
      .from(AI_TABLES.CACHE)
      .select("hit_count"),
  ]);

  if (totalResult.error) {
    throw totalResult.error;
  }

  if (activeResult.error) {
    throw activeResult.error;
  }

  if (hitResult.error) {
    throw hitResult.error;
  }

  const totalHits =
    hitResult.data?.reduce(
      (sum, item) => sum + item.hit_count,
      0,
    ) ?? 0;

  return {
    totalEntries: totalResult.count ?? 0,
    activeEntries: activeResult.count ?? 0,
    totalHits,
    cacheVersion: CACHE_VERSION,
    ttlHours: AI_LIMITS.CACHE_TTL_HOURS,
  };
}

export async function warmCache(
  entries: CacheEntry[],
): Promise<void> {
  if (!entries.length) {
    return;
  }

  const expiresAt = new Date(
    Date.now() + AI_LIMITS.CACHE_TTL_HOURS * 60 * 60 * 1000,
  ).toISOString();

  const payload = entries.map((entry) => ({
    question_hash: createQuestionHash(entry.question),
    question: entry.question.trim(),
    answer: entry.answer.trim(),
    expires_at: expiresAt,
  }));

  const { error } = await supabaseAdmin
    .from(AI_TABLES.CACHE)
    .upsert(payload, {
      onConflict: "question_hash",
    });

  if (error) {
    throw error;
  }
}
