/**
 * A small fixed-window rate limiter for the waitlist endpoint.
 *
 * Deliberately in-process and in-memory. It exists to stop one client hammering
 * the form, and it does that well on a single long-lived server such as the
 * review host. It is NOT a distributed limiter: several instances behind a load
 * balancer each keep their own counters, so the effective limit multiplies by
 * the instance count. That is an accepted trade for a waitlist form, and it is
 * written down here rather than discovered later. If the site is ever fronted
 * by a platform with its own rate limiting, prefer that and leave this as the
 * backstop.
 *
 * The honeypot in the form catches the naive bots; this catches the impatient
 * and the scripted.
 */

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

/** Bound the map so a spray of unique addresses cannot grow it without limit. */
const MAX_TRACKED_CLIENTS = 5_000;

interface Window {
  count: number;
  resetAt: number;
}

const windows = new Map<string, Window>();

function sweep(now: number): void {
  for (const [key, window] of windows) {
    if (window.resetAt <= now) windows.delete(key);
  }
}

export interface RateLimitVerdict {
  readonly allowed: boolean;
  /** Seconds until the window resets, for a Retry-After header. */
  readonly retryAfterSeconds: number;
}

/**
 * Identify the caller for limiting purposes.
 *
 * x-forwarded-for is set by whatever proxy is in front of the app and is
 * trivially spoofable when there is no proxy, so this is a best-effort key and
 * never an identity. It is used only as a map key and is not stored on the
 * waitlist record.
 */
export function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 64);
  }
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim().slice(0, 64);
  return "unknown";
}

export function checkRateLimit(key: string, now: number = Date.now()): RateLimitVerdict {
  if (windows.size > MAX_TRACKED_CLIENTS) sweep(now);

  const existing = windows.get(key);
  if (!existing || existing.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= MAX_PER_WINDOW) {
    return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)) };
  }

  existing.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Test seam: forget every window. Not used by the running site. */
export function resetRateLimit(): void {
  windows.clear();
}
