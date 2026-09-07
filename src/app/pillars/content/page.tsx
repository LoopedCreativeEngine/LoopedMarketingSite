import { PillarPage } from "@/components/pillars/PillarPage";

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
        "Brief and line up the speakers that fit.",
        "Draft session titles, descriptions and supporting content.",
        "Keep the programme aligned with the market as it moves.",
      ]}
      examples={[
        {
          signal: "Two sessions are doing the work of the whole agenda.",
          insight: "Attention and demand are concentrating, while other slots underperform. Looped shows which themes are pulling the room and which are filler.",
          action: "On approval, Looped can rebalance the agenda towards the themes that land and rework the sessions that are not earning their slot.",
        },
        {
          signal: "The theme your audience keeps asking about is barely on the programme.",
          insight: "Registration and engagement are clustering around a topic the agenda underweights, and the market is moving the same way.",
          action: "On approval, Looped can build a session track around the theme, propose the speakers for it and position it against competing programmes.",
        },
      ]}
      connects="The programme is shaped by the same audience intelligence marketing works from, and a strong agenda gives commercial the themes and whitespace that sponsors want to be part of."
    />
  );
}
