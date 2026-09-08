import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata = { robots: { index: false, follow: false } };

export default function ContentPillarPage(): React.ReactElement {
  return (
    <PillarPage
      kicker="Content / Programme"
      title="Content & Programme"
      tension="A safe agenda fills the room once. The right agenda is why they come back."
      seatLine="For the conference and content director shaping a programme the audience actually wants."
      sees={[
        "Audience and topic fit: what your audience is responding to and what they keep asking for.",
        "Emerging themes the market is moving towards, and where the programme is behind them.",
        "Gaps and overlaps in the agenda, and sessions that are carrying more than their share.",
        "Speaker quality and fit, and how competitor programmes are positioned.",
      ]}
      decisions={[
        "Which themes to lead with this edition.",
        "Where the agenda has gaps worth filling and where it repeats itself.",
        "Which formats and speakers to prioritise.",
        "What to change before the programme locks.",
      ]}
      afterApproval={[
        "Shape the agenda around what will land with the audience.",
        "Prepare the speaker approaches, and send the ones you sign off.",
        "Draft session titles, descriptions and supporting content, and publish what you approve.",
        "Track replies and confirmations, and keep a gap open until the seat is actually filled.",
      ]}
      examples={[
        {
          signal: "Two sessions are doing the work of the whole agenda.",
          insight: "Attention and demand are concentrating, while other slots underperform. Looped shows which themes are pulling the room and which are filler.",
          action: "Once approved, Looped rebalances the agenda towards the themes that land, reworks the sessions that are not earning their slot and updates the programme where it is published.",
          result: "Engagement against each reworked session comes back as evidence, so next edition's programme starts from what the room actually responded to.",
        },
        {
          signal: "The theme your audience keeps asking about is barely on the programme.",
          insight: "Registration and engagement are clustering around a topic the agenda underweights, and the market is moving the same way.",
          action: "Once approved, Looped builds a session track around the theme, proposes the speakers who fit and why, prepares a personalised approach to each and sends the ones you authorise.",
          result: "Looped follows who replies, who declines and who confirms, keeps chasing the gap until a speaker is booked, and learns which kind of approach lands with senior names.",
        },
      ]}
      connects="The programme is shaped by the same audience intelligence marketing works from, and a strong agenda gives commercial the themes and whitespace that sponsors want to be part of."
    />
  );
}
