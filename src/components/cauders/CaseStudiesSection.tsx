'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import DarkTealButton from './DarkTealButton';
import {
  ArrowRight,
  Building2,
  Globe,
  Cpu,
  Smartphone,
  Layers,
  Activity,
  LucideIcon,
} from 'lucide-react';

export interface CaseStudyItem {
  id: string;
  domain: string;
  capability: string;
  title: string;
  subtitle?: string;
  description: string;
  outcome: string;
  clientName: string;
  isNda: boolean;
  deliveryTier?: string;
  icon?: LucideIcon;
  link: string;
}

export const defaultCaseStudies: CaseStudyItem[] = [
  {
    id: 'nordic-ecommerce-storefront',
    deliveryTier: 'tier-3',
    domain: 'Retail & E-Commerce',
    capability: 'Storefront Engineering & Headless Commerce',
    title: 'How We Helped a Nordic Retailer Contribute to a 10% Sales Increase with a Faster Storefront',
    description:
      'Modern Next.js storefront overhaul, optimistic Add-to-Cart state updates cutting wait times by 200ms, and containerized Node.js/TypeScript REST API on Kubernetes.',
    outcome: '+10% sales contribution with -200ms cart interaction latency',
    clientName: 'Nordic Direct-to-Consumer Retailer',
    isNda: true,
    icon: Globe,
    link: '/case-studies/nordic-ecommerce-storefront',
  },
  {
    id: 'telecom-core-infrastructure-portal',
    deliveryTier: 'tier-2',
    domain: 'Enterprise Systems & Telecom',
    capability: 'Enterprise Web Engineering & Core System Integration',
    title: 'Unifying Digital Customer Services Post-Merger for a National Telecom Leader',
    description:
      'Engineered high-availability customer portal connected safely to legacy core telecom infrastructure via asynchronous Node.js buffering, real-time eKYC, and hardware checkout.',
    outcome: 'Unified SIM/eSIM onboarding journeys across merged subscriber cohorts',
    clientName: 'Tier-1 Telecommunications Operator',
    isNda: true,
    icon: Building2,
    link: '/case-studies/telecom-core-infrastructure-portal',
  },
  {
    id: 'smart-building-proptech-platform',
    deliveryTier: 'tier-2',
    domain: 'PropTech & Enterprise IoT',
    capability: 'Platform Engineering & IoT Integration',
    title: 'Optimizing an Enterprise Smart Building & Workplace SaaS Platform Across 36,000+ Devices',
    description:
      'White-labeled platform optimization: S3 file caching cutting DB load by 80–95%, SAML 2.0 enterprise SSO on AWS Lambda, and 300+ remediated security vulnerabilities.',
    outcome: '80–95% reduction in database read load and 300+ remediated vulnerabilities across 36,000+ IoT devices',
    clientName: 'Commercial PropTech Provider',
    isNda: true,
    icon: Cpu,
    link: '/case-studies/smart-building-proptech-platform',
  },
  {
    id: 'global-language-exchange-platform',
    deliveryTier: 'tier-2',
    domain: 'Consumer Mobile & Real-Time Communication',
    capability: 'Mobile Product Engineering & Asynchronous Translation',
    title: 'Scaling a Real-Time Cultural Exchange & Language Learning Platform to 1M+ Downloads',
    subtitle: 'Decoupled asynchronous neural translation workers, high-concurrency WebSockets, and cultural matchmaking.',
    description:
      'Engineered cross-platform Flutter Android application with decoupled asynchronous translation queues, real-time WebSockets, and privacy-preserving friend discovery.',
    outcome: '1M+ Google Play downloads with 4.6/5 rating across 379K+ reviews',
    clientName: 'Global Consumer Mobile Publisher',
    isNda: true,
    icon: Smartphone,
    link: '/case-studies/global-language-exchange-platform',
  },
  {
    id: 'social-commerce-fashion-discovery',
    deliveryTier: 'tier-3',
    domain: 'Fashion-Tech & Social Commerce',
    capability: 'Mobile Engineering & AI Commerce Integration',
    title: 'Unifying AI-Assisted Virtual Styling, Digital Wardrobes, and Shop the Look Commerce',
    description:
      'Mobile fashion and social discovery application combining AI Virtual Try-On, computer vision wardrobe tagging, and Shop the Look linked directly to checkout.',
    outcome: '95.9% crash-free session rate and 40% Daily Active User retention',
    clientName: 'Fashion-Tech Social Commerce Venture',
    isNda: true,
    icon: Layers,
    link: '/case-studies/social-commerce-fashion-discovery',
  },
  {
    id: 'api-marketplace-developer-gateway',
    deliveryTier: 'tier-4',
    domain: 'B2B Developer Tools & API Infrastructure',
    capability: 'API Gateway Engineering & Developer Enablement',
    title: 'Accelerating Developer Integration with an Interactive API Marketplace & Gateway',
    description:
      'Centralized developer portal with in-browser interactive testing playground, sub-millisecond Redis rate-limiting, and auto-generated multi-language SDK snippets.',
    outcome: 'Sub-50ms routing latency and 90% gateway uptime under stress testing',
    clientName: 'B2B Developer Infrastructure Platform',
    isNda: true,
    icon: Activity,
    link: '/case-studies/api-marketplace-developer-gateway',
  },
  {
    id: 'on-demand-delivery-marketplace',
    deliveryTier: 'tier-2',
    domain: 'Food Delivery & Multi-Role Logistics',
    capability: 'Modular Role-Based Architecture & Real-Time Logistics',
    title: 'Consolidating Multi-Role Commerce, Restaurant Discovery, and Live Delivery Dispatch',
    description:
      'Modular role-based Flutter platform consolidation (AaharCart) with synchronized ordering, merchant operations, and live GPS dispatch matching.',
    outcome: 'Consolidated 3 separate apps into 1 modular role-based commerce platform',
    clientName: 'Regional On-Demand Delivery Network',
    isNda: true,
    icon: Globe,
    link: '/case-studies/on-demand-delivery-marketplace',
  },
  {
    id: 'cognitive-fitness-gamified-platform',
    deliveryTier: 'tier-3',
    domain: 'Health-Tech & Gamified Social',
    capability: 'Mobile Engineering & Offline-First State Synchronization',
    title: 'Offline-Resilient Cognitive Training & Social Wellness Mobile Application',
    description:
      'Cross-platform Flutter application with local SQLite caching for zero-connectivity brain training, synchronized leaderboards, and high-frequency telemetry.',
    outcome: '+40% 30-day retention lift and 1,000+ daily workouts via local-first caching',
    clientName: 'Cognitive Health & Wellness Startup',
    isNda: true,
    icon: Activity,
    link: '/case-studies/cognitive-fitness-gamified-platform',
  },
  {
    id: 'self-hosted-streaming-platform',
    deliveryTier: 'tier-3',
    domain: 'Media & Digital Entertainment',
    capability: 'Edge Infrastructure & Streaming Architecture',
    title: 'High-Performance Self-Hosted Streaming Architecture with Edge Reverse Proxy',
    description:
      'Ultra-lean Bun runtime on AWS EC2 paired with global React frontend on Vercel and edge reverse proxy to shield requests from third-party rate blocks.',
    outcome: '+50% UX improvement via low-cost self-hosted architecture and reverse-proxy routing',
    clientName: 'Community-Driven Digital Media Project',
    isNda: true,
    icon: Globe,
    link: '/case-studies/self-hosted-streaming-platform',
  },
  {
    id: 'contracting-service-portal',
    deliveryTier: 'tier-3',
    domain: 'Local Services & Digital Marketing',
    capability: 'Web Performance & Local Search Architecture',
    title: 'High-Conversion Digital Showroom & Local SEO Lead Engine for Specialty Contractors',
    description:
      'Tailored WordPress platform with interactive before-and-after renovation galleries, local schema markup, and streamlined in-home estimate scheduling funnels.',
    outcome: 'Increased inbound consultation lead flow and interactive digital showroom bookings',
    clientName: 'Specialized Home Remodeling Contractor',
    isNda: true,
    icon: Building2,
    link: '/case-studies/contracting-service-portal',
  },
];

interface CaseStudiesSectionProps {
  id?: string;
  badgeText?: string;
  headingLines?: string[];
  subheading?: string;
  caseStudies?: CaseStudyItem[];
  className?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CaseStudiesSection({
  id = 'case-studies',
  badgeText = 'Case Studies',
  headingLines = [
    'How We Turn Requirements',
    '<span class="text-cyan-gradient font-medium inline-block">Into Working Solutions</span>',
  ],
  subheading = 'Documented engineering outcomes, platform modernizations, and deployed production solutions delivered across complex operational environments.',
  caseStudies = defaultCaseStudies,
  className = '',
  ctaText = 'View All Case Studies',
  ctaHref = '/case-studies',
}: CaseStudiesSectionProps) {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section
      id={id}
      className={`relative z-10 w-full py-16 sm:py-20 md:py-28 bg-transparent text-foreground overflow-hidden ${className}`}
    >
      {/* Section Header: Standard container with matching page padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <ScrollFadeIn>
              <ArrowBadge
                href={`#${id}`}
                text={badgeText}
                variant="black"
                className="mb-4"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <SectionHeading
                lines={headingLines}
                align="left"
                className="mb-0"
              />
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn
            delay={150}
            className="flex flex-col items-start md:items-end gap-4 max-w-md"
          >
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed font-normal md:text-right">
              {subheading}
            </p>
            {ctaHref && (
              <DarkTealButton href={ctaHref} size="md">
                {ctaText}
              </DarkTealButton>
            )}
          </ScrollFadeIn>
        </div>
      </div>

      {/* Case Studies Carousel Slider: True Edge-to-Edge Screen Width, Automatic Sliding, Generous Card Width */}
      <div className="w-full relative">
        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent
            wrapperClassName="overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 px-4 sm:px-6 lg:px-8"
            className="-ml-4 sm:-ml-6"
          >
            {caseStudies.map((study) => (
              <CarouselItem
                key={study.id}
                className="pl-4 sm:pl-6 md:basis-[60%] lg:basis-[48%] xl:basis-[42%]"
              >
                <div suppressHydrationWarning className="group rounded-3xl bg-white text-zinc-900 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-7 sm:p-9 lg:p-10 flex flex-col justify-between transition-all duration-300 h-full border border-zinc-100/80">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 bg-zinc-100/90 border border-zinc-200/60">
                        {study.domain}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#09555A] bg-[#09555A]/10 border border-[#09555A]/20">
                        {study.capability}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-black tracking-tight mb-3 leading-snug group-hover:text-[#09555A] transition-colors duration-200">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                      {study.description}
                    </p>

                  </div>

                  {/* Card Footer: View Link */}
                  <div className="flex items-center justify-end pt-6 border-t border-zinc-100 mt-auto">
                    <Link
                      href={study.link || '/case-studies'}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#09555A] hover:text-[#003B38] transition-colors"
                    >
                      View Case Study{' '}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex justify-center gap-3">
            <CarouselPrevious className="static -translate-x-0 bg-card border-border text-foreground hover:bg-muted" />
            <CarouselNext className="static translate-x-0 bg-card border-border text-foreground hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
