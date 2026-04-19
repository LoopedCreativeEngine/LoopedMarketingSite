"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { CascadeCanvas } from "@/components/hero/CascadeCanvas";

import { colors } from "@/styles/design-system";

export function HeroSection(): React.ReactElement {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-16"
      style={{ backgroundColor: colors.heroBg }}
    >
      <div className="absolute inset-0">
        <CascadeCanvas />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#0a0a0f]/95"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-12 text-center sm:px-6 lg:px-8">
        <motion.h1
          className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Your events team is already using AI. Just not like this.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg"
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
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Book a demo
          </Link>
          <a
            href="#product"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
