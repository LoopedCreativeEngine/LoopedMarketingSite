"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

const PILLARS = [
  {
    name: "Marketing",
    description:
      "From industry research to full campaign plan — your marketing team works from a shared approved foundation that feeds every channel. Audience intelligence, competitor positioning, personas, messaging strategy, email sequences, paid ad copy, organic calendar. Built in sequence. Each layer informing the next.",
    href: "/pillars/marketing",
  },
  {
    name: "Content",
    description:
      "Programme themes, speaker identification, session development — grounded in what's happening in your sector right now, not last year's instinct. The content team works from approved industry intelligence, not a blank page.",
    href: "/pillars/content",
  },
  {
    name: "Sponsorship",
    description:
      "Proposals built on real audience data. Every pitch personalised to what each sponsor actually cares about, grounded in your event's approved intelligence. Prospect discovery, package building, tailored proposals — in sequence.",
    href: "/pillars/sponsorship",
  },
  {
    name: "Telesales",
    description:
      "Calling campaigns intelligently briefed from platform intelligence. Scripts, objection handling, and prospect lists all built from what the platform knows about your event and audience. Optional voice automation when you're ready for it.",
    href: "/pillars/telesales",
  },
  {
    name: "Event Management",
    description:
      "Risk detection before problems become crises. Judge pipelines managed. Category reviews grounded in market data. Operational planning informed by intelligence rather than spreadsheets and instinct.",
    href: "/pillars/event-management",
  },
  {
    name: "Portfolio Directors",
    description:
      "Cross-event intelligence that compounds. Audience overlap analysis. Format effectiveness across your portfolio. What worked at one event informing the next. Strategic intelligence that only exists when you can see across the whole picture.",
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
        <h2 className="mt-3 text-balance text-center text-3xl italic tracking-tight text-[#f8f9ff] sm:text-4xl">
          How it works across your team
        </h2>
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
      </div>
    </section>
  );
}
