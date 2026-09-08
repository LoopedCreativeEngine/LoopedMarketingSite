"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/cn";

/* One card family for every product visual: same radius, border, shadow, padding, label. */
const CARD = "rounded-2xl border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-6";
const CARD_DARK = "on-night rounded-2xl border border-white/10 bg-night p-5 shadow-[var(--lift-ink)] sm:p-6";
const LABEL = "kicker text-muted";
const LABEL_DARK = "kicker text-lavender";

function InputMoment(): React.ReactElement {
  return (
    <div className={CARD}>
      <p className={LABEL}>Tell Looped what changed</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Connect your systems", "Upload", "Type", "Say it"].map((c) => (
          <span key={c} className="rounded-full border border-hairline bg-stone px-3.5 py-1.5 text-sm font-medium text-slate">{c}</span>
        ))}
      </div>
      <p className="mt-4 rounded-xl border border-hairline bg-stone px-4 py-3 text-sm leading-relaxed text-ink">
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
    <div className={CARD}>
      <p className={LABEL}>What matters this week</p>
      <ul className="mt-4 space-y-3">
        {SURFACED.map((line, i) => (
          <li key={line} className="flex items-start gap-3 border-t border-hairline pt-3 text-sm leading-relaxed text-ink">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c"][i] }} aria-hidden />
            {line}
          </li>
        ))}
      </ul>
      <p className={cn("mt-4", LABEL)}>Each arrives with the evidence behind it</p>
    </div>
  );
}

function DecisionMoment(): React.ReactElement {
  return (
    <div className={CARD_DARK}>
      <p className="self-end rounded-2xl rounded-br-md border border-white/10 bg-night-raised px-4 py-3 text-sm text-snow">
        What should we do about the senior segment?
      </p>
      <div className="mt-4 rounded-2xl rounded-bl-md border border-pink/40 bg-[rgba(167,139,219,0.08)] p-4">
        <p className={LABEL_DARK}>Looped recommends</p>
        <p className="mt-2 text-sm leading-relaxed text-snow">
          Shift two campaign slots to the senior segment and lead with the new headline session. Here is the evidence behind it.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Ask why", "Probe deeper", "Compare routes", "Adjust", "Approve", "Reject"].map((a) => (
            <span key={a} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-snow">{a}</span>
          ))}
        </div>
      </div>
      <p className={cn("mt-4", LABEL_DARK)}>Consequential actions wait for your approval</p>
    </div>
  );
}

const FLOW = ["Approved", "Looped acts", "Verified", "Learned"];
function ExecutionMoment(): React.ReactElement {
  return (
    <div className={CARD}>
      <p className={LABEL}>From approval to verified outcome</p>
      <ol className="mt-4 flex flex-wrap items-center gap-2.5">
        {FLOW.map((step, i) => (
          <li key={step} className="flex items-center gap-2.5">
            <span className="rounded-full border border-hairline bg-stone px-3.5 py-1.5 text-sm font-semibold text-ink">{step}</span>
            {i < FLOW.length - 1 ? <span className="text-purple" aria-hidden>&rarr;</span> : null}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm leading-relaxed text-slate">What actually happened becomes part of the next decision.</p>
    </div>
  );
}

const HERO_ASKS = ["What should I be worried about right now?", "Where is the £26k of sponsorship hiding?", "Who are the 74 to call first?"];
function HeroAsk(): React.ReactElement {
  return (
    <div className={CARD_DARK}>
      <p className={LABEL_DARK}>Ask Looped</p>
      <div className="mt-4 flex items-center justify-between rounded-xl border border-white/15 bg-night-raised px-4 py-3">
        <span className="text-sm text-mist">Ask anything about your event business</span>
        <span className="rounded-full bg-grad px-3 py-1 text-xs font-semibold text-white">Ask</span>
      </div>
      <div className="mt-4 space-y-2">
        {HERO_ASKS.map((q) => (
          <p key={q} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-snow">{q}</p>
        ))}
      </div>
      <p className={cn("mt-4", LABEL_DARK)}>Answers arrive with the evidence, and consequential actions wait for you</p>
    </div>
  );
}

/**
 * The same seven steps, entered from the participant's side. Context, then a
 * recommendation, then a decision, then only authorised action, then
 * verification, then learning that stays with the event.
 */
const PARTICIPANT_JOURNEY = [
  { label: "Context", body: "An entrant comes back to an unfinished entry, two days out. Looped already knows who they are, which category they are entering and what is still incomplete." },
  { label: "Recommendation", body: "It tells them what is missing and what the published requirement is actually asking for, then takes them to the right place to finish it." },
  { label: "Decision", body: "What to write, and whether to enter at all, stays with them. Looped never drafts the entry and never makes the call to submit." },
  { label: "Authorised action", body: "It guides them back into the journey and sends the reminders the organiser has approved, in the organiser's own words." },
  { label: "Verification", body: "It checks whether the missing information was actually completed. A reminder that was sent is not an entry that was finished." },
  { label: "Learning", body: "If the same requirement trips up entrant after entrant, that becomes a signal for the organiser now and better guidance next edition." },
];

type Step = { title: string; body: string };
type Chapter = { title: string; tone: "paper" | "stone" | "night"; side: "left" | "right" | "none"; steps: Step[]; visuals: React.ReactElement[] };

const CHAPTERS: Chapter[] = [
  {
    title: "Bring Looped up to speed",
    tone: "paper",
    side: "right",
    steps: [{ title: "Connect what you already have", body: "Bring together the event data, the historical performance and the systems your teams already work in. Connect them, upload what you have, type it or say it. There is no long setup and no single starting point: Looped begins from wherever your event already is." }],
    visuals: [<InputMoment key="i" />],
  },
  {
    title: "See what matters",
    tone: "stone",
    side: "left",
    steps: [
      { title: "Looped builds the picture", body: "Your event, your audience and performance, the market around you and what your teams have learned, held as one live view that stays current as things change." },
      { title: "It shows you what matters", body: "Opportunities, risks, exceptions and shortfalls surface on their own, each with the evidence behind it, so you are not hunting through dashboards to find them." },
    ],
    visuals: [<IntelligenceMoment key="i" />],
  },
  {
    title: "You decide, Looped moves",
    tone: "paper",
    side: "right",
    steps: [
      { title: "You explore and decide", body: "Ask why. Inspect the reasoning and the evidence. Compare routes. Change the recommendation. Then approve or decline. Work inside rules you have already set can run; where judgement matters, the call stays with your team." },
      { title: "Looped does the work", body: "Once authorised, Looped carries the action across the systems you already use, through a direct connection where one exists or, where that is the better route, through the software itself. Same workflow and same approvals either way." },
    ],
    visuals: [<DecisionMoment key="d" />, <ExecutionMoment key="e" />],
  },
  {
    title: "Verify, then learn",
    tone: "night",
    side: "none",
    steps: [
      { title: "It verifies the outcome", body: "Looped checks the destination and records what actually happened there. A request that was sent is not treated as a result, and anything it cannot confirm comes back as an exception rather than quietly closing." },
      { title: "The learning stays", body: "The outcome stays with the event, sharpens the next action, and carries into the next edition and the wider portfolio picture. Every event starts better informed than the one before." },
    ],
    visuals: [],
  },
];

function ChapterBlock({ ch }: { ch: Chapter }): React.ReactElement {
  const night = ch.tone === "night";
  const textCol = (
    <div className={cn(ch.side === "none" ? "max-w-3xl" : "lg:col-span-5")}>
      <h2 className="text-balance display-section">{ch.title}</h2>
      <div className="mt-6 space-y-6">
        {ch.steps.map((s) => (
          <div key={s.title}>
            <h3 className={cn("text-lg font-semibold", night ? "text-snow" : "text-ink")}>{s.title}</h3>
            <p className={cn("mt-2 text-base leading-relaxed", night ? "text-mist" : "text-slate")}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
  if (ch.side === "none") {
    return (
      <Panel tone={ch.tone}>
        <Reveal>{textCol}</Reveal>
      </Panel>
    );
  }
  const visualCol = (
    <div className="space-y-4 lg:col-span-7">
      {ch.visuals.map((v) => v)}
    </div>
  );
  return (
    <Panel tone={ch.tone}>
      <Reveal className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {ch.side === "left" ? (
          <>
            {visualCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {visualCol}
          </>
        )}
      </Reveal>
    </Panel>
  );
}

export default function HowItWorksPage(): React.ReactElement {
  return (
    <div className="bg-paper pt-28 sm:pt-32">
      {/* hero */}
      <div className="mx-auto max-w-6xl px-5 pb-6 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="kicker text-purple">How it works</p>
            <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-6xl">
              What it feels like to work with Looped.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              No transformation programme and no blank prompt. You connect what you already have, Looped builds the
              current picture and shows you what matters. You decide, Looped carries the work through your systems and
              verifies what happened, and the picture gets sharper every edition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CtaButton href="/waitlist" full>Join the waitlist</CtaButton>
              <CtaButton href="/demo" variant="secondary" full>See Looped in action</CtaButton>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <HeroAsk />
          </Reveal>
        </div>
      </div>

      {CHAPTERS.map((ch) => (
        <ChapterBlock key={ch.title} ch={ch} />
      ))}

      {/* the same model, entered from the participant's side */}
      <Panel tone="paper" kicker="The same steps, from the other side">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">It works the same way for the people around your event.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              An entrant, a sponsor, a speaker or an attendee never sees a workflow. They ask a question or hit a
              problem. Underneath, it is the same model: what Looped understands about them, what it recommends, what
              you have authorised, what it then does, whether it actually worked, and what your event learns from it.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARTICIPANT_JOURNEY.map((j, i) => (
            <Reveal key={j.label} delay={(i % 3) * 0.05} className={CARD}>
              <p className="flex items-center gap-2.5 kicker text-muted">
                <span className="font-mono text-xs text-purple">0{i + 1}</span>
                {j.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{j.body}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* close */}
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
            You bring the judgement. <span className="text-grad">Looped brings the connected picture, the follow-through and the proof.</span>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/waitlist">Join the waitlist</CtaButton>
            <CtaButton href="/demo" variant="secondary">See Looped in action</CtaButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
