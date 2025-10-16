'use client';

import Hero from '@/components/cauders/Hero';
import WhyChooseUs from './WhyChooseUs';
import ServicesPreview from './ServicesPreview';
import HomePageContact from './HomePageContact';
import PortfolioSection from './PortfolioSection';
import FAQPreview from './FAQPreview';
import Footer from './Footer';
import MobilePortfolio from './MobilePortfolio';
import Testimonials from './Testimonials';
import GetAQuote from './GetAQuote';
import BlurCircle from './BlurCircle';

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <BlurCircle className="w-96 h-96 top-1/2 -translate-y-1/2 right-0" />
        <BlurCircle className="w-96 h-96 bottom-[-10rem] left-[-10rem]" />
        <Hero />
      </div>
      <WhyChooseUs />
      <ServicesPreview />
      <HomePageContact />
      <PortfolioSection />
      <FAQPreview />
      <MobilePortfolio />
      <Testimonials />
      <GetAQuote />
      <Footer />
    </>
  );
}
