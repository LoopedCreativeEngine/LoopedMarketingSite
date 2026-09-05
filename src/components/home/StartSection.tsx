"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** RECOVERED card row (5ca71de OptionalAutomationSection), two journeys. */
const JOURNEYS = [
  {
    layer: "Journey 01",
    title: "Start with an event",
    body: "Bring one or two events. Looped builds the picture, your teams work from it, and the outcome is measured before anything scales. Running a portfolio? The same proof applies — one event first, then expand on evidence.",
    cta: "Start with an event",
    primary: true,
  },
  {
    layer: "Journey 02",
    title: "See Looped in action",
    body: "A personalised walkthrough built around an event in your sector: what Looped would see, recommend and carry for it. No founder-run sales meeting required.",
    cta: "See Looped in action",
    primary: false,
  },
];

export function StartSection(): React.ReactElement {
  return (
    <Panel tone="paper" id="start" index="10" kicker="Start small">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Prove it on one event.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          Looped is meant to earn its place. Start with one or two events, let the outcomes speak, then decide how far it
          goes.
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
              <CtaButton href="/demo" variant={j.primary ? "primary" : "secondary"}>
                {j.cta}
              </CtaButton>
            </div>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
