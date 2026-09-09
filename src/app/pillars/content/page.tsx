import type { Metadata } from "next";

import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Event programme management AI: agenda and speakers",
  description:
    "For content and programme leads: topic and speaker intelligence, agenda balance, and the speaker workflows that keep a programme moving.",
  alternates: { canonical: "/pillars/content" },
  openGraph: {
    url: "/pillars/content",
    title: "Event programme management AI: agenda and speakers",
    description:
      "For content and programme leads: topic and speaker intelligence, agenda balance, and the speaker workflows that keep a programme moving.",
  },
};

export default function ContentPillarPage(): React.ReactElement {
  return (
    <PillarPage
      kicker="Content / Programme"
      title="Content & Programme"
      tension="A safe agenda fills the room once. The right agenda is why they come back."
      seatLine="For the conference and content director shaping a programme the audience actually wants."
      sees={[
        "Audience and topic fit: what your audience is responding to, and the questions they keep asking Looped about the programme.",
        "Emerging themes the market is moving towards, and where the programme is behind them.",
        "Gaps and overlaps in the agenda, and sessions that are carrying more than their share.",
        "Speaker quality and fit, and how competitor programmes are positioned.",
        "Which formats earned their complexity last time, and which quietly did not.",
        "Where a theme is peaking across the sector, and where it has already passed.",
        "Which speakers appear across your portfolio, how often, and whether that is an asset or a habit.",
      ]}
      decisions={[
        "Which themes to lead with this edition.",
        "Where the agenda has gaps worth filling and where it repeats itself.",
        "Which formats and speakers to prioritise.",
        "What to change before the programme locks.",
        "Which sessions are worth a sponsor conversation, and which are not for sale.",
        "What to do when a speaker drops four weeks out.",
      ]}
      afterApproval={[
        "Shape the agenda around what will land with the audience.",
        "Prepare the speaker approaches, and send the ones you sign off.",
        "Draft session titles, descriptions and supporting content, and publish what you approve.",
        "Track replies and confirmations, and keep a gap open until the seat is actually filled.",
        "Turn what delegates and speakers keep asking about into evidence for the next programme.",
        "Collect bios, headshots, logos and slides through a secure link, and chase what has not arrived.",
        "Issue briefing packs, chair notes and runsheets from the programme as it actually stands.",
        "Show what a change breaks downstream: the copy already in market, the sponsor commitment attached, the session either side of it.",
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
