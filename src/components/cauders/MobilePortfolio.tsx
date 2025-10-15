
'use client';

import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ScrollFadeIn from './ScrollFadeIn';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import placeholderImages from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';
import StandardizedHeading from './StandardizedHeading';

const features = [
  {
    title: 'Streamline Your Workflow',
    description: 'Manage your entire learning journey and career path from a single, intuitive interface.',
    imageUrl: placeholderImages.mobilePortfolio.screen1.imageUrl,
    aiHint: placeholderImages.mobilePortfolio.screen1.aiHint,
  },
  {
    title: 'Access All Courses',
    description: 'Explore over 20 creative fields and find the perfect course to kickstart your dream career.',
    imageUrl: placeholderImages.mobilePortfolio.screen2.imageUrl,
    aiHint: placeholderImages.mobilePortfolio.screen2.aiHint,
  },
  {
    title: 'Land Your Dream Job',
    description: 'Discover countless job opportunities tailored to your skillset, right from your device.',
    imageUrl: placeholderImages.mobilePortfolio.screen3.imageUrl,
    aiHint: placeholderImages.mobilePortfolio.screen3.aiHint,
  },
];

const cards = [
    {
        title: "Seamless Order Management",
        description: "Track and manage your orders effortlessly, from placement to completion, all in one place.",
        href: "/services/mobile-app-development"
    },
    {
        title: "Unified Digital Experience",
        description: "Integrate all your digital tools and workflows into a single, cohesive mobile platform.",
        href: "/services/erp-systems"
    },
     {
        title: "Actionable Insights",
        description: "Gain valuable insights from your data to make informed decisions and drive growth.",
        href: "/services/ai-integrations"
    }
]

export default function MobilePortfolio() {
  return (
    <section className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <StandardizedHeading lines={["Let Cauders Simplify Your Workflow"]} className="text-3xl sm:text-4xl md:text-5xl font-medium" />
            <p className="mt-4 text-sm text-foreground/70">
              We design and develop intuitive mobile applications that consolidate your tools and streamline your processes.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="min-h-[300px] bg-card rounded-2xl"></div>
            <div className="min-h-[300px] bg-card rounded-2xl"></div>
            <div className="min-h-[300px] bg-card rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-20 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <ScrollFadeIn key={index} className="flex flex-col items-center" style={{animationDelay: `${index * 150}ms`}}>
              <div className="relative w-full max-w-[250px] aspect-[9/19] mb-4">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  data-ai-hint={feature.aiHint}
                />
              </div>
              <p className="text-sm font-medium text-primary mt-2">{feature.description}</p>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
