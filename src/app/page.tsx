import { ClosingSection } from "@/components/home/ClosingSection";
import { CompoundingSection } from "@/components/home/CompoundingSection";
import { EvidenceSection } from "@/components/home/EvidenceSection";
import { FounderSection } from "@/components/home/FounderSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HumanJudgementSection } from "@/components/home/HumanJudgementSection";
import { NewsroomSection } from "@/components/home/NewsroomSection";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { ProductExperienceSection } from "@/components/home/ProductExperienceSection";
import { StartAnywhereSection } from "@/components/home/StartAnywhereSection";
import { StartSection } from "@/components/home/StartSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ValueSection } from "@/components/home/ValueSection";

/** A benefit-led buyer journey: what you get → what it does → start anywhere → it compounds → proof → how you work with it → trust → start. */
export default function HomePage(): React.ReactElement {
  return (
    <>
      <HomeHero />
      <ValueSection />
      <OutcomesSection />
      <StartAnywhereSection />
      <CompoundingSection />
      <HumanJudgementSection />
      <EvidenceSection />
      <ProductExperienceSection />
      <NewsroomSection />
      <TrustSection />
      <StartSection />
      <FounderSection />
      <ClosingSection />
    </>
  );
}
