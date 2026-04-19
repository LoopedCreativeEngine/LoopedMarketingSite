"use client";

import Link from "next/link";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

const PLANS = [
  {
    name: "Standard",
    items: ["£25,000 deployment", "£1,500 / month", "£500 / event setup"],
    note: "Ideal for single-brand portfolios ramping the cascade across a defined event calendar.",
  },
  {
    name: "Enterprise",
    items: ["£20,000 deployment", "£1,500 / month", "£300 / event setup (volume pricing)"],
    note: "For multi-brand operators — discounted per-event setup reflects consolidated governance and shared templates.",
  },
];

export function PricingSection(): React.ReactElement {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent deployment pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
            All API costs stay on your own accounts — no surprise bills from us. Book a conversation to align deployment
            scope with your portfolio.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2">
          {PLANS.map((p) => (
            <RevealItem
              key={p.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
              <ul className="mt-6 space-y-3 font-mono text-sm text-indigo-900">
                {p.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">{p.note}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 text-center">
          <Link
            href="/demo"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
          >
            Book a demo to discuss your portfolio
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
