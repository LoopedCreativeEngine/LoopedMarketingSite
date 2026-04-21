import { AiProblemSplitSection } from "@/components/sections/AiProblemSplitSection";
import { CascadeVsPromptingSection } from "@/components/sections/CascadeVsPromptingSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OptionalAutomationSection } from "@/components/sections/OptionalAutomationSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProactiveIntelligenceSection } from "@/components/sections/ProactiveIntelligenceSection";
import { RaiseBarSection } from "@/components/sections/RaiseBarSection";
import { ROICalculatorSection } from "@/components/sections/ROICalculatorSection";
import { WhatLoopedChangesSection } from "@/components/sections/WhatLoopedChangesSection";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <AiProblemSplitSection />
      <WhatLoopedChangesSection />
      <ProactiveIntelligenceSection />
      <CascadeVsPromptingSection />
      <RaiseBarSection />
      <OptionalAutomationSection />
      <PillarsSection />
      <ROICalculatorSection />
      <PricingSection />
    </>
  );
}
