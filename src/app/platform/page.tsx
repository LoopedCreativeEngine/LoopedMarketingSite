import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Platform: what Looped does",
  description:
    "One connected platform across marketing, content, commercial, telesales, event management and portfolio. Looped reads your event data, recommends the strongest move and carries approved decisions into action, with a person in control of every consequential call.",
};

const INTRO = `Looped is one connected platform across marketing, content, commercial, telesales, event management and portfolio. It reads your real event data, works out what matters, recommends the strongest move and, once your team approves, carries the decision into action. A person signs off everything that carries a consequence. This is what it does today.`;

const PILLAR_LINKS = [
  { name: "Marketing", href: "/pillars/marketing" },
  { name: "Content", href: "/pillars/content" },
  { name: "Commercial", href: "/pillars/sponsorship" },
  { name: "Telesales", href: "/pillars/telesales" },
  { name: "Event Management", href: "/pillars/event-management" },
  { name: "Portfolio", href: "/pillars/portfolio" },
];

const FEATURED = [
  {
    title: "One connected view of the event business",
    body: "Looped works across marketing, content, commercial, telesales, event management and portfolio, grounded in your real event data. It turns that into clear recommendations, each one ready for your team to approve or adjust.",
  },
  {
    title: "Approve once, the related work follows",
    body: "Approve a decision and Looped prepares the related work that is now ready, each part grounded in what you have already approved. A person stays in control: anything consequential waits for sign-off before it goes ahead.",
  },
  {
    title: "Ask Looped, on every page",
    body: "An assistant sits on every page and answers with live context from across your events. On your confirmation it can set work in motion, and it can pull the details of a brief from a link. It cannot approve, export, change billing or delete, and nothing happens on its own.",
  },
];

const CAPABILITIES = [
  {
    title: "Live view, signals and decisions",
    points: [
      "A workspace for each area of the business, with clear recommendations your team can approve or reject.",
      "A cross-event view for leaders, from a single event to the whole portfolio.",
      "An intelligence feed that shows what to act on, whether a renewal is cooling, a segment is under target or something needs attention, with the suggested move built in.",
      "One approve and reject queue across every event, with batch actions, filters and a preview before anything goes ahead.",
    ],
  },
  {
    title: "AI voice for telesales",
    points: [
      "Voice agents for telesales and partner outreach, briefed from your approved scripts, personas and segments, using your own calling account.",
      "Every call is recorded, transcribed and its outcome classified for you.",
      "A cost cap per event keeps it predictable, and you turn outbound calling on when you choose.",
    ],
  },
  {
    title: "Tools for your own website",
    points: [
      "A chatbot for your event site that answers only from information you approve, never invents an answer, and captures consented leads into Looped.",
      "An email-gated awards quiz that matches an entrant's company to the best-fit categories with scores and reasons, captures the lead and sends it to your CRM.",
      "A secure portal where speakers, judges and partners submit their headshot, bio, logo and links.",
    ],
  },
  {
    title: "Demand and lead capture",
    points: [
      "Consent-based lead capture that routes automatically to the partner pipeline, the telesales warm list or nurture.",
      "A lightweight capture tool for your own site that stays off until a visitor consents.",
      "Captured interest lands in real time, ready to route.",
    ],
  },
  {
    title: "Live market research and data",
    points: [
      "Live sector, competitor and market research built in.",
      "Company and contact details filled in from trusted data sources, guided by your approved audience intelligence.",
      "A social scan that adds to what Looped knows about your event.",
    ],
  },
  {
    title: "Works with the tools you already run",
    points: [
      "A focused set of live connections to the tools you already use, not a directory of logos.",
      "Connects to your CRM, email and payment systems.",
      "Each connection switches on with your own account, at the level of connection that suits you.",
      "The more connected the picture, the more Looped can understand, recommend and act on.",
    ],
  },
  {
    title: "Governed by design",
    points: [
      "Grounded in your approved data, so it does not invent, and when it lacks the data it tells you.",
      "A person approves every decision that carries a consequence, and it is all logged.",
      "Personal data is protected and kept out of the AI, and access is scoped by role.",
      "Cost caps per event keep spending predictable.",
    ],
  },
];

export default function PlatformPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">The platform</p>
          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Everything Looped does, in one place.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">{INTRO}</p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {PILLAR_LINKS.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="rounded-full border border-[rgba(15,23,42,0.18)] bg-stone px-4 py-1.5 text-sm text-slate transition-colors hover:border-purple hover:text-purple"
            >
              {pillar.name}
            </Link>
          ))}
        </Reveal>
      </div>

      {/* three headline capabilities on an inset ink plate */}
      <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="on-night grid gap-6 rounded-3xl bg-night p-8 shadow-[var(--lift-ink)] sm:p-10 md:grid-cols-3">
          {FEATURED.map((item) => (
            <Reveal key={item.title}>
              <span className="h-2 w-2 rounded-full bg-pink" aria-hidden />
              <h2 className="mt-4 text-xl text-snow">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {CAPABILITIES.map((group) => (
            <Reveal
              key={group.title}
              className="rounded-2xl border border-[rgba(15,23,42,0.12)] bg-stone p-6 shadow-[var(--lift-light)]"
            >
              <h2 className="text-xl text-ink">{group.title}</h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-purple" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-serif text-2xl italic text-ink sm:text-3xl">
            Looped is built today. Early access will open to a small number of selected event organisations following
            our founding pilot.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo">Join the waitlist</CtaButton>
            <CtaButton href="/#what-it-does" variant="secondary">
              See Looped in action
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
