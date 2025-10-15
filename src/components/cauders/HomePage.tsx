'use client';

import Hero from '@/components/cauders/Hero';
import ServicesPreview from '@/components/cauders/ServicesPreview';
import PortfolioSection from './PortfolioSection';
import Testimonials from './Testimonials';
import StickyScrollText from './StickyScrollText';
import Contact from './Contact';
import Footer from './Footer';
import HomePageBackground from './HomePageBackground';

export default function HomePage() {
  return (
    <div className="relative">
      <HomePageBackground />
      <div className="relative z-10">
        <Hero />
        <ServicesPreview />
        <PortfolioSection />
        <Testimonials />
        <StickyScrollText />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
