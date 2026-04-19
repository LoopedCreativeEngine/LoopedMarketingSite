import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ROISection } from "@/components/sections/ROISection";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { SolutionSection } from "@/components/sections/SolutionSection";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <PillarsSection />
      <ROISection />
      <HowItWorksSection />
      <PricingSection />
      <FinalCTASection />
    </>
  );
}
