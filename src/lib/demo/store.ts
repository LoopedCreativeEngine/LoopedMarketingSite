/**
 * Where a demo request actually goes.
 *
 * The same two adapters and the same fail-closed contract as the waitlist
 * store, pointed at a different table and a different file. Nothing here can
 * write to the waitlist, and nothing in the waitlist can write here.
 *
 *   1. SUPABASE  — SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (shared project),
 *      table SUPABASE_DEMO_TABLE, default `demo_requests`.
 *   2. FILE      — DEMO_FILE_STORE, an absolute path, for a review host.
 *   3. UNCONFIGURED — neither set. The route answers 503 and says so. It never
 *      reports a success it cannot back up.
 *
 * Unlike the waitlist there is deliberately NO unique constraint on the email
 * address. One person can legitimately ask for a walkthrough of more than one
 * event, and a second request is a second piece of intent, not a duplicate to
 * be swallowed.
 */

import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

import type { DemoRequestRecord } from "./record";

export type DemoStoreKind = "supabase" | "file" | "unconfigured";

export type DemoStoreResult =
  | { readonly outcome: "stored"; readonly kind: DemoStoreKind }
  | { readonly outcome: "unconfigured" }
  | { readonly outcome: "failed"; readonly kind: DemoStoreKind; readonly detail: string };

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const SUPABASE_TABLE = process.env.SUPABASE_DEMO_TABLE ?? "demo_requests";
const FILE_STORE = process.env.DEMO_FILE_STORE ?? "";

export function demoStoreKind(): DemoStoreKind {
  if (SUPABASE_URL !== "" && SUPABASE_SERVICE_ROLE_KEY !== "") return "supabase";
  if (FILE_STORE !== "") return "file";
  return "unconfigured";
}

function describe(error: unknown): string {
  return error instanceof Error ? error.message.slice(0, 300) : String(error).slice(0, 300);
}

async function insertSupabase(record: DemoRequestRecord): Promise<DemoStoreResult> {
  const url = `${SUPABASE_URL.replace(/\/+$/, "")}/rest/v1/${encodeURIComponent(SUPABASE_TABLE)}`;
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify([record]),
      cache: "no-store",
    });
  } catch (error) {
    return { outcome: "failed", kind: "supabase", detail: `network: ${describe(error)}` };
  }

  if (response.ok) return { outcome: "stored", kind: "supabase" };

  let body = "";
  try {
    body = await response.text();
  } catch {
    body = "";
  }
  return { outcome: "failed", kind: "supabase", detail: `HTTP ${response.status}: ${body.slice(0, 300)}` };
}

async function insertFile(record: DemoRequestRecord): Promise<DemoStoreResult> {
  try {
    await mkdir(dirname(FILE_STORE), { recursive: true });
    await appendFile(FILE_STORE, `${JSON.stringify(record)}\n`, { encoding: "utf8", mode: 0o600 });
    return { outcome: "stored", kind: "file" };
  } catch (error) {
    return { outcome: "failed", kind: "file", detail: describe(error) };
  }
}

/**
 * Persist one request. The caller may only report success when this returns
 * `stored`; every other outcome means nothing was written.
 */
export async function storeDemoRequest(record: DemoRequestRecord): Promise<DemoStoreResult> {
  switch (demoStoreKind()) {
    case "supabase":
      return insertSupabase(record);
    case "file":
      return insertFile(record);
    default:
      return { outcome: "unconfigured" };
  }
}
