"use client";

import { LoopMark } from "@/components/brand/LoopMark";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** RECOVERED closing plate (5ca71de FinalCTASection): ink, the loop closes at right, centred CTAs. */
export function ClosingSection(): React.ReactElement {
  return (
    <section className="on-night relative overflow-hidden bg-night py-24 text-mist sm:py-32">
      <LoopMark
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 text-lavender opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="kicker text-lavender">13</span>
            <span className="kicker text-mist">Start</span>
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance display-section">
            The art of events is yours. The intelligence is Looped.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
            Start with one event. Let it prove its value on the record. Then decide how far the loop goes.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo" tone="ink">
              Start with an event
            </CtaButton>
            <CtaButton href="/demo" variant="secondary" tone="ink">
              See Looped in action
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
