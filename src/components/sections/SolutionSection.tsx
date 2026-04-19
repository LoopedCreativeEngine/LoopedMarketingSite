"use client";

import { Reveal } from "@/components/motion/Reveal";

import { CascadeDiagram } from "./CascadeDiagram";

export function SolutionSection(): React.ReactElement {
  return (
    <section id="product" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Looped is the intelligence layer underneath your team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Every module output is structured, versioned, and approved before the cascade unlocks the next step — so
            downstream work always inherits upstream decisions.
          </p>
        </Reveal>
        <div className="mt-14">
          <CascadeDiagram />
        </div>
        <Reveal>
          <p className="mt-10 text-center font-mono text-sm text-indigo-800 sm:text-base">
            106 modules · 6 team pillars · One cascade · Every output informs the next.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
