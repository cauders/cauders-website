'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Smartphone,
  Layers,
  Sparkles,
  ChevronDown,
  Compass,
  Cpu,
  ShieldCheck,
  Users,
  Bell,
  Globe,
  RefreshCw,
  Rocket,
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

interface MobileAppDevelopmentProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const mobileDeliverablesData = [
  {
    title: 'Defined Product Scope',
    items: [
      'Agreed features and product priorities',
      'Key user journeys and technical requirements',
      'Supported platforms and device profiles',
    ],
  },
  {
    title: 'Working Mobile Application',
    items: [
      'Mobile functionality built to the agreed scope',
      'Required backend and third-party integrations',
      'Interfaces shaped around the intended user experience',
    ],
  },
  {
    title: 'QA & Validation',
    items: [
      'Testing of critical user journeys across devices',
      'Validation of supported device capabilities & APIs',
      'Identified issues addressed against agreed criteria',
    ],
  },
  {
    title: 'Release & Handover',
    items: [
      'Agreed release preparation and deployment support',
      'Relevant technical and architecture documentation',
      'Handover of delivered application and source code',
    ],
  },
  {
    title: 'Ongoing Improvements',
    items: [
      'Post-launch maintenance and issue resolution',
      'Compatibility updates for new iOS / Android releases',
      'Iterative enhancements and feature scaling',
    ],
  },
];

const mobileApproachSteps = [
  {
    number: '01',
    title: 'Understand the Product & Users',
    description:
      'We establish the product goals, intended users, key tasks, business requirements, and systems the application needs to connect with. We map out the operational workflows and user scenarios that define daily usage, ensuring every functional touchpoint supports your real-world business objectives.',
    establishes: "A shared understanding of the app's purpose, audience, and essential functionality.",
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Plan & Design',
    description:
      'We define the feature scope, map user journeys, consider interface requirements, and choose an appropriate technical and platform approach. Our team creates intuitive wireframes and interactive prototypes that refine navigation, touch gestures, and visual consistency across all target device sizes.',
    establishes: 'A clear direction for the user experience, platform choices, and functionality to be developed.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'We develop the mobile application, implement its interfaces and features, and connect the required APIs, backend services, and third-party systems. Native and cross-platform modules are built with clean code, secure authentication, real-time data sync, and hardware capabilities like cameras and location services.',
    establishes: 'Working app functionality aligned with the agreed scope and product requirements.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Validate & Release',
    description:
      'We test critical user journeys, supported devices, integrations, and relevant application behaviour. We address identified issues, optimize performance, and prepare the agreed release and handover materials for App Store and Google Play submissions, ensuring a smooth transition to live deployment.',
    establishes: 'A reviewed application prepared for the agreed release process.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

const mobileAppFaqs: FAQ[] = [
  {
    question: 'Should we build for iOS, Android, or both?',
    answer:
      "That depends on your target users, product requirements, budget, and release priorities. We'll evaluate the platform options against the needs of the application.",
  },
  {
    question: 'Should we choose native or cross-platform development?',
    answer:
      'The decision depends on functionality, device capabilities, performance requirements, platform-specific needs, and long-term maintenance. The technical approach should fit the product rather than follow a default choice.',
  },
  {
    question: 'Can the app connect to our existing systems?',
    answer:
      'Yes. We can assess and implement integrations with existing platforms, APIs, backend services, and third-party tools, subject to their available interfaces, access, and technical constraints.',
  },
  {
    question: 'Can you handle UI/UX design and testing?',
    answer:
      'User journeys, interface design, and testing can be included according to the project scope. The approach is tailored to the intended users, application functionality, and supported devices.',
  },
  {
    question: 'Do you support app release and ongoing maintenance?',
    answer:
      'Release preparation, publishing support, and ongoing maintenance can be included according to the agreed engagement. Responsibilities and requirements for app-store accounts, submissions, updates, and post-release support should be defined during planning.',
  },
  {
    question: 'How long does mobile app development take?',
    answer:
      'Timelines depend on the functionality, supported platforms, integrations, testing requirements, and release process. Once the scope is established, we can discuss a practical delivery plan.',
  },
];

export default function MobileAppDevelopment({
  badge = 'DIGITAL PRODUCT ENGINEERING',
  badgeHref = '#overview',
  className,
}: MobileAppDevelopmentProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);

  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[630px] sm:min-h-[690px] lg:min-h-[770px] xl:min-h-[830px] bg-transparent flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background image container: right-aligned with seamless blending */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] xl:w-[64%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792818829/Mobile_App_Development_hmnsqm.jpg"
            alt="Mobile App Development"
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
                  'Mobile <span class="text-cyan-gradient font-medium inline-block">App</span>',
                  '<span class="text-cyan-gradient font-medium inline-block">Development</span>',
                ]}
                subheading="We design and develop mobile applications around your users, product requirements, and business workflows—making your services easier to access and your essential tasks easier to complete on the go."
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
                alt="Bring Your Product Closer to Your Users"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-5 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      Bring Your Product Closer To Your Users
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-6 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Give customers, employees, and partners a convenient way to access services, complete tasks, and interact with your business from their mobile devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= 3. WHEN A MOBILE APP MAKES SENSE ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'When A <span class="text-cyan-gradient font-medium inline-block">Mobile App</span> Makes Sense',
            ]}
            subheading="A mobile app is valuable when people need to use your product or service regularly, complete tasks while away from a desktop, or access capabilities that make sense within a dedicated mobile experience."
            align="center"
            subheadingMaxWidth="max-w-4xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-4xl mx-auto"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[95rem] mx-auto pt-6 items-start">
            {/* Card 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Smartphone className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Users Need Access<br className="hidden sm:inline" /> On The Go
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Customers or employees need to access information, complete tasks, or manage activities wherever their work takes them.
              </p>
            </ScrollFadeIn>

            {/* Card 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Compass className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Service Needs A<br className="hidden sm:inline" /> Dedicated Mobile Experience
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Your product requires mobile-specific interactions, personalized experiences, notifications, or features beyond what a standard website provides.
              </p>
            </ScrollFadeIn>

            {/* Card 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Cpu className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Product Relies On<br className="hidden sm:inline" /> Device Capabilities
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Your application needs to use capabilities such as the camera, location, notifications, or other device features to support its intended functionality.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 4. MOBILE APPLICATIONS WE DEVELOP ================= */}
      <section id="application-types" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
            {/* Left Column (Sticky Heading) */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 h-fit self-start">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#application-types"
                    text="Application Types"
                    variant="black"
                    className="mb-4"
                  />

                  <SectionHeading
                    lines={[
                      'Mobile Applications',
                      '<span class="text-cyan-gradient font-medium inline-block">We Develop</span>',
                    ]}
                    subheading="We build mobile applications around the people who use them, the tasks they need to complete, and the business requirements the product serves."
                    align="left"
                    subheadingMaxWidth="max-w-xl"
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
            <div className="lg:col-span-7 flex flex-col">
              {/* Item 1: Customer-Facing Applications */}
              <ScrollSpyItem>
                <div className="pb-8 lg:pb-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Customer-Facing Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Help customers access services, manage accounts, place orders, make requests, or interact with your business through a dedicated mobile experience.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792818951/Customer-Facing_Applications-Photoroom_mbju3t.png"
                      alt="Customer-Facing Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 2: Business & Workforce Applications */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Business &amp; Workforce Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Give employees and field teams mobile access to operational workflows, records, task updates, and the information they need to do their work.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792818956/Business_Workforce_Applications-Photoroom_oglcgf.png"
                      alt="Business & Workforce Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 3: On-Demand & Service Applications */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      On-Demand &amp; Service Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Connect users with services, requests, bookings, or transactions through mobile workflows designed around how the service operates.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792818945/On-Demand_Service_Applications-Photoroom_xwu3kb.png"
                      alt="On-Demand & Service Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 4: Product Companion Applications */}
              <ScrollSpyItem>
                <div className="pt-8 lg:pt-12 flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Product Companion Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Extend an existing product or platform with mobile functionality, connected experiences, and access to relevant information or controls.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792818949/Product_Companion_Applications-Photoroom_fgsnff.png"
                      alt="Product Companion Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. FEATURES, PLATFORMS & INTEGRATIONS ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-transparent">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge href="#features" text="Capabilities" variant="black" className="mb-3 md:mb-4" />
            </ScrollFadeIn>
            <SectionHeading
              lines={[
                'Features, <span class="text-cyan-gradient font-medium inline-block">Platforms</span> &amp; Integrations',
              ]}
              subheading="Build the functionality your users need and connect the app to the services and systems that support it."
              align="center"
              subheadingMaxWidth="max-w-3xl"
              subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-3 mb-0 max-w-3xl mx-auto"
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Smartphone className="w-5 h-5 text-white" />,
                title: 'iOS & Android Applications',
                desc: 'Select the platform approach around your users, requirements, and product priorities—native, cross-platform, or hybrid.',
              },
              {
                icon: <Users className="w-5 h-5 text-white" />,
                title: 'Accounts & User Permissions',
                desc: 'Provide seamless access to features and information according to defined roles, SSO, and authentication protocols.',
              },
              {
                icon: <Bell className="w-5 h-5 text-white" />,
                title: 'Notifications & Device Capabilities',
                desc: 'Support relevant alerts, push notifications, cameras, biometric auth, and mobile features within intended workflows.',
              },
              {
                icon: <Globe className="w-5 h-5 text-white" />,
                title: 'APIs & Backend Integration',
                desc: 'Connect the mobile app to existing platforms, business databases, ERP/CRM systems, and third-party services.',
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-white" />,
                title: 'Data Access & Synchronization',
                desc: 'Keep information consistent between the application and connected systems, with reliable offline cache handling.',
              },
              {
                icon: <Rocket className="w-5 h-5 text-white" />,
                title: 'Lifecycle & App Store Management',
                desc: 'From test distribution to App Store and Google Play deployments, maintenance, and long-term OS compatibility updates.',
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

      {/* ================= 6. OUR APPROACH: FROM PRODUCT DEFINITION TO RELEASE ================= */}
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
              lines={['From Product Definition To Release']}
              align="center"
              headingClassName="!text-white font-medium"
              className="mb-0"
            />
          </div>

          {/* 4 Interactive Accordion Cards */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {mobileApproachSteps.map((step, idx) => {
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
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
                            maskImage: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.85) 58%, #000 68%)',
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
        headingLines={["Mobile Applications Built","<span class=\"text-cyan-gradient font-medium inline-block\">Around Real Requirements</span>"]}
        subheading="Explore how mobile application engineering supports business processes, customer experiences, and connected services."
      />

      {/* ================= 8. THREE PILLARS: USER EXPERIENCE, PERFORMANCE & SECURITY ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'User Experience, <span class="text-cyan-gradient font-medium inline-block">Performance</span> &amp; Security',
            ]}
            subheading="A mobile application needs to work well for its users and reliably support the tasks it was designed to handle."
            align="center"
            subheadingMaxWidth="max-w-5xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-5xl mx-auto"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[95rem] mx-auto pt-6 items-start">
            {/* Pillar 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Smartphone className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                User Experience
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Structure navigation, interactions, and screens around users&apos; goals, making important actions easier to understand and complete.
              </p>
            </ScrollFadeIn>

            {/* Pillar 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Cpu className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Performance &amp; Compatibility
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Validate critical workflows across the supported devices and operating-system versions defined for the project, with attention to responsiveness.
              </p>
            </ScrollFadeIn>

            {/* Pillar 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <ShieldCheck className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Application Security
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Address authentication, permissions, data handling, and communication with connected systems according to the application&apos;s functionality and risk requirements.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 9. DELIVERABLES: WHAT TO EXPECT FROM DELIVERY ================= */}
      <GeometricZincContainer zoomScale={1.3}>
        <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
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
              subheading="The agreed deliverables depend on the project's scope, but the engagement should establish what is being built, how it will be validated, and what your team receives."
              align="center"
              headingClassName="!text-white font-medium"
              subheadingClassName="!text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-3xl mx-auto mt-3 mb-0"
              subheadingMaxWidth="max-w-3xl"
              className="mb-0"
            />
          </div>

          {/* 6 Cards Grid with isolated backdrop blur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {mobileDeliverablesData.map((item, idx) => (
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
                    alt="Customer-Facing Applications"
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
        <FAQPreview faqs={mobileAppFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 11. LET'S DISCUSS YOUR MOBILE APP ================= */}
      <GetAQuote
        title="Let's Discuss Your Mobile App"
        description="Tell us what your app needs to help people accomplish, who will use it, and how it should connect with your existing systems. We'll discuss your requirements and identify a practical next step."
        ctaText="Discuss a Project"
        ctaHref="/contact"
        contentMaxWidth="max-w-3xl"
        subheadingMaxWidth="max-w-xl"
      />
    </div>
  );
}
