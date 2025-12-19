
'use client';

import { Rocket, Building, Briefcase } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import StandardizedHeading from './StandardizedHeading';
import ServiceCard from './ServiceCard';
import BlurCircle from './BlurCircle';

const industries = [
  {
    icon: Rocket,
    title: 'Entrepreneurs & Startups',
    description: 'Navigate growth with digital clarity. We help founders launch MVPs, manage scalability, and align tech with investor expectations.',
  },
  {
    icon: Building,
    title: 'Corporates & Institutions',
    description: 'Support large-scale digital transformation, enterprise-grade app development, and data optimization with structured, secure solutions.',
  },
  {
    icon: Briefcase,
    title: 'Small & Medium Enterprises',
    description: 'Streamline operations, improve efficiency, and unlock growth opportunities with strategic digital tools and tailored web presence.',
  },
];

export default function IndustriesServed() {
  return (
    <section className="py-16 md:py-20 lg:py-32 relative">
      <BlurCircle className="w-96 h-96 top-0 -right-48" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1">
                <ScrollFadeIn direction="left">
                    <ArrowBadge href="#" text="Industries We Serve" variant="black" />
                    <StandardizedHeading lines={[
                        { text: "Tailored Digital Solutions for Every Client Type" }
                    ]} />
                </ScrollFadeIn>
            </div>
            <div className="md:col-span-1">
                 <ScrollFadeIn direction="right">
                    <p className="text-sm text-foreground/70 max-w-lg">
                        Whether you're launching a startup, scaling an enterprise, or optimizing an established business—Cauders delivers insight-driven digital strategies that fit your world.
                    </p>
                </ScrollFadeIn>
            </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <ScrollFadeIn key={index} style={{ animationDelay: `${index * 150}ms` }} className="h-full">
              <ServiceCard
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
