"use client";

import Link from "next/link";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

type Plan = {
  name: string;
  body: string;
};

const PLANS: Plan[] = [
  {
    name: "Standard",
    body: "Pricing available on request. Structured per event, with portfolio and annual commitment options.",
  },
  {
    name: "Enterprise",
    body: "Pricing available on request. Structured per event, with portfolio and annual commitment options.",
  },
];

export function PricingSection(): React.ReactElement {
  return (
    <section id="pricing" className="scroll-mt-24 bg-[#0c0c12] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mt-3 text-balance text-center text-3xl tracking-tight text-white sm:text-4xl">
            Pricing available on request.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-400 sm:text-base">
            Structured per event, with portfolio and annual commitment options.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2">
          {PLANS.map((p) => (
            <RevealItem
              key={p.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-looped-card p-8 shadow-sm transition-shadow duration-200 hover:shadow-[var(--looped-violet-glow)]"
            >
              <h3 className="text-2xl text-white">{p.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <h3 className="mt-12 text-center text-2xl italic text-[#f8f9ff]">What every event includes</h3>
          <ul className="mx-auto mt-6 max-w-4xl space-y-2 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            <li>Full sector and competitor intelligence, updated continuously</li>
            <li>Audience mapping and persona development</li>
            <li>Messaging strategy and campaign planning</li>
            <li>Content for every channel — email, social, paid, organic</li>
            <li>Sponsorship intelligence and proposal support</li>
            <li>Telesales campaign briefing and scripting</li>
            <li>Event management and risk intelligence</li>
            <li>Weekly intelligence digest for your whole team</li>
            <li>Portfolio-level reporting for directors</li>
            <li>Proactive monitoring — competitors, campaigns, website quality</li>
          </ul>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 md:grid-cols-2">
            <p className="rounded-xl border border-white/10 bg-looped-card p-4 text-sm text-[#c4c8d8]">
              <span className="block text-base text-[#f8f9ff]">Higher revenues</span>
              Better targeting, better campaigns, better conversion from intelligence-grounded outreach.
            </p>
            <p className="rounded-xl border border-white/10 bg-looped-card p-4 text-sm text-[#c4c8d8]">
              <span className="block text-base text-[#f8f9ff]">Reduced costs</span>
              Time recovered. Tools that work harder. Headcount focused on what actually needs people.
            </p>
            <p className="rounded-xl border border-white/10 bg-looped-card p-4 text-sm text-[#c4c8d8]">
              <span className="block text-base text-[#f8f9ff]">Better outputs, consistently</span>
              Not dependent on who&apos;s on the team this month. The intelligence layer raises the floor for everyone.
            </p>
            <p className="rounded-xl border border-white/10 bg-looped-card p-4 text-sm text-[#c4c8d8]">
              <span className="block text-base text-[#f8f9ff]">More events, same team</span>
              When research, briefing, and drafting are handled by the platform, your team runs more events without running harder.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#c4c8d8]">
            We work with a small number of event organisations. If Looped is right for you, we&apos;ll know quickly.
          </p>
          <Link
            href="/demo"
            className="mt-5 inline-flex cursor-pointer items-center justify-center rounded-lg bg-looped-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
          >
            Talk to us about your portfolio
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
