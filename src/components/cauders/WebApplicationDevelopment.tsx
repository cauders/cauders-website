'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Monitor,
  Layout,
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
  CheckCircle2,
  Lock,
  Workflow,
  Search,
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

interface WebApplicationDevelopmentProps {
  badge?: string;
  badgeHref?: string;
  className?: string;
}

const webDeliverablesData = [
  {
    title: 'Defined Application Scope',
    items: [
      'Documented requirements and workflows',
      'Agreed functionality and priorities',
      'Acceptance criteria for key features',
    ],
  },
  {
    title: 'Working Application',
    items: [
      'Application functionality built to scope',
      'Interfaces and user workflows',
      'Agreed system integrations',
    ],
  },
  {
    title: 'QA & Validation',
    items: [
      'Testing of critical user journeys',
      'Validation of relevant integrations and permissions',
      'Identified issues addressed before handover',
    ],
  },
  {
    title: 'Technical Handover',
    items: [
      'Relevant technical documentation',
      'Agreed deployment and access information',
      'Handover of the delivered application',
    ],
  },
  {
    title: 'Ongoing Evolution',
    items: [
      'Maintenance and issue resolution',
      'Incremental improvements as requirements change',
      'Architecture scaling and technical updates',
    ],
  },
];

const webApproachSteps = [
  {
    number: '01',
    title: 'Understand Users & Workflows',
    description:
      'We identify who will use the application, what they need to accomplish, how the business process works, and which existing systems are involved. We map out operational requirements to ensure every component supports real business goals.',
    establishes: "A shared understanding of the application's purpose, users, and requirements.",
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770098/Discover_Align_vp2l9d.jpg',
  },
  {
    number: '02',
    title: 'Plan & Design',
    description:
      'We define the application scope, structure key workflows, and establish the technical approach. User journeys and interface design are developed around the intended experience across target browsers and screens.',
    establishes: 'A clear plan for the functionality, interfaces, and system connections needed.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Plan_Design_rf0t2h.jpg',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'We develop the application functionality, implement its interfaces, and connect the required systems and services with clean architecture, robust security, and reliable API integrations.',
    establishes: 'Working application features aligned with the agreed scope.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
  },
  {
    number: '04',
    title: 'Validate & Handover',
    description:
      'We test key user journeys, permissions, integrations, and supported browser or device experiences, address identified issues, and prepare the agreed handover materials and deployment plans.',
    establishes: 'A reviewed application and clarity on what has been delivered and how it is deployed or handed over.',
    image: 'https://res.cloudinary.com/cauders/image/upload/v1792770100/Validate_Handover_e9gotj.jpg',
  },
];

const webAppFaqs: FAQ[] = [
  {
    question: "What's the difference between a website and a web application?",
    answer:
      'A website primarily presents information, while a web application enables users to interact with data, complete tasks, manage accounts, or use tailored functionality. Some digital products combine both.',
  },
  {
    question: 'Can a web application connect with our existing systems?',
    answer:
      'Yes. We can assess and implement integrations with existing platforms and third-party services, depending on their interfaces, available access, documentation, and technical constraints.',
  },
  {
    question: 'Can the application work across desktop and mobile devices?',
    answer:
      'We can design responsive interfaces for the supported screen sizes and devices defined by the project requirements. Applications that depend on specific native device capabilities may require a different approach.',
  },
  {
    question: 'Do you handle UI/UX design and testing?',
    answer:
      "User journeys, interface design, and QA are included according to the project's scope and requirements. The relevant testing approach is defined around the application's functionality and expected use.",
  },
  {
    question: 'Can you maintain the application after deployment?',
    answer:
      'Ongoing maintenance, issue resolution, and further development can be agreed as part of a continuing or separate engagement.',
  },
  {
    question: 'How long does web application development take?',
    answer:
      'Timelines depend on the requirements, functionality, integrations, technical dependencies, and review process. We establish a delivery plan once the project scope is understood.',
  },
];

export default function WebApplicationDevelopment({
  badge = 'DIGITAL PRODUCT ENGINEERING',
  badgeHref = '#overview',
  className,
}: WebApplicationDevelopmentProps) {
  const [activeApproachIndex, setActiveApproachIndex] = useState<number>(0);

  return (
    <div className={cn('relative w-full bg-transparent', className)}>
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full min-h-[630px] sm:min-h-[690px] lg:min-h-[770px] xl:min-h-[830px] bg-transparent flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background image container: right-aligned with seamless blending spanning full height */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] xl:w-[64%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <img
            src="https://res.cloudinary.com/cauders/image/upload/v1792819750/Web_Application_Development_jrs3co.jpg"
            alt="Web Application Development"
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
                  'Web <span class="text-cyan-gradient font-medium inline-block">Application</span>',
                  '<span class="text-cyan-gradient font-medium inline-block">Development</span>',
                ]}
                subheading="We design and develop web applications that bring your business workflows, users, and systems together, making services easier to access and work easier to manage."
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
                alt="Bring Your Workflows into One Connected Web Experience"
                className="w-full h-auto block select-none pointer-events-none"
              loading="lazy" decoding="async" />

              <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-6 flex items-center pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white italic leading-[1.15]">
                      Bring Your Workflows into One Connected Web Experience
                    </h2>
                  </div>

                  <div className="hidden lg:block lg:col-span-1 flex justify-center">
                    <div className="h-28 xl:h-36 w-[2px] bg-white/45 mx-auto rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="lg:col-span-5 flex items-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 font-light leading-relaxed tracking-normal font-sans antialiased">
                      Give employees, customers, and partners browser-based access to the information, services, and tasks they need, through an application designed around how your business works.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ================= 3. WHEN A WEB APPLICATION IS THE RIGHT FIT ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'When A <span class="text-cyan-gradient font-medium inline-block">Web Application</span> Is The Right Fit',
            ]}
            subheading="A web application can bring interactive functionality, information, and business processes into one accessible experience. It is particularly useful when people need to sign in, work with data, complete tasks, or access services through a browser."
            align="center"
            subheadingMaxWidth="max-w-4xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-4xl mx-auto"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[95rem] mx-auto pt-6 items-start">
            {/* Card 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Workflow className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Team Works<br className="hidden sm:inline" /> Across Separate Tools
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Information and tasks are spread across applications, spreadsheets, or manual processes, making everyday work harder to coordinate.
              </p>
            </ScrollFadeIn>

            {/* Card 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Users className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Customers Or Partners<br className="hidden sm:inline" /> Need Direct Access
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Your customers, suppliers, or partners need a convenient way to access information, submit requests, manage accounts, or track activity.
              </p>
            </ScrollFadeIn>

            {/* Card 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Layout className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Your Service Needs More<br className="hidden sm:inline" /> Than A Standard Website
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                You need interactive features, user accounts, specialized workflows, or functionality tailored to how your product or business operates.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ================= 4. TYPES OF WEB APPLICATIONS WE DEVELOP ================= */}
      <section id="application-types" className="py-16 md:py-20 relative z-10 text-foreground bg-transparent">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
            {/* Left Column (Sticky Heading) */}
            <div className="lg:col-span-6 relative lg:sticky lg:top-32 h-fit self-start">
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
                      'Types of Web Applications',
                      '<span class="text-cyan-gradient font-medium inline-block">We Develop</span>',
                    ]}
                    subheading="We build browser-based applications around the users, workflows, and functionality your business needs."
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
              {/* Item 1: Business & Operations Applications */}
              <ScrollSpyItem>
                <div className="pb-8 lg:pb-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Business &amp; Operations Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Support internal workflows, task management, approvals, records, and day-to-day business operations through tailored applications.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808336/Business_Applications-Photoroom_t53gbo.png"
                      alt="Business & Operations Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 2: Customer & Partner Portals */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Customer &amp; Partner Portals
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Give customers, suppliers, and partners a dedicated place to access information, manage accounts, submit requests, and track activity.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792808331/Customer_Partner_Portals-Photoroom_myhnd7.png"
                      alt="Customer & Partner Portals"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 3: Web-Based Products & Platforms */}
              <ScrollSpyItem>
                <div className="py-8 lg:py-12 border-b border-border flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Web-Based Products &amp; Platforms
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Develop digital products and online services with tailored functionality, interactive experiences, and user-specific features.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792819836/Web-Based_Products_Platforms-Photoroom_npbfdi.png"
                      alt="Web-Based Products & Platforms"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>

              {/* Item 4: Data & Workflow Applications */}
              <ScrollSpyItem>
                <div className="pt-8 lg:pt-12 flex items-center justify-between gap-6 sm:gap-8">
                  <div className="flex-1 max-w-lg">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground mb-2 sm:mb-3 tracking-tight">
                      Data &amp; Workflow Applications
                    </h4>
                    <p className="text-foreground/75 font-normal text-sm sm:text-base leading-relaxed">
                      Bring relevant information into connected workspaces that help users manage tasks, follow business rules, and make informed decisions.
                    </p>
                  </div>
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/cauders/image/upload/v1792819830/Data_Workflow_Applications-Photoroom_xfxjdl.png"
                      alt="Data & Workflow Applications"
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </ScrollSpyItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. APPLICATION FEATURES & INTEGRATIONS ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-transparent">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge href="#features" text="Capabilities" variant="black" className="mb-3 md:mb-4" />
            </ScrollFadeIn>
            <SectionHeading
              lines={[
                'Application <span class="text-cyan-gradient font-medium inline-block">Features</span> &amp; Integrations',
              ]}
              subheading="Build around the tasks users need to complete and the systems your application needs to connect with."
              align="center"
              subheadingMaxWidth="max-w-4xl"
              subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-3 mb-0 max-w-4xl mx-auto"
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Users className="w-5 h-5 text-white" />,
                title: 'User Accounts & Permissions',
                desc: 'Access based on user roles and responsibilities, authentication protocols, and secure administrative control.',
              },
              {
                icon: <Layout className="w-5 h-5 text-white" />,
                title: 'Forms, Dashboards & Workspaces',
                desc: 'Interfaces that help users complete tasks, visualize key metrics, and work with relevant information effectively.',
              },
              {
                icon: <Workflow className="w-5 h-5 text-white" />,
                title: 'Workflow Rules & Approvals',
                desc: 'Structured business processes, automated notifications, validation rules, and multi-step review stages.',
              },
              {
                icon: <Globe className="w-5 h-5 text-white" />,
                title: 'APIs & System Integrations',
                desc: 'Reliable connections to existing business platforms, ERP/CRM databases, cloud services, and third-party APIs.',
              },
              {
                icon: <Search className="w-5 h-5 text-white" />,
                title: 'Search, Reporting & Data Views',
                desc: 'Comprehensive ways to find, review, filter, export, and work with relevant information across the application.',
              },
              {
                icon: <Rocket className="w-5 h-5 text-white" />,
                title: 'Tailored Scope & Architecture',
                desc: 'The application scope is defined around your intended users, business requirements, and technical dependencies.',
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

      {/* ================= 6. OUR APPROACH: FROM REQUIREMENTS TO DEPLOYMENT ================= */}
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
              lines={['From Requirements To Deployment']}
              align="center"
              headingClassName="!text-white font-medium"
              className="mb-0"
            />
          </div>

          {/* 4 Interactive Accordion Cards */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {webApproachSteps.map((step, idx) => {
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
        headingLines={["Web Applications Built","<span class=\"text-cyan-gradient font-medium inline-block\">Around Real Requirements</span>"]}
        subheading="Explore how web application engineering supports business processes, customer experiences, and connected services."
      />

      {/* ================= 8. THREE PILLARS: ARCHITECTURE, SECURITY & PERFORMANCE ================= */}
      <section className="relative z-20 w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'Architecture, <span class="text-cyan-gradient font-medium inline-block">Security</span> &amp; Performance',
            ]}
            subheading="A web application needs to support more than its visible interface. Its architecture, access controls, and system connections must support the work it is built to handle."
            align="center"
            subheadingMaxWidth="max-w-5xl"
            subheadingClassName="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal text-center mt-4 mb-14 sm:mb-20 max-w-5xl mx-auto"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[95rem] mx-auto pt-6 items-start">
            {/* Pillar 1 */}
            <ScrollFadeIn delay={100} className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Cpu className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Application Architecture
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Structure the application around its functionality, data flows, integrations, and anticipated changes.
              </p>
            </ScrollFadeIn>

            {/* Pillar 2 */}
            <ScrollFadeIn delay={200} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <ShieldCheck className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Security &amp; Access
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Address authentication, user permissions, and data handling according to the application&apos;s purpose and requirements.
              </p>
            </ScrollFadeIn>

            {/* Pillar 3 */}
            <ScrollFadeIn delay={300} className="flex flex-col items-center text-center px-4 sm:px-6 md:border-l md:border-[#003431]/10">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[1.5px] border-black flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105 bg-transparent">
                <Monitor className="w-8 h-8 text-black stroke-[1.75]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-black mb-3 leading-snug">
                Performance &amp; Compatibility
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-lg">
                Validate key workflows, integrations, and supported browser and device experiences against defined requirements.
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
              subheading="The deliverables are agreed around the application scope, so your team understands what is being built, tested, and handed over."
              align="center"
              headingClassName="!text-white font-medium"
              subheadingClassName="!text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-3xl mx-auto mt-3 mb-0"
              subheadingMaxWidth="max-w-3xl"
              className="mb-0"
            />
          </div>

          {/* 6 Cards Grid with isolated backdrop blur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {webDeliverablesData.map((item, idx) => (
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
                    alt="Web Application Development"
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
        <FAQPreview faqs={webAppFaqs} badgeText="FAQ" badgeHref="#faq" />
      </div>

      {/* ================= 11. LET'S BUILD A WEB APPLICATION AROUND YOUR BUSINESS ================= */}
      <GetAQuote
        title="Let's Build a Web Application Around Your Business"
        description="Tell us who will use the application, what they need to accomplish, and which systems it needs to connect with."
        ctaText="Discuss a Project"
        ctaHref="/contact"
        contentMaxWidth="max-w-4xl"
        headingMaxWidth="max-w-3xl"
        subheadingMaxWidth="max-w-md"
      />
    </div>
  );
}
