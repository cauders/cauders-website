'use client';

import Hero from '@/components/cauders/Hero';
import WhyChooseUs from './WhyChooseUs';
import HomePageBackground from './HomePageBackground';
import ServicesPreview from './ServicesPreview';

export default function HomePage() {
  return (
    <>
      <HomePageBackground />
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
    </>
  );
}
