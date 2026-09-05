"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** RECOVERED ink plate with two-column body (5ca71de RaiseBarSection rhythm). Locked lines verbatim. */
const HUMANS = ["Judgement", "Creativity", "Relationships", "Taste, timing and the read of a room"];
const LOOPED = ["Intelligence", "Coordination", "Routine work", "The memory between editions"];

export function HumanJudgementSection(): React.ReactElement {
  return (
    <Panel tone="night" index="04" kicker="Human judgement">
      <Reveal className="max-w-4xl">
        <h2 className="text-balance display-section">
          AI shouldn&apos;t replace the judgement in your business. It should give that judgement a better view.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
          Great events are still made by people: the editor who knows which theme will carry a room, the sponsorship
          director who knows when to call, the producer who can feel a programme sagging before the data does. Looped
          exists to give those people a better view, and to take the reconstruction and coordination off their week.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-white/10 bg-night-raised p-7">
          <p className="kicker text-lavender">Humans keep</p>
          <ul className="mt-5 space-y-3">
            {HUMANS.map((h) => (
              <li key={h} className="flex items-start gap-3 border-t border-white/10 pt-3 font-serif text-xl text-snow">
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08} className="rounded-2xl border border-pink/50 bg-[rgba(167,139,219,0.08)] p-7 shadow-[var(--lavender-emph)]">
          <p className="kicker text-lavender">Looped handles</p>
          <ul className="mt-5 space-y-3">
            {LOOPED.map((l) => (
              <li key={l} className="flex items-start gap-3 border-t border-white/10 pt-3 font-serif text-xl text-snow">
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
          Humans keep the judgement, creativity and relationships. Looped handles the intelligence, coordination and
          routine work.
        </p>
      </Reveal>
    </Panel>
  );
}
