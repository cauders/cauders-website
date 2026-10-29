'use client';

import ScrollFadeIn from "./ScrollFadeIn";
import StandardizedHeading from "./StandardizedHeading";
import ArrowBadge from "./ArrowBadge";
import GradientContainer from "./GradientContainer";
import InfoCard from "./InfoCard";
import { Button } from "../ui/button";
import Link from 'next/link';
import { 
  Blocks, 
  BrainCircuit, 
  RefreshCw, 
  Layers, 
  Compass, 
  Users 
} from 'lucide-react';

const coreServices = [
  {
    title: 'Digital Product Engineering',
    description: 'Custom software, web applications, and multi-tenant platforms engineered around your specific operational workflows, user needs, and long-term business scale.',
    icon: Blocks,
    href: '/services/software-solutions/custom-software-development',
  },
  {
    title: 'AI & Automation',
    description: 'Practical AI models and intelligent workflow automations designed to eliminate operational bottlenecks, streamline decision-making, and automate repetitive tasks directly within your live systems.',
    icon: BrainCircuit,
    href: '/ai/ai-product-engineering/custom-ai-development',
  },
  {
    title: 'Platform Modernization',
    description: 'Refactoring legacy codebases, migrating legacy infrastructure to resilient cloud architectures, and optimizing data flows for high-availability reliability and sustained scalability.',
    icon: RefreshCw,
    href: '/services/cloud-digital-transformation/cloud-transformation',
  },
  {
    title: 'SaaS Product Engineering',
    description: 'Multi-tenant cloud architectures, subscription billing engines, and enterprise-grade security engineered to help software companies launch, scale, and maintain high-performing SaaS products.',
    icon: Layers,
    href: '/services/software-solutions/saas-development',
  },
  {
    title: 'Technical Consulting',
    description: 'Strategic technology advisory covering software architecture reviews, system feasibility, cloud governance, and technical roadmapping to ensure confident, derisked execution.',
    icon: Compass,
    href: '/services/cloud-digital-transformation/digital-consulting-strategy',
  },
  {
    title: 'Dedicated Engineering Teams',
    description: 'High-caliber, embedded engineering squads that integrate directly into your workflows, bringing full-stack capabilities, disciplined delivery, and accelerated development velocity.',
    icon: Users,
    href: '/services/staff-augmentation/staff-augmentation-offshoring',
  },
];

export default function ServicesPreview() {
  return (
    <section id="services-preview">
      <GradientContainer className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
              <ScrollFadeIn>
                <ArrowBadge href="/services" text="Our Services" />
              </ScrollFadeIn>
              <StandardizedHeading lines={["Software Built Around Your Business"]} className="text-background" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service, index) => (
              <ScrollFadeIn key={service.title} delay={index * 80} className="h-full">
                <InfoCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  ctaText="Learn More"
                  ctaHref={service.href}
                  lineClamp="none"
                />
              </ScrollFadeIn>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </GradientContainer>
    </section>
  );
}
