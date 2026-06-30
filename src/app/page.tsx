import { AiProblemSplitSection } from "@/components/sections/AiProblemSplitSection";
import { BuiltForHowEventsMoveSection } from "@/components/sections/BuiltForHowEventsMoveSection";
import { CascadeVsPromptingSection } from "@/components/sections/CascadeVsPromptingSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LiveIntelligenceSection } from "@/components/sections/LiveIntelligenceSection";
import { OptionalAutomationSection } from "@/components/sections/OptionalAutomationSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProactiveIntelligenceSection } from "@/components/sections/ProactiveIntelligenceSection";
import { RaiseBarSection } from "@/components/sections/RaiseBarSection";
import { ROICalculatorSection } from "@/components/sections/ROICalculatorSection";
import { TheShiftSection } from "@/components/sections/TheShiftSection";
import { WhatLoopedChangesSection } from "@/components/sections/WhatLoopedChangesSection";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <AiProblemSplitSection />
      <WhatLoopedChangesSection />
      <ProactiveIntelligenceSection />
      <BuiltForHowEventsMoveSection />
      <CascadeVsPromptingSection />
      <TheShiftSection />
      <RaiseBarSection />
      <OptionalAutomationSection />
      <PillarsSection />
      <LiveIntelligenceSection />
      <ROICalculatorSection />
      <PricingSection />
      <FinalCTASection />
    </>
  );
}
