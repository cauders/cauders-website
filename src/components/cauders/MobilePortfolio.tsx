
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
            <StandardizedHeading lines={["Let Cauders Simplify Your Digital Workflow"]} className="text-3xl sm:text-4xl md:text-5xl" />
            <p className="mt-4 text-sm text-foreground/70">
              We design and develop intuitive mobile applications that consolidate your tools, streamline processes, and empower you to manage your business with unparalleled efficiency.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="relative mt-16">
            <ScrollFadeIn>
                <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] w-full max-w-6xl mx-auto">
                    <Image
                        src={placeholderImages.mobilePortfolio.screen4.imageUrl}
                        alt="Mobile App Collage"
                        fill
                        className="object-contain"
                        data-ai-hint={placeholderImages.mobilePortfolio.screen4.aiHint}
                    />
                </div>
            </ScrollFadeIn>
          
            {/* Overlay Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                    {cards.map((card, index) => {
                        const positions = [
                            "top-1/4 left-0 -translate-x-1/4", // Top-left
                            "bottom-1/4 right-0 translate-x-1/4", // Bottom-right
                            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" // Center
                        ]
                        if (index == 2) return null;
                         return (
                            <ScrollFadeIn key={index} className={cn("absolute w-64 hidden lg:block", positions[index])} style={{animationDelay: `${index * 150}ms`}}>
                                <Card className="p-6 rounded-2xl bg-primary/80 backdrop-blur-md border-0 text-primary-foreground shadow-2xl group">
                                <p className="text-xs font-light text-primary-foreground/80">{card.description}</p>
                                <h3 className="text-xl font-bold mt-2 text-white">{card.title}</h3>
                                <Link href={card.href} className="absolute top-4 right-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                                    <ArrowUpRight className="w-5 h-5 text-primary" />
                                    </div>
                                </Link>
                                </Card>
                            </ScrollFadeIn>
                        )}
                    )}
                </div>
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
