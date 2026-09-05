"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { LoopMark } from "@/components/brand/LoopMark";
import { MediaFrame } from "@/components/media/MediaFrame";
import { CtaButton } from "@/components/ui/CtaButton";

/** RECOVERED hero composition (5ca71de HeroSection); copy fitted to the locked lines. */
const CREDIBILITY = [
  "Built for conferences & awards, not adapted to them",
  "Grounded in your event data",
  "A person approves anything that carries a consequence",
];

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
    <section ref={rootRef} className="relative overflow-hidden bg-bone pb-20 pt-28 sm:pb-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <div>
            <p data-hero-rise className="flex items-center gap-2.5 kicker text-muted-ink opacity-0">
              <LoopMark className="h-4 w-4 text-violet" />
              For the teams who build B2B conferences &amp; awards
            </p>

            <h1 data-hero-rise className="mt-6 display-hero font-medium text-ink-text opacity-0">
              The art of events is yours. <span className="italic text-violet">The intelligence is Looped.</span>
            </h1>

            <p data-hero-rise className="mt-6 max-w-xl text-pretty text-lg leading-[1.65] text-graphite opacity-0">
              <span className="font-medium text-ink-text">The AI operating system for conference &amp; awards businesses.</span>{" "}
              Looped holds the picture of every event you run, keeps it current, recommends with the evidence attached,
              carries the routine work and remembers what each edition learned.
            </p>

            <p data-hero-rise className="mt-7 flex items-center gap-2.5 kicker text-muted-ink opacity-0">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
              </span>
              Now onboarding founding partners, one event at a time
            </p>

            <div data-hero-rise className="mt-7 flex flex-col gap-3 opacity-0 sm:flex-row sm:gap-4">
              <CtaButton href="/demo" full>
                Start with an event
              </CtaButton>
              <CtaButton href="/demo" variant="secondary" full>
                See Looped in action
              </CtaButton>
            </div>

            <ul
              data-hero-rise
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-[rgba(23,19,31,0.10)] pt-6 opacity-0"
            >
              {CREDIBILITY.map((item) => (
                <li key={item} className="flex items-center gap-2 kicker text-muted-ink">
                  <span className="h-1 w-1 rounded-full bg-violet" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-hero-rise className="opacity-0 lg:pl-4">
            <MediaFrame
              variant="browser"
              tone="light"
              tag="Walkthrough"
              aspect="16 / 11"
              label="One picture of every event, kept current"
            />
            <Link
              href="/demo"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-graphite transition-colors hover:text-violet"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet text-bone" aria-hidden>
                <svg viewBox="0 0 24 24" className="ml-0.5 h-3 w-3" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch the walkthrough
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
