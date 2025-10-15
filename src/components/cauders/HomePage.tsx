'use client';

import Hero from '@/components/cauders/Hero';
import WhyChooseUs from './WhyChooseUs';
import ServicesPreview from './ServicesPreview';
import HomePageContact from './HomePageContact';
import PortfolioSection from './PortfolioSection';
import FAQPreview from './FAQPreview';
import Footer from './Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <HomePageContact />
      <PortfolioSection />
      <FAQPreview />
      <Footer />
    </>
  );
}
