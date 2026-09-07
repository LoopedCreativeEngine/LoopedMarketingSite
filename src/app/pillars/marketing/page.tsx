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
        "Message relevance by segment, and where a competitor has moved.",
      ]}
      decisions={[
        "Where to pivot the campaign while the window is still open.",
        "Which segments and target accounts to prioritise.",
        "Where to move budget and channel effort.",
        "Whether healthy registration growth is masking an audience gap.",
      ]}
      afterApproval={[
        "Update targeting, segments and messaging by persona.",
        "Reprioritise channels and budget across the plan.",
        "Build personalised outreach for the accounts and people that matter.",
        "Track which actions actually moved the outcome, not just activity.",
      ]}
      examples={[
        {
          signal: "Registrations up 18%. Senior buyers down 11%.",
          insight: "A healthy headline can hide a shifting audience. Looped reads volume and mix together and shows the gap opening under the growth.",
          action: "On approval, Looped can rebalance targeting, messaging and channel priorities towards the senior audience while keeping overall registrations moving.",
        },
        {
          signal: "You may not need more registrations. You may need 63 specific people.",
          insight: "When the mix is the problem, more volume does not fix it. Looped names the organisations that matter and the people inside them.",
          action: "On approval, Looped can build the targeting, campaign content and personalised outreach around exactly those people.",
        },
      ]}
      connects="Marketing works from the same market picture as content and commercial. Audience intelligence shapes the programme and the sponsor story, and campaign performance hands telesales a warm, prioritised list rather than a raw one."
    />
  );
}
