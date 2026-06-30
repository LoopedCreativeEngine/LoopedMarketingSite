import { PillarPage } from "@/components/pillars/PillarPage";

export default function MarketingPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Marketing"
      tensionStatement="Your team is briefing ChatGPT from scratch every morning. Looped ends that."
      seatLine="For the marketer trying to hit registration and revenue targets without rebuilding strategy from zero every campaign."
      challenges={[
        "Most event marketing teams spend the first weeks of every launch rebuilding context: what's changed in the market, what competitors are pushing, where audience appetite is moving, and which messages still convert. By the time that work is done, campaign windows are tighter than they should be.",
        "You also feel the handoff pain. Content, commercial, and telesales all need consistent positioning, but each team has its own deadlines and its own interpretation. That creates message drift exactly when you need clear market narrative.",
        "Then there is mid-campaign pressure. Registration velocity dips, paid channels underperform, or a competitor announces on your date. You need decisions in hours, not another week of research.",
      ]}
      howItWorks={[
        "Looped gives your team a living intelligence baseline before campaign execution starts. You see current sector context, competitor movement, audience segmentation, and message territory in one place, approved by your team before anything goes live.",
        "Campaign planning then builds on that approved baseline. Your team reviews recommendations, chooses direction, and signs off. Every downstream draft reflects those decisions, so email, paid, social, and partner messaging stay aligned.",
      ]}
      deliverables={[
        "Market mapping and audience segmentation by function, seniority, sector and geography, with 3 to 5 detailed personas",
        "Core message pillars and per-persona value propositions, with a defined tone of voice",
        "A multi-phase campaign plan with channel mix and budget by phase, plus a week-by-week calendar from launch to event day",
        "Channel-ready copy for email nurture sequences, paid ad variants and an organic social calendar",
        "Registration-page copy, a UTM tracking framework, and SEO and AEO keyword mapping",
        "Registration-pace and revenue forecasts, with urgency and scarcity tactics as deadlines approach",
        "A weekly campaign-optimisation digest that flags underperformance and recommends budget and creative pivots",
        "For awards: finalist announcement copy timed to the reveal, plus group-booking and press-release support",
        "Generated social image assets, and a year-round content strategy for the months between editions",
      ]}
      connects="Marketing is fed by sector and competitor intelligence plus audience insight from content and commercial conversations. It then feeds content planning, commercial outreach framing, and telesales campaign direction so every team works from the same market story."
    />
  );
}
