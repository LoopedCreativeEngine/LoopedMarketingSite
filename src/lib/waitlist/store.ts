/**
 * Where a waitlist record actually goes.
 *
 * Two adapters, chosen by environment, and a third state that is not an
 * adapter at all:
 *
 *   1. SUPABASE  — set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY. Rows are
 *      inserted through PostgREST over HTTPS. This is the production path.
 *   2. FILE      — set WAITLIST_FILE_STORE to an absolute path. Rows are
 *      appended as JSON lines. This is for a review host, where the process
 *      owns a real disk. It is opt-in and never a silent default, because on a
 *      serverless host a file write looks like it worked and disappears.
 *   3. UNCONFIGURED — neither is set. Nothing is stored and the route says so
 *      with a 503. It never reports success it cannot back up.
 *
 * The service-role key is a server-only secret. It is read from a non-public
 * environment variable, used only inside this module, and never returned to a
 * caller or included in an error message.
 */

import { appendFile, mkdir, readFile } from "node:fs/promises";
import { dirname } from "node:path";

import { normaliseEmail, type WaitlistRecord } from "./record";

export type StoreKind = "supabase" | "file" | "unconfigured";

export type StoreResult =
  | { readonly outcome: "stored"; readonly kind: StoreKind }
  | { readonly outcome: "duplicate"; readonly kind: StoreKind }
  | { readonly outcome: "unconfigured" }
  | { readonly outcome: "failed"; readonly kind: StoreKind; readonly detail: string };

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const SUPABASE_TABLE = process.env.SUPABASE_WAITLIST_TABLE ?? "waitlist_signups";
const FILE_STORE = process.env.WAITLIST_FILE_STORE ?? "";

/** Which adapter is live, without touching it. Used by the health surface. */
export function storeKind(): StoreKind {
  if (SUPABASE_URL !== "" && SUPABASE_SERVICE_ROLE_KEY !== "") return "supabase";
  if (FILE_STORE !== "") return "file";
  return "unconfigured";
}

/* ───────────────────────────── Supabase ───────────────────────────── */

/**
 * PostgREST reports a unique-constraint violation as SQLSTATE 23505. That is
 * the dedupe working, not a failure, so it is translated into `duplicate`.
 */
const UNIQUE_VIOLATION = "23505";

async function insertSupabase(record: WaitlistRecord): Promise<StoreResult> {
  const url = `${SUPABASE_URL.replace(/\/+$/, "")}/rest/v1/${encodeURIComponent(SUPABASE_TABLE)}`;
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        // Do not echo the row back: nothing here needs it, and a narrower
        // response is one less place a stored value can leak into a log.
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
  if (response.status === 409 || body.includes(UNIQUE_VIOLATION)) {
    return { outcome: "duplicate", kind: "supabase" };
  }
  return {
    outcome: "failed",
    kind: "supabase",
    // The status and PostgREST's own message, capped. Never the key.
    detail: `HTTP ${response.status}: ${body.slice(0, 300)}`,
  };
}

/* ─────────────────────────────── File ─────────────────────────────── */

/**
 * Dedupe for the file store is a scan of the file for an existing normalised
 * address. Linear, and entirely adequate for a waitlist: at the scale where it
 * stops being adequate, the list belongs in Supabase, which is the whole point
 * of the adapter above.
 */
async function insertFile(record: WaitlistRecord): Promise<StoreResult> {
  try {
    await mkdir(dirname(FILE_STORE), { recursive: true });

    let existing = "";
    try {
      existing = await readFile(FILE_STORE, "utf8");
    } catch {
      existing = "";
    }
    if (existing !== "") {
      const target = normaliseEmail(record.work_email);
      for (const line of existing.split("\n")) {
        if (line.trim() === "") continue;
        try {
          const row = JSON.parse(line) as Partial<WaitlistRecord>;
          if (typeof row.work_email === "string" && normaliseEmail(row.work_email) === target) {
            return { outcome: "duplicate", kind: "file" };
          }
        } catch {
          // A malformed line is skipped rather than failing the write: one bad
          // line must not close the list to everyone who comes after it.
        }
      }
    }

    await appendFile(FILE_STORE, `${JSON.stringify(record)}\n`, { encoding: "utf8", mode: 0o600 });
    return { outcome: "stored", kind: "file" };
  } catch (error) {
    return { outcome: "failed", kind: "file", detail: describe(error) };
  }
}

/* ────────────────────────────── Public ────────────────────────────── */

function describe(error: unknown): string {
  return error instanceof Error ? error.message.slice(0, 300) : String(error).slice(0, 300);
}

/**
 * Persist one record. The caller may only report success when this returns
 * `stored` or `duplicate`; every other outcome means nothing was written.
 */
export async function storeSignup(record: WaitlistRecord): Promise<StoreResult> {
  switch (storeKind()) {
    case "supabase":
      return insertSupabase(record);
    case "file":
      return insertFile(record);
    default:
      return { outcome: "unconfigured" };
  }
}
