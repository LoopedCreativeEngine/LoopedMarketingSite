"use client";

import { SignalLoopFigure } from "@/components/brand/SignalLoopFigure";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** The four buyer outcomes, in order: know, decide, act, verify. */
const OUTCOMES = [
  { name: "Know what is really happening", body: "One connected picture across the signals and systems around your event, so risks and exceptions no longer hide between teams." },
  { name: "Know what to do next", body: "Recommendations with the evidence attached. Ask why, compare another route, see what a move would affect." },
  { name: "Put the decision to work", body: "Once authorised, Looped carries the work through your connected stack, inside the rules you set." },
  { name: "Know whether it worked", body: "Looped verifies the result. What happened becomes evidence, and evidence sharpens the next recommendation." },
];

export function ValueSection(): React.ReactElement {
  return (
    <Panel tone="paper" kicker="What you get">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">From knowing the next move to getting it done.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Your teams already have the expertise, the judgement and the relationships. What is hard is holding the whole
            picture in one place, current on the day a decision has to be made, and then carrying that decision through a
            dozen systems before the window closes.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Looped holds both ends. It brings together what your teams know with the signals spread across the event
            business, works out what they mean for this edition and recommends the strongest move. You decide. Looped
            carries the approved work through the tools you already use, checks what actually happened and keeps the
            lesson. Every edition starts better informed than the last.
          </p>
        </Reveal>
      </div>
      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-8">
        <SignalLoopFigure />
      </Reveal>
      <Reveal className="mt-10">
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((v, i) => (
            <div key={v.name} className="border-t border-hairline pt-4">
              <dt className="flex items-start gap-2.5 text-base font-semibold text-ink">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c", "#a78bdb"][i] }} aria-hidden />
                {v.name}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate">{v.body}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Panel>
  );
}
