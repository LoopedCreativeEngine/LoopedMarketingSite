"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { OnwardLink } from "@/components/ui/OnwardLink";

/**
 * The same engine, met from the other side. Not a second product and not a
 * collection of bots: one intelligence and action layer, expressed differently
 * per person, role, lifecycle moment and permission. No new brand graphic here.
 */
const ROLES = [
  "Organisers",
  "Marketers",
  "Commercial teams",
  "Sponsors and partners",
  "Speakers",
  "Entrants",
  "Finalists",
  "Judges",
  "Attendees",
  "Customers",
];

const MOMENTS = [
  {
    who: "Entrant",
    situation: "An entrant stalls three days before deadline.",
    body: "Looped sees what is still outstanding against the published criteria, explains what each requirement is actually asking for, points them back to the right part of the journey and reminds them what still needs attention.",
    boundary: "It never writes, rewrites or edits the entry, and never submits it. The work stays theirs. Looped makes sure nothing is missing when they enter it.",
  },
  {
    who: "Sponsor / partner",
    situation: "A sponsor still has deliverables outstanding.",
    body: "Looped holds what the partner is entitled to, what has been delivered and what is still missing. It asks them for exactly what is needed and by when, and keeps the organiser's fulfilment picture moving until the evidence says it is done.",
  },
  {
    who: "Speaker",
    situation: "A speaker has confirmed, but nothing has arrived.",
    body: "Bio, headshot, session title, slides, travel. Looped knows what is outstanding for this speaker on this event, asks for the right thing at the right moment, and tells the programme team as soon as it lands.",
  },
  {
    who: "Attendee",
    situation: "An attendee wants to get more out of the day.",
    body: "Working from the programme, the event context and the role they hold, Looped points them to the sessions worth their time, tells an authorised guest which table they are on, and opens the introductions the organiser has approved.",
  },
  {
    who: "Finalist and winner",
    situation: "A finalist hasn't activated their win.",
    body: "Looped surfaces the next approved promotional step in the words you have signed off, and after the event it knows what each finalist and winner is entitled to, so recognition becomes amplification for them and reach for the event.",
  },
  {
    who: "Prospective buyer",
    situation: "Someone is deciding whether this event is for them.",
    body: "Looped answers from what you have published and approved, never from invention: what the event covers, who it is for, what a partnership includes. It captures consented interest and hands your team a briefed, qualified lead.",
  },
];

export function AroundTheEventSection(): React.ReactElement {
  return (
    <Panel tone="paper" kicker="Around the event">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">
            Looped doesn&rsquo;t just help your team run the event. It supports the people around it too.
          </h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            The same intelligence that tells your team what to do next also meets the people your event depends on: the
            entrant halfway through a submission, the sponsor with deliverables outstanding, the attendee trying to get
            more out of the day.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Looped knows who someone is, which organisation they belong to, the role or roles they hold on this event,
            where they are in the lifecycle and what you have authorised it to know about them. From that, and from what
            you are trying to achieve with them, it works out what they need now and what it may safely help them do
            next.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <p className="font-serif text-2xl italic leading-snug text-grad sm:text-3xl">
          One intelligence layer, many experiences.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {ROLES.map((r) => (
            <li key={r} className="rounded-full border border-hairline bg-stone px-3.5 py-1.5 text-sm font-medium text-slate">
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
          Not a collection of disconnected bots. One shared intelligence and action layer, expressed differently for each
          person and each moment, with its own knowledge, permissions, context and permitted actions in every case.
        </p>
      </Reveal>

      <RevealStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {MOMENTS.map((m) => (
          <RevealItem key={m.who} className="flex flex-col rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)] sm:p-7">
            <p className="kicker text-purple">{m.who}</p>
            <p className="mt-3 font-serif text-xl leading-snug text-ink">{m.situation}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{m.body}</p>
            {m.boundary ? (
              <p className="mt-4 border-t border-hairline pt-4 text-sm leading-relaxed text-ink">{m.boundary}</p>
            ) : null}
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
          The same authority rules apply here as everywhere else in Looped. It understands, recommends, prepares and acts
          where you have authorised it, and consequential decisions stay with people. It does not commit money, accept
          terms on anyone&rsquo;s behalf or change a person&rsquo;s marketing preferences. It has no part in how an award
          is judged. And it can tell an authorised guest where they are sitting without letting anyone rearrange the
          room, browse who else is there, or make an introduction nobody approved.
        </p>
      </Reveal>
      <Reveal className="mt-10">
        <OnwardLink href="/platform/conversations">How Looped meets each of them</OnwardLink>
      </Reveal>
    </Panel>
  );
}
