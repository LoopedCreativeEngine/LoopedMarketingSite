/**
 * Tell the founder someone asked to see Looped on their own event.
 *
 * This is the highest-intent signal the site produces, so it is labelled
 * distinctly from a waitlist signup in whatever channel receives it.
 *
 * 🔴 A NOTIFICATION FAILURE MUST NEVER FAIL A REQUEST. The record is already
 * stored by the time this runs; everything here is wrapped and nothing throws.
 *
 * Its own variables win, and the waitlist's are the fallback, so a founder who
 * has configured one webhook gets both kinds of alert without extra setup:
 *
 *   DEMO_NOTIFY_SLACK_WEBHOOK  →  WAITLIST_NOTIFY_SLACK_WEBHOOK
 *   DEMO_NOTIFY_WEBHOOK_URL    →  WAITLIST_NOTIFY_WEBHOOK_URL
 */

import type { DemoRequestRecord } from "./record";

const SLACK_WEBHOOK = process.env.DEMO_NOTIFY_SLACK_WEBHOOK ?? process.env.WAITLIST_NOTIFY_SLACK_WEBHOOK ?? "";
const GENERIC_WEBHOOK = process.env.DEMO_NOTIFY_WEBHOOK_URL ?? process.env.WAITLIST_NOTIFY_WEBHOOK_URL ?? "";

export type DemoNotifyKind = "slack" | "webhook" | "none";

export function demoNotifyKind(): DemoNotifyKind {
  if (SLACK_WEBHOOK !== "") return "slack";
  if (GENERIC_WEBHOOK !== "") return "webhook";
  return "none";
}

function summary(record: DemoRequestRecord): string {
  const lines = [
    `🎬 Walkthrough request: ${record.name} (${record.company})`,
    `Event: ${record.event_name}${record.event_type ? ` · ${record.event_type}` : ""}`,
    `Email: ${record.work_email}`,
  ];
  if (record.event_url !== "") lines.push(`Site: ${record.event_url}`);
  if (record.events_per_year !== "") lines.push(`Events a year: ${record.events_per_year}`);
  if (record.what_to_see !== "") lines.push(`Wants to see: ${record.what_to_see}`);
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

export async function notifyDemoRequest(record: DemoRequestRecord): Promise<boolean> {
  const kind = demoNotifyKind();
  try {
    if (kind === "slack") {
      await post(SLACK_WEBHOOK, { text: summary(record) });
      return true;
    }
    if (kind === "webhook") {
      await post(GENERIC_WEBHOOK, { type: "demo.request", summary: summary(record), record });
      return true;
    }
    console.info(
      "[demo-request] request stored but no founder notification is configured " +
        "(set DEMO_NOTIFY_SLACK_WEBHOOK or DEMO_NOTIFY_WEBHOOK_URL, or the WAITLIST_ equivalents)",
    );
    return false;
  } catch (error) {
    console.error(
      `[demo-request] founder notification (${kind}) failed for a STORED request; the lead is safe in the store:`,
      error instanceof Error ? error.message : String(error),
    );
    return false;
  }
}
