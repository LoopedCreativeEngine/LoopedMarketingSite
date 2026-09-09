import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";
import { AvailabilityNote, StatusPill, type Availability } from "@/components/ui/StatusPill";

export const metadata: Metadata = {
  title: "Event data and systems: CRM, registration and awards",
  description:
    "Looped connects to the CRM, registration, awards, programme and marketing systems you already run, and adds the intelligence between them.",
  alternates: { canonical: "/platform/data" },
  openGraph: {
    url: "/platform/data",
    title: "Event data and systems: CRM, registration and awards",
    description:
      "Nobody needs another system of record. Looped is the intelligence and action layer across the ones you already have.",
  },
};

const SYSTEMS: { name: string; body: string; status?: Availability }[] = [
  {
    name: "CRM",
    body: "Commercial context reaches the platform, and approved outcomes return to the record your sales team actually lives in.",
  },
  {
    name: "Registration",
    body: "Bookings, ticket types and pace read as the demand signal they are, rather than as a report someone exports on a Friday.",
    status: "pilot",
  },
  {
    name: "Awards",
    body: "Categories, entrants, entry status, judging outcomes, finalists and winners held as one lifecycle rather than four spreadsheets.",
    status: "pilot",
  },
  {
    name: "Programme",
    body: "Sessions, tracks, speakers and timings as living programme data other teams can build on.",
    status: "pilot",
  },
  {
    name: "Marketing and email",
    body: "Campaigns and audiences connected to the intelligence that shaped them, sending through your own account.",
  },
  {
    name: "Messaging and voice",
    body: "WhatsApp, SMS, RCS and calling through your own numbers and accounts, as those channels come online.",
    status: "soon",
  },
  {
    name: "Analytics",
    body: "Performance read alongside the plan it was measured against, so a number always arrives with its context.",
    status: "pilot",
  },
  {
    name: "Files and exports",
    body: "The reality of this industry. Historical attendee lists, P&L files, entrant exports: imported deliberately, with the source and the permitted use recorded.",
  },
];

const RESOLVES = [
  {
    title: "One person, resolved",
    body: "The same individual appearing in four systems under three spellings is recognised as one person, so your team stops arguing about which list is right.",
  },
  {
    title: "People, organisations and events",
    body: "Who works where, which account they sit on, which of your events they have touched and in what role.",
  },
  {
    title: "History that spans the portfolio",
    body: "A relationship running across a conference, an awards programme and a sister event reads as one history rather than three unrelated records.",
  },
  {
    title: "Source and trust",
    body: "Every fact carries where it came from and how much weight it deserves. A verified booking is not treated like a scraped guess.",
  },
  {
    title: "Freshness",
    body: "Context ages. Looped knows how old something is and says so when a decision is resting on data that has gone stale.",
  },
  {
    title: "Honest gaps",
    body: "Where the data does not support an answer, you get that, rather than a confident number nobody can defend in a renewal meeting.",
  },
];

const PERMISSION = [
  {
    title: "Authorised use, recorded",
    body: "Data is used for the purposes your organisation has authorised, and that authorisation is written down rather than assumed.",
  },
  {
    title: "Access scoped by role",
    body: "A telesales caller and a portfolio director are looking at the same platform and not the same data.",
  },
  {
    title: "Eligibility before sending",
    body: "Consent, preference and suppression are enforced at the point of sending, per channel.",
  },
  {
    title: "Your organisation owns it",
    body: "Your data belongs to your organisation. It is not pooled with other operators, and it does not quietly become someone else's advantage.",
  },
  {
    title: "Personal data kept out of the AI",
    body: "Personal data is kept out of the model by default rather than by configuration, and the exception is surfaced rather than worked around.",
  },
  {
    title: "Exceptions, not guesses",
    body: "Where Looped cannot establish that an action is permitted, or cannot confirm it completed, it raises the exception instead of proceeding.",
  },
];

export default function DataPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Data & systems"
        title="Your systems stay your systems."
        lede="Nobody needs another system of record. Event teams already have a CRM, a registration platform, an awards process and a marketing stack. What they do not have is anything that understands the relationships running between them."
        support="Looped reads the context it needs to keep the picture current and, where you authorise it, carries approved work back into those same systems."
      />

      {/* the shape of it */}
      <Panel tone="stone" kicker="The shape of it">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">A layer between, not a replacement for.</h2>
          </Reveal>
          <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              You are never asked to replace what already works. Begin with the data and knowledge you already have, and
              the picture deepens as more comes in. Some of that runs through a direct connection to a system; some is
              completed in the software itself. To your team it is one Looped workflow either way.
            </p>
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              What changes is that the space between your systems stops being a gap your team crosses manually, several
              times a week, from memory.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SYSTEMS.map((s) => (
            <Reveal key={s.name} className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)]">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <h3 className="font-serif text-lg text-ink">{s.name}</h3>
                {s.status ? <StatusPill status={s.status} /> : null}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <AvailabilityNote className="max-w-3xl" />
        </Reveal>
      </Panel>

      {/* what it resolves */}
      <Panel tone="paper" kicker="The intelligence between">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance display-section">The work no individual system was built to do.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            Each of your systems is right about its own corner. None of them can tell you that the person entering the
            awards is the same person who chaired a session two years ago and sits on an account renewing next month.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOLVES.map((r) => (
            <Reveal key={r.title} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)]">
              <h3 className="font-serif text-lg text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* permission — night, because it is the trust moment */}
      <Panel tone="night" kicker="Permission">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">
              Seeing data does not give a team the right to use it.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              This is the line the industry gets wrong most often, and the one a partner, a regulator or an attendee
              will eventually test. Looped treats permitted use as a property of the data itself, not a policy in a
              document nobody reads.
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
            blurb: "The approval model and the rules that govern what Looped may do on its own.",
          },
          {
            href: "/capabilities",
            label: "Capabilities",
            blurb: "The full index, including where each connection genuinely sits today.",
          },
        ]}
      />
    </div>
  );
}
