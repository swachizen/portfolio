// lib/supabaseClient.ts

import {
  createClient,
  type SupabaseClient,
} from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL environment variable.",
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable.",
  );
}

export const supabase: SupabaseClient =
  createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },

      global: {
        headers: {
          "X-Client-Info":
            "swaleh-portfolio",
        },
      },

      db: {
        schema: "public",
      },

      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    },
  );

export default supabase;
