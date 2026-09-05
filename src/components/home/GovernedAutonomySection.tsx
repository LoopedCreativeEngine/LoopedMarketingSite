"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** RECOVERED numbered two-column list on ink (5ca71de RaiseBarSection). */
const PRINCIPLES = [
  { title: "Authority is explicit.", body: "Looped acts only within the authority you have given it. Nothing runs because a model thought it should." },
  { title: "Routine work runs.", body: "Authorised, repeatable work — the research, the lists, the drafts, the coordination — proceeds without a meeting." },
  { title: "Consequential decisions stay human.", body: "Anything that commits money, changes a programme or reaches a client comes to a person first." },
  { title: "Everything is on the record.", body: "Evidence, recommendation, decision, action and outcome stay connected, and can be reviewed after the fact." },
];

export function GovernedAutonomySection(): React.ReactElement {
  return (
    <Panel tone="stone" index="09" kicker="Governed autonomy">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Autonomy is only useful when it is governed.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          What Looped does, and what it may not do, is decided by you and visible afterwards. That is what lets it carry
          real work rather than draft suggestions.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {PRINCIPLES.map((item, index) => (
          <Reveal key={item.title} delay={(index % 2) * 0.08} className="border-t border-hairline pt-6">
            <span className="font-mono text-sm text-purple">0{index + 1}</span>
            <h3 className="mt-3 text-xl leading-snug text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
