import type { Metadata } from "next";
import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { OnwardLink } from "@/components/ui/OnwardLink";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Platform: what you can do with Looped",
  alternates: { canonical: "/platform" },
  openGraph: {
    url: "/platform",
    title: "Platform: what you can do with Looped",
    description:
      "The complete Looped operating system: know what is happening, decide with the evidence, put approved decisions to work in the systems you already use, and keep the business learning.",
  },
  description:
    "Everything your event teams need to know, decide, act and keep learning. Looped connects the picture across the event business, recommends with the evidence, carries approved decisions through the systems you already use, verifies what happened, and can meet the people around the event as well as the team running it.",
};

const GROUPS = [
  {
    kicker: "Know what matters",
    heading: "Know what is really happening, without hunting for it.",
    tone: "stone" as const,
    points: [
      "A live picture of each event: where it stands and what needs attention now.",
      "Audience and campaign health, read together rather than in separate reports.",
      "Market shifts, competitor moves and the signals that should change the plan.",
      "Commercial risks and opportunities, early enough to act on.",
      "Exceptions and shortfalls raised as they appear, with the evidence attached.",
      "Ask Looped a question about an event, a brand, the portfolio or the whole business.",
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
      "Approve, decline, or let it run: you set which decisions Looped may take inside your rules and which always come back to a person.",
    ],
  },
  {
    kicker: "Put the decision to work",
    heading: "Put the decision to work, in the systems you already use.",
    tone: "stone" as const,
    points: [
      "Approved campaigns, messaging and audience targeting pushed into the tools your teams run them in.",
      "Personalised outreach prepared and, once authorised, sent from the systems you already work in.",
      "Call lists reordered in place, with scripts and talking points to match, inside your calling and suppression rules.",
      "Sponsorship and account actions carried into your commercial systems.",
      "Programme and event follow-up chased with the speakers, sponsors and suppliers it concerns.",
      "A direct connection where a system offers one, the software interface itself where that is the better route, and the same governed workflow either way.",
    ],
  },
  {
    kicker: "Keep the business learning",
    heading: "Keep the business learning from what actually happened.",
    tone: "paper" as const,
    points: [
      "Verified outcomes, checked at the destination rather than assumed from a request that was sent.",
      "Measured results, so you see what actually changed.",
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
  { title: "Meeting intelligence", body: "Turns the meetings your team already runs into decisions, owners and follow-ups, instead of notes nobody revisits." },
];

/** The same four movements, met from the participant's side. */
const JOURNEY = [
  {
    stage: "Know",
    body: "Who someone is, which organisation they belong to, the role or roles they hold on this event, where they are in the lifecycle, and what you have authorised Looped to know about them.",
  },
  {
    stage: "Decide",
    body: "What they need now, what you are trying to achieve with them, and whether this is something Looped may handle inside your rules or something a person should take.",
  },
  {
    stage: "Put to work",
    body: "The answer, the reminder, the missing item or the next approved step, delivered in their context and inside the boundaries you have set.",
  },
  {
    stage: "Keep learning",
    body: "What the exchange revealed about demand, confusion and friction, returned to your event intelligence rather than left in a transcript.",
  },
];

/** The four chapters that go deeper than the movements above. */
const DOMAINS = [
  {
    name: "Conversations",
    href: "/platform/conversations",
    body: "The same intelligence, met by an entrant, a sponsor, a speaker, a judge or an attendee, and what it will not do for any of them.",
  },
  {
    name: "Communications",
    href: "/platform/communications",
    body: "One journey per person across email, messaging and voice, with contact pressure, eligibility and outcome held together.",
  },
  {
    name: "Creative",
    href: "/platform/creative",
    body: "The campaign assets an event actually consumes, produced at volume with the event intelligence already attached.",
  },
  {
    name: "Data & systems",
    href: "/platform/data",
    body: "Stop rebuilding the same picture by hand. Looped works across your CRM, registration, awards and marketing systems so one person is one person, and everyone sees the same history.",
  },
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
      <PageIntro
        kicker="The platform"
        title="Everything your event teams need to know, decide and move forward."
        lead="Looped connects the picture across the event business, helps each team see what matters, carries the decisions you approve through the systems you already use, and checks what actually happened."
        support="A person stays in control of every call that carries a consequence."
      />

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
            You set what Looped may observe, what it may prepare, what it may carry out inside your rules and what must
            come back for approval, by organisation, by event and by kind of action. Where Looped cannot establish that
            an action is permitted, or cannot confirm it completed, it surfaces the exception rather than guessing.
            Personal data is kept out of the AI, access is scoped by role, and Looped works with the data and systems
            you already have.
          </p>
        </Reveal>
      </div>

      {/* the same four movements, for the people around the event */}
      <Panel tone="stone" kicker="One layer, many experiences">
        <Reveal>
          <h2 className="max-w-3xl text-balance display-section">The same four movements, for the people around the event.</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
            Looped is not only a system your team logs into. The same intelligence can meet an entrant, a sponsor, a
            speaker, a finalist or an attendee, and surface differently for each one. What it knows, what it may say and
            what it may do change with the role, the context, the lifecycle moment and the permission you have granted.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.stage} delay={i * 0.05} className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)]">
              <p className="flex items-center gap-2.5 text-base font-semibold text-ink">
                <span className="font-mono text-xs text-purple">0{i + 1}</span>
                {j.stage}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{j.body}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* the platform in depth */}
      <Panel tone="paper" kicker="The platform in depth">
        <Reveal>
          <h2 className="mt-5 max-w-3xl text-balance display-section">Four chapters. One operating system.</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
            Same intelligence, same approvals, four places your team meets it.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {DOMAINS.map((d) => (
            <Reveal key={d.href}>
              <Link
                href={d.href}
                className="group block rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)] transition-colors hover:border-purple/40"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-serif text-2xl text-ink transition-colors group-hover:text-purple">{d.name}</span>
                  <span className="text-purple transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    &rarr;
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-slate">{d.body}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <OnwardLink href="/capabilities">See everything Looped does</OnwardLink>
        </Reveal>
      </Panel>

      {/* the secondary band */}
      <Panel tone="night" kicker="Also built in">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">The parts you would otherwise buy separately.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              Useful on their own, and better because they share the same event picture as everything above.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {ALSO.map((a) => (
            <Reveal key={a.title}>
              <div className="border-t border-white/10 py-6">
                <h3 className="font-serif text-xl text-snow">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* explore by team */}
      <Panel tone="stone" kicker="Explore by team">
        <Reveal>
          <h2 className="max-w-3xl text-balance display-section">Six working areas, one connected picture.</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
            Each team meets Looped through the work they already own. The intelligence underneath is the same, which is
            why a shift in one area reaches the others without a handover meeting.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
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
      </Panel>

      {/* closing */}
      <div className="mx-auto mt-16 max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-serif text-2xl italic text-ink sm:text-3xl">
            Looped is built today. Early access will open to a small number of selected event organisations following
            our founding pilot.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/waitlist">Join the waitlist</CtaButton>
            <CtaButton href="/demo" variant="secondary">See Looped in action</CtaButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
