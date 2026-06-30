import { PillarPage } from "@/components/pillars/PillarPage";

export default function CommercialPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Commercial"
      tensionStatement="Generic proposals lose deals. Looped builds them around what each partner actually cares about."
      seatLine="For commercial teams that need proposals tied to real buyer demand, not recycled decks and hopeful positioning."
      challenges={[
        "Commercial teams are usually selling under pressure: outreach targets are live, inventory is fixed, and prospects expect immediate relevance. Generic decks rarely survive first contact with a serious buyer.",
        "You need to show why this event, this audience, and this timing matter now. That becomes difficult when campaign messaging, programme shape, and audience insight are not aligned in one approved source.",
        "When a competing event announces on the same date, partner objections spike. Teams need confident, evidence-based responses quickly, not internal debate over positioning.",
      ]}
      howItWorks={[
        "Looped gives commercial teams proposition support grounded in approved audience and market context. Proposals are structured around what each partner category actually values and where your event has proof. Renewal intelligence and package strategy sit alongside, so the next conversation is timed and framed for where the relationship really is.",
        "Your team still owns relationships and negotiation. The platform improves the intelligence and consistency behind every proposal, and grounds every prospect in real, sourced data, never an invented company or a made-up figure you would have to walk back mid-pitch.",
      ]}
      deliverables={[
        "A tiered, scored universe of potential partners and exhibitors, with lookalike modelling against your existing book",
        "Targeted prospect lists with company profiles and an activation rationale, grounded in real, sourced data",
        "Bespoke partner briefs and pitch narratives, with pitch decks and talking points per named prospect",
        "Sponsorship package architecture: tier naming, benefit inventory, and a session-to-partner map by audience fit",
        "A commercial media pack with audience profile, reach and package tiers",
        "Pipeline health metrics, renewal scoring across the contracted book, and identified upsell opportunities",
        "Personalised outreach copy, a partner FAQ, and co-marketing and on-site activation briefs",
        "For awards: table-sales intelligence and prospect prioritisation, timed to the finalist announcement",
        "Post-event ROI reports for each partner against the contracted package",
      ]}
      connects="Commercial is fed by marketing narrative and audience insight, then feeds telesales and marketing with live commercial signals. When partner feedback changes positioning, the rest of the team works from the same updated context."
    />
  );
}
