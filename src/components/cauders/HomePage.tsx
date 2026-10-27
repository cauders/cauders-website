
'use client';

import Hero from '@/components/cauders/Hero';
import WhatWeBuildSection from './WhatWeBuildSection';
import EngagementModelsSection from './EngagementModelsSection';
import IndustriesWeServeSection from './IndustriesWeServeSection';
import ReliableWorkflowsSection from './ReliableWorkflowsSection';
import EngineeringProcessSection from './EngineeringProcessSection';
import CaseStudiesSection from './CaseStudiesSection';
import FAQPreview from './FAQPreview';
import GetAQuote from './GetAQuote';
import BlurCircle from './BlurCircle';
import ScrollFadeIn from './ScrollFadeIn';

export default function HomePage() {
  return (
    <div>
      <div className="relative overflow-x-clip">
        <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-1/2 -translate-y-1/2 right-[-200px]" />
        <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bottom-[-20rem] left-[-20rem]" />
        <Hero />
      </div>
      <WhatWeBuildSection />
      <EngagementModelsSection />
      <IndustriesWeServeSection />
      <ReliableWorkflowsSection />
      <EngineeringProcessSection />
      <CaseStudiesSection />
      <FAQPreview />
      <GetAQuote />
    </div>
  );
}
