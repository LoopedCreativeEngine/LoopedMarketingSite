"use client";

import { LoopMark } from "@/components/brand/LoopMark";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

const FOUNDER_BODY = `Looped is technology underpinned by AI to connect, streamline and enhance the work great event teams already do, and to overcome the pain points every event team knows: intelligence that arrives too late to use, work that starts from zero every cycle, and AI that's everywhere but joined up nowhere. Built by people who've run events, for the people who run them.`;

export function FinalCTASection(): React.ReactElement {
  return (
    <section className="on-ink relative overflow-hidden bg-ink py-24 text-bone-dim sm:py-32">
      {/* the loop closes */}
      <LoopMark
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 text-iris opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="kicker text-iris">13</span>
            <span className="kicker text-bone-dim">Founder note</span>
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance display-section">
            Built by event professionals, underpinned by AI.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-dim sm:text-lg">
            {FOUNDER_BODY}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo" tone="ink">
              Apply to pilot
            </CtaButton>
            <CtaButton href="/demo" variant="secondary" tone="ink">
              Join the waitlist
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
