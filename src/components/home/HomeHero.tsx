"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

import { Ribbon } from "@/components/brand/Ribbon";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * The hero. Composition per the approved Claude Design artefact (founder
 * description, 2026-09-05): kicker with the gradient dot, a large dark serif
 * headline, the second line in the gradient, supporting copy, the gradient
 * pill CTA — and the animated ribbon Loop oversized on the right, partially
 * cropped by the viewport edge.
 */
const CREDIBILITY = ["Grounded in your event data", "Human at every decision", "Says when it doesn't know"];

export function HomeHero(): React.ReactElement {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-hero-rise]");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(els, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(els, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.09 });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-paper">
      {/* the Loop: oversized, right-hand, partially cropped */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[12vw] top-1/2 hidden h-[min(88vh,52rem)] w-[min(78vw,64rem)] -translate-y-1/2 lg:block"
      >
        <Ribbon cxf={0.56} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-8 lg:pb-40 lg:pt-44">
        <div className="max-w-2xl">
          <p data-hero-rise className="flex items-center gap-3.5 kicker text-muted opacity-0">
            <span className="h-2.5 w-2.5 rounded-full bg-grad-dot" aria-hidden />
            For conference and awards teams
          </p>

          <h1 data-hero-rise className="mt-8 display-hero text-ink opacity-0">
            The art of events is yours.
            <span className="mt-2 block text-grad">The intelligence is Looped.</span>
          </h1>

          <p data-hero-rise className="mt-8 max-w-xl text-pretty text-lg leading-[1.6] text-slate opacity-0 sm:text-xl">
            The AI operating system for conference &amp; awards businesses. Looped holds the picture of every event you
            run, keeps it current, recommends with the evidence attached, carries the routine work and remembers what
            each edition learned.
          </p>

          <div data-hero-rise className="mt-9 flex flex-col gap-3 opacity-0 sm:flex-row sm:items-center sm:gap-4">
            <CtaButton href="/demo" full>
              Start with an event
            </CtaButton>
            <CtaButton href="/demo" variant="secondary" full>
              See Looped in action
            </CtaButton>
          </div>

          <ul data-hero-rise className="mt-12 flex flex-wrap gap-x-7 gap-y-3 opacity-0">
            {CREDIBILITY.map((item, i) => (
              <li key={item} className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.06em] text-muted">
                <span
                  className="h-[7px] w-[7px] rounded-full"
                  style={{ background: ["#7c3aed", "#ec4899", "#fb923c"][i] }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* on small screens the Loop sits beneath the copy, still oversized and cropped at the right */}
        <div aria-hidden className="pointer-events-none relative -mr-[30vw] mt-12 h-72 w-[130vw] sm:h-96 lg:hidden">
          <Ribbon cxf={0.5} weight={0.8} />
        </div>
      </div>
    </section>
  );
}
