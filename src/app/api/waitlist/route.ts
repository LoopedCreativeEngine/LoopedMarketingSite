import { NextResponse } from "next/server";

/**
 * Early-access waitlist submission.
 *
 * This is a working stub for review: it validates the low-friction fields and
 * returns success so the founder can see the conversion UX end to end. Wire the
 * real destination before launch (a table plus a notification, or the existing
 * lead pipeline). The honeypot field `company_url` must stay empty; a filled one
 * is dropped as a bot.
 */
export async function POST(request: Request): Promise<NextResponse> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid body" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const name = String(body.name ?? "").trim();
  const company = String(body.company ?? "").trim();
  const honeypot = String(body.company_url ?? "").trim();

  if (honeypot !== "") {
    // Silently accept bots so they do not retry, but record nothing.
    return NextResponse.json({ ok: true });
  }
  if (!email || !name || !company || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "name, work email and company are required" }, { status: 422 });
  }

  // TODO(before launch): persist to the waitlist store and notify. For now the
  // submission is accepted so the review UX is complete; nothing is stored.
  console.info("[waitlist] submission", { name, company, email, eventCount: body.event_count ?? "" });

  return NextResponse.json({ ok: true });
}
