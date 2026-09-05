"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

const CYCLE = ["Brief", "Programme", "Campaign", "Sales", "Live", "Wrap-up"];

const WAYS = [
  { title: "Connect deeply", body: "Registrations, CRM, campaign analytics and programme data feeding the picture continuously." },
  { title: "Connect selectively", body: "One or two systems that matter most for this event, with the rest added when it makes sense." },
  { title: "Begin with what you have", body: "Spreadsheets, exports and the knowledge in your team's heads. Looped builds the first picture from that." },
];

export function StartAnywhereSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="03" kicker="Start anywhere">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Start at the beginning of the cycle, or start where the event is today.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Looped does not need a transformation programme before it is useful. Bring it in at the brief and it shapes
            the whole edition. Bring it in eight weeks out and it starts from where you are: what has been decided,
            what is booked, what the market has done since.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Connect deeply, connect selectively, or begin with the data you already have. The picture gets richer as
            more of the event flows through it.
          </p>
        </Reveal>
      </div>

      {/* the cycle: join at any point */}
      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-stone p-6 sm:p-8">
        <p className="kicker text-muted">Join the cycle at any point</p>
        <div className="relative mt-6">
          <div className="absolute left-0 right-0 top-[9px] h-px bg-hairline" aria-hidden />
          <div className="absolute left-0 top-[9px] h-px w-full overflow-hidden" aria-hidden>
            <div className="cycle-runner h-px w-1/3 bg-grad" />
          </div>
          <ol className="relative grid grid-cols-3 gap-y-6 sm:grid-cols-6">
            {CYCLE.map((c, i) => (
              <li key={c} className="flex flex-col items-start gap-3 sm:items-center">
                <span className={`h-[18px] w-[18px] rounded-full border-2 bg-paper ${i === 0 || i === 3 ? "border-pink" : "border-hairline"}`} aria-hidden />
                <span className="text-sm font-semibold text-ink">{c}</span>
                {i === 0 ? <span className="kicker text-purple">Start here</span> : null}
                {i === 3 ? <span className="kicker text-pink">Or here</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <RevealStagger className="mt-8 grid gap-5 md:grid-cols-3">
        {WAYS.map((w, i) => (
          <RevealItem key={w.title} className="rounded-[20px] border border-hairline bg-paper p-6 shadow-[var(--lift-light)]">
            <span className="block h-3 w-3 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c"][i] }} aria-hidden />
            <h3 className="mt-5 text-xl text-ink">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{w.body}</p>
          </RevealItem>
        ))}
      </RevealStagger>
    </Panel>
  );
}
