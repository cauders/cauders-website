"use client";

import Hero from '@/components/cauders/Hero';
import ServicesPreview from '@/components/cauders/ServicesPreview';
import PortfolioSection from './PortfolioSection';
import Testimonials from './Testimonials';
import StickyScrollText from './StickyScrollText';
import Contact from './Contact';
import Footer from './Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioSection />
      <Testimonials />
      <StickyScrollText />
      <Contact />
      <Footer />
    </>
  );
}
