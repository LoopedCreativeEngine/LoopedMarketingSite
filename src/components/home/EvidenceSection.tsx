"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const CHAIN = ["Evidence", "Recommendation", "Decision", "Action", "Response", "Outcome", "Learning"];

export function EvidenceSection(): React.ReactElement {
  return (
    <Panel tone="night" index="06" kicker="Proof">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Time saved isn&apos;t the outcome. Better events are.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-mist sm:text-lg">
            Most AI is judged on activity: words generated, hours saved. Looped is judged on what changed. Every
            recommendation stays connected to the decision it informed, the action that followed and the outcome it
            produced — so you can see which actions actually moved bookings, entries, partners and the room.
          </p>
          <p className="text-base leading-relaxed text-mist sm:text-lg">
            The calls that paid off are kept and carried into the next edition. The ones that didn&apos;t are kept
            too, so nobody repeats them. That is how the intelligence earns its place.
          </p>
        </Reveal>
      </div>
      <Reveal className="mt-12">
        <p className="mb-5 kicker text-lavender">Every recommendation, on the record, from evidence to learning</p>
        <ol className="flex flex-wrap items-center gap-2">
          {CHAIN.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-white/15 bg-night-raised px-4 py-2 text-sm font-medium text-snow">{step}</span>
              {i < CHAIN.length - 1 ? <span className="text-lavender" aria-hidden>→</span> : null}
            </li>
          ))}
        </ol>
      </Reveal>
      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
          AI should have to prove its value.
        </p>
      </Reveal>
    </Panel>
  );
}
