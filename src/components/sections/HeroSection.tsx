"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { CascadeCanvas } from "@/components/hero/CascadeCanvas";

function MobileHeroBackdrop(): React.ReactElement {
  return (
    <div
      className="absolute inset-0 min-h-[100dvh] w-full bg-[radial-gradient(ellipse_120%_90%_at_50%_10%,#4338ca66_0%,#232735_40%,#0f1117_100%)]"
      aria-hidden
    />
  );
}

export function HeroSection(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches || window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = (): void => {
      setIsMobile(mq.matches || window.innerWidth < 768);
    };
    update();
    mq.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (subheadRef.current) {
        gsap.fromTo(subheadRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.4 });
      }
      if (!isMobile && sectionRef.current && canvasRef.current) {
        gsap.to(canvasRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-16"
    >
      <div ref={canvasRef} className="absolute inset-0">
        {isMobile ? <MobileHeroBackdrop /> : <CascadeCanvas />}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(0,0,0,0.15)_0%,rgba(15,17,23,0.58)_46%,rgba(15,17,23,0.92)_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-28 pt-12 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance tracking-tight">
          <span className="block text-4xl font-light text-white sm:text-5xl md:text-6xl">
            The intelligence layer
          </span>
          <span className="mt-2 block text-4xl font-bold text-looped-violet-700 sm:text-5xl md:text-6xl">
            for event teams.
          </span>
        </h1>
        <p ref={subheadRef} className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-[1.75] text-[#c4c8d8] sm:text-xl">
          Looped turns the work your event teams already do into one connected intelligence engine across marketing,
          content, operations, sales and more. Purpose-built by event professionals for conference and awards events.
          Not generic AI delivering AI slop.
        </p>
        <p className="mx-auto mt-8 flex items-center justify-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-violet-200/85">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_2px_rgba(167,139,250,0.7)]"
            aria-hidden
          />
          Currently open to a limited intake of pilot clients
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/demo"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-looped-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform duration-200 hover:scale-[1.02] sm:w-auto"
          >
            Apply to pilot now
          </Link>
          <Link
            href="/demo"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
