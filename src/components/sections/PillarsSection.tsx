"use client";

import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const PILLARS = [
  {
    name: "Marketing",
    outcome: "A full campaign strategy grounded in your real event data, not just copy.",
    href: "/pillars/marketing",
  },
  {
    name: "Content",
    outcome: "A programme your audience actually wants, from speakers and sessions to awards categories.",
    href: "/pillars/content",
  },
  {
    name: "Commercial",
    outcome: "The right partner conversations at the right moment, grounded in real, sourced data.",
    href: "/pillars/sponsorship",
  },
  {
    name: "Telesales",
    outcome: "Sharper call lists, briefings and timing, with AI voice you switch on when you choose.",
    href: "/pillars/telesales",
  },
  {
    name: "Event Management",
    outcome: "A live view of the critical path, risks and budget impact, so nothing slips.",
    href: "/pillars/event-management",
  },
  {
    name: "Portfolio",
    outcome: "One view across every event: where the opportunity, risk and revenue really sit.",
    href: "/pillars/portfolio",
  },
];

export function PillarsSection(): React.ReactElement {
  return (
    <Panel tone="ink" id="pillars" index="10" kicker="The pillars">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">AI built for the people who build events.</h2>
        <p className="mt-5 text-lg leading-relaxed text-bone-dim">
          Six connected pillars, each tuned to its discipline, all feeding one event brain.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-x-12 md:grid-cols-2">
        {PILLARS.map((pillar, index) => (
          <Reveal key={pillar.name} delay={(index % 2) * 0.06}>
            <Link
              href={pillar.href}
              className="group flex items-start gap-5 border-t border-white/10 py-6 transition-colors hover:border-iris/40"
            >
              <span className="mt-1 font-mono text-sm text-iris">P{index + 1}</span>
              <span className="flex-1">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-serif text-2xl tracking-tight text-bone-text transition-colors group-hover:text-iris">
                    {pillar.name}
                  </span>
                  <span
                    className="text-iris transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-bone-dim">{pillar.outcome}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-14 max-w-3xl text-balance font-serif text-2xl italic leading-snug text-bone-text sm:text-3xl">
          Sharp on their own. Stronger together, across every event you run.
        </p>
      </Reveal>
    </Panel>
  );
}
