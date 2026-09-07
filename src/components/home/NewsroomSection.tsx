"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** Weekly event-industry intelligence, illustrative headlines. Not client claims. */
const HEADLINES = [
  "Registrations are up. Why your audience might still be getting worse.",
  "The sponsorship revenue hiding between audience demand and programme strategy.",
  "The 63 people that matter more than another 500 registrations.",
  "When a healthy pipeline is actually a warning sign.",
  "Why the best next sponsor may not be in your current category list.",
  "What three events can teach each other that one event never could.",
  "Where AI creates real value in event businesses, and where it does not.",
];

export function NewsroomSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="08" kicker="Newsroom">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">What the data is telling event businesses now.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            Weekly intelligence for people who run events. Patterns, warnings and moves worth knowing about.
          </p>
          <div className="mt-7">
            <CtaButton href="/demo" variant="secondary">
              Keep me in the loop
            </CtaButton>
          </div>
        </Reveal>

        <RevealStagger className="space-y-0 lg:col-span-7 lg:pt-2">
          {HEADLINES.map((h) => (
            <RevealItem key={h}>
              <p className="border-t border-hairline py-4 text-base leading-snug text-ink sm:text-lg">{h}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </Panel>
  );
}
