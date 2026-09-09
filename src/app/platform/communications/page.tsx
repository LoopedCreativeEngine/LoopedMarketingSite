import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";
import { AvailabilityNote, StatusPill, type Availability } from "@/components/ui/StatusPill";

export const metadata: Metadata = {
  title: "Event communications: WhatsApp, SMS, RCS and email",
  description:
    "One journey per person across email, messaging and voice, with contact pressure, eligibility and outcome held together, not split across four tools.",
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
    event: "Programme announcement opened, nothing clicked",
    consequence: "Interest noted. Not enough to act on by itself.",
  },
  {
    channel: "RCS",
    event: "Session line-up sent as a rich card",
    consequence: "Delivered to a channel they actually read, with the programme visible in the message.",
  },
  {
    channel: "WhatsApp",
    event: "They reply asking about day two",
    consequence: "A real signal, and a specific one. The reply reaches the team that owns it.",
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
    consequence: "The registration reconciles back against the campaign and the call.",
  },
  {
    channel: "Next edition",
    event: "Carried forward as a known attendee",
    consequence: "Their channel, their interests and their history start the next journey.",
  },
];

const CHANNELS: { name: string; useFor: string; detail: string; status: Availability }[] = [
  {
    name: "Email",
    useFor: "Depth and formality",
    detail:
      "Runs through your existing sending account and sender reputation, driven by the approved plan rather than rebuilt in a separate tool.",
    status: "live",
  },
  {
    name: "WhatsApp",
    useFor: "Conversation and reply",
    detail:
      "For the audiences who will answer a message but never an email, and where the reply is the point rather than a click.",
    status: "soon",
  },
  {
    name: "SMS",
    useFor: "Urgency and reach",
    detail: "Deadline reminders, day-before logistics and the messages that simply have to arrive.",
    status: "soon",
  },
  {
    name: "RCS",
    useFor: "Rich, branded messaging",
    detail:
      "Programme cards, speaker reveals and finalist announcements delivered with the artwork attached, from a verified sender.",
    status: "soon",
  },
  {
    name: "Voice and telesales",
    useFor: "The conversation that closes",
    detail:
      "Human callers and AI voice working the same prioritised list from the same context, on your own calling account with a spend ceiling per event.",
    status: "pilot",
  },
];

const DISCIPLINE = [
  {
    title: "Contact pressure",
    body: "How much your organisation has already asked of someone this month, across every event and channel, before anyone asks again.",
  },
  {
    title: "Brand-level coordination",
    body: "Communication is planned at the level of your brand, not per campaign, so two events in the same portfolio stop competing for the same inbox.",
  },
  {
    title: "Eligibility at the point of sending",
    body: "Consent, preference and suppression are checked when the message goes, not reconciled afterwards. Seeing a contact is not the same as being allowed to message them.",
  },
  {
    title: "Sequenced around the person",
    body: "Channels are ordered by what that individual actually responds to, rather than by what is cheapest to send.",
  },
  {
    title: "Measured on outcome",
    body: "Registrations, revenue and conversations, not opens. A campaign that was opened and ignored has not worked.",
  },
  {
    title: "Verified, not assumed",
    body: "Looped checks what arrived at the destination. An attempted send is never quietly counted as a success.",
  },
];

export default function CommunicationsPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Communications"
        title="One journey across every channel."
        lede="Your audience does not experience an email campaign, a messaging campaign and a call list. They experience your brand, repeatedly, in whatever order it arrives."
        support="Looped runs it as one journey per person rather than five campaigns per team, so a reply in one channel changes what happens in the next."
      />

      {/* the journey */}
      <Panel tone="stone" kicker="One journey">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance display-section">What a single relationship actually looks like.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            Six touches, four channels, two teams. In most organisations these live in different systems and nobody
            reconciles them. Here, each one changes what happens next.
          </p>
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-purple/20 lg:hidden" aria-hidden />
          <div className="absolute left-0 right-0 top-[11px] hidden h-px bg-purple/20 lg:block" aria-hidden />
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {JOURNEY.map((stop) => (
              <li key={stop.channel} className="relative flex gap-4 lg:block">
                <span
                  className="mt-1 h-[23px] w-[23px] shrink-0 rounded-full border border-purple/40 bg-paper lg:mt-0"
                  aria-hidden
                />
                <div
                  className={
                    stop.pivot
                      ? "flex-1 rounded-2xl border border-purple/35 bg-purple/[0.05] p-4 lg:mt-4"
                      : "flex-1 rounded-2xl border border-hairline bg-paper p-4 shadow-[var(--lift-light)] lg:mt-4"
                  }
                >
                  <p className="kicker text-purple">{stop.channel}</p>
                  <p className="mt-2.5 text-sm font-semibold leading-snug text-ink">{stop.event}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate">{stop.consequence}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-8 rounded-2xl border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-6">
          <p className="flex items-center gap-2.5 kicker text-muted">
            <span className="h-2 w-2 rounded-full bg-grad-dot" aria-hidden />
            Outcome
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate">
            One person, one journey. The reply changed the call list, the call closed the registration, and the
            registration reconciled back against both. Nobody had to join those dots by hand.
          </p>
        </Reveal>
      </Panel>

      {/* channels */}
      <Panel tone="paper" kicker="Channels">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance display-section">The channels your audience actually uses.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            Each one does something the others cannot. The point is not to be on all of them. It is that they behave as
            one conversation when you are.
          </p>
        </Reveal>
        <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
          {CHANNELS.map((c) => (
            <li key={c.name} className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline md:gap-6">
              <div className="flex items-center gap-3 md:col-span-3">
                <h3 className="font-serif text-xl text-ink">{c.name}</h3>
                <StatusPill status={c.status} />
              </div>
              <p className="text-sm font-semibold text-muted md:col-span-3">{c.useFor}</p>
              <p className="text-sm leading-relaxed text-slate md:col-span-6">{c.detail}</p>
            </li>
          ))}
        </ul>
        <Reveal className="mt-8">
          <AvailabilityNote className="max-w-3xl" />
        </Reveal>
      </Panel>

      {/* connected to what you own */}
      <Panel tone="night" kicker="How it runs">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">Connected to what you already own.</h2>
          </Reveal>
          <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              Looped is not another sending platform to migrate to. It connects to the accounts, numbers and providers
              you already run, and coordinates them. Your sender reputation stays yours. Your contracts stay yours.
            </p>
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              Approved work is carried into those systems through a direct connection where one exists, and through the
              software itself where that is the better route. To your team it is one Looped workflow either way, with
              the same approvals and the same record of what actually happened.
            </p>
          </Reveal>
        </div>
      </Panel>

      {/* the discipline */}
      <Panel tone="stone" kicker="The part most tools skip">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance display-section">Anyone can send more messages.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            The difficult, valuable work is knowing when not to, who is genuinely eligible, and whether any of it made a
            difference.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINE.map((d) => (
            <Reveal key={d.title} className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)]">
              <h3 className="font-serif text-lg text-ink">{d.title}</h3>
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
            blurb: "The assets that fill these messages, produced per name rather than per template.",
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
