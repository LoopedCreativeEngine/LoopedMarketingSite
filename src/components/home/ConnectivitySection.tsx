"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

/** How Looped connects: deep, selective, or start with what you have. No stack replacement, no architecture. */
const LEVELS = [
  { title: "Start with what you have", body: "Use spreadsheets, exports and team updates first, with deeper integrations added over time." },
  { title: "Connect selectively", body: "Start with the systems that matter most, then add more when it makes sense." },
  { title: "Connect deeply", body: "Bring registrations, CRM, campaign, programme and commercial data together continuously." },
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
            Looped sits across your existing event technology and can work at different levels of connection. Your stack
            stays. Looped connects to the level that works for you.
          </p>
        </Reveal>
      </div>

      {/* the layer diagram: Looped as one live view above the tools you already use */}
      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-paper p-6 shadow-[var(--lift-light)] sm:p-8">
        <div className="rounded-2xl bg-grad px-5 py-4 text-center shadow-[var(--grad-emph)]">
          <p className="text-base font-semibold tracking-tight text-white sm:text-lg">Looped</p>
          <p className="mt-0.5 text-xs text-white/85">One live view across your stack</p>
        </div>

        <div className="flex justify-center gap-6 py-1" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="h-6 w-px bg-gradient-to-b from-purple/50 to-transparent" />
          ))}
        </div>

        <p className="mb-3 text-center kicker text-muted">The tools and data you already use</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {SOURCES.map((sname) => (
            <span key={sname} className="rounded-xl border border-hairline bg-stone px-4 py-2 text-sm font-medium text-slate">
              {sname}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="kicker shrink-0 text-muted">Depth of connection</span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple/30 via-pink/40 to-orange/70" aria-hidden />
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {LEVELS.map((l, i) => (
            <div key={l.title} className="flex items-center gap-2 rounded-full border border-hairline bg-paper px-4 py-2">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c"][i] }} aria-hidden />
              <span className="text-sm font-semibold text-ink">{l.title}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <RevealStagger className="mt-6 grid gap-5 md:grid-cols-3">
        {LEVELS.map((l, i) => (
          <RevealItem key={l.title} className="rounded-[20px] border border-hairline bg-paper p-6 shadow-[var(--lift-light)]">
            <span className="block h-3 w-3 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c"][i] }} aria-hidden />
            <h3 className="mt-5 text-xl text-ink">{l.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{l.body}</p>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
          The more connected the picture becomes, the more Looped can understand, recommend and act on.
        </p>
      </Reveal>
    </Panel>
  );
}
