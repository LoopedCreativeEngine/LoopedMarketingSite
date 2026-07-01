"use client";

import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

type Plan = {
  name: string;
  body: string;
};

const PLANS: Plan[] = [
  {
    name: "Priced per event",
    body: "Looped is priced per event, so the cost scales with what you actually run. No platform-wide licence to justify before you have seen the value, and no rate card to publish at this stage.",
  },
  {
    name: "Volume discounts",
    body: "The more events you run, the lower the per-event rate. Portfolio and annual options bring it down further for teams running across a full calendar. Figures are shared with pilot partners during onboarding.",
  },
];

const BENEFITS = [
  {
    title: "Higher revenues",
    body: "Better targeting, better campaigns, better conversion from intelligence-grounded outreach.",
  },
  {
    title: "Reduced costs",
    body: "Time recovered. Tools that work harder. Headcount focused on what actually needs people.",
  },
  {
    title: "Better outputs, consistently",
    body: "Not dependent on who's on the team this month. The intelligence layer raises the floor for everyone.",
  },
  {
    title: "More events, same team",
    body: "When research, briefing and drafting are handled by the platform, your team runs more events without running harder.",
  },
];

export function PricingSection(): React.ReactElement {
  return (
    <Panel tone="bone" id="pricing" index="12" kicker="Pricing">
      <Reveal>
        <h2 className="text-balance text-center display-section">Pricing available on request.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-graphite sm:text-lg">
          We are taking on a limited number of pilot partners. This is an early-adopter intake, not a checkout, so
          pricing is shared during onboarding rather than published as a rate card.
        </p>
      </Reveal>

      <RevealStagger className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        {PLANS.map((p) => (
          <RevealItem
            key={p.name}
            className="flex flex-col rounded-2xl border border-[rgba(23,19,31,0.12)] bg-paper p-8 shadow-[var(--lift-light)]"
          >
            <h3 className="text-2xl text-ink-text">{p.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-graphite">{p.body}</p>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal className="mt-10 text-center">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-graphite sm:text-base">
          Every event includes the full platform: over 120 AI modules across all six pillars, the intelligence cascade,
          live dashboards and the integrations you already run.
        </p>
        <Link
          href="/platform"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors hover:text-ink-text"
        >
          See everything the platform does
          <span aria-hidden>→</span>
        </Link>
      </Reveal>

      <Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-xl border border-[rgba(23,19,31,0.10)] bg-paper p-5">
              <p className="text-base text-ink-text">{b.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-graphite">{b.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-12 text-center">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-graphite">
          We are onboarding a small number of pilot partners. If Looped is right for your events, we&apos;ll know
          quickly.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <CtaButton href="/demo">Apply to pilot</CtaButton>
          <CtaButton href="/demo" variant="secondary">
            Join the waitlist
          </CtaButton>
        </div>
      </Reveal>
    </Panel>
  );
}
