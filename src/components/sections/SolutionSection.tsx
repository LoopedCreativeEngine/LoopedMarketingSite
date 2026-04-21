"use client";

import { Reveal } from "@/components/motion/Reveal";

import { CascadeDiagram } from "./CascadeDiagram";

export function SolutionSection(): React.ReactElement {
  return (
    <section id="product" className="scroll-mt-24 bg-[#0c0c12] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="module-id text-center text-xs font-semibold uppercase tracking-wider text-violet-300">The solution</p>
          <h2 className="mt-3 text-balance text-center text-3xl tracking-tight text-white sm:text-4xl">
            Intelligence that compounds across your entire portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-400 sm:text-base">
            Looped doesn&apos;t make your marketing team write emails faster — ChatGPT has already done that. What it
            changes is what those emails are informed by. Every email, every sponsorship pitch, every awards category
            decision is grounded in the same approved intelligence cascade.
          </p>
        </Reveal>
        <div className="mt-14">
          <CascadeDiagram />
        </div>
      </div>
    </section>
  );
}
