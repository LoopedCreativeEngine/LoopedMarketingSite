import type { Metadata } from "next";

import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Event marketing AI: audience and campaign growth",
  description:
    "For event marketing and audience leads: audience quality read with volume, registration pace against plan, and campaign moves carried through your own stack.",
  alternates: { canonical: "/pillars/marketing" },
  openGraph: {
    url: "/pillars/marketing",
    title: "Event marketing AI: audience and campaign growth",
    description:
      "For event marketing and audience leads: audience quality read with volume, registration pace against plan, and campaign moves carried through your own stack.",
  },
};

export default function MarketingPillarPage(): React.ReactElement {
  return (
    <PillarPage
      kicker="Marketing / Audience"
      title="Marketing & Audience"
      tension="You are measured on registrations. You are judged on who is in the room."
      seatLine="For the marketing and audience lead who has to hit the numbers without rebuilding strategy from zero every campaign."
      sees={[
        "Audience quality, not just volume: seniority, sector and the segments that actually convert.",
        "Registration pace against plan, and where it is quietly running behind.",
        "Channel performance and where spend is working or leaking.",
        "Message relevance by segment, where a competitor has moved, and what prospective attendees keep asking before they book.",
        "Which acquisition sources produced attendees who actually came back, rather than which got the last click.",
        "Audience overlap with your other events, and the segments a sister event has already warmed.",
        "How much your brand has already asked of a contact this month, before another campaign lands on them.",
      ]}
      decisions={[
        "Where to pivot the campaign while the window is still open.",
        "Which segments and target accounts to prioritise.",
        "Where to move budget and channel effort.",
        "Whether healthy registration growth is masking an audience gap.",
        "Which lapsed attendees are worth reactivating, and what to say to them.",
        "When to stop sending to a segment, rather than sending once more.",
      ]}
      afterApproval={[
        "Update targeting, segments and messaging by persona in your campaign stack.",
        "Reprioritise channels and budget across the plan.",
        "Send the personalised outreach to the accounts and people that matter, once authorised.",
        "Watch the registrations that follow, and feed what responded into the next recommendation.",
        "Produce the campaign creative the announcement actually needs: speaker cards, session graphics and share assets, on brand, at volume.",
        "Run the journey across the channels you have connected, so email, messaging and the call list behave as one conversation.",
        "Recover the registrations that were started and abandoned, on the channel that person responds to.",
      ]}
      examples={[
        {
          signal: "Registrations up 18%. Senior buyers down 11%.",
          insight: "A healthy headline can hide a shifting audience. Looped reads volume and mix together and shows the gap opening under the growth.",
          action: "Once approved, Looped rebalances targeting, messaging and channel priorities across your campaign tools, towards the senior audience and without stalling overall registrations.",
          result: "It then reads the registrations that actually arrive, by seniority and sector, not the sends that went out. The mix that responds shapes the next campaign recommendation.",
        },
        {
          signal: "You may not need more registrations. You may need 63 specific people.",
          insight: "When the mix is the problem, more volume does not fix it. Looped names the organisations that matter and the people inside them.",
          action: "Once approved, Looped builds the targeting and campaign content and runs the personalised outreach to exactly those people through the systems your team already sends from.",
          result: "Looped checks who was actually reached and who registered, keeps the named gap open until the seats are filled, and remembers which approach worked on which kind of buyer.",
        },
      ]}
      connects="Marketing works from the same market picture as content and commercial. Audience intelligence shapes the programme and the sponsor story, and campaign performance hands telesales a warm, prioritised list rather than a raw one."
    />
  );
}
