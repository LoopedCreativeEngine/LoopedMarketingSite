"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const PILLARS = [
  {
    name: "Marketing",
    description:
      "Market mapping, competitor intelligence, persona building, campaign strategy, email sequences, paid ad intelligence, organic calendar",
    tag: "26 modules",
  },
  {
    name: "Content",
    description:
      "Programme narrative, speaker identification, session development, agenda architecture, photography and videography briefs, press releases",
    tag: "18 modules",
  },
  {
    name: "Commercial Sales",
    description:
      "Sponsor prospect finder, package builder, pitch generator, tailored sponsor proposals, pipeline health, renewal intelligence",
    tag: "14 modules",
  },
  {
    name: "Telesales",
    description:
      "Entry conversion, table sales, nominations drive, list segmentation, Retell AI voice agent campaigns, call log intelligence",
    tag: "12 modules",
  },
  {
    name: "Event Management",
    description:
      "Awards programme analysis, category review, judge discovery, judge pipeline, run of show, risk detection, post-event intelligence",
    tag: "16 modules",
  },
  {
    name: "Portfolio Directors",
    description:
      "Cross-event performance benchmarking, audience overlap analysis, community strategy, spinoff recommendations, opportunity detection",
    tag: "10 modules",
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
        <p className="module-id text-center text-xs font-semibold uppercase tracking-wider text-violet-300">Six team workspaces</p>
        <h2 className="mt-3 text-balance text-center text-3xl italic tracking-tight text-white sm:text-4xl">
            One platform. Every team that runs your events.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-400 sm:text-base">
          Each pillar has its own intelligence thread. The intelligence each team produces is available to every other
          team working on the same event. No briefing each other. No duplication. The system is the shared context.
        </p>
        <div className="mt-14 space-y-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.name}
              className="pillar-band group flex items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-[#12121d] to-[#191933] px-5 py-5 transition-all duration-300 hover:from-[#1a1a2d] hover:to-[#23234a] hover:py-7"
            >
              <div>
                <h3 className="text-2xl italic text-white sm:text-3xl">{pillar.name}</h3>
                <p className="mt-2 max-w-4xl text-sm text-slate-300">{pillar.description}</p>
              </div>
              <span className="module-id shrink-0 rounded-full border border-looped-violet-700/60 bg-looped-violet-700/20 px-3 py-1 text-xs text-violet-200 transition-opacity duration-300 group-hover:opacity-100 md:opacity-70">
                {pillar.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
