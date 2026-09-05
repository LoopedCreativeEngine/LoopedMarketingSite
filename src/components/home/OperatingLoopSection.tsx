"use client";

import { ThreadDiagram, type ThreadNode } from "@/components/home/ThreadDiagram";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const STAGES: ThreadNode[] = [
  { id: "understand", label: "Understand", body: "The current picture of the event, built from your data and the signals around it." },
  { id: "decide", label: "Decide", body: "Recommendations with the evidence attached, for a person to weigh." },
  { id: "act", label: "Act", body: "The routine work that follows a decision — briefs, lists, drafts, coordination — within the authority it has been given." },
  { id: "measure", label: "Measure", body: "What happened: response, conversion, pace, outcome." },
  { id: "learn", label: "Learn", body: "The result goes back into the picture, so the next decision starts better informed." },
];

export function OperatingLoopSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="03" kicker="How it runs">
      <Reveal className="max-w-4xl">
        <h2 className="text-balance display-section">Understand → Decide → Act → Measure → Learn</h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-graphite sm:text-lg">
          Not five features. One cycle that runs across every event you have, all the time, and comes back round
          knowing more than when it left.
        </p>
      </Reveal>
      <Reveal className="mt-12">
        <ThreadDiagram nodes={STAGES} />
      </Reveal>
      <Reveal>
        <p className="mt-8 border-l-2 border-violet pl-5 font-serif text-2xl italic leading-snug text-ink-text sm:text-3xl">
          Most software remembers what was done. Looped remembers why, what it changed, and what the market did next.
        </p>
      </Reveal>
    </Panel>
  );
}
