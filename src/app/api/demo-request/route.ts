import { NextResponse } from "next/server";

import { notifyDemoRequest } from "@/lib/demo/notify";
import { validateDemoRequest } from "@/lib/demo/record";
import { demoStoreKind, storeDemoRequest } from "@/lib/demo/store";
import { checkRateLimit, clientKey } from "@/lib/waitlist/rateLimit";

/**
 * "Show me Looped on my event": a request for a personalised walkthrough.
 *
 * The same contract as the waitlist endpoint, kept deliberately identical so
 * there is one rule on this site and not two: a 200 with `{ ok: true }` means
 * the record is in the store and will still be there after a restart. An
 * unconfigured store answers 503 rather than pretending, because a walkthrough
 * request that quietly disappears is the most expensive lead the site can lose.
 *
 * It shares the waitlist's in-process rate limiter on purpose: the limit is
 * about one client hammering this server, not about which form they chose.
 */

export const dynamic = "force-dynamic";

interface SuccessBody {
  ok: true;
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

  // ── Honeypot. A real person never sees or fills `contact_reference`. ──
  if (String(body.contact_reference ?? "").trim() !== "") {
    return NextResponse.json<SuccessBody>({ ok: true });
  }

  const verdict = checkRateLimit(clientKey(request));
  if (!verdict.allowed) {
    return fail(429, "That is a few too many attempts. Please wait a moment and try again.", undefined, {
      "Retry-After": String(verdict.retryAfterSeconds),
    });
  }

  const validated = validateDemoRequest(body);
  if (!validated.ok) {
    return fail(422, validated.message, validated.field);
  }

  const result = await storeDemoRequest(validated.record);

  if (result.outcome === "unconfigured") {
    console.error(
      "[demo-request] REFUSED a valid walkthrough request: no store is configured. " +
        "Apply the demo_requests migration and set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (production), " +
        "or DEMO_FILE_STORE (review host). No lead has been lost by pretending to accept it.",
    );
    return fail(503, "We cannot take walkthrough requests at this moment. Please try again shortly.");
  }

  if (result.outcome === "failed") {
    console.error(`[demo-request] store (${result.kind}) FAILED for a valid request: ${result.detail}`);
    return fail(502, "We could not save that just now. Please try again in a moment.");
  }

  try {
    await notifyDemoRequest(validated.record);
  } catch (error) {
    console.error("[demo-request] notification threw after a stored request:", error);
  }

  return NextResponse.json<SuccessBody>({ ok: true });
}

/** Which store and notifier are configured. Names only, never values. */
export async function GET(): Promise<NextResponse> {
  const { demoNotifyKind } = await import("@/lib/demo/notify");
  return NextResponse.json({
    ok: true,
    store: demoStoreKind(),
    notifier: demoNotifyKind(),
  });
}
