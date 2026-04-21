import { PillarPage } from "@/components/pillars/PillarPage";

export default function MarketingPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Marketing"
      seatLine="For the marketer trying to hit registration and revenue targets without rebuilding strategy from zero every campaign."
      challenges={[
        "Most event marketing teams spend the first weeks of every launch rebuilding context: what's changed in the market, what competitors are pushing, where audience appetite is moving, and which messages still convert. By the time that work is done, campaign windows are tighter than they should be.",
        "You also feel the handoff pain. Content, sponsorship, and telesales all need consistent positioning, but each team has its own deadlines and its own interpretation. That creates message drift exactly when you need clear market narrative.",
        "Then there is mid-campaign pressure. Registration velocity dips, paid channels underperform, or a competitor announces on your date. You need decisions in hours, not another week of research.",
      ]}
      howItWorks={[
        "Looped gives your team a living intelligence baseline before campaign execution starts. You see current sector context, competitor movement, audience segmentation, and message territory in one place, approved by your team before anything goes live.",
        "Campaign planning then builds on that approved baseline. Your team reviews recommendations, chooses direction, and signs off. Every downstream draft reflects those decisions, so email, paid, social, and partner messaging stay aligned.",
      ]}
      deliverables={[
        "Campaign narrative and positioning options grounded in current sector signals",
        "Audience segment priorities with plain-language rationale",
        "Channel-ready draft copy for email, social, and paid",
        "Weekly campaign performance digest with recommended adjustments",
        "Rapid response recommendations when competitor moves affect your event",
      ]}
      connects="Marketing is fed by sector and competitor intelligence plus audience insight from content and sponsorship conversations. It then feeds content planning, sponsorship outreach framing, and telesales campaign direction so every team works from the same market story."
    />
  );
}
