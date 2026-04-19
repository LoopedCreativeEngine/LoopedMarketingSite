"use client";

import { Reveal } from "@/components/motion/Reveal";

export function TestimonialSection(): React.ReactElement {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What event organisers say
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <figure className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <blockquote className="text-center text-base leading-relaxed text-slate-700 sm:text-lg">
              &quot;We cut two weeks of programme research and still landed sponsor conversations with sharper packaging.
              The cascade forced decisions we used to postpone until the last minute.&quot;
            </blockquote>
            <figcaption className="mt-6 text-center text-sm text-slate-500">
              <span className="font-semibold text-slate-800">[Client Name]</span> · [Organisation]
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
