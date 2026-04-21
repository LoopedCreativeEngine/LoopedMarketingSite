"use client";

import Link from "next/link";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

type Plan = {
  name: string;
  lines: { k: string; v: string }[];
  foot?: string;
};

const PLANS: Plan[] = [
  {
    name: "Standard",
    lines: [
      { k: "Deployment", v: "£25,000 one-off" },
      { k: "Retainer", v: "£1,500 / month" },
      { k: "Setup", v: "£500 per event onboarded" },
    ],
  },
  {
    name: "Enterprise",
    lines: [
      { k: "Deployment", v: "From £20,000" },
      { k: "Retainer", v: "From £1,250 / month" },
      { k: "Setup", v: "From £300 per event" },
    ],
    foot: "Volume pricing for portfolios of 50+ events",
  },
];

export function PricingSection(): React.ReactElement {
  return (
    <section id="pricing" className="scroll-mt-24 bg-[#0c0c12] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="module-id text-center text-xs font-semibold uppercase tracking-wider text-violet-300">Pricing</p>
          <h2 className="mt-3 text-balance text-center text-3xl tracking-tight text-white sm:text-4xl">
            Deployment pricing. No per-seat surprises.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-400 sm:text-base">
            One deployment fee to get you live. A monthly retainer for ongoing management and platform improvements. A
            small per-event setup fee as you onboard events. Your AI costs sit on your own API accounts — you see
            exactly what you spend, with no markup from us.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2">
          {PLANS.map((p) => (
            <RevealItem
              key={p.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-looped-card p-8 shadow-sm transition-shadow duration-200 hover:shadow-[var(--looped-violet-glow)]"
            >
              <h3 className="text-2xl text-white">{p.name}</h3>
              <dl className="mt-6 space-y-4">
                {p.lines.map((row) => (
                  <div key={row.k}>
                    <dt className="module-id text-xs font-semibold uppercase tracking-wide text-slate-400">{row.k}</dt>
                    <dd className="mt-1 font-serif text-2xl text-violet-200">{row.v}</dd>
                  </div>
                ))}
              </dl>
              {p.foot ? <p className="mt-6 text-sm leading-relaxed text-slate-400">{p.foot}</p> : null}
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
            API costs (Anthropic, Gemini, Perplexity, Apollo, Retell) sit on your own accounts. At moderate usage across
            100 events: approximately £895 per event in API costs — less than one day of a senior strategist&apos;s
            time.
          </p>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <Link
            href="/demo"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-looped-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
          >
            Book a demo to discuss your portfolio
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
