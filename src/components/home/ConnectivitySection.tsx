"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** Looped sits across the tools you already use. One depth-of-connection progression, shown once. */
const LEVELS = [
  { title: "Start with what you have", body: "Spreadsheets, exports and team updates.", color: "#7c3aed" },
  { title: "Connect selectively", body: "The systems that matter most, first.", color: "#ec4899" },
  { title: "Connect deeply", body: "Registrations, CRM, campaign and commercial data, continuously.", color: "#fb923c" },
];

const SOURCES = ["CRM", "Registration", "Email", "Programme", "Commercial", "Spreadsheets", "Team updates"];

export function ConnectivitySection(): React.ReactElement {
  return (
    <Panel tone="stone" index="04" kicker="Connectivity">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Works with the stack you already have.</h2>
        </Reveal>
        <Reveal className="lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Looped sits across your existing event technology. Your stack stays in place, and Looped connects at the
            level that works for you.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-paper p-6 shadow-[var(--lift-light)] sm:p-8">
        {/* Looped as one live view above the tools you already use */}
        <div className="rounded-2xl bg-grad px-5 py-4 text-center shadow-[var(--grad-emph)]">
          <p className="text-base font-semibold tracking-tight text-white sm:text-lg">Looped</p>
          <p className="mt-0.5 text-xs text-white/85">One live view across your stack</p>
        </div>
        <div className="flex justify-center gap-6 py-1" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="h-6 w-px bg-gradient-to-b from-purple/50 to-transparent" />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {SOURCES.map((sname) => (
            <span key={sname} className="rounded-xl border border-hairline bg-stone px-4 py-2 text-sm font-medium text-slate">
              {sname}
            </span>
          ))}
        </div>

        {/* one depth-of-connection progression, shown once */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-0">
          {LEVELS.map((l, i) => (
            <div key={l.title} className="relative sm:px-5">
              {i > 0 ? <span className="absolute left-0 top-3 hidden text-muted sm:block" aria-hidden>&rarr;</span> : null}
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: l.color }} aria-hidden />
                {l.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate">{l.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
          The more connected the picture becomes, the more Looped can understand, recommend and act on. You are never
          asked to replace what already works.
        </p>
      </Reveal>
    </Panel>
  );
}
