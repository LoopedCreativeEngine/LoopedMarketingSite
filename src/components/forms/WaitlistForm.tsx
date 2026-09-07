"use client";

import { useRef, useState } from "react";

import { track } from "@/lib/analytics";
import { currentSourcePage, readAttribution } from "@/lib/attribution";

type Status = "idle" | "submitting" | "success" | "duplicate" | "error";

/** The primary CTA treatment (gradient pill), as a native submit button. */
const SUBMIT_CLASS =
  "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-grad px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-[var(--grad-emph)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-70 sm:w-auto";

/**
 * Low-friction early-access waitlist form in the approved editorial style
 * (paper, ink, hairline, purple accent). Three fields required, portfolio size
 * optional. Posts to /api/waitlist. A honeypot (company_url) drops bots.
 *
 * The form carries this session's attribution with the submission, so the
 * campaign that produced a lead is recorded on the lead itself rather than
 * inferred later. It reports the server's message when something goes wrong,
 * because "something went wrong" tells a visitor nothing about whether to fix
 * their email or come back in a minute.
 */
export function WaitlistForm(): React.ReactElement {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const started = useRef(false);

  /** The first keystroke in the form is the start of a conversion. Once only. */
  function onFirstInput(): void {
    if (started.current) return;
    started.current = true;
    track("waitlist_form_start");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    track("waitlist_form_submit");

    const data = new FormData(event.currentTarget);
    const attribution = readAttribution();

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          event_count: data.get("event_count"),
          company_url: data.get("company_url"),
          source_page: currentSourcePage(),
          landing_page: attribution.landing_page,
          referrer: attribution.referrer,
          utm_source: attribution.utm_source,
          utm_medium: attribution.utm_medium,
          utm_campaign: attribution.utm_campaign,
          utm_content: attribution.utm_content,
          utm_term: attribution.utm_term,
        }),
      });

      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        duplicate?: boolean;
      };

      if (res.ok && body.ok) {
        setStatus(body.duplicate ? "duplicate" : "success");
        track("waitlist_success", { duplicate: Boolean(body.duplicate) });
        return;
      }

      setStatus("error");
      setMessage(body.error ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success" || status === "duplicate") {
    return (
      <div className="rounded-2xl border border-hairline bg-paper p-8 text-center shadow-[var(--lift-light)]">
        <p className="kicker text-purple">You are on the list</p>
        <p className="mt-3 text-lg text-ink">
          {status === "duplicate"
            ? "You were already on the list. We have you."
            : "We will be in touch as early access opens."}
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate">
          You will get product updates and Looped intelligence in the meantime.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20";

  return (
    <form
      onSubmit={onSubmit}
      onInput={onFirstInput}
      className="rounded-2xl border border-hairline bg-stone p-6 text-left shadow-[var(--lift-light)] sm:p-8"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" autoComplete="name" className={field} />
        <input name="email" type="email" required placeholder="Work email" autoComplete="email" className={field} />
        <input name="company" required placeholder="Company" autoComplete="organization" className={`${field} sm:col-span-2`} />
        <input name="event_count" placeholder="Number of events or portfolio size (optional)" className={`${field} sm:col-span-2`} />
      </div>
      <input name="company_url" tabIndex={-1} autoComplete="off" aria-hidden className="absolute left-[-9999px] h-0 w-0 opacity-0" />
      <div className="mt-5">
        <button type="submit" disabled={status === "submitting"} className={SUBMIT_CLASS}>
          {status === "submitting" ? "Joining" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" ? (
        <p role="alert" className="mt-3 text-center text-sm text-purple">
          {message}
        </p>
      ) : (
        <p className="mt-3 text-center text-xs text-muted">Early access, product updates and Looped intelligence.</p>
      )}
    </form>
  );
}
