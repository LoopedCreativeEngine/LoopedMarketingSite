"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** Concise FAQ that also carries the trust and control points, in the approved style. */
const FAQS = [
  {
    q: "Does Looped replace our existing event technology?",
    a: "No. Looped can work across the stack you already use, with different levels of connection depending on what works for your teams.",
  },
  {
    q: "Does Looped make decisions for my team?",
    a: "Looped can recommend and prepare consequential actions, but people remain in control of the decisions that matter. Anything that commits money, changes a programme or reaches a client waits for a person to approve it.",
  },
  {
    q: "Do we need everything integrated before Looped is useful?",
    a: "No. You can begin with the data and systems you have and deepen the connection over time.",
  },
  {
    q: "Is Looped only useful at the start of an event cycle?",
    a: "No. Looped can start from where an event is now and build the current picture from existing activity, decisions and data.",
  },
  {
    q: "Where does our intelligence live, and who can see it?",
    a: "Recommendations carry their evidence, and access is scoped by role so teams see the work that belongs to them. Your intelligence is held for your business and is not used to inform anyone else's events. Looped is a product of a UK company registered in England and Wales and with the ICO.",
  },
];

export function FaqSection(): React.ReactElement {
  return (
    <Panel tone="paper" id="faq" kicker="Questions">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Straight answers on control, connection and trust.</h2>
      </Reveal>
      <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={(i % 2) * 0.06} className="border-t border-hairline pt-5">
            <h3 className="text-lg font-semibold text-ink">{f.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">{f.a}</p>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
