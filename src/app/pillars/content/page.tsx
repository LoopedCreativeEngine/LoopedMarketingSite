import type { Metadata } from "next";

import { PillarPage } from "@/components/pillars/PillarPage";
import { WorkspaceBoard } from "@/components/product/WorkspaceBoard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event programme management AI: agenda and speakers",
  description:
    "AI for conference content teams: topic research, competitor programme analysis, agenda architecture, speaker discovery and one connected programme hub.",
  path: "/pillars/content",
});

export default function ContentPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Content"
      tensionStatement="From market signal to finished programme, in one connected workspace."
      seatLine="For the content lead shaping programme quality while speaker markets, buyer priorities, and story angles keep moving."
      challenges={[
        "Content teams are asked to set the event narrative early, often before the market has settled. You are balancing partner expectations, attendee demand, and editorial standards with limited time to validate what matters now.",
        "The six weeks between finalist announcement and table sales campaign can expose weak programme messaging fast. If sessions are not clearly differentiated, commercial teams struggle to sell the value story.",
        "When a speaker drops out four weeks before the event, you need replacements and session rewrites that still fit the core narrative. That is hard when core context is trapped in scattered docs and inbox threads.",
      ]}
      understands={[
        {
          title: "Market and topic research",
          body: "Live sector intelligence on trends, regulation, technology and talent, as the master context for the whole programme.",
        },
        {
          title: "Trend detection",
          body: "Themes gaining ground before they are obvious, so your agenda is early rather than accurate-in-hindsight.",
        },
        {
          title: "Competitor programme analysis",
          body: "What competing events are running, who they have booked, and how crowded each theme already is.",
        },
        {
          title: "Topic whitespace",
          body: "The subjects your audience clearly cares about that nobody in your market is programming properly.",
        },
        {
          title: "Speaker market",
          body: "Who is speaking where, how often, and whether a name still carries the draw it did two years ago.",
        },
        {
          title: "Speaker suitability",
          body: "Fit against the track, the audience and the format, rather than fit against who replied first.",
        },
        {
          title: "Content quality signals",
          body: "Which sessions and formats earned attention last time, read from ratings, sentiment and behaviour together.",
        },
        {
          title: "Attendee interest",
          body: "What your audience actually chose to attend, which is rarely identical to what they said they wanted.",
        },
        {
          title: "Topic learning across editions",
          body: "How themes have moved across your own events over several years, and what that trajectory suggests next.",
        },
      ]}
      hub={{
        heading: "The programme hub.",
        lede: "Tracks, sessions, speakers, deadlines, gaps and risks in one place, with the recommendations attached to the thing they refer to rather than sitting in a separate report.",
        visual: (
          <WorkspaceBoard
            name="Programme hub"
            tabs={["Work hub", "Tracks", "Sessions", "Speakers", "Deadlines", "Gaps", "Networking", "Risks"]}
            columns={[
              {
                label: "Tracks",
                items: [
                  { title: "Track one, balanced", meta: "Sessions complete" },
                  { title: "Track two, one slot open", meta: "Shortlist ready", accent: "focus" },
                  { title: "Track three, in draft", meta: "Narrative pending" },
                  { title: "Roundtables", meta: "Format under-used" },
                ],
              },
              {
                label: "Speakers",
                items: [
                  { title: "Confirmed and briefed", meta: "Ready" },
                  { title: "Confirmed, materials outstanding", meta: "Chased twice", accent: "focus" },
                  { title: "Invited, no response", meta: "Follow-up due" },
                  { title: "Shortlist for your call", meta: "Researched" },
                ],
              },
              {
                label: "Deadlines",
                items: [
                  { title: "Bios and headshots", meta: "Four outstanding", accent: "focus" },
                  { title: "Presentation submission", meta: "Two weeks out" },
                  { title: "Rehearsal scheduling", meta: "Not started" },
                ],
              },
              {
                label: "Needs you",
                items: [
                  { title: "Rising topic with no session", meta: "Recommendation ready", accent: "focus" },
                  { title: "Two sessions overlapping in theme", meta: "Merge suggested" },
                  { title: "Agenda clash resolved", meta: "No action", accent: "quiet" },
                ],
              },
            ]}
            footnote="When a speaker drops, the hub shows what it breaks: the session, the track balance, the campaign copy already in market, and the replacement options worth considering."
          />
        ),
        note: "An abstraction of the workspace rather than a screenshot. Items shown illustrate the kinds of thing that appear, not a real programme.",
      }}
      produces={[
        "Live sector intelligence on trends, regulation, technology and talent, as the master context for the whole event",
        "The 8 to 15 highest-signal topics, mapped against competitor programmes to find your white space",
        "Programme themes and the editorial narrative that connects sessions into one audience journey",
        "A session-by-session agenda with timing, pacing and energy-arc analysis, plus whole-day flow quality",
        "Format recommendations, including where a panel should have been a roundtable",
        "Speaker discovery and shortlisting per track, with personalised outreach and multi-touch follow-up",
        "Speaker and chair briefing packs, AV specifications and on-day runsheets",
        "Published session titles, abstracts and speaker bios for the programme and website",
        "Abstract scoring for quality, originality, bias and theme fit, with advisory-panel recommendations",
        "For awards: category strategy and judge discovery that keep entries and judging credible",
        "A post-event report synthesising scores, session ratings and sentiment into clear actions",
      ]}
      executes={[
        {
          title: "Speaker outreach",
          body: "Personalised invitations and multi-touch follow-up, so the shortlist actually gets worked rather than admired.",
        },
        {
          title: "Bio and headshot collection",
          body: "A secure link per speaker for their bio, headshot, logo and links, instead of a chain of attachments.",
        },
        {
          title: "Deadline chasing",
          body: "Presentation and material deadlines followed up automatically, escalating to a person when they slip.",
          status: "pilot",
        },
        {
          title: "Briefing and rehearsal coordination",
          body: "Briefing packs issued and rehearsal slots organised against the run of show.",
          status: "pilot",
        },
        {
          title: "Programme change management",
          body: "When something moves, the knock-on effects across sessions, campaign copy and the website are surfaced together.",
          status: "pilot",
        },
        {
          title: "Session copy publication",
          body: "Approved titles, abstracts and bios ready for the programme and the website in one pass.",
        },
        {
          title: "Networking design",
          body: "Networking treated as part of the programme, shaped by what attendees said they came for.",
          status: "soon",
        },
        {
          title: "Agenda conflict resolution",
          body: "Clashes, thin slots and theme collisions raised while the agenda can still absorb the change.",
        },
      ]}
      watches={[
        "Speaker confirmations and the materials that have not arrived",
        "Agenda balance: tracks running thin, themes doubling up, formats over-used",
        "Topics gaining ground in the market that your agenda does not yet cover",
        "Competitor programme announcements against your themes",
        "Deadlines about to slip, and who is holding them up",
        "Sessions whose description no longer matches what the speaker intends to deliver",
      ]}
      learns={[
        "Which topics earned attention, and which ones the audience politely ignored",
        "Which formats produced the strongest engagement for which audience",
        "Which speakers delivered, and which will not be invited back",
        "How theme demand has moved across editions",
        "What the feedback actually said, rather than what the average score implied",
        "The programme decisions worth repeating next year, held against the event",
      ]}
      connects="Content is fed by market and audience intelligence from marketing, and by what commercial hears partners asking for. It feeds marketing the proof points and reveal moments a campaign is built around, gives commercial the session-level evidence that makes a sponsorship conversation specific, and hands event management the programme reality that drives the run of show. When the programme changes, everyone downstream sees it without a meeting."
      explore={[
        {
          href: "/pillars/marketing",
          label: "Marketing and audience",
          blurb: "The campaign your programme is the product of, and the audience evidence behind it.",
        },
        {
          href: "/pillars/sponsorship",
          label: "Commercial",
          blurb: "How programme sessions become the specific thing a partner is buying.",
        },
        {
          href: "/pillars/event-management",
          label: "Event Management and Awards",
          blurb: "Where the agenda becomes a run of show and a set of deadlines.",
        },
        {
          href: "/agents-and-conversations",
          label: "AI conversations",
          blurb: "Speaker support, and the questions your team answers forty times a year.",
        },
      ]}
      closing={{
        title: "Build the programme your audience actually wants.",
        body: "Bring last year's agenda and its feedback. The gap between what you programmed and what people chose is usually the most useful hour of the pilot.",
      }}
    />
  );
}
