
"use client";

import Hero from '@/components/cauders/Hero';
import PortfolioSection from '@/components/cauders/PortfolioSection';
import StickyScrollText from '@/components/cauders/StickyScrollText';
import ServicesPreview from '@/components/cauders/ServicesPreview';
import Testimonials from './Testimonials';
import ScrollFadeIn from './ScrollFadeIn';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StickyScrollText />
      <ServicesPreview />
      <PortfolioSection />
      <Testimonials />
    </>
  );
}
