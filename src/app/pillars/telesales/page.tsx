import type { Metadata } from "next";

import { PillarPage } from "@/components/pillars/PillarPage";
import { CallQueue, type QueueRow } from "@/components/product/CallQueue";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event telesales software: call lists and AI voice",
  description:
    "AI for event telesales teams: call queues rebuilt overnight, the reason to call and the context to call with, plus AI voice on your own account.",
  path: "/pillars/telesales",
});

const QUEUE: QueueRow[] = [
  {
    account: "Account 01, manufacturing",
    reason: "Replied on WhatsApp asking about day two",
    warmedBy: "WhatsApp reply",
    bestTime: "Before 10:00",
    priority: "high",
  },
  {
    account: "Account 02, professional services",
    reason: "Attended two editions, has not booked this year",
    warmedBy: "Email opened",
    bestTime: "Early afternoon",
    priority: "high",
  },
  {
    account: "Account 03, technology",
    reason: "Started a group booking and stopped at three seats",
    warmedBy: "Abandoned booking",
    bestTime: "After 14:00",
    priority: "medium",
  },
  {
    account: "Account 04, healthcare",
    reason: "Awards entry half-finished, deadline in nine days",
    warmedBy: "RCS delivered",
    bestTime: "Late morning",
    priority: "medium",
  },
  {
    account: "Account 05, financial services",
    reason: "New contact on a lapsed account, no relationship yet",
    warmedBy: "Not yet contacted",
    bestTime: "Message first",
    priority: "watch",
  },
];

export default function TelesalesPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Telesales"
      tensionStatement="Your callers are only as good as their brief. Looped makes the brief."
      seatLine="For telesales leaders who need better call quality, clearer targeting, and less wasted dial time."
      challenges={[
        "Telesales teams often inherit campaigns with weak context. Lists are broad, scripts are generic, and objections are discovered in real time on calls instead of being prepared in advance.",
        "The week a competing event announces on your same date can derail outbound performance. Prospects raise concerns immediately, and teams need clear responses that align with marketing and commercial positioning.",
        "When conversion drops, it is hard to isolate why. Was it list quality, script quality, timing, value proposition, or all four? Most teams lose days diagnosing before they can adjust.",
      ]}
      understands={[
        {
          title: "Prospect prioritisation",
          body: "Who is worth calling today, scored on propensity, persona fit and what has actually happened since yesterday.",
        },
        {
          title: "Past-event history",
          body: "Whether this person came before, what they attended, what they paid and how they behaved afterwards.",
        },
        {
          title: "Pre-call intelligence",
          body: "The organisation, the role, the recent signals, and the one thing worth mentioning in the first thirty seconds.",
        },
        {
          title: "Call reason",
          body: "Not a name on a list. A specific reason this person is on today's queue, phrased so the caller can open with it.",
        },
        {
          title: "Objection patterns",
          body: "The objections this segment actually raises, and the responses that have been working this campaign.",
        },
        {
          title: "Preferred contact time",
          body: "When this person tends to answer, so the dial is not wasted on a diary they were never free in.",
        },
        {
          title: "Suppression and eligibility",
          body: "Who must not be called, and who your organisation has already contacted enough this month.",
        },
        {
          title: "Campaign positioning",
          body: "The same value proposition marketing and commercial are using, so nobody is improvising a different pitch.",
        },
      ]}
      hub={{
        heading: "Tomorrow's call queue, rebuilt overnight.",
        lede: "Not a static list exported on Monday and worked until Friday. A queue that reorders itself around what happened yesterday: replies, opens, abandoned bookings, deadlines closing in.",
        visual: (
          <CallQueue
            rows={QUEUE}
            footnote="Every row opens into the full context: the history, the reason, the suggested approach, the objections likely to come up, and what has already been sent to this person."
          />
        ),
        note: "Accounts shown are anonymised sector stand-ins, never real or generated companies. The queue is built from your own data.",
      }}
      produces={[
        "List segmentation by priority, persona fit and propensity, with call-volume recommendations",
        "Dynamic call lists that reorder around what changed overnight",
        "A specific call reason per prospect, rather than a generic campaign label",
        "Pre-call briefings with organisation context, past-event history and recent signals",
        "A suggested call approach per segment, including how to open and where to take it",
        "Call scripts by segment and objective: openers, objection handlers and close variations",
        "A versioned, approvable discovery-call playbook, with a whole-campaign pathway quality layer",
        "Warm-up message copy for the channels you use before dialling",
        "For awards: entry-conversion scripts, a peer-to-peer nominations drive, and gala table-sales prioritisation",
        "Call-log analysis that surfaces objection patterns, conversion bottlenecks and script gaps",
        "Performance reporting by caller, segment, script and time of day",
      ]}
      executes={[
        {
          title: "Warm before the call",
          body: "A message on the channel that person responds to, sent before the dial rather than instead of it.",
          status: "soon",
        },
        {
          title: "Queue rebuilding",
          body: "The list reordered automatically as replies, opens and deadlines change who matters most today.",
          status: "pilot",
        },
        {
          title: "AI voice agents",
          body: "Briefed from the same approved scripts, personas and segments your human callers work from, on your own voice account.",
        },
        {
          title: "Recording and outcome capture",
          body: "Every call recorded, transcribed and its outcome classified, without a rep typing notes afterwards.",
        },
        {
          title: "Human handoff",
          body: "AI voice escalating to a person with the context attached, rather than restarting the conversation.",
          status: "pilot",
        },
        {
          title: "Outbound dialling",
          body: "Off by default and enabled deliberately, on your own account, inside a spend cap you set per event.",
          status: "pilot",
        },
        {
          title: "Follow-up creation",
          body: "The next action created from the call outcome, so a promising conversation does not evaporate.",
        },
        {
          title: "Registration reconciliation",
          body: "Registrations matched back to the calls and campaigns that produced them.",
          status: "pilot",
        },
      ]}
      watches={[
        "Conversion by caller, segment, script and time of day",
        "Objections rising in frequency, which usually means the market has shifted",
        "Prospects going cold after a positive first call",
        "Deadlines closing on people who have started something and not finished",
        "Contact pressure, so telesales does not call someone the day after two campaign messages",
        "Voice spend against the cap you set",
      ]}
      learns={[
        "Which openers earned a conversation rather than a polite exit",
        "Which objections were genuinely fatal and which were just friction",
        "The times of day that actually work for each segment",
        "Which segments justify the dial time and which never did",
        "How script changes moved conversion, campaign by campaign",
        "What next year's calling plan should look like, before anyone builds a list",
      ]}
      connects="Telesales is fed by marketing's audience and messaging work and by commercial's account priorities, which is what turns a list into a queue. It feeds both back the thing only a phone call produces: what real people say when they are asked directly. Objection patterns reach marketing the same week, not in a post-event debrief, and account intelligence from a good call updates the commercial record immediately."
      explore={[
        {
          href: "/communications",
          label: "Communications",
          blurb: "The messaging that warms a prospect before anyone dials, and the reply that raises their priority.",
        },
        {
          href: "/pillars/sponsorship",
          label: "Commercial",
          blurb: "The accounts and reasons that put an organisation on the call list in the first place.",
        },
        {
          href: "/agents-and-conversations",
          label: "AI conversations",
          blurb: "Voice, handoff, and what happens when a conversation should reach a person.",
        },
        {
          href: "/how-it-works",
          label: "How Looped works",
          blurb: "The autonomy modes that decide how much of the calling operation runs on its own.",
        },
      ]}
      closing={{
        title: "Give your callers a brief worth having.",
        body: "Bring a live call list and a week of call logs. The objection patterns alone usually change what the team says on Monday.",
      }}
    />
  );
}
