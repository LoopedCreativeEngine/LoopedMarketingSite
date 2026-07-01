"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pillar-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: { trigger: ".pillar-grid", start: "top 82%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="pillars" className="scroll-mt-24 bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-balance text-center text-3xl italic tracking-tight text-[#f8f9ff] sm:text-4xl">
          AI built for the people who build events.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
          Six connected pillars, each tuned to its discipline, all feeding one event brain.
        </p>
        <div className="pillar-grid mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.name}
              href={pillar.href}
              className="pillar-card group flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-[#181b25] to-[#232837] p-6 transition-all duration-300 hover:border-looped-violet-700/70 hover:shadow-[var(--looped-violet-glow)]"
            >
              <h3 className="text-xl italic text-[#f8f9ff] sm:text-2xl">{pillar.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#c4c8d8]">{pillar.outcome}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-300 transition-colors group-hover:text-violet-200">
                Explore {pillar.name}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center font-serif text-2xl italic text-[#f8f9ff] sm:text-3xl">
          Sharp on their own. Stronger together, across every event you run.
        </p>
      </div>
    </section>
  );
}
