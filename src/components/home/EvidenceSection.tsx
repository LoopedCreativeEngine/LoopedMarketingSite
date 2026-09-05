"use client";

import { ThreadDiagram, type ThreadNode } from "@/components/home/ThreadDiagram";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const CHAIN: ThreadNode[] = ["Evidence", "Recommendation", "Decision", "Action", "Response", "Outcome", "Learning"].map(
  (label) => ({ id: label.toLowerCase(), label }),
);

export function EvidenceSection(): React.ReactElement {
  return (
    <Panel tone="ink" index="06" kicker="Evidence and outcomes">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Time saved isn&apos;t the outcome. Better events are.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-bone-dim sm:text-lg">
            Most AI is judged on activity: words generated, hours saved. Looped is judged on what changed. Every
            recommendation stays connected to the decision it informed, the action that followed, the response it got
            and the outcome it produced — so its value is visible, not assumed.
          </p>
          <p className="text-base leading-relaxed text-bone-dim sm:text-lg">
            A recommendation nobody acted on, an action that changed nothing, a call that paid off twice: all of it is
            on the record, and all of it feeds the next cycle.
          </p>
        </Reveal>
      </div>
      <Reveal className="mt-12">
        <p className="mb-5 kicker text-iris">Evidence → Recommendation → Decision → Action → Response → Outcome → Learning</p>
        <ThreadDiagram nodes={CHAIN} tone="ink" />
      </Reveal>
      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-bone-text sm:text-3xl">
          AI should have to prove its value.
        </p>
      </Reveal>
    </Panel>
  );
}
