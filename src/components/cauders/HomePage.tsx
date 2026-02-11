
'use client';

import Hero from '@/components/cauders/Hero';
import WhyChooseUs from './WhyChooseUs';
import ServicesPreview from './ServicesPreview';
import HomePageContact from './HomePageContact';
import PortfolioSection from './PortfolioSection';
import FAQPreview from './FAQPreview';
import MobilePortfolio from './MobilePortfolio';
import Testimonials from './Testimonials';
import GetAQuote from './GetAQuote';
import BlurCircle from './BlurCircle';
import ScrollFadeIn from './ScrollFadeIn';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative">
        <BlurCircle className="w-96 h-96 top-1/2 -translate-y-1/2 right-0" />
        <BlurCircle className="w-96 h-96 bottom-[-10rem] left-[-10rem]" />
        <Hero />
      </div>
      <ScrollFadeIn>
        <WhyChooseUs />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ServicesPreview />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <div className="relative">
          <BlurCircle className="w-96 h-96 top-0 right-0" />
          <HomePageContact />
        </div>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <PortfolioSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <FAQPreview />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <div className="relative">
          <BlurCircle className="w-96 h-96 bottom-[-10rem] right-[-10rem]" />
          <MobilePortfolio />
        </div>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Testimonials />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <GetAQuote />
      </ScrollFadeIn>
    </div>
  );
}
