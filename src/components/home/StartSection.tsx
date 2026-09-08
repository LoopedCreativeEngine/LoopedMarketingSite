"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** RECOVERED card row (5ca71de OptionalAutomationSection), two journeys. */
const JOURNEYS = [
  {
    layer: "Early access",
    title: "Join the early access list",
    body: "Early access will open to a small number of selected event organisations following our founding pilot. Join the waitlist and we will be in touch as places open, with product updates and Looped intelligence in the meantime.",
    cta: "Join the waitlist",
    href: "/waitlist",
    primary: true,
  },
  {
    layer: "Or take a look",
    title: "See Looped in action",
    body: "A walkthrough built around your own event, not a fictional one: what Looped would see, why it matters, the move it would propose and how it would carry that move through the systems around your event. No founder-run sales meeting required.",
    cta: "See Looped in action",
    href: "/demo",
    primary: false,
  },
];

export function StartSection(): React.ReactElement {
  return (
    <Panel tone="stone" id="start" kicker="Early access">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Be among the first events on Looped.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          Early access will open to a small number of selected event organisations following our founding pilot, at
          whatever point in the cycle they are and with whatever data they have. Join the waitlist to hold your place.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {JOURNEYS.map((j, index) => (
          <Reveal
            key={j.title}
            delay={index * 0.06}
            className={
              j.primary
                ? "rounded-2xl border border-purple bg-[rgba(124,58,237,0.05)] p-7 shadow-[var(--grad-emph)]"
                : "rounded-2xl border border-[rgba(15,23,42,0.12)] bg-paper p-7 shadow-[var(--lift-light)]"
            }
          >
            <span className={`kicker ${j.primary ? "text-purple" : "text-muted"}`}>{j.layer}</span>
            <h3 className="mt-4 text-2xl text-ink">{j.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">{j.body}</p>
            <div className="mt-6">
              <CtaButton href={j.href} variant={j.primary ? "primary" : "secondary"}>
                {j.cta}
              </CtaButton>
            </div>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
