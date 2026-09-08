import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata = { robots: { index: false, follow: false } };

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
      ]}
      decisions={[
        "Where to pivot the campaign while the window is still open.",
        "Which segments and target accounts to prioritise.",
        "Where to move budget and channel effort.",
        "Whether healthy registration growth is masking an audience gap.",
      ]}
      afterApproval={[
        "Update targeting, segments and messaging by persona in your campaign stack.",
        "Reprioritise channels and budget across the plan.",
        "Send the personalised outreach to the accounts and people that matter, once authorised.",
        "Watch the registrations that follow, and feed what responded into the next recommendation.",
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
