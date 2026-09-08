"use client";

import { Ribbon } from "@/components/brand/Ribbon";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** Closing plate: ink, centred CTAs. The one approved brand loop (the animated Ribbon) cropped off the right edge for continuity. */
export function ClosingSection(): React.ReactElement {
  return (
    <section className="on-night relative overflow-hidden bg-night py-24 text-mist sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[16vw] top-1/2 hidden h-[min(72vh,34rem)] w-[min(58vw,42rem)] -translate-y-1/2 opacity-70 sm:block"
      >
        <Ribbon cxf={0.62} weight={0.8} />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="kicker text-lavender">Start</span>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance display-section">
            The art of events is yours. The intelligence is Looped.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
            Know the next move before your competitors do, and have it carried through and verified while the window is
            still open. Early access will open to a small number of event organisations following our founding pilot.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo" tone="ink">
              Join the waitlist
            </CtaButton>
            <CtaButton href="#what-it-does" variant="secondary" tone="ink">
              See Looped in action
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
