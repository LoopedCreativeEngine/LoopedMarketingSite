import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Platform: what you can do with Looped",
  description:
    "The breadth of Looped for someone who already likes the idea: know what matters, decide what to do, put the decision to work, and keep the business learning, with a person in control of every consequential call.",
};

const GROUPS = [
  {
    key: "A",
    title: "Know what matters",
    points: [
      "A live picture of each event: where it stands, what is changing and what needs attention now.",
      "Live sector, competitor and market intelligence, built in.",
      "Ask Looped about an event, a brand, the portfolio or the whole business, and get an evidence-backed answer.",
      "A cross-event view for leaders, from a single event to the whole portfolio.",
    ],
  },
  {
    key: "B",
    title: "Decide what to do",
    points: [
      "Clear recommendations, with the strongest move made obvious.",
      "The evidence behind every recommendation, open to inspect.",
      "Alternatives to compare when you want another route.",
      "Your approval on everything that carries a consequence. People stay in control.",
    ],
  },
  {
    key: "C",
    title: "Put the decision to work",
    points: [
      "Campaigns and messaging, ready to run.",
      "Personalised outreach for the accounts and people that matter.",
      "Call lists and scripts, ordered by who is worth calling first.",
      "Account plans and commercial propositions.",
      "Programme and event actions across the edition.",
    ],
  },
  {
    key: "D",
    title: "Keep the business learning",
    points: [
      "Outcome tracking, so you see what actually changed.",
      "Edition over edition, so the next event starts with what worked and what did not.",
      "Learning that carries across a brand, the portfolio and the organisation.",
    ],
  },
];

const ALSO = [
  { title: "AI voice for telesales", body: "Voice agents briefed from your approved scripts, using your own calling account, recorded and summarised for you." },
  { title: "Tools for your website", body: "A chatbot that answers only from what you approve, an awards-category quiz, and a secure portal for speakers and partners." },
  { title: "Lead capture", body: "Consent-based capture that routes to the right pipeline, with captured interest landing in real time." },
  { title: "Works with your stack", body: "Connects to your CRM, email and payment systems, at the level of connection that suits you." },
];

const PILLAR_LINKS = [
  { name: "Marketing", href: "/pillars/marketing" },
  { name: "Content", href: "/pillars/content" },
  { name: "Commercial", href: "/pillars/sponsorship" },
  { name: "Telesales", href: "/pillars/telesales" },
  { name: "Event Management", href: "/pillars/event-management" },
  { name: "Portfolio", href: "/pillars/portfolio" },
];

export default function PlatformPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">The platform</p>
          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            What you can actually do with Looped.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
            If you already like the idea, here is the breadth. Looped helps your teams know what matters, decide what to
            do, put the decision to work, and keep the business learning, with a person in control of every consequential
            call.
          </p>
        </Reveal>
      </div>

      {/* four buyer outcomes */}
      <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {GROUPS.map((g) => (
            <Reveal key={g.key} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)] sm:p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-purple">{g.key}</span>
                <h2 className="text-2xl text-ink">{g.title}</h2>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate">
                {g.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-purple" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      {/* human control line */}
      <div className="mx-auto mt-6 max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="rounded-2xl border border-hairline bg-paper p-6 text-center shadow-[var(--lift-light)] sm:p-7">
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
          <p className="kicker text-muted">Or explore by team</p>
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
