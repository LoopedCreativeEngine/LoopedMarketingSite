import { Reveal } from "@/components/motion/Reveal";
import { CascadeDiagram } from "@/components/sections/CascadeDiagram";
import { CtaButton } from "@/components/ui/CtaButton";

const SECTIONS = [
  {
    heading: "The briefing hub",
    body: `Every event starts with a brief. Event name, date, venue, sector, audience, team notes, brand rules, supporting documents. The brief is the foundation. Team notes are injected into every module's system prompt automatically: compliance instructions, terminology restrictions, brand voice rules. If you tell the platform never to use a particular phrase, no module ever will.`,
  },
];

const LATER_SECTIONS = [
  {
    heading: "Human approval gates",
    body: `Every module output is reviewed by a human before the next module fires. This is not a limitation. It is the product. Looped is human-in-the-loop by design. The platform produces intelligence. Your team makes the decisions. The approval gates are where your expertise is applied.`,
  },
  {
    heading: "Six team pillars",
    body: `Each pillar has its own workspace and its own intelligence thread. Marketing's approved Persona Builder output is available to Content when they're building the speaker programme. Commercial's approved Partner Brief is available to Marketing when they're writing partner promotion copy. The system is the shared context, no briefing each other, no duplication.`,
  },
  {
    heading: "The cascade compounds",
    body: `Every approved output is stored against the event. At the end of the event, the platform extracts key learnings and carries them forward to the next edition. The brief for year 2 starts with everything that worked in year 1. Over time, Looped becomes the institutional memory your team cannot afford to lose.`,
  },
];

export default function HowItWorksPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">How it works</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">How Looped works</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            A connected cascade builds and validates your event context across six team pillars, then feeds it live to
            the agents that surface decisions, draft outreach and score leads. Your team approves what matters, and the
            intelligence gets sharper every edition.
          </p>
        </Reveal>

        {SECTIONS.map((section) => (
          <Reveal key={section.heading} className="mt-16 border-t border-[rgba(15,23,42,0.12)] pt-8">
            <h2 className="text-2xl text-ink">{section.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate">{section.body}</p>
          </Reveal>
        ))}

        <Reveal className="mt-16 border-t border-[rgba(15,23,42,0.12)] pt-8">
          <h2 className="text-2xl text-ink">The cascade builds and validates your context</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            The cascade is how Looped builds and validates the context that makes the agents intelligent. Each stage
            enriches and pressure-tests what came before, the speakers, the segments, the signals, the commercial
            picture, so the picture sharpens rather than drifts. That validated context then flows live to the agents
            that surface the decisions to make, draft the outreach and score the leads, updating as the event moves. The
            result feels less like a process you grind through, or a blank prompt you feed from scratch, and more like an
            always-on intelligence layer that gets sharper every edition.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[rgba(15,23,42,0.12)] bg-stone p-6 shadow-[var(--lift-light)] sm:p-10">
          <CascadeDiagram expanded />
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-3xl px-5 sm:px-6 lg:px-8">
        {LATER_SECTIONS.map((section) => (
          <Reveal key={section.heading} className="mt-16 border-t border-[rgba(15,23,42,0.12)] pt-8">
            <h2 className="text-2xl text-ink">{section.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate">{section.body}</p>
          </Reveal>
        ))}

        <Reveal className="mt-14">
          <CtaButton href="/demo">Apply to pilot</CtaButton>
        </Reveal>
      </div>
    </div>
  );
}
