import { PillarPage } from "@/components/pillars/PillarPage";

export default function SponsorshipPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Sponsorship"
      tensionStatement="Generic proposals lose deals. Looped builds proposals around what each sponsor actually cares about."
      seatLine="For sponsorship teams that need proposals tied to real buyer demand, not recycled decks and hopeful positioning."
      challenges={[
        "Sponsorship teams are usually selling under pressure: outreach targets are live, inventory is fixed, and prospects expect immediate relevance. Generic decks rarely survive first contact with a serious buyer.",
        "You need to show why this event, this audience, and this timing matter now. That becomes difficult when campaign messaging, programme shape, and audience insight are not aligned in one approved source.",
        "When a competitor announces on the same date, sponsor objections spike. Teams need confident, evidence-based responses quickly, not internal debate over positioning.",
      ]}
      howItWorks={[
        "Looped gives sponsorship teams proposition support grounded in approved audience and market context. Proposals are structured around what each sponsor category actually values and where your event has proof.",
        "Your team still owns relationships and negotiation. The platform improves the intelligence and consistency behind every proposal so reps spend less time rebuilding background and more time moving deals forward.",
      ]}
      deliverables={[
        "Sponsor proposition angles matched to audience segments",
        "Personalised proposal drafts with relevant event proof points",
        "Objection-handling guidance linked to current market signals",
        "Priority prospect profiles for outbound and renewals",
        "Cross-team summary notes to align sales and marketing messaging",
      ]}
      connects="Sponsorship is fed by marketing narrative and audience insight, then feeds telesales and marketing with live commercial signals. When sponsor feedback changes positioning, the rest of the team works from the same updated context."
    />
  );
}
