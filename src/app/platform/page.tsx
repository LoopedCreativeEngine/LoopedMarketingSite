import type { Metadata } from "next";
import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Platform: what you can do with Looped",
  description:
    "Everything your event teams need to know, decide and move forward. Looped connects the picture across the event business, helps each team see what matters, and carries approved decisions into action.",
};

const GROUPS = [
  {
    kicker: "Know what matters",
    heading: "Know what matters, without hunting for it.",
    tone: "stone" as const,
    points: [
      "A live picture of each event: where it stands and what needs attention now.",
      "Audience and campaign health, read together rather than in separate reports.",
      "Market shifts, competitor moves and the signals that should change the plan.",
      "Commercial risks and opportunities, early enough to act on.",
      "Ask Looped a question about an event, a brand, the portfolio or the whole business.",
      "Visibility across the brand, the portfolio and the organisation.",
    ],
  },
  {
    kicker: "Decide what to do",
    heading: "Decide with the evidence in front of you.",
    tone: "paper" as const,
    points: [
      "Clear recommendations, with the strongest move made obvious.",
      "The evidence behind every recommendation, open to inspect.",
      "Alternatives to compare when you want another route.",
      "Ask why, and probe the reasoning as far as you want.",
      "Adjust the plan before you commit to it.",
      "Approve or reject. People stay in control of anything consequential.",
    ],
  },
  {
    kicker: "Put the decision to work",
    heading: "Put the decision to work.",
    tone: "stone" as const,
    points: [
      "Campaigns and messaging, ready to run.",
      "Audience targeting and personalised outreach for the people that matter.",
      "Call lists ordered by priority, with scripts to match.",
      "Sponsorship and account plans, and the propositions to go with them.",
      "Programme and event actions across the edition.",
      "Team tasks, so the work lands with the right people.",
    ],
  },
  {
    kicker: "Keep the business learning",
    heading: "Keep the business learning.",
    tone: "paper" as const,
    points: [
      "Measured outcomes, so you see what actually changed.",
      "Edition over edition, so the next event starts with what worked.",
      "Brand learning shared across the events inside it.",
      "Portfolio learning, so a win in one event becomes a play for the others.",
      "Organisation knowledge that outlasts the edition and the reorganisation.",
    ],
  },
];

const ALSO = [
  { title: "AI voice for telesales", body: "Voice agents briefed from your approved scripts, using your own calling account, recorded and summarised for you." },
  { title: "Event website tools", body: "A chatbot that answers only from what you approve, an audience-matching quiz, and a secure portal for speakers and partners." },
  { title: "Lead capture", body: "Consent-based capture that routes to the right pipeline, with captured interest landing in real time." },
  { title: "Flexible data connections", body: "Connects to your CRM, email and payment systems, at the level of connection that suits you." },
];

const PILLAR_LINKS = [
  { name: "Marketing / Audience", href: "/pillars/marketing" },
  { name: "Content / Programme", href: "/pillars/content" },
  { name: "Commercial", href: "/pillars/commercial" },
  { name: "Telesales", href: "/pillars/telesales" },
  { name: "Event Management", href: "/pillars/event-management" },
  { name: "Portfolio", href: "/pillars/portfolio" },
];

export default function PlatformPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      {/* hero */}
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">The platform</p>
          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-6xl">
            Everything your event teams need to know, decide and move forward.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
            Looped connects the picture across the event business, helps each team see what matters, and carries approved
            decisions into action. A person stays in control of every consequential call.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo">Join the waitlist</CtaButton>
            <CtaButton href="/#what-it-does" variant="secondary">See Looped in action</CtaButton>
          </div>
        </Reveal>
      </div>

      {/* four outcomes */}
      <div className="mt-14">
        {GROUPS.map((g) => (
          <Panel key={g.kicker} tone={g.tone} kicker={g.kicker}>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-5">
                <h2 className="text-balance display-section">{g.heading}</h2>
              </Reveal>
              <Reveal className="lg:col-span-7 lg:pt-2">
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {g.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-slate sm:text-base">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-purple" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Panel>
        ))}
      </div>

      {/* human control */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="rounded-2xl border border-hairline bg-stone p-6 text-center shadow-[var(--lift-light)] sm:p-7">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            A person approves every decision that carries a consequence. Personal data is kept out of the AI, access is
            scoped by role, and Looped works with the data and systems you already have.
          </p>
        </Reveal>
      </div>

      {/* also built in */}
      <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-muted">Also built in</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ALSO.map((a) => (
            <Reveal key={a.title} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)]">
              <h3 className="text-lg text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{a.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* explore by team */}
      <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-muted">Explore by team</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {PILLAR_LINKS.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="rounded-full border border-[rgba(15,23,42,0.18)] bg-stone px-4 py-1.5 text-sm text-slate transition-colors hover:border-purple hover:text-purple"
              >
                {pillar.name}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>

      {/* closing */}
      <div className="mx-auto mt-16 max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-serif text-2xl italic text-ink sm:text-3xl">
            Looped is built today. Early access will open to a small number of selected event organisations following
            our founding pilot.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo">Join the waitlist</CtaButton>
            <CtaButton href="/#what-it-does" variant="secondary">See Looped in action</CtaButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
