"use client";

import { Panel } from "@/components/layout/Panel";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";

const BODY = `Looped doesn't wait to be asked. It watches the signals across your events and pushes the moment that matters, a renewal cooling, a segment under target, a prospect heating up, to live dashboards and a continuous feed your team actually works from. No more digging through scattered AI chats. No more acting on insight after the moment has gone.`;

export function LiveIntelligenceSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="10" kicker="Live intelligence">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <h2 className="text-balance display-section">Your intelligence, live, not buried in a chat history.</h2>
          <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">{BODY}</p>
        </Reveal>

        <Reveal className="lg:order-first">
          <MediaFrame
            variant="app"
            tone="light"
            tag="Live feed"
            aspect="4 / 3"
            label="The decisions to make, the signals to act on, all current"
          />
        </Reveal>
      </div>
    </Panel>
  );
}
