import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";
import { AvailabilityNote, StatusPill, type Availability } from "@/components/ui/StatusPill";

export const metadata: Metadata = {
  title: "AI event concierge and conversations",
  description:
    "Looped can meet an entrant, a sponsor, a speaker, a judge or an attendee in the context you authorise, and what it will not do is as deliberate as what it will.",
  alternates: { canonical: "/platform/conversations" },
  openGraph: {
    url: "/platform/conversations",
    title: "AI event concierge and conversations",
    description:
      "The same intelligence, met from the other side: entrants, sponsors, speakers, judges and attendees, inside the boundaries you set.",
  },
};

type Surface = {
  who: string;
  situation: string;
  body: string;
  boundary?: string;
  status?: Availability;
};

const SURFACES: Surface[] = [
  {
    who: "Entrant",
    situation: "An entrant stalls three days before the deadline.",
    body: "Looped sees what is still outstanding against the published criteria, explains what each requirement is actually asking for and points them back to the right part of the journey.",
    boundary: "It never writes, rewrites or edits the entry, and never submits it. The work stays theirs.",
  },
  {
    who: "Prospective entrant",
    situation: "Someone is not sure they belong in your awards at all.",
    body: "A public, consent-gated matcher reads what their organisation actually does and shows which categories genuinely fit, with the reasoning shown rather than a score asserted.",
  },
  {
    who: "Sponsor or partner",
    situation: "A partner still has deliverables outstanding.",
    body: "Looped holds what they are entitled to, what has been delivered and what is missing, asks for exactly what is needed and keeps the fulfilment picture moving until the evidence says it is done.",
    status: "pilot",
  },
  {
    who: "Speaker",
    situation: "A speaker has confirmed, but nothing has arrived.",
    body: "Bio, headshot, session title, slides, travel. Looped knows what is outstanding for this speaker on this event, asks for the right thing at the right moment and tells the programme team the moment it lands.",
    status: "pilot",
  },
  {
    who: "Judge",
    situation: "Judging is a fortnight away and one panel is short.",
    body: "Looped handles the process questions, flags a conflict of interest before it becomes a problem and chases what is outstanding so the organiser is not doing it by hand.",
    boundary: "It has no part in how an award is judged, and no influence on a score.",
    status: "pilot",
  },
  {
    who: "Attendee",
    situation: "An attendee wants to get more out of the day.",
    body: "Working from the programme and the role they hold, Looped points them to the sessions worth their time and can tell an authorised guest which table they are on.",
    status: "soon",
  },
  {
    who: "Finalist and winner",
    situation: "A finalist has not activated their win.",
    body: "Looped surfaces the next approved promotional step in the words you have signed off, so recognition becomes amplification for them and reach for the event.",
  },
  {
    who: "Your own team",
    situation: "Someone needs an answer, not a report.",
    body: "Ask about an event, a brand or the portfolio and get an answer grounded in current context, with the evidence open to inspect and the next move ready to authorise.",
  },
];

const BOUNDARIES = [
  {
    title: "It answers from what you have approved",
    body: "The knowledge behind a conversation is compiled and switched on by your team. Where a question falls outside it, the honest answer comes back rather than a confident invention.",
  },
  {
    title: "It hands over to a person",
    body: "When a conversation reaches a commitment, a price, a complaint or a judgement call, it goes to a human with the context attached rather than back to the start of a queue.",
  },
  {
    title: "It does not commit on your behalf",
    body: "No money committed, no terms accepted, no marketing preference changed. Consequential decisions stay with people, as they do everywhere else in Looped.",
  },
  {
    title: "It respects what has already been asked",
    body: "A conversation knows what your brand has recently sent that person, so support does not arrive on top of three campaign messages.",
  },
];

export default function ConversationsPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Conversations"
        title="Every conversation opens with the context Looped already has."
        lede="Looped is not only a system your team logs into. The same intelligence can meet an entrant, a sponsor, a speaker, a judge or an attendee, and surface differently for each one."
        support="What it knows, what it may say and what it may do change with the role, the moment in the lifecycle and the permission you have granted. Nobody has to explain who they are to you twice."
      />

      {/* one person, several relationships */}
      <Panel tone="stone" kicker="Context">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="text-balance display-section">One person is often four relationships.</h2>
            <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
              The same individual may have spoken at your conference two years ago, sit on a sponsoring account, be
              halfway through an awards entry and hold a delegate ticket for a sister event. Most systems see four
              unrelated records and speak to them four different ways.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Looped keeps the relationship coherent. A conversation opens on whichever of those is live right now,
              without losing the rest and without asking anyone to repeat themselves.
            </p>
            <p className="mt-6 font-serif text-xl italic leading-snug text-grad sm:text-2xl">
              Context is the difference between a bot and a colleague.
            </p>
          </Reveal>
          <Reveal className="lg:order-first">
            <MediaFrame
              variant="app"
              tone="ink"
              tag="Illustrative"
              aspect="4 / 3.6"
              label="One contact, several relationships, one coherent conversation"
            >
              <div className="absolute inset-0 flex flex-col gap-3 p-5 text-sm sm:p-6">
                <p className="kicker text-mist/70">Same contact</p>
                {[
                  { role: "Spoke at your flagship conference", meta: "Two editions ago" },
                  { role: "Named contact on a sponsoring account", meta: "Renewal approaching" },
                  { role: "Entering this year's awards", meta: "Live now", current: true },
                  { role: "Delegate at a sister event", meta: "This season" },
                ].map((r) => (
                  <div
                    key={r.role}
                    className={
                      r.current
                        ? "rounded-xl border border-lavender/45 bg-lavender/[0.10] px-4 py-3"
                        : "rounded-xl border border-white/10 bg-night-raised px-4 py-3"
                    }
                  >
                    <p className="text-snow">{r.role}</p>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mist-dim">{r.meta}</p>
                  </div>
                ))}
                <p className="mt-auto kicker text-mist/80">Opens on the live relationship</p>
              </div>
            </MediaFrame>
          </Reveal>
        </div>
      </Panel>

      {/* who it meets */}
      <Panel tone="paper" kicker="Who Looped meets">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance display-section">The same engine, met from the other side.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            Not a collection of separate bots. One intelligence and action layer, expressed differently per person, role
            and permission.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SURFACES.map((s) => (
            <Reveal key={s.who} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)]">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="flex items-center gap-2.5 kicker text-muted">
                  <span className="h-2 w-2 rounded-full bg-grad-dot" aria-hidden />
                  {s.who}
                </p>
                {s.status ? <StatusPill status={s.status} /> : null}
              </div>
              <p className="mt-4 font-serif text-xl leading-snug text-ink">{s.situation}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate">{s.body}</p>
              {s.boundary ? (
                <p className="mt-3 border-t border-hairline pt-3 text-sm leading-relaxed text-muted">{s.boundary}</p>
              ) : null}
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <AvailabilityNote className="max-w-3xl" />
        </Reveal>
      </Panel>

      {/* boundaries — the night plate, because this is the important part */}
      <Panel tone="night" kicker="Boundaries">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">What it will not do, on purpose.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              The value of an AI conversation in this industry is not how much it can say. It is whether the person on
              the other end can trust what came back, and whether you would be comfortable seeing it quoted.
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
      <Panel tone="stone" kicker="What it leaves behind">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">A good answer helps one person. The signal helps the event.</h2>
          </Reveal>
          <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              What someone asked for, where they got stuck and what they were really looking for should not disappear
              into a transcript nobody reads. Looped turns the appropriate parts of an exchange into structured signals
              that reach the campaign, the programme and the commercial picture.
            </p>
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              A question asked before anyone has booked is a conversion signal. A question asked twice is a content gap.
              A question nobody can answer is a problem worth fixing before the next hundred people hit it.
            </p>
          </Reveal>
        </div>
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
            label: "Data & systems",
            blurb: "Where the context comes from, and the permission model that governs its use.",
          },
        ]}
      />
    </div>
  );
}
