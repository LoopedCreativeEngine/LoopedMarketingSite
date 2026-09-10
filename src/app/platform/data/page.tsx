import type { Metadata } from "next";

import { SystemsFigure } from "@/components/brand/SystemsFigure";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Event data and systems: CRM, registration and awards",
  description:
    "Looped works across the CRM, registration, awards, programme and marketing systems you already run, and makes sense of what sits between them.",
  alternates: { canonical: "/platform/data" },
  openGraph: {
    url: "/platform/data",
    title: "Event data and systems: CRM, registration and awards",
    description:
      "Nobody needs another system of record. Looped is the intelligence and action layer across the ones you already have.",
  },
};

const SYSTEMS = [
  {
    name: "CRM",
    body: "Commercial history reaches the rest of the business, and approved outcomes go back to the record your sales team lives in.",
  },
  {
    name: "Registration",
    body: "Bookings and pace read as the demand signal they are, instead of a report someone exports on a Friday.",
  },
  {
    name: "Awards",
    body: "Categories, entrants, entry status, finalists and winners held as one year rather than four spreadsheets.",
  },
  {
    name: "Programme",
    body: "Sessions, tracks, speakers and timings as live programme data the whole team can build on.",
  },
  {
    name: "Marketing and email",
    body: "Campaigns and audiences connected to the thinking that shaped them, sending from your own account.",
  },
  {
    name: "Messaging and voice",
    body: "WhatsApp, SMS, RCS and calling through your own numbers, so the conversation continues wherever the person actually replies.",
  },
  {
    name: "Analytics",
    body: "Performance read next to the plan it was measured against, so a number always arrives with its context.",
  },
  {
    name: "Files and exports",
    body: "Bring in the files your event already relies on, from historical attendee lists and entrant exports to P&Ls. Looped keeps track of where the data came from and how it can be used.",
  },
];

const RESOLVES = [
  {
    title: "One person, not four records",
    body: "The same individual in four systems under three spellings is recognised as one person, so your team stops arguing about which list is right.",
  },
  {
    title: "How everyone is connected",
    body: "Who works where, which account they belong to, which of your events they have touched and in what role.",
  },
  {
    title: "History across the portfolio",
    body: "A relationship spanning a conference, an awards programme and a sister event reads as one history rather than three strangers.",
  },
  {
    title: "Where a fact came from",
    body: "Every fact carries its source and how much weight it deserves. A confirmed booking is not treated like a guess.",
  },
  {
    title: "When it was last true",
    body: "Context ages. Looped knows how old something is and says so when a decision is resting on data that has gone stale.",
  },
  {
    title: "What it does not know",
    body: "Where the data will not support an answer, you get that, rather than a confident number nobody can defend in front of a partner.",
  },
];

const PERMISSION = [
  {
    title: "Used only as you have agreed",
    body: "Data is used for the purposes your organisation has authorised, and that is recorded rather than assumed.",
  },
  {
    title: "Scoped by role",
    body: "A telesales caller and a portfolio director are looking at the same platform and not the same data.",
  },
  {
    title: "Checked before anything is sent",
    body: "Consent, preference and suppression are applied at the moment of sending, per channel.",
  },
  {
    title: "It stays yours",
    body: "Your data belongs to your organisation. It is not pooled with other operators and it does not quietly become someone else's advantage.",
  },
  {
    title: "Personal data kept out of the AI",
    body: "Protected by default rather than by configuration, so nobody has to remember to switch it on.",
  },
  {
    title: "Raised, not guessed",
    body: "Where Looped cannot establish that something is permitted, or cannot confirm it completed, it tells you instead of proceeding.",
  },
];

export default function DataPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Data and systems"
        title="Your systems stay your systems."
        lead="Nobody needs another system of record. You already have a CRM, a registration platform, an awards process and a marketing stack. What you do not have is anything that understands how they relate to each other."
        support="Looped reads what it needs to keep the picture current and, where you authorise it, carries approved work back into those same systems."
      />

      {/* the shape of it */}
      <Panel tone="stone" kicker="The shape of it">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">A layer between, not a replacement for.</h2>
          </Reveal>
          <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              You are never asked to replace what already works. Start with the data you have, and the picture deepens
              as more comes in.
            </p>
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              What changes is that{" "}
              <span className="font-semibold text-ink">
                the gap between your systems stops being something your team crosses by hand, several times a week, from
                memory.
              </span>
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12 rounded-[20px] border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-8">
          <SystemsFigure />
        </Reveal>
      </Panel>

      {/* what it connects */}
      <Panel tone="paper" kicker="What it works with">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">The systems an event business already runs.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Connect what matters most first. Looped is useful from the first file and gets sharper with every
              connection you add.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SYSTEMS.map((s) => (
            <Reveal key={s.name} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)]">
              <h3 className="font-serif text-xl text-ink">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* what it resolves */}
      <Panel tone="stone" kicker="The bit in between">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">The work no single system was built to do.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Each of your systems is right about its own corner. None of them can tell you that the person entering the
              awards chaired a session two years ago and sits on an account renewing next month.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOLVES.map((r) => (
            <Reveal key={r.title} className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)]">
              <h3 className="font-serif text-xl text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* permission, on the night plate */}
      <Panel tone="night" kicker="Permission">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">Seeing data is not the same as being allowed to use it.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              This is the line the industry gets wrong most often, and the one a partner, a regulator or an attendee
              will eventually test. Looped treats permission as part of the data itself, not a policy in a document
              nobody reads.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {PERMISSION.map((p) => (
            <Reveal key={p.title}>
              <div className="border-t border-white/10 py-6">
                <h3 className="font-serif text-xl text-snow">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="max-w-3xl font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
            Your accounts. Your data. Your channels. Looped is the intelligence across them.
          </p>
        </Reveal>
      </Panel>

      <PageClosing
        line="Bring your stack. Keep your stack."
        continueLinks={[
          {
            href: "/how-it-works",
            label: "How Looped works",
            blurb: "The approval model and the rules that decide what Looped may do on its own.",
          },
          {
            href: "/capabilities",
            label: "Capabilities",
            blurb: "The full picture of what Looped does, grouped the way you would ask about it.",
          },
        ]}
      />
    </div>
  );
}
