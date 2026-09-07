import { ClosingSection } from "@/components/home/ClosingSection";
import { CompoundingSection } from "@/components/home/CompoundingSection";
import { ConnectivitySection } from "@/components/home/ConnectivitySection";
import { EvidenceSection } from "@/components/home/EvidenceSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FounderSection } from "@/components/home/FounderSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HumanJudgementSection } from "@/components/home/HumanJudgementSection";
import { KeepInLoopSection } from "@/components/home/KeepInLoopSection";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { ProductExperienceSection } from "@/components/home/ProductExperienceSection";
import { StartAnywhereSection } from "@/components/home/StartAnywhereSection";
import { StartSection } from "@/components/home/StartSection";
import { ValueSection } from "@/components/home/ValueSection";

/** A benefit-led buyer journey: what you get -> what it does -> start anywhere -> connectivity -> it compounds -> people and judgement -> proof -> working with it -> questions -> early access. */
export default function HomePage(): React.ReactElement {
  return (
    <>
      <HomeHero />
      <ValueSection />
      <OutcomesSection />
      <StartAnywhereSection />
      <ConnectivitySection />
      <CompoundingSection />
      <HumanJudgementSection />
      <EvidenceSection />
      <ProductExperienceSection />
      <FaqSection />
      <StartSection />
      <KeepInLoopSection />
      <FounderSection />
      <ClosingSection />
    </>
  );
}
