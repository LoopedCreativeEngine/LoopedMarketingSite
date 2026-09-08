"use client";

import { useRef, useState } from "react";

import { track } from "@/lib/analytics";
import { currentSourcePage, readAttribution } from "@/lib/attribution";

type Status = "idle" | "submitting" | "success" | "error";

const SUBMIT_CLASS =
  "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-grad px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-[var(--grad-emph)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-70 sm:w-auto";

/**
 * "Show me Looped on my event."
 *
 * Four required fields and four optional ones. The event URL is asked for
 * rather than a description, because one link tells us more about an event
 * than a paragraph a busy organiser has to write at eleven at night.
 *
 * Posts to /api/demo-request, which is a different endpoint and a different
 * table from the waitlist. This form never touches the waitlist.
 */
export function DemoRequestForm(): React.ReactElement {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const started = useRef(false);

  function onFirstInput(): void {
    if (started.current) return;
    started.current = true;
    track("demo_request_start");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    track("demo_request_submit");

    const data = new FormData(event.currentTarget);
    const attribution = readAttribution();

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          event_name: data.get("event_name"),
          event_url: data.get("event_url"),
          event_type: data.get("event_type"),
          events_per_year: data.get("events_per_year"),
          what_to_see: data.get("what_to_see"),
          contact_reference: data.get("contact_reference"),
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

      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (res.ok && body.ok) {
        setStatus("success");
        track("demo_request_success");
        return;
      }

      setStatus("error");
      setMessage(body.error ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-hairline bg-paper p-8 text-center shadow-[var(--lift-light)]">
        <p className="kicker text-purple">We have your event</p>
        <p className="mt-3 text-lg text-ink">We will be in touch when your walkthrough is ready.</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate">
          Walkthroughs are prepared by hand while we open early access, so this is not an instant download. If we need
          anything else to make yours useful, we will ask.
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
        <input name="company" required placeholder="Company" autoComplete="organization" className={field} />
        <input name="event_name" required placeholder="Event or brand name" className={field} />
        <input
          name="event_url"
          inputMode="url"
          placeholder="Event website (the most useful thing you can give us)"
          className={`${field} sm:col-span-2`}
        />
        <select name="event_type" defaultValue="" className={field} aria-label="Event type">
          <option value="">Event type (optional)</option>
          <option>Conference</option>
          <option>Awards</option>
          <option>Both</option>
          <option>Something else</option>
        </select>
        <select name="events_per_year" defaultValue="" className={field} aria-label="Events a year">
          <option value="">Events a year (optional)</option>
          <option value="1">1</option>
          <option value="2-5">2-5</option>
          <option value="6-20">6-20</option>
          <option value="20+">20+</option>
        </select>
        <textarea
          name="what_to_see"
          rows={3}
          placeholder="What would you most like Looped to show you? (optional)"
          className={`${field} sm:col-span-2`}
        />
      </div>
      <input name="contact_reference" tabIndex={-1} autoComplete="off" aria-hidden className="absolute left-[-9999px] h-0 w-0 opacity-0" />
      <div className="mt-5">
        <button type="submit" disabled={status === "submitting"} className={SUBMIT_CLASS}>
          {status === "submitting" ? "Sending" : "Show me Looped on my event"}
        </button>
      </div>
      {status === "error" ? (
        <p role="alert" className="mt-3 text-center text-sm text-purple">
          {message}
        </p>
      ) : (
        <p className="mt-3 text-center text-xs text-muted">
          We will use this to prepare your walkthrough and to talk to you about Looped.
        </p>
      )}
    </form>
  );
}
