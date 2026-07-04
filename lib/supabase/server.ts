import "server-only";

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL environment variable.",
  );
}

if (!SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    "Missing SUPABASE_SERVICE_ROLE_KEY environment variable.",
  );
}

/**
 * ============================================================================
 * SERVICE ROLE CLIENT
 * ============================================================================
 *
 * Server-only admin client.
 *
 * Uses:
 * - Rate limiting
 * - Cache
 * - Analytics
 * - Logging
 * - Cron jobs
 *
 * Never import this client into client components.
 *
 * ============================================================================
 */

export const supabaseAdmin = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },

    global: {
      headers: {
        "X-Client-Info": "swaleh-portfolio-ai",
      },
    },

    db: {
      schema: "public",
    },
  },
);

/**
 * ============================================================================
 * DATABASE TYPES
 * ============================================================================
 */

export type AiRateLimit = {
  id: string;

  user_id: string;
  ip_hash: string;

  day_bucket: string;
  minute_bucket: string;

  daily_count: number;
  minute_count: number;

  created_at: string;
  updated_at: string;
};

export type AiCache = {
  id: string;

  question_hash: string;
  question: string;

  answer: string;

  hit_count: number;

  expires_at: string;

  created_at: string;
  updated_at: string;
};

export type AiAnalytics = {
  id: string;

  user_id: string;
  ip_hash: string;

  question: string;

  answer_length: number;

  prompt_tokens: number | null;
  completion_tokens: number | null;
  total_tokens: number | null;

  response_time_ms: number | null;

  cache_hit: boolean;

  model: string;

  created_at: string;
};

export type AiLog = {
  id: string;

  user_id: string | null;
  ip_hash: string | null;

  event_type: string;

  message: string | null;

  metadata: Record<string, unknown> | null;

  created_at: string;
};

/**
 * ============================================================================
 * TABLE NAMES
 * ============================================================================
 */

export const AI_TABLES = {
  RATE_LIMITS: "ai_rate_limits",
  CACHE: "ai_cache",
  ANALYTICS: "ai_analytics",
  LOGS: "ai_logs",
} as const;

/**
 * ============================================================================
 * RATE LIMIT CONFIG
 * ============================================================================
 */

export const AI_LIMITS = {
  DAILY_REQUESTS: 20,
  MINUTE_REQUESTS: 5,

  CACHE_TTL_HOURS: 24,

  MAX_MESSAGE_LENGTH: 1000,
} as const;

/**
 * ============================================================================
 * HEALTH CHECK
 * ============================================================================
 */

export async function verifyDatabaseConnection() {
  const { error } = await supabaseAdmin
    .from(AI_TABLES.LOGS)
    .select("id")
    .limit(1);

  if (error) {
    throw error;
  }

  return true;
}
