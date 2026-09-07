/**
 * Tell the founder a real person joined the waitlist.
 *
 * 🔴 A NOTIFICATION FAILURE MUST NEVER FAIL A SIGNUP. The lead is already in
 * the store by the time this runs. Everything here is wrapped, nothing here
 * throws, and the caller does not await the outcome before answering the
 * visitor. The worst case is a stored lead the founder hears about late, which
 * is recoverable; the unacceptable case is a lost lead, which is not.
 *
 * Two transports, both configured by environment, both optional:
 *
 *   WAITLIST_NOTIFY_SLACK_WEBHOOK  a Slack incoming webhook URL
 *   WAITLIST_NOTIFY_WEBHOOK_URL    any endpoint that accepts a JSON POST
 *
 * With neither set, this is a no-op that logs once per signup so the absence is
 * visible in the server log rather than silent.
 */

import type { WaitlistRecord } from "./record";

const SLACK_WEBHOOK = process.env.WAITLIST_NOTIFY_SLACK_WEBHOOK ?? "";
const GENERIC_WEBHOOK = process.env.WAITLIST_NOTIFY_WEBHOOK_URL ?? "";

export type NotifyKind = "slack" | "webhook" | "none";

export function notifyKind(): NotifyKind {
  if (SLACK_WEBHOOK !== "") return "slack";
  if (GENERIC_WEBHOOK !== "") return "webhook";
  return "none";
}

/** A short, readable summary. The same facts in both transports. */
function summary(record: WaitlistRecord): string {
  const lines = [
    `New Looped waitlist signup: ${record.name} (${record.company})`,
    `Email: ${record.work_email}`,
  ];
  if (record.portfolio_size_or_event_count !== "") {
    lines.push(`Portfolio or events: ${record.portfolio_size_or_event_count}`);
  }
  const attribution = [
    record.utm_source && `source=${record.utm_source}`,
    record.utm_medium && `medium=${record.utm_medium}`,
    record.utm_campaign && `campaign=${record.utm_campaign}`,
  ].filter(Boolean);
  lines.push(`From: ${record.source_page || "unknown page"}${attribution.length ? ` (${attribution.join(", ")})` : ""}`);
  if (record.referrer !== "") lines.push(`Referrer: ${record.referrer}`);
  return lines.join("\n");
}

async function post(url: string, body: unknown, timeoutMs = 5_000): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: "no-store",
    });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Fire the notification. Resolves whatever happens; the boolean is for logging
 * and tests, not for control flow in the request path.
 */
export async function notifyFounder(record: WaitlistRecord): Promise<boolean> {
  const kind = notifyKind();
  try {
    if (kind === "slack") {
      await post(SLACK_WEBHOOK, { text: summary(record) });
      return true;
    }
    if (kind === "webhook") {
      await post(GENERIC_WEBHOOK, {
        type: "waitlist.signup",
        summary: summary(record),
        record,
      });
      return true;
    }
    console.info(
      "[waitlist] signup stored but no founder notification is configured " +
        "(set WAITLIST_NOTIFY_SLACK_WEBHOOK or WAITLIST_NOTIFY_WEBHOOK_URL)",
    );
    return false;
  } catch (error) {
    // Logged, never rethrown. The signup has already been persisted.
    console.error(
      `[waitlist] founder notification (${kind}) failed for a STORED signup; the lead is safe in the store:`,
      error instanceof Error ? error.message : String(error),
    );
    return false;
  }
}
