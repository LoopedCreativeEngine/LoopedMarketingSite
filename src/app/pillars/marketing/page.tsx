import type { Metadata } from "next";

import { PillarPage } from "@/components/pillars/PillarPage";
import { WorkspaceBoard } from "@/components/product/WorkspaceBoard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event marketing AI: audience and campaign growth",
  description:
    "AI for event marketing teams: audience and market intelligence, personas, campaign plans, multichannel journeys and a live read on registration pace.",
  path: "/pillars/marketing",
});

export default function MarketingPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Marketing"
      tensionStatement="Your team is briefing ChatGPT from scratch every morning. Looped ends that."
      seatLine="For the marketer trying to hit registration and revenue targets without rebuilding strategy from zero every campaign."
      challenges={[
        "Most event marketing teams spend the first weeks of every launch rebuilding context: what's changed in the market, what competitors are pushing, where audience appetite is moving, and which messages still convert. By the time that work is done, campaign windows are tighter than they should be.",
        "You also feel the handoff pain. Content, commercial, and telesales all need consistent positioning, but each team has its own deadlines and its own interpretation. That creates message drift exactly when you need clear market narrative.",
        "Then there is mid-campaign pressure. Registration velocity dips, paid channels underperform, or a competitor announces on your date. You need decisions in hours, not another week of research.",
      ]}
      understands={[
        {
          title: "Market research",
          body: "Live sector context, kept current rather than commissioned once at the start of the cycle and quietly going stale.",
        },
        {
          title: "Audience segmentation",
          body: "The addressable audience sized and segmented by function, seniority, sector and geography, from your own data outwards.",
        },
        {
          title: "Personas and ICP",
          body: "Detailed personas with the motivations, objections and content preferences that actually shape a message.",
        },
        {
          title: "Historical attendee analysis",
          body: "Your own past editions read as evidence: who came, who came back, who engaged and who never opened anything.",
        },
        {
          title: "Acquisition source intelligence",
          body: "Where your best registrations genuinely came from, rather than where the last-click report says they did.",
        },
        {
          title: "Competitor positioning",
          body: "What competing events are programming, promising and pricing, and where their message is weakest.",
        },
        {
          title: "Market penetration gaps",
          body: "The parts of your addressable market you have barely touched, sized so you can decide whether to.",
        },
        {
          title: "Lapsed and returning attendees",
          body: "The people who used to come. Usually the cheapest audience in the building, and the most often ignored.",
        },
        {
          title: "Cross-event opportunity",
          body: "Audience overlap with your other events, so one show's delegates are visible to another show's campaign.",
        },
      ]}
      hub={{
        heading: "The audience growth workspace.",
        lede: "One place holding your segments, the campaigns running against them, the journeys people are actually in, and the signals that say something needs your attention this week.",
        visual: (
          <WorkspaceBoard
            name="Audience growth workspace"
            tabs={["Work hub", "Segments", "Campaigns", "Journeys", "Signals"]}
            columns={[
              {
                label: "Segments",
                items: [
                  { title: "Core buyer segment", meta: "On pace" },
                  { title: "Senior decision-makers", meta: "Behind pace", accent: "focus" },
                  { title: "Lapsed from last edition", meta: "Reactivation live" },
                  { title: "Sister-event overlap", meta: "Untouched" },
                ],
              },
              {
                label: "Campaigns",
                items: [
                  { title: "Launch phase", meta: "Complete", accent: "quiet" },
                  { title: "Programme reveal", meta: "In market" },
                  { title: "Early-bird deadline", meta: "Drafted, awaiting approval", accent: "focus" },
                ],
              },
              {
                label: "Journeys",
                items: [
                  { title: "Registered, not yet briefed", meta: "Automated" },
                  { title: "Started, did not finish", meta: "Recovery running" },
                  { title: "VIP invitation track", meta: "Manual review" },
                ],
              },
              {
                label: "Needs you",
                items: [
                  { title: "Paid channel underperforming", meta: "Pivot suggested", accent: "focus" },
                  { title: "Competitor announced on your date", meta: "Response drafted", accent: "focus" },
                  { title: "Contact pressure high in one segment", meta: "Hold recommended" },
                ],
              },
            ]}
            footnote="Every item opens with the evidence behind it and a recommended action. Approving one is a click; ignoring it is also a decision, and it is recorded."
          />
        ),
        note: "An abstraction of the workspace rather than a screenshot. Column contents shown are illustrative of the kinds of item that appear, not real campaign data.",
      }}
      produces={[
        "Market mapping and audience segmentation by function, seniority, sector and geography, with 3 to 5 detailed personas",
        "Core message pillars and per-persona value propositions, with a defined tone of voice",
        "A multi-phase campaign plan with channel mix and budget by phase, plus a week-by-week calendar from launch to event day",
        "Audience target models by segment, with the registration pace required to reach them",
        "Channel plans and marketing budget scenarios, including what to cut first if the budget moves",
        "Channel-ready copy for email nurture sequences, paid ad variants and an organic social calendar",
        "Short-form message copy shaped for the messaging channels you run, rather than email copy cut down",
        "Registration-page copy, a UTM tracking framework, and search and answer-engine keyword mapping",
        "Generated campaign creative: speaker cards, session graphics, banners and share assets",
        "Registration-pace and revenue forecasts, with urgency and scarcity tactics as deadlines approach",
        "A weekly campaign-optimisation digest that flags underperformance and recommends budget and creative pivots",
        "For awards: finalist announcement copy timed to the reveal, plus group-booking and press-release support",
        "A year-round content strategy for the months between editions",
      ]}
      executes={[
        {
          title: "Email campaigns",
          body: "Sequenced from the approved plan and sent through your own account, so your sender reputation stays yours.",
        },
        {
          title: "Organic social",
          body: "A calendar built against the campaign phases and the keyword work, rather than filled in on a Friday.",
        },
        {
          title: "Paid campaigns",
          body: "Channel allocation, variants for testing, and a weekly read on which ones deserve the next pound.",
        },
        {
          title: "Messaging channels",
          body: "WhatsApp, SMS and RCS as part of the same journey, through your own numbers and verified sender.",
          status: "soon",
        },
        {
          title: "Retargeting audiences",
          body: "Audiences built from real engagement rather than a single undifferentiated site-visitor pool.",
          status: "pilot",
        },
        {
          title: "Abandoned registration recovery",
          body: "The people who started and stopped, picked up automatically with the right nudge on the right channel.",
          status: "pilot",
        },
        {
          title: "VIP journeys",
          body: "Distinct treatment for the attendees the event genuinely depends on, with a human on the important touches.",
          status: "pilot",
        },
        {
          title: "Journey orchestration",
          body: "One journey per person across channels, rather than five campaigns arriving in an order nobody planned.",
        },
        {
          title: "Contact prioritisation",
          body: "Who is worth a personal approach this week, and who should be left alone for a fortnight.",
        },
        {
          title: "Shared communications workspace",
          body: "Marketing, telesales and event management working from the same view of what has been sent and what came back.",
        },
        {
          title: "Creative generation",
          body: "Campaign assets produced at volume from the approved programme and brand rules.",
        },
        {
          title: "Campaign recalibration",
          body: "When pace drops, the options arrive with their cost and trade-off rather than as a red number.",
        },
      ]}
      watches={[
        "Registration pace against target, by segment rather than in aggregate",
        "Channels quietly underperforming while the headline number still looks acceptable",
        "Competitor announcements, especially ones landing on your dates",
        "Segments drifting away from the profile your targets assumed",
        "Contact pressure building on the same people across your portfolio",
        "Registrations started and abandoned",
        "Message and programme drift between what marketing says and what the agenda actually offers",
      ]}
      learns={[
        "Which messages converted, for which segment, at which phase",
        "Which acquisition sources produced attendees who came back",
        "Which channels earned their budget and which were carried by one good week",
        "How the audience moved between your events across the year",
        "Which urgency tactics worked and which ones the audience has become immune to",
        "What the next edition should start from, rather than what it should start with",
      ]}
      connects="Marketing is fed by sector and competitor intelligence, by audience insight from content, and by what commercial and telesales hear in real conversations. It feeds programme planning with what the audience is responding to, gives commercial the audience evidence a partner will accept, and hands telesales a warmed, prioritised list instead of a spreadsheet. When positioning changes here, every other team is working from the new version the same day."
      explore={[
        {
          href: "/communications",
          label: "Communications",
          blurb: "The channels these campaigns run on, and the discipline that stops them competing.",
        },
        {
          href: "/creative",
          label: "Creative",
          blurb: "How the campaign assets get produced at the volume a real event needs.",
        },
        {
          href: "/pillars/content",
          label: "Content and programme",
          blurb: "The programme your campaign is selling, and where its proof points come from.",
        },
        {
          href: "/pillars/telesales",
          label: "Telesales",
          blurb: "Where a warm marketing signal becomes tomorrow's first call.",
        },
      ]}
      closing={{
        title: "Stop rebuilding the market picture every campaign.",
        body: "Bring one event and its last edition's data. Most marketing teams see something about their own audience in the first session that changes the plan.",
      }}
    />
  );
}
