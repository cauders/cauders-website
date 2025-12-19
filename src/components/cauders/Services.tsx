
'use client';

import { getServices } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import WhyChooseUs from './WhyChooseUs';
import Image from 'next/image';
import StandardizedHeading from './StandardizedHeading';
import GradientContainer from './GradientContainer';
import GetAQuote from './GetAQuote';
import ArrowBadge from './ArrowBadge';
import { Building, Factory, Globe, Network, Component, Shield } from 'lucide-react';
import LogoLoop from './LogoLoop';
import { Card } from "@/components/ui/card";
import ScrollFadeIn from './ScrollFadeIn';
import IndustriesServed from './IndustriesServed';
import OurProcess from './OurProcess';
import { cn } from '@/lib/utils';
import BlurCircle from './BlurCircle';
import placeholderImages from '@/lib/placeholder-images.json';


const iconLogos = [
    { node: <Building className="w-12 h-12 text-white opacity-70" /> },
    { node: <Factory className="w-12 h-12 text-white opacity-70" /> },
    { node: <Globe className="w-12 h-12 text-white opacity-70" /> },
    { node: <Network className="w-12 h-12 text-white opacity-70" /> },
    { node: <Component className="w-12 h-12 text-white opacity-70" /> },
    { node: <Shield className="w-12 h-12 text-white opacity-70" /> },
];


export default function Services() {
  const services = getServices();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="services-hero" className="h-auto py-24 md:h-screen md:py-0 flex items-center justify-center relative">
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/background/overlay-bg-3.svg"
              alt="background overlay"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/background/overlay-bg-2.svg"
              alt="background overlay"
              width={500}
              height={500}
              className="w-1/2 h-auto absolute -top-48 -left-48 object-cover"
            />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <StandardizedHeading lines={["Powering Sustainable Business Growth with Digital Solutions"]} />
            <p className="mt-4 text-xs md:text-sm text-foreground/70 max-w-xl mx-auto">
              We deliver cutting-edge web development, mobile apps, and AI integrations, all designed for sustainable growth and market leadership.
            </p>
            <div className="mt-8">
              <Button asChild variant="zinc" size="zinc">
                <Link href="#services-list">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
       <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GradientContainer className="py-8 md:py-12 rounded-3xl" imageSrc="">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-center text-2xl md:text-4xl font-medium text-white mb-4 max-w-xl mx-auto">Trusted by Industry Innovators</h3>
              <p className="text-center text-sm text-white/80 max-w-lg mx-auto mb-8">
                Our commitment to excellence has earned the trust of forward-thinking companies who rely on us for transformative digital solutions.
              </p>
              <div style={{ height: 'auto', position: 'relative', overflow: 'hidden' }}>
                 <LogoLoop
                    logos={iconLogos}
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={80}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="transparent"
                    ariaLabel="Technology partners"
                />
              </div>
            </div>
          </GradientContainer>
        </div>
      </section>

      <section id="services-list" className="py-16 md:py-20 lg:py-32 relative">
          <BlurCircle className="w-96 h-96 top-0 -left-48" />
          <BlurCircle className="w-96 h-96 bottom-1/4 right-0" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 md:mb-20">
                  <ArrowBadge href="/services" text="Our Services" variant="black" />
                  <StandardizedHeading lines={["Our Core Capabilities"]} />
                  <p className="mt-4 text-sm text-foreground/70 max-w-2xl mx-auto">
                      We deliver comprehensive digital solutions, from web and mobile development to advanced AI integrations, all tailored to elevate your business.
                  </p>
              </div>

              <div className="space-y-16">
                  {services.map((service, index) => (
                      <ScrollFadeIn key={service.slug} style={{ animationDelay: `${index * 100}ms`}}>
                          <Card
                              className={cn(
                                  "w-full bg-card shadow-smooth-lift rounded-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden border border-transparent hover:border-primary transition-colors"
                              )}
                          >
                              <div className="relative z-10">
                                  <div className="flex justify-between items-start mb-4">
                                      <h3 className="text-2xl md:text-3xl font-normal text-foreground">{service.title}</h3>
                                      <span className="text-2xl md:text-3xl font-normal text-foreground/20">
                                          {String(index + 1).padStart(2, '0')}
                                      </span>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
                                      <div className="flex flex-col">
                                          <div className="text-sm text-foreground/80 space-y-4">
                                              <p>{service.description}</p>
                                              <div dangerouslySetInnerHTML={{ __html: service.details }} />
                                          </div>
                                          <div className="mt-auto pt-12">
                                              <Button asChild variant="zinc" size="zinc">
                                                  <Link href="/contact">
                                                      {service.ctaText}
                                                  </Link>
                                              </Button>
                                          </div>
                                      </div>
                                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                          <Image
                                              src={placeholderImages.services[service.slug as keyof typeof placeholderImages.services]?.imageUrl || `https://picsum.photos/seed/${service.slug}/800/600`}
                                              alt={service.title}
                                              fill
                                              className="object-cover"
                                              data-ai-hint="business meeting"
                                          />
                                      </div>
                                  </div>
                              </div>
                          </Card>
                      </ScrollFadeIn>
                  ))}
              </div>
          </div>
      </section>
        
        <IndustriesServed />
        <OurProcess />
        <WhyChooseUs />
        <GetAQuote />
    </div>
  );
}
