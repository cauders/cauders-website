
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
      <section className="py-20 lg:py-32 text-center bg-background">
        <ScrollFadeIn>
          <Button
            size="lg"
            asChild
            className="rounded-full px-8 py-6"
          >
            <Link href="/portfolio">
              Discover more of our work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollFadeIn>
      </section>
    </>
  );
}
