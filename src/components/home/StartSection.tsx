"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** RECOVERED card row (5ca71de OptionalAutomationSection), two journeys. */
const JOURNEYS = [
  {
    layer: "Journey 01",
    title: "Join the early access list",
    body: "We are opening early access to a small number of event organisations following the founding pilot. Join the waitlist and we will be in touch as places open, with product updates and Looped intelligence in the meantime.",
    cta: "Join the waitlist",
    href: "/demo",
    primary: true,
  },
  {
    layer: "Journey 02",
    title: "See Looped in action",
    body: "A walkthrough built around an event in your sector: what Looped would see, why it matters and the move it would propose. No founder-run sales meeting required.",
    cta: "See Looped in action",
    href: "#what-it-does",
    primary: false,
  },
];

export function StartSection(): React.ReactElement {
  return (
    <Panel tone="paper" id="start" index="09" kicker="Early access">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Be among the first events on Looped.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          The founding pilot is underway. Early access opens to a small number of event organisations next, one or two
          events first, at whatever point in the cycle they are, with whatever data you have. Join the waitlist to hold
          your place.
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
                : "rounded-2xl border border-[rgba(15,23,42,0.12)] bg-stone p-7 shadow-[var(--lift-light)]"
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
