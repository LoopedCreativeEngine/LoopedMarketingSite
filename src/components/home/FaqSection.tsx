"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** Concise FAQ that also carries the trust and control points, in the approved style. */
const FAQS = [
  {
    q: "Does Looped replace our existing event technology?",
    a: "No. Your systems remain your systems. Looped connects to the stack you already use, keeps the event picture current from it and, where you authorise it, carries approved work back into it.",
  },
  {
    q: "Does Looped make decisions for my team?",
    a: "Work that sits inside rules you have already set can run on its own. Anything consequential, money committed, a programme changed, a message reaching a client, waits for a person to approve it. You set where that line sits.",
  },
  {
    q: "How does Looped actually do the work?",
    a: "Through the systems around your event. Where a system offers a direct connection, Looped uses it. Where that is not the right route, the work can be completed in the software itself. Either way it is one governed Looped workflow, with the same approvals and the same record.",
  },
  {
    q: "Do we need everything connected, or a fresh event cycle, before Looped is useful?",
    a: "No to both. Looped can start from where an event is now, with the data and systems you already have, and build the current picture from existing activity and decisions. The picture deepens, and more of the work can be carried end to end, as you connect more.",
  },
  {
    q: "How do we know an action actually worked?",
    a: "Looped checks the destination and records what it finds. A request that was sent is not counted as a result, and where Looped cannot confirm an action completed, it surfaces the exception rather than closing it.",
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
