import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Event communications: WhatsApp, SMS, RCS and email",
  description:
    "One journey per person across email, messaging and voice, with what you have already asked of them and who you may contact held in one place.",
  alternates: { canonical: "/platform/communications" },
  openGraph: {
    url: "/platform/communications",
    title: "Event communications: WhatsApp, SMS, RCS and email",
    description:
      "Your audience does not experience an email campaign and a call list. They experience your brand. Looped runs it as one journey.",
  },
};

const JOURNEY: { channel: string; event: string; consequence: string; pivot?: boolean }[] = [
  {
    channel: "Email",
    event: "Opens the programme announcement, clicks nothing",
    consequence: "Worth noting. Not worth acting on yet.",
  },
  {
    channel: "RCS",
    event: "Gets the session line-up as a rich card",
    consequence: "Lands on a channel they actually read, with the programme visible in the message.",
  },
  {
    channel: "WhatsApp",
    event: "Replies asking about day two",
    consequence: "A real signal, and a specific one. It reaches the team that owns the answer.",
    pivot: true,
  },
  {
    channel: "Telesales",
    event: "Moves to the top of tomorrow's call list",
    consequence: "The caller opens with the day-two question already in front of them.",
  },
  {
    channel: "Outcome",
    event: "Registers, and books two colleagues",
    consequence: "The booking is matched back to the campaign and the call that produced it.",
  },
  {
    channel: "Next edition",
    event: "Starts as someone you already know",
    consequence: "Their channel, their interests and their history are the starting point.",
  },
];

const CHANNELS = [
  {
    name: "Email",
    useFor: "Depth and detail",
    detail:
      "Sent from your own account and your own sender reputation, sequenced from the plan your team approved rather than rebuilt in a separate tool.",
  },
  {
    name: "WhatsApp",
    useFor: "Conversation and reply",
    detail:
      "For the people who will answer a message but never an email, and for the moments when the reply is the whole point.",
  },
  {
    name: "SMS",
    useFor: "Urgency and reach",
    detail: "Deadline reminders, day-before logistics and the messages that simply have to arrive.",
  },
  {
    name: "RCS",
    useFor: "Rich, branded messaging",
    detail:
      "Programme cards, speaker reveals and finalist announcements delivered with the artwork attached, from a verified sender.",
  },
  {
    name: "Voice",
    useFor: "The conversation that closes",
    detail:
      "Your callers and AI voice working the same list from the same context, on your own calling account and inside a spend ceiling you set.",
  },
];

const DISCIPLINE = [
  {
    title: "How much you have already asked",
    body: "Looped knows what your organisation has sent this person this month, across every event and channel, before anyone asks them for anything else.",
  },
  {
    title: "Coordinated across the brand",
    body: "Communication is planned at brand level, not per campaign, so two of your events stop competing for the same inbox.",
  },
  {
    title: "Eligibility checked when it matters",
    body: "Consent, preference and suppression are applied at the moment of sending, per channel. Being able to see a contact is not the same as being allowed to message them.",
  },
  {
    title: "Ordered around the person",
    body: "Channels follow what this individual actually responds to, not what is cheapest to send.",
  },
  {
    title: "Measured on what happened",
    body: "Registrations, revenue and conversations, not opens. A campaign that was opened and ignored has not worked.",
  },
  {
    title: "Confirmed, not assumed",
    body: "Looped checks the message arrived. A send that failed quietly is never counted as a success.",
  },
];

export default function CommunicationsPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Communications"
        title="One journey across every channel."
        lead="Your audience does not experience an email campaign, a messaging campaign and a call list. They experience your brand, over and over, in whatever order it reaches them."
        support="Looped runs it as one journey per person, so a reply on one channel changes what happens on the next."
      />

      {/* the journey */}
      <Panel tone="stone" kicker="One journey">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">What one relationship actually looks like.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Six touches, four channels, two teams. In most organisations these sit in different systems and nobody
              joins them up. Here, each one changes what happens next.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-hairline lg:hidden" aria-hidden />
          <svg
            className="absolute left-0 right-0 top-[11px] hidden h-px w-full lg:block"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line x1="0" y1="1" x2="1000" y2="1" stroke="#ece9e4" strokeWidth="2" />
            <line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="#ec4899"
              strokeWidth="2"
              className="signal-flow signal-flow-slow"
            />
          </svg>
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {JOURNEY.map((stop) => (
              <li key={stop.channel} className="relative flex gap-4 lg:block">
                <span
                  className={
                    stop.pivot
                      ? "mt-1 h-[23px] w-[23px] shrink-0 rounded-full border-[3px] border-pink bg-paper lg:mt-0"
                      : "mt-1 h-[23px] w-[23px] shrink-0 rounded-full border-2 border-hairline bg-paper lg:mt-0"
                  }
                  aria-hidden
                />
                <div
                  className={
                    stop.pivot
                      ? "flex-1 rounded-2xl border border-pink/40 bg-pink/[0.04] p-4 lg:mt-4"
                      : "flex-1 rounded-2xl border border-hairline bg-paper p-4 shadow-[var(--lift-light)] lg:mt-4"
                  }
                >
                  <p className="kicker text-purple">{stop.channel}</p>
                  <h3 className="mt-2.5 font-serif text-lg leading-snug text-ink">{stop.event}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate">{stop.consequence}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-8 rounded-2xl border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-6">
          <p className="flex items-center gap-2.5 kicker text-muted">
            <span className="h-2 w-2 rounded-full bg-grad-dot" aria-hidden />
            The point
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate">
            One person, one journey. The reply changed the call list, the call closed the booking, and the booking was
            matched back to both. Nobody joined those dots by hand.
          </p>
        </Reveal>
      </Panel>

      {/* channels */}
      <Panel tone="paper" kicker="Channels">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">The channels your audience actually uses.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Each one does something the others cannot. The point is not being on all of them. It is that they behave
              as one conversation when you are.
            </p>
          </Reveal>
        </div>
        <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
          {CHANNELS.map((c) => (
            <li key={c.name} className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline md:gap-6">
              <h3 className="font-serif text-xl text-ink md:col-span-3">{c.name}</h3>
              <p className="text-sm font-semibold text-muted md:col-span-3">{c.useFor}</p>
              <p className="text-sm leading-relaxed text-slate md:col-span-6">{c.detail}</p>
            </li>
          ))}
        </ul>
      </Panel>

      {/* connected to what you own */}
      <Panel tone="night" kicker="How it runs">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">Connected to what you already own.</h2>
          </Reveal>
          <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              Looped is not another sending platform to move to. It works through the accounts, numbers and providers
              you already run.{" "}
              <span className="font-semibold text-snow">Your sender reputation stays yours. Your contracts stay yours.</span>
            </p>
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              Because Looped knows who someone is and where they are in the event, your team stops rebuilding the same
              lists every campaign. The right people receive the right thing because their situation has changed, not
              because somebody rebuilt a segment on a Friday afternoon.
            </p>
          </Reveal>
        </div>
      </Panel>

      {/* the discipline */}
      <Panel tone="stone" kicker="The part most tools skip">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">Anyone can send more messages.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              The hard part is knowing when not to, who you are actually allowed to contact, and whether any of it made
              a difference.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINE.map((d) => (
            <Reveal key={d.title} className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)]">
              <h3 className="font-serif text-xl text-ink">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{d.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="mx-auto max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
            Looped does not optimise messages. <span className="text-grad">It optimises the relationship.</span>
          </p>
        </Reveal>
      </Panel>

      <PageClosing
        line="Run one journey, not five campaigns that happen to share an audience."
        continueLinks={[
          {
            href: "/platform/creative",
            label: "Creative",
            blurb: "The assets that fill these messages, made for each name rather than from a template.",
          },
          {
            href: "/pillars/telesales",
            label: "Telesales",
            blurb: "The call list this journey feeds, and the context a caller opens with.",
          },
        ]}
      />
    </div>
  );
}
