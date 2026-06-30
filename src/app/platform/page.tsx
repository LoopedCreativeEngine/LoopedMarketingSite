import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Platform: everything Looped does",
  description:
    "The full Looped platform: over 120 AI modules across six pillars, an intelligence cascade, the Loop assistant, live dashboards, AI voice for telesales, embeddable capture, and live integrations with the tools you already run.",
};

const INTRO = `Looped is one connected platform across marketing, content, commercial, telesales, event management and portfolio. More than 120 AI modules research, draft and analyse the work, an intelligence cascade chains them together, and a human signs off every decision that carries a consequence. This is what it does today.`;

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
    title: "120+ AI modules, six pillars",
    body: "More than 120 AI modules span marketing, content, commercial, telesales, event management and portfolio. Each one runs a workflow grounded in your real event data, produces a structured deliverable, then pauses for your team to approve or reject.",
  },
  {
    title: "The intelligence cascade",
    body: "Approve one output and Looped generates every downstream module whose inputs are now ready, in parallel, each grounded in what you have already approved. Around ninety background jobs run the chain. It starts when you approve the event brief and pauses for a human at every step: assisted automation, not autonomous generation.",
  },
  {
    title: "The Loop assistant",
    body: "An AI assistant sits on every page, and on the Ctrl+L shortcut. It answers with live context from across your events, can pull brief details from a URL, and on your explicit confirmation kicks off a single module or a full cascade. It cannot approve, export, change billing or delete, and nothing fires on its own.",
  },
];

const CAPABILITIES = [
  {
    title: "Live dashboards, signals and decisions",
    points: [
      "A workspace hub for each pillar: a cockpit of module cards with approve and reject, an items inbox, the briefing, a 30-day plan and a library.",
      "A cross-event command centre with an org home, a portfolio-director view and a needs-you, live-now strip.",
      "An intelligence feed that surfaces what to act on, whether a renewal is cooling, a segment is under target or a coherence issue has appeared, with the action built in.",
      "A decision hub: one cross-event approve and reject queue with batch approve, filters and preview, plus full-page, modal and rich output viewers.",
    ],
  },
  {
    title: "AI voice for telesales",
    points: [
      "AI voice agents for telesales and partner outreach, briefed from your approved scripts, personas and segments, running on your own voice account.",
      "Every call is recorded and transcribed, and Looped classifies the outcome automatically.",
      "A per-event spend cap keeps it bounded, and you switch outbound dialling on when you choose.",
    ],
  },
  {
    title: "Embeddable on your own sites",
    points: [
      "A drop-in website chatbot for your event site that answers only from a knowledge base you compile, refuses to fabricate, and captures consented leads into the platform.",
      "A public, email-gated awards quiz that matches an entrant's company to the best-fit categories with scores and reasons, captures the lead and syncs it to your CRM.",
      "A secure asset-collection portal where speakers, judges and partners submit their headshot, bio, logo and social links.",
    ],
  },
  {
    title: "Demand and lead capture",
    points: [
      "Consent-gated lead capture that routes automatically to the partner pipeline, the telesales warm list or nurture.",
      "A behavioural capture SDK for your own site that stays dormant until consent is granted.",
      "An intent inbox where captured signals land in real time, ready to route.",
    ],
  },
  {
    title: "Research, data and enrichment",
    points: [
      "Web-grounded research built in, for live sector, competitor and market intelligence.",
      "Company and contact enrichment through connected data providers, briefed by your approved audience intelligence.",
      "An on-demand social intelligence scan that populates the event knowledge base.",
    ],
  },
  {
    title: "Connects to your stack",
    points: [
      "A focused set of live, end-to-end integrations rather than a directory of logos.",
      "CRM with Salesforce and HubSpot, email with Resend, payments with Stripe, and web extraction with Firecrawl.",
      "A managed connector hub brokers them securely with your own keys, and a job-orchestration backbone runs the automation.",
      "Each connection switches on with your own account or key.",
    ],
  },
  {
    title: "Governed by design",
    points: [
      "Grounded in your approved data, so it does not fabricate, and when it lacks the data it tells you.",
      "A human approves every decision that carries a consequence, and the platform logs it.",
      "A PII firewall redacts personal data before anything reaches a model.",
      "Per-event spend caps bound both compute and voice.",
    ],
  },
];

export default function PlatformPage(): React.ReactElement {
  return (
    <div className="bg-looped-bg pb-20 pt-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-violet-200/80">The platform</p>
          <h1 className="mt-4 text-balance text-4xl tracking-tight text-[#f8f9ff] sm:text-5xl">
            Everything Looped does, in one place.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#c4c8d8] sm:text-lg">{INTRO}</p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {PILLAR_LINKS.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="rounded-full border border-white/15 bg-looped-card px-4 py-1.5 text-sm text-[#c4c8d8] transition-colors hover:border-looped-violet-700/70 hover:text-white"
            >
              {pillar.name}
            </Link>
          ))}
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {FEATURED.map((item) => (
            <Reveal
              key={item.title}
              className="rounded-2xl border border-looped-violet-700/60 bg-looped-card p-6 shadow-[var(--looped-violet-glow)]"
            >
              <h2 className="text-xl text-[#f8f9ff]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c8d8]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {CAPABILITIES.map((group) => (
            <Reveal key={group.title} className="rounded-2xl border border-white/10 bg-looped-card p-6">
              <h2 className="text-xl text-[#f8f9ff]">{group.title}</h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#c4c8d8]">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-serif text-2xl italic text-[#f8f9ff] sm:text-3xl">
            The platform is built. Pilot partners are shaping what it becomes next.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/demo"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-looped-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
            >
              Apply to pilot
            </Link>
            <Link
              href="/demo"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Join the waitlist
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
