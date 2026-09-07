"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/cn";

const STEPS: Record<string, { title: string; body: string }> = {
  "01": {
    title: "Tell Looped what you know",
    body: "Connect what you have, upload it, type it or say it. There is no long setup and no single starting point. Looped begins from wherever your event already is.",
  },
  "02": {
    title: "Looped builds the current picture",
    body: "It brings together your event, your audience, your market and what your team has done, into one live view that stays current as things change.",
  },
  "03": {
    title: "Looped shows what matters",
    body: "The risks, opportunities and changes worth your attention surface on their own, each with the evidence behind it, so you are not hunting through dashboards to find them.",
  },
  "04": {
    title: "You explore and decide",
    body: "Ask why. Probe deeper. Compare routes. Adjust the plan. Then approve or reject. The judgement stays with your team, and nothing consequential happens until you decide.",
  },
  "05": {
    title: "Looped does the work",
    body: "Once you approve, Looped carries the chosen move into the real work: campaigns, personalised outreach, call lists, commercial actions or programme and event tasks.",
  },
  "06": {
    title: "Looped tracks the result",
    body: "It measures what actually changed and keeps the outcome connected to the decision, so the next call is better informed than the last.",
  },
  "07": {
    title: "The picture compounds",
    body: "What works carries forward: across editions, across a brand, across the portfolio and across the organisation. Every event starts better informed than the one before.",
  },
};

const CHAPTERS = [
  { n: "01", title: "Bring Looped up to speed", tone: "paper" as const, steps: ["01"] },
  { n: "02", title: "See what matters", tone: "stone" as const, steps: ["02", "03"] },
  { n: "03", title: "You decide, Looped moves", tone: "paper" as const, steps: ["04", "05"] },
  { n: "04", title: "Learn what worked", tone: "night" as const, steps: ["06", "07"] },
];

function InputMoment(): React.ReactElement {
  return (
    <div className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)] sm:p-8">
      <p className="kicker text-muted">Tell Looped what changed</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {["Connect what you have", "Upload", "Type", "Say it"].map((c) => (
          <span key={c} className="rounded-full border border-hairline bg-stone px-4 py-2 text-sm font-medium text-slate">{c}</span>
        ))}
      </div>
      <p className="mt-5 rounded-xl border border-hairline bg-stone px-4 py-3 text-sm text-ink">
        &ldquo;Our keynote just dropped out and registrations in the senior segment have stalled.&rdquo;
      </p>
    </div>
  );
}

const SURFACED = [
  "A competitor has added a speaker your programme shortlisted.",
  "Registration pace in the senior segment has slipped against plan.",
  "A sponsor renewal conversation has gone quiet.",
];
function IntelligenceMoment(): React.ReactElement {
  return (
    <div className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)] sm:p-8">
      <p className="kicker text-muted">What matters this week</p>
      <ul className="mt-5 space-y-3">
        {SURFACED.map((line, i) => (
          <li key={line} className="flex items-start gap-3 border-t border-hairline pt-3 text-sm leading-relaxed text-ink">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c"][i] }} aria-hidden />
            {line}
          </li>
        ))}
      </ul>
      <p className="mt-4 kicker text-muted">Each arrives with the evidence behind it</p>
    </div>
  );
}

function DecisionMoment(): React.ReactElement {
  return (
    <div className="on-night rounded-2xl border border-white/10 bg-night p-6 shadow-[var(--lift-ink)] sm:p-8">
      <p className="self-end rounded-2xl rounded-br-md border border-white/10 bg-night-raised px-4 py-3 text-sm text-snow">
        What should we do about the senior segment?
      </p>
      <div className="mt-4 rounded-2xl rounded-bl-md border border-pink/40 bg-[rgba(167,139,219,0.08)] p-4">
        <p className="kicker text-lavender">Looped recommends</p>
        <p className="mt-2 text-sm leading-relaxed text-snow">
          Shift two campaign slots to the senior segment and lead with the new headline session. Here is the evidence behind it.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Ask why", "Probe deeper", "Compare routes", "Adjust", "Approve", "Reject"].map((a) => (
            <span key={a} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-snow">{a}</span>
          ))}
        </div>
      </div>
      <p className="mt-4 kicker text-mist/80">Consequential actions wait for your approval</p>
    </div>
  );
}

const FLOW = ["Approved move", "Execution", "Measured outcome", "Learning"];
function ExecutionMoment(): React.ReactElement {
  return (
    <div className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)] sm:p-8">
      <p className="kicker text-muted">From approval to measured outcome</p>
      <ol className="mt-5 flex flex-wrap items-center gap-2.5">
        {FLOW.map((step, i) => (
          <li key={step} className="flex items-center gap-2.5">
            <span className="rounded-full border border-hairline bg-stone px-4 py-2 text-sm font-semibold text-ink">{step}</span>
            {i < FLOW.length - 1 ? <span className="text-purple" aria-hidden>&rarr;</span> : null}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm leading-relaxed text-slate">What works becomes part of the next decision.</p>
    </div>
  );
}

const HERO_ASKS = ["What should I be worried about right now?", "Where is the £26k of sponsorship hiding?", "Who are the 74 to call first?"];
function HeroAsk(): React.ReactElement {
  return (
    <div className="on-night rounded-2xl border border-white/10 bg-night p-6 shadow-[var(--lift-ink)] sm:p-8">
      <p className="kicker text-lavender">Ask Looped</p>
      <div className="mt-4 flex items-center justify-between rounded-xl border border-white/15 bg-night-raised px-4 py-3">
        <span className="text-sm text-mist">Ask anything about your event business</span>
        <span className="rounded-full bg-grad px-3 py-1 text-xs font-semibold text-white">Ask</span>
      </div>
      <div className="mt-4 space-y-2">
        {HERO_ASKS.map((q) => (
          <p key={q} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-snow">{q}</p>
        ))}
      </div>
      <p className="mt-4 kicker text-mist/80">Answers arrive with the evidence, and consequential actions wait for you</p>
    </div>
  );
}

function visualFor(n: string): React.ReactElement | null {
  if (n === "01") return <InputMoment />;
  if (n === "03") return <IntelligenceMoment />;
  if (n === "04") return <DecisionMoment />;
  if (n === "05") return <ExecutionMoment />;
  return null;
}

function StepBlock({ n, night, flip }: { n: string; night: boolean; flip: boolean }): React.ReactElement {
  const step = STEPS[n];
  const visual = visualFor(n);
  return (
    <Reveal className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className={cn(visual ? "lg:col-span-5" : "lg:col-span-8", flip && visual ? "lg:order-last" : undefined)}>
        <div className="flex items-baseline gap-3">
          <span className={cn("font-mono text-sm", night ? "text-lavender" : "text-purple")}>{n}</span>
          <h3 className="text-2xl sm:text-[1.6rem]">{step.title}</h3>
        </div>
        <p className={cn("mt-4 text-base leading-relaxed", night ? "text-mist" : "text-slate")}>{step.body}</p>
      </div>
      {visual ? <div className="lg:col-span-7">{visual}</div> : null}
    </Reveal>
  );
}

export default function HowItWorksPage(): React.ReactElement {
  return (
    <div className="bg-paper pt-28 sm:pt-32">
      {/* hero */}
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="kicker text-purple">How it works</p>
            <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-6xl">
              What it feels like to work with Looped.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              No transformation programme and no blank prompt. You tell Looped what you know, it builds the current
              picture and shows you what matters. You decide, Looped does the work, and the picture gets sharper every
              edition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <CtaButton href="/demo">Join the waitlist</CtaButton>
              <CtaButton href="/#what-it-does" variant="secondary">See Looped in action</CtaButton>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <HeroAsk />
          </Reveal>
        </div>
      </div>

      {/* four chapters */}
      {CHAPTERS.map((ch) => {
        const night = ch.tone === "night";
        return (
          <Panel key={ch.n} tone={ch.tone} index={ch.n} kicker="Chapter">
            <Reveal className="max-w-3xl">
              <h2 className="text-balance display-section">{ch.title}</h2>
            </Reveal>
            <div className="mt-12 space-y-14">
              {ch.steps.map((sn, i) => (
                <StepBlock key={sn} n={sn} night={night} flip={i % 2 === 1} />
              ))}
            </div>
          </Panel>
        );
      })}

      {/* close */}
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
            You bring the judgement. <span className="text-grad">Looped brings the connected picture and the follow-through.</span>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo">Join the waitlist</CtaButton>
            <CtaButton href="/#what-it-does" variant="secondary">See Looped in action</CtaButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
