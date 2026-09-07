"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

/** The primary CTA treatment (gradient pill), as a native submit button. */
const SUBMIT_CLASS =
  "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-grad px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-[var(--grad-emph)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-70 sm:w-auto";

/**
 * Low-friction early-access waitlist form in the approved editorial style
 * (paper, ink, hairline, purple accent). Three fields required, portfolio size
 * optional. Posts to /api/waitlist. A honeypot (company_url) drops bots.
 */
export function WaitlistForm(): React.ReactElement {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setStatus("submitting");
    const data = new FormData(event.currentTarget);
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
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-hairline bg-paper p-8 text-center shadow-[var(--lift-light)]">
        <p className="kicker text-purple">You are on the list</p>
        <p className="mt-3 text-lg text-ink">We will be in touch as early access opens.</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate">
          You will get product updates and Looped intelligence in the meantime.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-hairline bg-stone p-6 text-left shadow-[var(--lift-light)] sm:p-8">
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
        <p className="mt-3 text-center text-sm text-purple">Something went wrong. Please try again.</p>
      ) : (
        <p className="mt-3 text-center text-xs text-muted">Early access, product updates and Looped intelligence.</p>
      )}
    </form>
  );
}
