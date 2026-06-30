"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

const PILLARS = [
  {
    name: "Marketing",
    description:
      "A full marketing strategy, not just copy: segmented personas, each with their own campaign where they need one, plus budget allocation, comms plans and campaign calendars, grounded in your real event data. Built for both event types: the delegate, speaker and partner campaigns of a conference, and the two distinct motions of an awards programme, driving entries and then filling tables once the finalists are announced.",
    href: "/pillars/marketing",
  },
  {
    name: "Content",
    description:
      "Programme intelligence across the whole event. For conferences: the right speakers, the right session formats balanced across the agenda, and facilitated networking designed into the programme rather than bolted on. For awards: category strategy, themes and judging frameworks that make the programme credible and keep the entries flowing.",
    href: "/pillars/content",
  },
  {
    name: "Commercial",
    description:
      "Partner prospecting and lookalike targeting, prospect enrichment, renewal intelligence and package strategy, plus table-sales intelligence for awards, timed to the finalist announcement. Every prospect is grounded in real, sourced data, never an invented company or a made-up figure you would have to walk back mid-pitch. The right commercial conversations, at the right moment.",
    href: "/pillars/sponsorship",
  },
  {
    name: "Telesales",
    description:
      "Ranked call lists, enriched pre-call briefings and signal-led timing, for delegate acquisition, awards entry conversion and table sales alike, with conversion intelligence that updates live as the campaign moves. AI voice agents can be briefed from the same intelligence and switched on when you choose to dial at scale.",
    href: "/pillars/telesales",
  },
  {
    name: "Event Management",
    description:
      "Intelligence across the whole event timeline, not just the day itself. A live view of the critical path, readiness and risks, with budget-impact alerts and a clear decisions log, so slippage and overspend surface early enough to act on and nothing important falls between teams as the event nears.",
    href: "/pillars/event-management",
  },
  {
    name: "Portfolio",
    description:
      "One view across every event you run: where the opportunity, the risk and the revenue actually sit, plus cross-event learnings and benchmarks that make each new edition start sharper than the last.",
    href: "/pillars/portfolio",
  },
];

export function PillarsSection(): React.ReactElement {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".pillar-band").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            scrollTrigger: { trigger: el, start: "top 82%" },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-balance text-center text-3xl italic tracking-tight text-[#f8f9ff] sm:text-4xl">
          AI built for the people who build events.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
          Six connected pillars, each tuned to its discipline, all feeding one event brain.
        </p>
        <div className="mt-14 space-y-3">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.name}
              href={pillar.href}
              className="pillar-band group flex flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-[#181b25] to-[#232837] px-6 py-6 transition-all duration-300 hover:border-looped-violet-700/70 hover:shadow-[var(--looped-violet-glow)] md:flex-row md:items-center md:justify-between md:gap-6"
            >
              <h3 className="text-2xl italic text-[#f8f9ff] sm:text-3xl">{pillar.name}</h3>
              <p className="max-w-4xl text-sm leading-relaxed text-[#c4c8d8]">{pillar.description}</p>
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
