import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

/* ============================================================================
 * CLASSNAME UTIL
 * ============================================================================
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ============================================================================
 * STRING HELPERS
 * ============================================================================
 */

export function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export function normalizeForSearch(value: string): string {
  return normalizeText(value).toLowerCase();
}

export function truncateText(
  value: string,
  maxLength: number,
): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trimEnd()}...`;
}

export function capitalize(value: string): string {
  if (!value) {
    return "";
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

/* ============================================================================
 * AI HELPERS
 * ============================================================================
 */

export function sanitizeAiMessage(message: string): string {
  return normalizeText(message).slice(0, 1000);
}

export function createContentHash(value: string): string {
  return crypto
    .createHash("sha256")
    .update(value)
    .digest("hex");
}

export function createStableHash(value: string): string {
  return createContentHash(normalizeForSearch(value));
}

/* ============================================================================
 * DATE HELPERS
 * ============================================================================
 */

export function utcNow(): string {
  return new Date().toISOString();
}

export function addHours(
  hours: number,
  fromDate = new Date(),
): string {
  return new Date(
    fromDate.getTime() + hours * 60 * 60 * 1000,
  ).toISOString();
}

export function isExpired(date: string): boolean {
  return new Date(date).getTime() <= Date.now();
}

/* ============================================================================
 * NUMBER HELPERS
 * ============================================================================
 */

export function clamp(
  value: number,
  min: number,
  max: number,
): number {
  return Math.min(Math.max(value, min), max);
}

export function safeNumber(
  value: unknown,
  fallback = 0,
): number {
  const parsed =
    typeof value === "number"
      ? value
      : Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : fallback;
}

/* ============================================================================
 * OBJECT HELPERS
 * ============================================================================
 */

export function removeUndefined<T extends Record<string, unknown>>(
  object: T,
): Partial<T> {
  return Object.fromEntries(
    Object.entries(object).filter(
      ([, value]) => value !== undefined,
    ),
  ) as Partial<T>;
}

export function isObject(
  value: unknown,
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

/* ============================================================================
 * REQUEST HELPERS
 * ============================================================================
 */

export function getClientIp(
  headers: Headers,
): string {
  const forwardedFor =
    headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return (
    headers.get("x-real-ip") ??
    headers.get("cf-connecting-ip") ??
    "unknown"
  );
}

export function hashIpAddress(
  ipAddress: string,
): string {
  return crypto
    .createHash("sha256")
    .update(ipAddress)
    .digest("hex");
}

export function createAnonymousUserId(
  ipAddress: string,
): string {
  return createStableHash(ipAddress).slice(0, 32);
}

/* ============================================================================
 * RESPONSE HELPERS
 * ============================================================================
 */

export function createSuccessResponse<T>(
  data: T,
) {
  return {
    success: true,
    data,
  } as const;
}

export function createErrorResponse(
  message: string,
  status = 500,
) {
  return {
    success: false,
    status,
    error: message,
  } as const;
}

/* ============================================================================
 * VALIDATION HELPERS
 * ============================================================================
 */

export function isNonEmptyString(
  value: unknown,
): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0
  );
}

export function isValidUuid(
  value: string,
): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export function isValidJson(
  value: string,
): boolean {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

/* ============================================================================
 * PERFORMANCE HELPERS
 * ============================================================================
 */

export async function measureExecutionTime<T>(
  callback: () => Promise<T>,
): Promise<{
  result: T;
  durationMs: number;
}> {
  const startedAt = performance.now();

  const result = await callback();

  return {
    result,
    durationMs:
      Math.round(
        (performance.now() - startedAt) * 100,
      ) / 100,
  };
}

/* ============================================================================
 * SLEEP
 * ============================================================================
 */

export async function sleep(
  milliseconds: number,
): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
