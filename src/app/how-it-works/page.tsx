import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { AutonomyModes, type AutonomyMode } from "@/components/product/AutonomyModes";
import { LoopStages, type LoopStage } from "@/components/product/LoopStages";
import { CascadeDiagram } from "@/components/sections/CascadeDiagram";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { ExploreNext } from "@/components/ui/ExploreNext";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How Looped works: the event operating loop",
  description:
    "One loop from understanding to learning, and three autonomy modes so your team decides how much Looped does on its own. A person approves what matters.",
  path: "/how-it-works",
});

const STAGES: LoopStage[] = [
  {
    name: "Understand",
    question: "What is actually true about this event, right now?",
    detail:
      "Looped builds the picture from your own data and live market research: audience, competitors, programme, pipeline, and where this edition sits against its own timeline.",
  },
  {
    name: "Recommend",
    question: "So what should we do about it?",
    detail:
      "Not a dashboard to interpret. A specific next move, the reasoning behind it, and what it is likely to cost or return.",
  },
  {
    name: "Decide",
    question: "Does the team agree?",
    detail:
      "A person reviews and approves, rejects or edits. This is where your expertise enters, and it is the part Looped is designed around rather than designed past.",
  },
  {
    name: "Act",
    question: "Did it actually happen?",
    detail:
      "The approved decision is carried into the work: assets produced, journeys updated, tasks assigned, campaigns released to the channels you have connected.",
  },
  {
    name: "Verify",
    question: "Did it land the way we expected?",
    detail:
      "Looped watches what followed and says so plainly, including when the answer is that nothing much changed.",
  },
  {
    name: "Learn",
    question: "What does this mean for next time?",
    detail:
      "What worked is kept against the event, so the next edition starts from evidence rather than from whoever still remembers.",
  },
];

const MODES: AutonomyMode[] = [
  {
    name: "Intelligence",
    rule: "Looped recommends.",
    detail:
      "Looped researches, drafts, models and watches, then puts the options in front of your team. Nothing leaves the platform and nothing is sent. Most teams start here, and plenty stay here for the first event.",
    inPractice: "Your team gets the thinking done before the week starts, and keeps every decision.",
    weight: 34,
  },
  {
    name: "Approved execution",
    rule: "You approve. Looped acts.",
    detail:
      "The same intelligence, but once a person signs off, Looped carries the work through: producing the assets, updating the journey, releasing the campaign to the channels you have connected. The approval is recorded against the decision.",
    inPractice: "The gap between deciding something and it being done closes to about a minute.",
    weight: 67,
  },
  {
    name: "Bounded automation",
    rule: "Looped operates inside limits you set.",
    detail:
      "For the repetitive, low-risk work, your organisation defines what Looped may do without asking: which actions, for which audiences, up to which limits. Everything outside those limits still comes back for a decision, and the limits are yours to change or withdraw at any time.",
    inPractice: "The routine chase, follow-up and housekeeping stops needing a human to start it.",
    weight: 92,
  },
];

const GOVERNANCE = [
  {
    title: "A person decides anything consequential",
    body: "Approval sits on every decision that carries a cost, a commitment or a message to a real person. Looped is built to make that decision better and faster, not to remove it.",
  },
  {
    title: "Grounded in your data, and honest when it is not",
    body: "Answers are built from your approved event data and cited research. When Looped does not have what it needs, it says so rather than producing something plausible.",
  },
  {
    title: "Bounded by design",
    body: "Spend limits per event, defined limits on automated action, and an audit trail of what was approved and by whom.",
  },
  {
    title: "Personal data handled with care",
    body: "Personal data is protected before it reaches any model, and communication eligibility is respected at the point of sending, not afterwards.",
  },
];

const CONTENTS = [
  { id: "loop", label: "The operating loop" },
  { id: "autonomy", label: "Three autonomy modes" },
  { id: "example", label: "A working example" },
  { id: "human", label: "What stays human" },
];

const EXPLORE = [
  {
    href: "/platform",
    label: "The full platform",
    blurb: "What sits inside the loop: understanding, planning, workspaces, creative, conversations and execution.",
  },
  {
    href: "/data-and-integrations",
    label: "Data and integrations",
    blurb: "Where the context comes from, who owns it, and what Looped is and is not permitted to do with it.",
  },
  {
    href: "/agents-and-conversations",
    label: "AI conversations",
    blurb: "How the loop shows up in a conversation with an entrant, a speaker or a sponsor.",
  },
  {
    href: "/capabilities",
    label: "Full capability index",
    blurb: "Every capability, grouped for diligence, with an honest note on where each one sits today.",
  },
];

export default function HowItWorksPage(): React.ReactElement {
  return (
    <>
      <PageHero
        kicker="How it works"
        title="One loop, running continuously, with your team holding the decisions."
        lede="Looped understands the event, recommends the next move, waits for a person to decide, carries the decision out, checks what happened and keeps what worked. That loop runs from the first planning meeting to the post-event debrief, and then into the next edition."
        secondaryCta={{ href: "/platform", label: "See the platform" }}
        contents={CONTENTS}
      />

      <Panel tone="ink" id="loop" index="01" kicker="The operating loop">
        <SectionHeading
          tone="ink"
          title="Understand, recommend, decide, act, verify, learn."
          lede="Six stages, in plain terms. Every one of them is visible to your team, and the third one is always a person."
        />
        <Reveal className="mt-12">
          <LoopStages stages={STAGES} tone="ink" />
        </Reveal>
      </Panel>

      <Panel tone="bone" id="autonomy" index="02" kicker="Autonomy">
        <SectionHeading
          title="Three ways to run it. You choose, and you can change your mind."
          lede="The question is never whether AI should be allowed to act. It is which actions, on whose authority, inside what limits. Looped makes that an explicit setting rather than an assumption."
        />
        <Reveal className="mt-12">
          <AutonomyModes modes={MODES} />
        </Reveal>
        <Reveal className="mt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-ink">
            Teams move up this ladder as trust is earned, usually starting at intelligence for the first edition and
            opening up execution once they have seen the quality of the work. Moving back down is a setting, not a
            project.
          </p>
        </Reveal>
      </Panel>

      <Panel tone="paper" id="example" index="03" kicker="A working example">
        <SectionHeading
          title="What the first fortnight looks like."
          lede="Approve the event brief and the picture builds around it. Each step is grounded in what your team has already signed off, so the work compounds instead of drifting, and each one pauses for you."
        />
        <Reveal className="mt-12">
          <div className="rounded-3xl border border-[rgba(23,19,31,0.12)] bg-bone p-6 shadow-[var(--lift-light)] sm:p-10">
            <CascadeDiagram expanded />
          </div>
        </Reveal>
        <Reveal className="mt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-ink">
            That is one thread of many. The same pattern runs through the programme, the commercial pipeline, the
            awards year and the portfolio view, which is why teams stop re-briefing each other between disciplines.
          </p>
        </Reveal>
      </Panel>

      <Panel tone="ink" id="human" index="04" kicker="What stays human">
        <SectionHeading
          tone="ink"
          title="The judgement stays yours. The grunt work does not."
          lede="Looped is deliberately not an autonomous system with a person watching. It is a team of people with an extremely well-briefed platform underneath them."
        />
        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {GOVERNANCE.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.06}>
              <div className="border-t border-white/10 py-6">
                <h3 className="font-serif text-xl tracking-tight text-bone-text">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-bone-dim">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Panel>

      <ExploreNext links={EXPLORE} />

      <ClosingCTA
        title="Start at intelligence. Open up execution when it has earned it."
        body="Pilot teams run their next edition with Looped underneath and decide, event by event, how much of the work to hand over."
      />
    </>
  );
}
