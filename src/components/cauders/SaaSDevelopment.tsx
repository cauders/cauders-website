'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CloudCog,
  Layout,
  Layers,
  Sparkles,
  ChevronDown,
  Cpu,
  ShieldCheck,
  Users,
  CreditCard,
  Globe,
  RefreshCw,
  Rocket,
  CheckCircle2,
  Workflow,
  BarChart3,
  Server,
  Building2,
} from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import SectionHeading from './SectionHeading';
import CaseStudiesSection from './CaseStudiesSection';
import DarkTealButton from './DarkTealButton';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollSpyItem from './ScrollSpyItem';
import GeometricZincContainer from './GeometricZincContainer';
import FAQPreview, { FAQ } from './FAQPreview';
import GetAQuote from './GetAQuote';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

interface SaaSDevelopmentProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const saasDeliverablesData = [
  {
    title: 'Defined Product Scope',
    items: [
      'Agreed features and functionality',
      'Product workflows and requirements',
      'Technical scope and priorities',
    ],
  },
  {
    title: 'Working SaaS Functionality',
    items: [
      'Product features developed to the agreed scope',
      'Required user access and workflows',
      'Agreed integrations and data flows',
    ],
  },
  {
    title: 'QA & Validation',
    items: [
      'Testing of critical product workflows',
      'Validation of access rules and integrations',
      'Identified issues addressed against agreed criteria',
    ],
  },
  {
    title: 'Technical Handover',
    items: [
      'Relevant technical documentation',
      'Agreed deployment and access information',
      'Handover of the delivered product and related materials',
    ],
  },
  {
    title: 'Ongoing Product Evolution',
    items: [
      'Ongoing maintenance and issue resolution',
      'Further feature development and scaling',
      'Platform foundation enhancements as roadmap evolves',
    ],
  },
];

const saasApproachSteps = [
  {
    number: '01',
    title: 'Understand the Product & Business Model',
    description:
      'We establish what the product needs to accomplish, who it serves, how customers will use it, and which business requirements shape its functionality. We map operational needs and customer value touchpoints to ensure development directly supports your go-to-market model.',
    establishes: 'A shared understanding of the product, its users, and the requirements guiding development.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Plan the Scope & Architecture',
    description:
      'We define the initial feature scope, map key user journeys, determine the platform structure, and identify the integrations and data requirements. Multi-tenancy, billing logic, and technical dependencies are structured prior to coding.',
    establishes: 'A clear plan for the product functionality and technical foundations needed.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'We develop the agreed product features, implement user workflows, and connect the required services and systems. Clean full-stack code, secure role-based access, and reliable third-party APIs are unified into a scalable platform.',
    establishes: 'Working SaaS functionality aligned with the agreed scope and product requirements.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Validate & Prepare for Deployment',
    description:
      'We validate key workflows, access rules, integrations, and relevant data handling, address identified issues, and prepare the agreed deployment and handover materials for live production and client onboarding.',
    establishes: 'A reviewed product prepared for the agreed release and handover process.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

const saasFaqs: FAQ[] = [
  {
    question: 'Can you develop a SaaS product from an idea?',
    answer:
      'Yes. We can work from your product concept and business requirements to define the functionality, scope, and technical approach before development begins.',
  },
  {
    question: 'Can you extend or modernize an existing SaaS platform?',
    answer:
      'Yes. We can assess existing functionality, architecture, integrations, and product requirements to define the work needed to extend or improve the platform.',
  },
  {
    question: 'Does every SaaS product need a multi-tenant architecture?',
    answer:
      "No. The right architecture depends on the product's customer model, data requirements, access structure, and operational needs. Tenant separation should be designed around how the service will operate.",
  },
  {
    question: 'Can you integrate subscriptions and payment services?',
    answer:
      'We can develop the required subscription functionality and integrate suitable payment services based on the business model, available APIs, and technical requirements.',
  },
  {
    question: 'How do you approach data security in a SaaS product?',
    answer:
      'We consider access controls, data separation where applicable, information handling, and relevant application risks as part of the technical design and validation process.',
  },
  {
    question: 'Can you support the product after delivery?',
    answer:
      'Ongoing maintenance, issue resolution, and incremental improvements can be agreed as part of a continuing engagement.',
  },
  {
    question: 'How long does SaaS development take?',
    answer:
      'Timelines depend on the product scope, functionality, integrations, architectural requirements, and review process. A practical delivery plan can be established once the scope is understood.',
  },
];

export default function SaaSDevelopment({
  badge = 'DIGITAL PRODUCT ENGINEERING',
  badgeHref = '#overview',
  className,
}: SaaSDevelopmentProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);

  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[630px] sm:min-h-[690px] lg:min-h-[770px] xl:min-h-[830px] bg-transparent flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background image container: right-aligned with seamless blending spanning full height */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] xl:w-[64%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792821543/SaaS_Development_kctdu4.jpg"
            alt="SaaS Development"
            className="w-full h-full object-cover object-right max-w-none opacity-90 lg:opacity-100 scale-100 lg:scale-105 origin-right"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,1) 28%), linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,1) 28%), linear-gradient(to bottom, black 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}
          loading="lazy" decoding="async" />
        </div>

        {/* Content on the left side of the hero */}
        <div className="relative z-10 w-full">
          <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              {/* Eyebrow / ArrowBadge */}
              <ScrollFadeIn>
                <ArrowBadge
                  href={badgeHref}
                  text={badge}
                  variant="black"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              {/* SectionHeading */}
              <SectionHeading
                as="h1"
                lines={[
                  'SaaS <span class="text-cyan-gradient font-medium inline-block">Development</span>',
                ]}
                subheading="We design and develop SaaS products around your business model, customer needs, and product requirements—bringing together the functionality, integrations, and platform foundations your service needs."
                align="left"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-5 sm:mb-8"
                className="mb-0"
              />

              {/* CTA Button */}
              <ScrollFadeIn delay={250}>
                <div className="pt-1">
                  <DarkTealButton href="/contact" size="md">
                    Discuss a Project
                  </DarkTealButton>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. OVERLAPPING BANNER DIRECTLY BELOW HERO ================= */}
      <div className="relative z-20 w-full -mt-10 sm:-mt-16 lg:-mt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[95rem] mx-auto">
          <ScrollFadeIn direction="up" delay={300}>
            <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,45,40,0.22)]">
              <img
                src="https://res.cloudinary.com/cauders/image/upload/v1792756273/Frame_4661_c7d5nj.png"
                alt="Build a SaaS Product Around Your Business Model"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-6 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      Build a SaaS Product Around Your Business Model
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-5 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Its features, user experience, access model, and underlying systems need to support how you deliver recurring value to customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= 3. WHEN SAAS DEVELOPMENT MAKES SENSE ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'When <span class="text-cyan-gradient font-medium inline-block">SaaS Development</span> Makes Sense',
            ]}
            subheading="Building or scaling a software-as-a-service product is an essential milestone when turning business capability into recurring value."
            align="center"
            subheadingMaxWidth="max-w-4xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-4xl mx-auto"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[95rem] mx-auto pt-6 items-start">
            {/* Card 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Rocket className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                You&apos;re Building A Software<br className="hidden sm:inline" /> Product For Customers
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                You have a product concept or business model that requires dedicated software functionality and an ongoing customer experience.
              </p>
            </ScrollFadeIn>

            {/* Card 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <RefreshCw className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Existing Product<br className="hidden sm:inline" /> Needs To Evolve
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                You need new features, integrations, or a stronger technical foundation to support changing product requirements.
              </p>
            </ScrollFadeIn>

            {/* Card 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <ShieldCheck className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Service Needs<br className="hidden sm:inline" /> Structured Customer Access
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Different customers, organizations, or user roles need access to defined features, information, or workflows.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 4. SAAS PRODUCTS & CAPABILITIES WE DEVELOP ================= */}
      <section id="application-types" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
            {/* Left Column (Sticky Heading) */}
            <div className="lg:col-span-6 relative lg:sticky lg:top-32 h-fit self-start">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#application-types"
                    text="Product Capabilities"
                    variant="black"
                    className="mb-4"
                  />

                  <SectionHeading
                    lines={[
                      'SaaS Products <span class="text-cyan-gradient font-medium inline-block">We Develop</span>',
                    ]}
                    subheading="We develop SaaS products around the services you provide, the customers you serve, and the functionality your product requires."
                    align="left"
                    subheadingMaxWidth="max-w-2xl"
                    subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed font-normal mb-5 sm:mb-8"
                    className="mb-0"
                  />

                  <div className="pt-2">
                    <DarkTealButton href="/contact" size="md">
                      Discuss a Project
                    </DarkTealButton>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>

            {/* Right Column (Scrolling List with 3D Glass Graphics) */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Item 1: Customer-Facing SaaS Products */}
              <ScrollSpyItem>
                <div className="pb-8 lg:pb-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Customer-Facing SaaS Products
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Digital products that allow customers to access services, manage accounts, use product features, and interact with your business online.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792821552/Customer-Facing_SaaS_Products-Photoroom_ch5czr.png"
                      alt="Customer-Facing SaaS Products"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 2: Industry-Specific SaaS Solutions */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Industry-Specific SaaS Solutions
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Software products designed around specialized workflows, business rules, and requirements within a particular market or industry.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792821556/Industry-Specific_SaaS_Solutions-Photoroom_it2jd9.png"
                      alt="Industry-Specific SaaS Solutions"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 3: Business & Workflow Platforms */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Business &amp; Workflow Platforms
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      SaaS platforms that help organizations manage operational processes, information, tasks, and business workflows.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792821570/Business_Workflow_Platforms-Photoroom_ja9fw2.png"
                      alt="Business & Workflow Platforms"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 4: SaaS Product Extensions */}
              <ScrollSpyItem>
                <div className="pt-8 lg:pt-12 flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      SaaS Product Extensions
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      New features, integrations, and functionality that extend an existing product and support its evolving roadmap.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792821573/SaaS_Product_Extensions-Photoroom_iacyy8.png"
                      alt="SaaS Product Extensions"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. CORE PRODUCT FEATURES & INTEGRATIONS ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-transparent">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge href="#features" text="Capabilities" variant="black" className="mb-3 md:mb-4" />
            </ScrollFadeIn>
            <SectionHeading
              lines={[
                'Core Product <span class="text-cyan-gradient font-medium inline-block">Features</span> &amp; Integrations',
              ]}
              subheading="Build around the experience you want to deliver to customers and the functionality your business model requires."
              align="center"
              subheadingMaxWidth="max-w-5xl"
              subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-3 mb-0 max-w-5xl mx-auto"
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Users className="w-5 h-5 text-white" />,
                title: 'User Accounts & Permissions',
                desc: 'Organize access around customer accounts, user roles, and the responsibilities associated with each role.',
              },
              {
                icon: <CreditCard className="w-5 h-5 text-white" />,
                title: 'Plans & Subscription Functionality',
                desc: 'Support subscription tiers, plan-based access, and billing integrations when required by your product model.',
              },
              {
                icon: <Workflow className="w-5 h-5 text-white" />,
                title: 'Product Workflows & Dashboards',
                desc: 'Give users the functionality, information, and workflows they need to use your service effectively.',
              },
              {
                icon: <Globe className="w-5 h-5 text-white" />,
                title: 'APIs & System Integrations',
                desc: 'Connect the product to payment services, business platforms, external data sources, and other required systems.',
              },
              {
                icon: <BarChart3 className="w-5 h-5 text-white" />,
                title: 'Reporting & Data Management',
                desc: 'Support the collection, organization, and presentation of product and operational information.',
              },
              {
                icon: <Rocket className="w-5 h-5 text-white" />,
                title: 'Scalable Platform Architecture',
                desc: 'Engineered for high availability, multi-tenant isolation, automated provisioning, and future roadmap evolution.',
              },
            ].map((feature, idx) => (
              <ScrollFadeIn key={feature.title} delay={idx * 60} className="h-full">
                <div className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-card border-0 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col justify-start hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#09555A] flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-headline text-foreground mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. OUR APPROACH: FROM PRODUCT SCOPE TO DEPLOYMENT ================= */}
      <section id="our-approach" className="relative z-20 w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-gradient text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(140,234,229,0.2),transparent_70%)]"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#our-approach"
                text="Our Approach"
                variant="white"
                className="mb-3 md:mb-4"
              />
            </ScrollFadeIn>
            <SectionHeading
              lines={['From Product Scope To Deployment']}
              align="center"
              headingClassName="!text-white font-medium"
              className="mb-0"
            />
          </div>

          {/* 4 Interactive Accordion Cards */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {saasApproachSteps.map((step, idx) => {
              const isExpanded = activeApproachIndex === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveApproachIndex(idx)}
                  onClick={() => setActiveApproachIndex(idx)}
                  className={cn(
                    "w-full rounded-2xl sm:rounded-3xl bg-white text-zinc-900 cursor-pointer overflow-hidden shadow-[0_12px_45px_rgba(0,35,30,0.14)] transition-all duration-500 ease-out",
                    isExpanded 
                      ? "shadow-[0_20px_50px_rgba(0,35,30,0.22)]" 
                      : "hover:shadow-2xl"
                  )}
                >
                  {isExpanded ? (
                    <div className="relative min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between overflow-hidden">
                      <div className="pt-8 px-8 sm:pt-10 sm:px-10 lg:pt-11 lg:px-12 pb-6 max-w-xl sm:max-w-2xl lg:max-w-[46rem] z-20">
                        <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 mb-5 sm:mb-6 lg:mb-7 block select-none tracking-tight">
                          {step.number}
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold font-headline text-black tracking-tight mb-3 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="w-full bg-[#F8F8F8] px-8 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-6 z-10">
                        <div className="max-w-xl sm:max-w-2xl lg:max-w-[46rem]">
                          <span className="block text-xs sm:text-sm font-semibold text-[#09555A] mb-1 tracking-tight">
                            What this establishes:
                          </span>
                          <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
                            {step.establishes}
                          </p>
                        </div>
                      </div>

                      <div 
                        className="absolute top-0 right-0 bottom-0 w-[54%] sm:w-[56%] lg:w-[52%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-20"
                        style={{
                          WebkitMaskImage:
                            'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                          maskImage:
                            'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                        }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-contain object-right select-none pointer-events-none scale-105 sm:scale-100"
                          style={{
                            WebkitMaskImage:
                              'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                            maskImage:
                              'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                          }}
                        loading="lazy" decoding="async" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-24 sm:h-28 lg:h-32 flex items-center justify-between pr-8 sm:pr-10 lg:pr-12 overflow-hidden">
                      <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 h-full min-w-0">
                        <div 
                          className="h-full w-36 sm:w-44 lg:w-52 flex-shrink-0 flex items-center justify-start overflow-hidden"
                          style={{
                            WebkitMaskImage:
                              'linear-gradient(to right, #000 60%, rgba(0,0,0,0.6) 80%, transparent 100%)',
                            maskImage:
                              'linear-gradient(to right, #000 60%, rgba(0,0,0,0.6) 80%, transparent 100%)',
                          }}
                        >
                          <img
                            src={step.image}
                            alt=""
                            className="w-full h-full object-cover object-left select-none pointer-events-none scale-110"
                          loading="lazy" decoding="async" />
                        </div>
                        <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 select-none tracking-tight">
                          {step.number}
                        </span>
                        <h4 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight truncate">
                          {step.title}
                        </h4>
                      </div>

                      <div className="flex-shrink-0 text-zinc-300">
                        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75] transition-transform duration-300" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 7. SELECTED WORK (CASE STUDIES) ================= */}
            {/* ================= CASE STUDIES: REAL PRODUCTION OUTCOMES ================= */}
      <CaseStudiesSection
        badgeText="Selected Work"
        headingLines={["SaaS Products Built","<span class=\"text-cyan-gradient font-medium inline-block\">Around Real Requirements</span>"]}
        subheading="Explore how multi-tenant architectures, subscription infrastructure, and enterprise workflows power scalable software products."
      />

      {/* ================= 8. FOUR PILLARS: ARCHITECTURE, DATA & TENANT MANAGEMENT ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'Architecture, <span class="text-cyan-gradient font-medium inline-block">Data</span> &amp; Tenant Management',
            ]}
            subheading="The platform's underlying structure affects how customers access the service, how their information is managed, and how the product can evolve."
            align="center"
            subheadingMaxWidth="max-w-5xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-5xl mx-auto"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full pt-6 items-start">
            {/* Pillar 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-2 sm:px-4">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Cpu className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Product Architecture
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed w-full">
                Structure the application around its functionality, integrations, and anticipated product changes.
              </p>
            </ScrollFadeIn>

            {/* Pillar 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-2 sm:px-4 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Building2 className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Customer Management
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed w-full">
                Where a product serves multiple customer organizations, define how their accounts, permissions, and data are separated and managed.
              </p>
            </ScrollFadeIn>

            {/* Pillar 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-2 sm:px-4 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <ShieldCheck className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Data Security &amp; Access
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed w-full">
                Establish access controls and data-handling practices suited to the product&apos;s information, user roles, and operational requirements.
              </p>
            </ScrollFadeIn>

            {/* Pillar 4 */}
            <ScrollFadeIn delay={400} className="flex flex-col items-center text-center px-2 sm:px-4 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Server className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Scalability
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed w-full">
                Consider performance, system dependencies, and future development needs when making architectural decisions.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 9. DELIVERABLES: WHAT TO EXPECT FROM DELIVERY ================= */}
      <GeometricZincContainer zoomScale={1.3}>
        <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge
                href="#deliverables"
                text="Deliverables"
                variant="white"
                className="mb-3 md:mb-4"
              />
            </ScrollFadeIn>
            <SectionHeading
              lines={['What To Expect From Delivery']}
              subheading="The engagement defines what will be built, how it will be evaluated, and what your team receives."
              align="center"
              headingClassName="!text-white font-medium"
              subheadingClassName="!text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-4xl mx-auto mt-3 mb-0"
              subheadingMaxWidth="max-w-4xl"
              className="mb-0"
            />
          </div>

          {/* 6 Cards Grid with isolated backdrop blur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {saasDeliverablesData.map((item, idx) => (
              <ScrollFadeIn key={item.title} delay={idx * 80} className="h-full">
                <div className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-start h-full border-[0.5px] border-primary/40 hover:border-primary/90 transition-all duration-300 shadow-none hover:-translate-y-1 overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-black/[0.12] group-hover:bg-black/[0.18] transition-colors duration-300 pointer-events-none rounded-3xl"
                    style={{
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-semibold font-headline text-white tracking-tight mb-5 leading-snug">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.items.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white leading-relaxed font-normal">
                          <span className="text-primary font-bold select-none mt-0.5">&gt;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}

            {/* 6th Card: Plain solid white background */}
            <ScrollFadeIn delay={400} className="h-full">
              <div className="group relative rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full bg-white text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform-gpu transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="pointer-events-none absolute -bottom-4 -right-4 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-60 z-0 opacity-95 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="https://res.cloudinary.com/cauders/image/upload/v1792813715/Customer-Facing_Applications_unghui.jpg"
                    alt="SaaS Development"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain object-bottom-right"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold font-headline text-black tracking-tight mb-2 leading-tight">
                    Not Sure <span className="text-cyan-gradient font-semibold inline-block">What</span><br />
                    <span className="text-cyan-gradient font-semibold inline-block">You Need?</span>
                  </h3>
                </div>

                <div className="relative z-10 mt-6 sm:mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#09555A] hover:text-[#003B38] transition-colors whitespace-nowrap pb-1"
                  >
                    <span>Start A Conversation.</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </GeometricZincContainer>

      {/* ================= 10. FREQUENTLY ASKED QUESTIONS ================= */}
      <div id="faq">
        <FAQPreview faqs={saasFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 11. LET'S DISCUSS YOUR SAAS PRODUCT ================= */}
      <GetAQuote
        title="Let's Discuss Your SaaS Product"
        description="Tell us what your product needs to deliver, who it will serve, and how customers should use it."
        ctaText="Discuss a Project"
        ctaHref="/contact"
        contentMaxWidth="max-w-4xl"
        headingMaxWidth="max-w-3xl"
        subheadingMaxWidth="max-w-xl"
      />
    </div>
  );
}
