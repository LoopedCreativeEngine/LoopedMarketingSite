"use client";

import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * A slim subscriber strip for the website's content audience (the Newsroom).
 * Deliberately not framed as product functionality: it feeds the weekly
 * briefing / nurture list, separate from the product waitlist.
 */
export function KeepInLoopSection(): React.ReactElement {
  return (
    <section className="border-y border-hairline bg-stone">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="kicker text-purple">Keep in the loop</p>
            <p className="mt-3 text-base leading-relaxed text-slate sm:text-lg">
              Weekly ideas on where event intelligence really sits, what is changing across the industry and where
              better decisions can change outcomes.
            </p>
          </div>
          <div className="shrink-0">
            <CtaButton href="/newsroom" variant="secondary">
              Get the weekly briefing
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
