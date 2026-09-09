import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { PillarPage } from "@/components/pillars/PillarPage";
import { LifecycleRail, type LifecycleStage } from "@/components/product/LifecycleRail";
import { WorkspaceBoard } from "@/components/product/WorkspaceBoard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event sponsorship software: sell, deliver, renew",
  description:
    "AI for event commercial teams: account discovery, audience-match evidence, proposals, sponsor delivery and renewal, held as one relationship.",
  path: "/pillars/sponsorship",
});

const LIFECYCLE: LifecycleStage[] = [
  {
    name: "Prospect",
    summary: "Finding the accounts that should be buying, and knowing why they would.",
    items: [
      "Target account discovery",
      "Account prioritisation",
      "Historic relationship history",
      "Cross-event opportunity",
      "Buyer and contact context",
      "Strategic-account penetration",
    ],
  },
  {
    name: "Sell",
    summary: "Making the case specific to this partner, at this event, this year.",
    items: [
      "Tailored value proposition",
      "Audience-match evidence",
      "Proposal and pitch support",
      "Package recommendation",
      "Meeting preparation",
      "Pipeline priority and deal risk",
    ],
  },
  {
    name: "Deliver",
    summary: "The half of the relationship that decides whether they come back.",
    items: [
      "Sponsor onboarding",
      "Assets and deadlines",
      "Speaker and delegate allocations",
      "Campaign commitments",
      "Activation tasks",
      "Event-day requirements",
    ],
  },
  {
    name: "Renew",
    summary: "Starting the next conversation from evidence rather than from hope.",
    items: [
      "Renewal signals",
      "Delivery evidence per partner",
      "Account relationship history",
      "Cross-event upsell",
      "Portfolio expansion",
    ],
  },
];

export default function CommercialPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Commercial"
      tensionStatement="Generic proposals lose deals. Looped builds them around what each partner actually cares about."
      seatLine="For commercial teams that need proposals tied to real buyer demand, not recycled decks and hopeful positioning."
      challenges={[
        "Commercial teams are usually selling under pressure: outreach targets are live, inventory is fixed, and prospects expect immediate relevance. Generic decks rarely survive first contact with a serious buyer.",
        "You need to show why this event, this audience, and this timing matter now. That becomes difficult when campaign messaging, programme shape, and audience insight are not aligned in one approved source.",
        "Then there is the half nobody sells on. Delivery. A partner renews because what they bought actually happened, and most teams are reconstructing that story from memory six weeks after the event.",
      ]}
      understands={[
        {
          title: "Target account universe",
          body: "A tiered, scored view of the organisations who should be sponsoring, with the rationale for each one.",
        },
        {
          title: "Historic relationships",
          body: "Who has bought from you before, what they bought, what it cost them and how it went.",
        },
        {
          title: "Buyer and contact context",
          body: "Who makes the decision, who influences it, and what has already been said to them this year.",
        },
        {
          title: "Cross-event opportunity",
          body: "Accounts buying one event in your portfolio who have never been shown the other three.",
        },
        {
          title: "Audience-match evidence",
          body: "Who is actually in the room, in the segments this partner sells to, in numbers you can stand behind.",
        },
        {
          title: "Programme fit",
          body: "Which sessions and themes align with a partner's proposition, so the pitch is about content rather than logos.",
        },
        {
          title: "Strategic-account penetration",
          body: "How far into a large account you have genuinely reached, versus the one contact who always answers.",
        },
        {
          title: "Pipeline reality",
          body: "Stage conversion, velocity, category gaps and the revenue genuinely at risk this quarter.",
        },
        {
          title: "Renewal signals",
          body: "The behaviour that tends to precede a partner not coming back, surfaced while there is still time.",
        },
      ]}
      hub={{
        heading: "The commercial workspace.",
        lede: "Accounts, pipeline, delivery commitments and renewals held against the same partner record, so the person selling and the person delivering are looking at one relationship.",
        visual: (
          <WorkspaceBoard
            name="Commercial workspace"
            tabs={["Work hub", "Accounts", "Pipeline", "Proposals", "Delivery", "Renewals"]}
            columns={[
              {
                label: "Priority accounts",
                items: [
                  { title: "Returning partner, larger package", meta: "Proposal ready" },
                  { title: "Lapsed after two editions", meta: "Reactivation angle", accent: "focus" },
                  { title: "Buys a sister event only", meta: "Cross-sell case built" },
                  { title: "New category, no history", meta: "Researched" },
                ],
              },
              {
                label: "Pipeline",
                items: [
                  { title: "Verbal agreed, contract out", meta: "Chase due" },
                  { title: "Meeting booked", meta: "Briefing prepared" },
                  { title: "Gone quiet after proposal", meta: "Risk flagged", accent: "focus" },
                ],
              },
              {
                label: "Delivery",
                items: [
                  { title: "Assets outstanding", meta: "Two partners", accent: "focus" },
                  { title: "Speaking slot unallocated", meta: "Contracted" },
                  { title: "Activation brief approved", meta: "On track", accent: "quiet" },
                ],
              },
              {
                label: "Renewals",
                items: [
                  { title: "Delivery evidence complete", meta: "Ready to open" },
                  { title: "Engagement cooling", meta: "Earlier conversation advised", accent: "focus" },
                  { title: "Upsell identified", meta: "Portfolio expansion" },
                ],
              },
            ]}
            footnote="What was sold becomes what has to be delivered, and what was delivered becomes the evidence in the renewal conversation. Nobody rebuilds that story by hand."
          />
        ),
        note: "An abstraction of the workspace rather than a screenshot. Accounts shown are anonymised stand-ins, never real or invented companies.",
      }}
      produces={[
        "A tiered, scored universe of potential partners and exhibitors, with lookalike modelling against your existing book",
        "Targeted prospect lists with company profiles and an activation rationale, grounded in real, sourced data",
        "Bespoke partner briefs and pitch narratives, with pitch decks and talking points per named prospect",
        "Sponsorship package architecture: tier naming, benefit inventory, and a session-to-partner map by audience fit",
        "A commercial media pack with audience profile, reach and package tiers",
        "Meeting preparation briefings with attendee context and the questions likely to come up",
        "Pipeline health metrics, renewal scoring across the contracted book, and identified upsell opportunities",
        "Personalised outreach copy, a partner FAQ, and co-marketing and on-site activation briefs",
        "Sponsor onboarding packs turning what was sold into what now has to happen",
        "For awards: table-sales intelligence and prospect prioritisation, timed to the finalist announcement",
        "Post-event ROI reports for each partner against the contracted package",
      ]}
      executes={[
        {
          title: "Prospect outreach",
          body: "Personalised approaches at volume, framed by the partner's own market rather than by your inventory.",
        },
        {
          title: "Follow-up sequencing",
          body: "The follow-up that usually gets forgotten when the pipeline is busy, run consistently.",
        },
        {
          title: "Proposal assembly",
          body: "Proposals built from approved audience evidence and programme fit, ready for a human to sharpen.",
        },
        {
          title: "Sponsor onboarding",
          body: "The handover from sold to delivering, with owners and deadlines created automatically.",
          status: "pilot",
        },
        {
          title: "Asset and deadline collection",
          body: "Logos, copy and materials collected through a secure link, chased without anyone remembering to.",
        },
        {
          title: "Allocation tracking",
          body: "Speaking slots, passes and entitlements tracked against the contract rather than against goodwill.",
          status: "pilot",
        },
        {
          title: "Activation coordination",
          body: "On-site and digital activation tasks scheduled and monitored against the event date.",
          status: "pilot",
        },
        {
          title: "Renewal conversations",
          body: "Opened at the right moment, with the delivery evidence already attached.",
        },
      ]}
      watches={[
        "Deals that have gone quiet after a proposal",
        "Contracted deliverables with nothing behind them yet",
        "Renewal signals cooling on accounts you assumed were safe",
        "Category gaps in the sponsorship line-up against the programme",
        "Revenue at risk this quarter, and what is driving it",
        "Accounts buying one event that have never been approached about another",
        "Competitor events approaching your partners",
      ]}
      learns={[
        "Which value propositions actually closed, by partner category",
        "Which packages get bought, and which exist only in the media pack",
        "What delivery quality did to the renewal conversation",
        "Which objections recur, and the answers that worked",
        "How long each stage really takes, so next year's forecast is honest",
        "Which accounts expanded across the portfolio, and what triggered it",
      ]}
      extra={
        <Panel tone="ink" kicker="The full relationship">
          <SectionHeading
            tone="ink"
            title="One commercial relationship, from prospect to renewal."
            lede="Most organisations run these four stages in four systems, owned by three teams, with the handover happening in email. The renewal conversation then starts from whatever anyone can remember."
          />
          <Reveal className="mt-12">
            <LifecycleRail
              stages={LIFECYCLE}
              tone="ink"
              loopBackNote="Renewal is not the end of the cycle. It is the start of the next one, opening with everything the last edition proved."
            />
          </Reveal>
        </Panel>
      }
      connects="Commercial is fed by marketing's audience evidence and content's programme detail, which is what makes a proposal specific rather than generic. It feeds telesales the accounts worth a call and the reason to make it, gives marketing the partner commitments that have to appear in campaign copy, and hands event management the delivery obligations that shape the run of show. Portfolio sees the account picture across every event at once."
      explore={[
        {
          href: "/pillars/telesales",
          label: "Telesales",
          blurb: "The calling operation that works the accounts this pillar prioritises.",
        },
        {
          href: "/pillars/content",
          label: "Content and programme",
          blurb: "The sessions and themes that make a sponsorship conversation specific.",
        },
        {
          href: "/pillars/portfolio",
          label: "Portfolio and leadership",
          blurb: "Account overlap, whitespace and expansion across every event you run.",
        },
        {
          href: "/data-and-integrations",
          label: "Data and integrations",
          blurb: "How CRM context reaches the platform, and how approved outcomes get back.",
        },
      ]}
      closing={{
        title: "Sell on evidence. Renew on delivery.",
        body: "Bring one partner relationship you are trying to grow. The audience-match evidence is usually the part commercial teams did not know they already had.",
      }}
    />
  );
}
