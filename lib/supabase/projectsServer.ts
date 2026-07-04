import "server-only";

import { cookies } from "next/headers";

import {
  createServerClient,
  type CookieOptions,
} from "@supabase/ssr";

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

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)
            ?.value;
        },

        set(
          name: string,
          value: string,
          options: CookieOptions,
        ) {
          try {
            cookieStore.set({
              name,
              value,
              ...options,
            });
          } catch {
            /**
             * Cookie writes can fail in
             * Server Components.
             *
             * Supabase auth refreshes are
             * typically handled by middleware.
             */
          }
        },

        remove(
          name: string,
          options: CookieOptions,
        ) {
          try {
            cookieStore.set({
              name,
              value: "",
              ...options,
              maxAge: 0,
            });
          } catch {
            /**
             * Cookie writes can fail in
             * Server Components.
             *
             * Supabase auth refreshes are
             * typically handled by middleware.
             */
          }
        },
      },
    },
  );
}

export type SupabaseClient =
  Awaited<
    ReturnType<typeof createClient>
  >;
