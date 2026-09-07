"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

/** How Looped connects: deep, selective, or start with what you have. No stack replacement, no architecture. */
const LEVELS = [
  { title: "Connect deeply", body: "Bring registrations, CRM, campaign, programme and commercial data together continuously." },
  { title: "Connect selectively", body: "Start with the systems that matter most, then add more when it makes sense." },
  { title: "Start with what you have", body: "Use spreadsheets, exports and team updates first, with deeper integrations added over time." },
];

export function ConnectivitySection(): React.ReactElement {
  return (
    <Panel tone="stone" index="04" kicker="Connectivity">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Works with the stack you already have.</h2>
        </Reveal>
        <Reveal className="lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Looped sits across your existing event technology and can work at different levels of connection.
          </p>
        </Reveal>
      </div>

      <RevealStagger className="mt-12 grid gap-5 md:grid-cols-3">
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
