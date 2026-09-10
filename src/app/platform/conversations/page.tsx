import type { Metadata } from "next";

import { ConversationSignalsFigure } from "@/components/brand/ConversationSignalsFigure";
import { RelationshipStateFigure } from "@/components/brand/RelationshipStateFigure";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "AI event concierge and conversations",
  description:
    "Looped answers your entrants, sponsors, speakers, judges and attendees in the context you authorise, and what it will not do is as deliberate as what it will.",
  alternates: { canonical: "/platform/conversations" },
  openGraph: {
    url: "/platform/conversations",
    title: "AI event concierge and conversations",
    description:
      "The same intelligence, met from the other side: entrants, sponsors, speakers, judges and attendees, inside the boundaries you set.",
  },
};

type Surface = { who: string; situation: string; body: string; boundary?: string };

const SURFACES: Surface[] = [
  {
    who: "Entrant",
    situation: "An entrant stalls three days before the deadline.",
    body: "Looped shows what is still outstanding against your published criteria, explains what each requirement is actually asking for and points them back to the right part of the form.",
    boundary: "It never writes, rewrites or submits the entry. The work stays theirs.",
  },
  {
    who: "Prospective entrant",
    situation: "Someone is not sure they belong in your awards at all.",
    body: "A consent-gated matcher on your own site reads what their organisation does and shows which categories genuinely fit, with the reasoning in plain sight rather than a score to take on trust.",
  },
  {
    who: "Sponsor",
    situation: "A partner still has deliverables outstanding.",
    body: "Looped knows what they are entitled to, what has landed and what is missing. It asks for exactly what is needed, by when, and keeps asking until the evidence says it is done.",
  },
  {
    who: "Speaker",
    situation: "A speaker has confirmed, but nothing has arrived.",
    body: "Bio, headshot, session title, slides, travel. Looped knows what is outstanding for this speaker on this event, asks for the right thing at the right moment, and tells the programme team the moment it lands.",
  },
  {
    who: "Judge",
    situation: "Judging is a fortnight away and one panel is short.",
    body: "Looped answers the process questions, raises a conflict of interest before it becomes a problem, and chases what is outstanding so your team is not doing it by hand.",
    boundary: "It has no part in how an award is judged, and no influence on a score.",
  },
  {
    who: "Attendee",
    situation: "An attendee wants to get more out of the day.",
    body: "Working from the programme and the ticket they hold, Looped points them to the sessions worth their time and tells an authorised guest where they are sitting.",
  },
  {
    who: "Finalist and winner",
    situation: "A finalist has not made anything of their shortlisting.",
    body: "Looped offers them the next promotional step in the words you have already signed off, so recognition turns into reach for them and for the event.",
  },
  {
    who: "Your own team",
    situation: "Someone needs an answer, not a report.",
    body: "Ask about an event, a brand or the whole portfolio and get an answer from current context, with the evidence open to inspect and the next move ready to authorise.",
  },
];

const BOUNDARIES = [
  {
    title: "It answers from what you have approved",
    body: "Your team decides what Looped knows and what it may say. When a question falls outside that, it says so instead of inventing something confident.",
  },
  {
    title: "It hands over to a person",
    body: "A commitment, a price, a complaint or a judgement call goes to someone on your team with the context attached, not back to the start of a queue.",
  },
  {
    title: "It does not commit on your behalf",
    body: "No money committed, no terms accepted, no marketing preference changed. Consequential decisions stay with people, as they do everywhere else in Looped.",
  },
  {
    title: "It knows what you have already asked of them",
    body: "Support does not land on top of three campaign messages, because the same picture governs both.",
  },
];

export default function ConversationsPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Conversations"
        title="Every conversation starts with what Looped already knows."
        lead="Looped is not only a system your team logs into. It can answer the entrant, the sponsor, the speaker, the judge and the attendee too, and it opens each one already knowing who they are to you."
        support="Nobody has to explain themselves twice, and nobody gets an answer your team would not have given."
      />

      {/* one person, several relationships */}
      <Panel tone="stone" kicker="Context">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">One person is often four relationships.</h2>
          </Reveal>
          <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              The same person may have spoken at your conference two years ago, sit on a sponsoring account, be halfway
              through an awards entry and hold a ticket for a sister event. Most systems see four unrelated records and
              speak to them four different ways.
            </p>
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Looped keeps it as one relationship, and opens on whichever part of it is live today.{" "}
              <span className="font-semibold text-ink">
                That is the difference between a bot and someone who already knows you.
              </span>
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12 rounded-[20px] border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-8">
          <RelationshipStateFigure />
        </Reveal>
      </Panel>

      {/* who it answers */}
      <Panel tone="paper" kicker="Who Looped answers">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">The same engine, met from the other side.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Not a collection of separate bots with separate scripts. One intelligence, showing a different face to each
              person depending on who they are, where they are in the event and what you have allowed.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SURFACES.map((s) => (
            <Reveal key={s.who} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)]">
              <p className="flex items-center gap-2.5 kicker text-muted">
                <span className="h-2 w-2 rounded-full bg-grad-dot" aria-hidden />
                {s.who}
              </p>
              <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{s.situation}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{s.body}</p>
              {s.boundary ? (
                <p className="mt-3 border-t border-hairline pt-3 text-sm leading-relaxed text-muted">{s.boundary}</p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* boundaries, on the night plate */}
      <Panel tone="night" kicker="Boundaries">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">What it will not do, on purpose.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              The value of an AI conversation in this industry is not how much it can say. It is whether the person on
              the other end can trust the answer, and whether you would be happy to see it quoted back to you.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {BOUNDARIES.map((b) => (
            <Reveal key={b.title}>
              <div className="border-t border-white/10 py-6">
                <h3 className="font-serif text-xl text-snow">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="max-w-3xl font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
            A concierge that guesses is worse than no concierge at all.
          </p>
        </Reveal>
      </Panel>

      {/* what it leaves behind */}
      <Panel tone="paper" kicker="What it leaves behind">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">A good answer helps one person. The signal helps the event.</h2>
          </Reveal>
          <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              What someone asked for, where they got stuck and what they were really after should not vanish into a
              transcript nobody reads. Looped turns the useful part of an exchange into signals your campaign, your
              programme and your commercial team can act on.
            </p>
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              A question asked before anyone books is a conversion signal. A question asked twice is a gap in your
              content. A question nobody can answer is worth fixing before the next hundred people hit it.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12 rounded-[20px] border border-hairline bg-stone p-5 shadow-[var(--lift-light)] sm:p-8">
          <ConversationSignalsFigure />
        </Reveal>
      </Panel>

      <PageClosing
        line="The conversation your audience has with Looped is the one your team would have had, if they had the hours."
        continueLinks={[
          {
            href: "/platform/communications",
            label: "Communications",
            blurb: "Where a conversation becomes part of one journey across email, messaging and voice.",
          },
          {
            href: "/platform/data",
            label: "Data and systems",
            blurb: "Where the context comes from, and the rules that decide what may be used.",
          },
        ]}
      />
    </div>
  );
}
