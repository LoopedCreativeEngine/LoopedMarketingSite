"use client";

import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** The user journey, not the engine. What it feels like to work with Looped. */
const STEPS = [
  {
    n: "01",
    title: "Tell Looped what you know",
    body: "Connect what you have, upload it, type it or say it. There is no long setup and no single starting point. Looped begins from wherever your event already is.",
  },
  {
    n: "02",
    title: "Looped builds the current picture",
    body: "It brings together your event, your audience, your market and what your team has done, into one live view that stays current as things change.",
  },
  {
    n: "03",
    title: "Looped shows what matters",
    body: "The risks, opportunities and changes worth your attention surface on their own, each with the evidence behind it, so you are not hunting through dashboards to find them.",
  },
  {
    n: "04",
    title: "You explore and decide",
    body: "Ask why. Probe deeper. Compare routes. Adjust the plan. Then approve or reject. The judgement stays with your team, and nothing consequential happens until you decide.",
  },
  {
    n: "05",
    title: "Looped does the work",
    body: "Once you approve, Looped carries the chosen move into the real work: campaigns, personalised outreach, call lists, commercial actions or programme and event tasks.",
  },
  {
    n: "06",
    title: "Looped tracks the result",
    body: "It measures what actually changed and keeps the outcome connected to the decision, so the next call is better informed than the last.",
  },
  {
    n: "07",
    title: "The picture compounds",
    body: "What works carries forward: across editions, across a brand, across the portfolio and across the organisation. Every event starts better informed than the one before.",
  },
];

function InputMoment(): React.ReactElement {
  return (
    <div className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)] sm:p-8">
      <p className="kicker text-muted">Tell Looped what changed</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {["Connect what you have", "Upload", "Type", "Say it"].map((c) => (
          <span key={c} className="rounded-full border border-hairline bg-stone px-4 py-2 text-sm font-medium text-slate">
            {c}
          </span>
        ))}
      </div>
      <p className="mt-5 rounded-xl border border-hairline bg-stone px-4 py-3 text-sm text-ink">
        &ldquo;Our keynote just dropped out and registrations in the senior segment have stalled.&rdquo;
      </p>
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
          Shift two campaign slots to the senior segment and lead with the new headline session. Here is the evidence
          behind it.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Ask why", "Probe deeper", "Compare routes", "Adjust", "Approve", "Reject"].map((a) => (
            <span key={a} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-snow">
              {a}
            </span>
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

function visualFor(n: string): React.ReactElement | null {
  if (n === "01") return <InputMoment />;
  if (n === "04") return <DecisionMoment />;
  if (n === "05") return <ExecutionMoment />;
  return null;
}

export default function HowItWorksPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">How it works</p>
          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            What it feels like to work with Looped.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            No transformation programme and no blank prompt. You tell Looped what you know, it builds the current
            picture, and it shows you what matters. You decide, Looped does the work, and the picture gets sharper every
            edition.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {STEPS.map((step) => {
            const visual = visualFor(step.n);
            return (
              <Reveal key={step.n} className="grid gap-6 border-t border-hairline pt-8 lg:grid-cols-12 lg:gap-10">
                <div className={visual ? "lg:col-span-5" : "lg:col-span-7"}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm text-purple">{step.n}</span>
                    <h2 className="text-2xl text-ink sm:text-[1.6rem]">{step.title}</h2>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate">{step.body}</p>
                </div>
                {visual ? <div className="lg:col-span-7">{visual}</div> : null}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 border-t border-hairline pt-10 text-center">
          <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
            You bring the judgement. Looped brings the connected picture and the follow-through.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo">Join the waitlist</CtaButton>
            <CtaButton href="/#what-it-does" variant="secondary">
              See Looped in action
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
