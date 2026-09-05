"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { LoopMark } from "@/components/brand/LoopMark";
import { MediaFrame } from "@/components/media/MediaFrame";
import { CtaButton } from "@/components/ui/CtaButton";

const CREDIBILITY = [
  "Purpose-built for conferences & awards",
  "Grounded in your event data",
  "A human approves every decision",
];

export function HeroSection(): React.ReactElement {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-hero-rise]");
      // Elements render hidden (opacity-0) to avoid a flash; reveal on mount.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(els, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        els,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.09 },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-paper pb-20 pt-28 sm:pb-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          {/* value proposition */}
          <div>
            <p data-hero-rise className="flex items-center gap-2.5 kicker text-muted opacity-0">
              <LoopMark className="h-4 w-4 text-purple" />
              For the teams who build B2B conferences &amp; awards
            </p>

            <h1 data-hero-rise className="mt-6 display-hero font-medium text-ink opacity-0">
              The intelligence layer <span className="italic text-purple">for event teams.</span>
            </h1>

            <p data-hero-rise className="mt-6 max-w-xl text-pretty text-lg leading-[1.65] text-slate opacity-0">
              Looped turns the work your event teams already do into one connected intelligence engine across marketing,
              content, operations, sales and more. Purpose-built by event professionals for conference and awards
              events. Not generic AI delivering AI slop.
            </p>

            <p data-hero-rise className="mt-7 flex items-center gap-2.5 kicker text-muted opacity-0">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple" />
              </span>
              Currently open to a limited intake of pilot clients
            </p>

            <div data-hero-rise className="mt-7 flex flex-col gap-3 opacity-0 sm:flex-row sm:gap-4">
              <CtaButton href="/demo" full>
                Apply to pilot now
              </CtaButton>
              <CtaButton href="/demo" variant="secondary" full>
                Join the waitlist
              </CtaButton>
            </div>

            <ul
              data-hero-rise
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-[rgba(15,23,42,0.10)] pt-6 opacity-0"
            >
              {CREDIBILITY.map((item) => (
                <li key={item} className="flex items-center gap-2 kicker text-muted">
                  <span className="h-1 w-1 rounded-full bg-purple" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* product-forward media slot (real walkthrough / screens swap in here) */}
          <div data-hero-rise className="opacity-0 lg:pl-4">
            <MediaFrame
              variant="browser"
              tone="light"
              tag="Walkthrough"
              aspect="16 / 11"
              label="Live intelligence across every event"
            />
            <Link
              href="/demo"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate transition-colors hover:text-purple"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple text-snow" aria-hidden>
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
