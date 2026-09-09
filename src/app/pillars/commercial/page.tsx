import type { Metadata } from "next";

import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Event sponsorship software: sell, deliver, renew",
  description:
    "For commercial directors: revenue risk against plan, pipeline and package intelligence, sponsor fulfilment, and renewal conversations opened with evidence.",
  alternates: { canonical: "/pillars/commercial" },
  openGraph: {
    url: "/pillars/commercial",
    title: "Event sponsorship software: sell, deliver, renew",
    description:
      "For commercial directors: revenue risk against plan, pipeline and package intelligence, sponsor fulfilment, and renewal conversations opened with evidence.",
  },
};

export default function CommercialPillarPage(): React.ReactElement {
  return (
    <PillarPage
      kicker="Commercial"
      title="Commercial"
      tension="The shortfall is visible in week three. Most teams only feel it in week ten."
      seatLine="For the commercial director carrying the revenue number across sponsorship and partnerships."
      sees={[
        "Revenue risk against plan, early enough to do something about it.",
        "Pipeline quality, sponsor whitespace and under-bought partners.",
        "Category opportunity and where a package is under-priced for its value.",
        "Renewal risk, and which accounts are worth prioritising now, including partners whose fulfilment is running late.",
        "Accounts buying one event in your portfolio who have never been shown the others.",
        "How far into a large account you have genuinely reached, beyond the one contact who always replies.",
        "Audience-match evidence a partner will accept: who is actually in the room, in the segments they sell to.",
      ]}
      decisions={[
        "Which accounts to prioritise this week.",
        "Where to build new packages and reshape a proposition.",
        "Which renewals need attention before they cool.",
        "What recovery plan actually closes the gap.",
        "Which packages get bought, and which exist only in the media pack.",
        "When to open a renewal early, with delivery evidence attached.",
      ]}
      afterApproval={[
        "Build the target list and account plans.",
        "Rebuild propositions from what the audience actually did.",
        "Carry approved outreach into the systems your commercial team already works in.",
        "Reprioritise the pipeline from what actually came back: replies, meetings and closes.",
        "Carry the partner's own journey, so entitlements, deliverables and deadlines stay on track into the renewal conversation.",
        "Assemble the media pack, package architecture and pitch narrative from approved audience and programme evidence.",
        "Prepare the meeting: attendee context, the questions likely to come up, and the proof for each one.",
        "Produce the post-event ROI report per partner, against what was actually contracted.",
      ]}
      examples={[
        {
          signal: "£26k of sponsorship, hiding in plain sight.",
          insight: "Audience demand, programme themes and commercial whitespace point to the strongest sponsor categories and the best-fit accounts you are not yet talking to.",
          action: "Once approved, Looped builds the target list, the account plan and the proposition most likely to land, and carries the outreach into your commercial stack.",
          result: "Replies, meetings and closes return as evidence against each category and account, so the next set of opportunities is ranked on what converted for this event rather than on a hunch.",
        },
        {
          signal: "This edition is tracking towards a £74k shortfall. One partner could be worth £18k more.",
          insight: "The pace of renewals and new business does not close the gap on the current plan, but the mix of who to prioritise can change the outcome.",
          action: "Once approved, Looped reshapes the account strategy, rebuilds the priority propositions and runs the recovery sequence through the systems the team already uses.",
          result: "Looped tracks the gap week by week against what has actually been signed, and keeps the shortfall open as an exception until the revenue is really there.",
        },
      ]}
      connects="Commercial builds on the audience and programme picture, so propositions match what the event is really about, and telesales gets a prioritised, briefed list rather than a raw one."
    />
  );
}
