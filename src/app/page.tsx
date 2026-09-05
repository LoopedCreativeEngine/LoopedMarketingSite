import { ClosingSection } from "@/components/home/ClosingSection";
import { CompoundingSection } from "@/components/home/CompoundingSection";
import { ConnectedIntelligenceSection } from "@/components/home/ConnectedIntelligenceSection";
import { EvidenceSection } from "@/components/home/EvidenceSection";
import { FounderSection } from "@/components/home/FounderSection";
import { GovernedAutonomySection } from "@/components/home/GovernedAutonomySection";
import { HomeHero } from "@/components/home/HomeHero";
import { HumanJudgementSection } from "@/components/home/HumanJudgementSection";
import { OperatingLoopSection } from "@/components/home/OperatingLoopSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProductExperienceSection } from "@/components/home/ProductExperienceSection";
import { SpecialistIntelligenceSection } from "@/components/home/SpecialistIntelligenceSection";
import { StartSection } from "@/components/home/StartSection";
import { TrustSection } from "@/components/home/TrustSection";

/** The homepage run of show — the founder's message architecture, in the recovered design. */
export default function HomePage(): React.ReactElement {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <ConnectedIntelligenceSection />
      <OperatingLoopSection />
      <HumanJudgementSection />
      <SpecialistIntelligenceSection />
      <EvidenceSection />
      <CompoundingSection />
      <ProductExperienceSection />
      <GovernedAutonomySection />
      <StartSection />
      <FounderSection />
      <TrustSection />
      <ClosingSection />
    </>
  );
}
