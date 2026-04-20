"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CascadeCanvas } from "@/components/hero/CascadeCanvas";
import { SplineHero } from "@/components/hero/SplineHero";

import { colors } from "@/styles/design-system";

const SPLINE_URL = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL ?? "";

function MobileHeroBackdrop(): React.ReactElement {
  return (
    <div
      className="absolute inset-0 min-h-[100dvh] w-full bg-[radial-gradient(ellipse_120%_80%_at_50%_20%,#312e81_0%,#1e1b4b_35%,#0a0a0f_100%)]"
      aria-hidden
    />
  );
}

export function HeroSection(): React.ReactElement {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches || window.innerWidth < 768 : false,
  );
  const { scrollY } = useScroll();
  const chevronOpacity = useTransform(scrollY, [0, 120], [1, 0]);

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

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-16"
      style={{ backgroundColor: colors.heroBg }}
    >
      <div className="absolute inset-0">
        {isMobile ? (
          <MobileHeroBackdrop />
        ) : SPLINE_URL ? (
          <SplineHero sceneUrl={SPLINE_URL} />
        ) : (
          <CascadeCanvas />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.55)_45%,rgba(10,10,15,0.88)_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-28 pt-12 text-center sm:px-6 lg:px-8">
        <motion.h1
          className="text-balance tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-3xl font-semibold text-indigo-400 sm:text-4xl md:text-5xl lg:text-6xl">Looped</span>
          <span className="mt-2 block bg-gradient-to-br from-white via-indigo-100 to-indigo-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            Your events team is already using AI. Just not like this.
          </span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-[1.75] text-slate-200 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Looped is the intelligence operating system for B2B conference and awards teams. 106 modules. 6 team pillars.
          One cascade — where every approved output informs the next decision.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <Link
            href="/demo"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(67,56,202,0.5)] sm:w-auto"
          >
            Book a demo
          </Link>
          <a
            href="#product"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-indigo-400/90 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
          >
            See how it works
          </a>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-indigo-200/90 md:bottom-8"
        style={{ opacity: chevronOpacity }}
        aria-hidden
      >
        <span className="text-[10px] font-medium uppercase tracking-widest text-indigo-200/70">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" strokeWidth={2} />
        </motion.div>
      </motion.div>
    </section>
  );
}
