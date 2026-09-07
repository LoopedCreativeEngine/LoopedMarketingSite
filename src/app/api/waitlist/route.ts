import { NextResponse } from "next/server";

import { notifyFounder } from "@/lib/waitlist/notify";
import { validateSubmission } from "@/lib/waitlist/record";
import { checkRateLimit, clientKey } from "@/lib/waitlist/rateLimit";
import { storeKind, storeSignup } from "@/lib/waitlist/store";

/**
 * Early-access waitlist submission.
 *
 * The contract this endpoint keeps: a 200 with `{ ok: true }` means the record
 * is in the store and will still be there after a restart. Nothing else returns
 * a success. A store that is not configured returns 503 rather than pretending,
 * because a waitlist that quietly discards leads is worse than one that is
 * visibly switched off.
 *
 * Order matters. The honeypot goes first (a bot should cost nothing), then the
 * rate limit, then validation, then the write. The founder notification runs
 * last and cannot affect the answer.
 */

/** Never prerendered or cached: every call is a write. */
export const dynamic = "force-dynamic";

interface SuccessBody {
  ok: true;
  duplicate?: true;
}

interface FailureBody {
  ok: false;
  error: string;
  field?: string;
}

function fail(status: number, error: string, field?: string, headers?: HeadersInit): NextResponse<FailureBody> {
  return NextResponse.json<FailureBody>({ ok: false, error, ...(field ? { field } : {}) }, { status, headers });
}

export async function POST(request: Request): Promise<NextResponse<SuccessBody | FailureBody>> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return fail(400, "We could not read that submission. Please try again.");
  }
  if (typeof body !== "object" || body === null) {
    return fail(400, "We could not read that submission. Please try again.");
  }

  // ── Honeypot. A real person never sees or fills `company_url`. ──
  // Answered with a plain success so the bot does not learn anything and does
  // not retry. Nothing is stored and no notification is sent.
  if (String(body.company_url ?? "").trim() !== "") {
    return NextResponse.json<SuccessBody>({ ok: true });
  }

  // ── Rate limit. Best effort, per instance. See rateLimit.ts. ──
  const verdict = checkRateLimit(clientKey(request));
  if (!verdict.allowed) {
    return fail(429, "That is a few too many attempts. Please wait a moment and try again.", undefined, {
      "Retry-After": String(verdict.retryAfterSeconds),
    });
  }

  // ── Validation. Server side, and the only version that counts. ──
  const validated = validateSubmission(body);
  if (!validated.ok) {
    return fail(422, validated.message, validated.field);
  }

  // ── The write. Only a real store may answer yes. ──
  const result = await storeSignup(validated.record);

  if (result.outcome === "unconfigured") {
    console.error(
      "[waitlist] REFUSED a valid signup: no store is configured. " +
        "Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (production) or WAITLIST_FILE_STORE (review host). " +
        "No lead has been lost by pretending to accept it.",
    );
    return fail(503, "The waitlist is not accepting signups at this moment. Please try again shortly.");
  }

  if (result.outcome === "failed") {
    console.error(`[waitlist] store (${result.kind}) FAILED for a valid signup: ${result.detail}`);
    return fail(502, "We could not save that just now. Please try again in a moment.");
  }

  if (result.outcome === "duplicate") {
    // Graceful and honest: they are on the list, they were already on it, and
    // the founder is not notified twice for the same person.
    return NextResponse.json<SuccessBody>({ ok: true, duplicate: true });
  }

  // ── Stored. Notify, but never let notification touch the answer. ──
  try {
    await notifyFounder(validated.record);
  } catch (error) {
    console.error("[waitlist] notification threw after a stored signup:", error);
  }

  return NextResponse.json<SuccessBody>({ ok: true });
}

/**
 * A tiny operational surface: which store and notifier are configured. It
 * reports names, never values, so it is safe to call from a smoke test.
 */
export async function GET(): Promise<NextResponse> {
  const { notifyKind } = await import("@/lib/waitlist/notify");
  return NextResponse.json({
    ok: true,
    store: storeKind(),
    notifier: notifyKind(),
  });
}
