'use client';

import Hero from '@/components/cauders/Hero';
import IntroSection from '@/components/cauders/IntroSection';
import ServicesPreview from '@/components/cauders/ServicesPreview';
import HomePageBackground from './HomePageBackground';

export default function HomePage() {
  return (
    <>
      <HomePageBackground />
      <Hero />
      <IntroSection />
      {/* <ServicesPreview /> */}
    </>
  );
}
