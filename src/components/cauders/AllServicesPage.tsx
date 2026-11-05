import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import GetAQuote from './GetAQuote';
import ServicesHero from './ServicesHero';
import DarkTealButton from './DarkTealButton';
import SectionHeading from './SectionHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { getAiCategories, getServiceCategories } from '@/lib/data';

interface ServiceItem {
  title: string;
  href: string;
  description: string;
}

interface ServiceSection {
  id: string;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  services: ServiceItem[];
}

const serviceSections: ServiceSection[] = [
  {
    id: 'software-solutions',
    image: 'https://res.cloudinary.com/cauders/image/upload/c_scale,q_auto,f_auto,w_256/v1792742850/dev_xfjby4.png',
    title: 'Digital Product Engineering',
    description:
      'Build new digital products or improve existing applications with engineering shaped around your requirements, users, integrations, and long-term product needs.',
    ctaText: 'Explore Digital Product Engineering',
    ctaHref: '/services/software-solutions/custom-software-development',
    services: [
      {
        title: 'Custom Software Development',
        href: '/services/software-solutions/custom-software-development',
        description:
          'Build software around your workflows, functional requirements, and the way your business operates.',
      },
      {
        title: 'Web Application Development',
        href: '/services/software-solutions/web-development',
        description:
          'Develop browser-based applications that support your users, products, and operational workflows.',
      },
      {
        title: 'Mobile App Development',
        href: '/services/software-solutions/mobile-app-development',
        description:
          'Create mobile applications around user needs, product functionality, and the systems they need to connect with.',
      },
      {
        title: 'SaaS Development',
        href: '/services/software-solutions/saas-development',
        description:
          'Develop SaaS products with the functionality, architecture, and maintainability your product requires.',
      },
      {
        title: 'Platform Modernization',
        href: '/services/cloud-digital-transformation/cloud-transformation',
        description:
          'Improve existing applications, refine system architecture, and connect fragmented platforms to support evolving technical and operational requirements.',
      },
    ],
  },
  {
    id: 'ai-automation',
    image: 'https://res.cloudinary.com/cauders/image/upload/c_scale,q_auto,f_auto,w_256/v1792742848/ai_mrjtge.png',
    title: 'AI & Automation',
    description:
      'Apply AI and automation to defined product and operational problems. From identifying suitable use cases to integrating intelligent capabilities into existing workflows.',
    ctaText: 'Explore AI & Automation',
    ctaHref: '/ai/ai-product-engineering/custom-ai-development',
    services: [
      {
        title: 'Generative AI',
        href: '/ai/generative-ai-llms/generative-ai-solutions',
        description:
          'Build AI-powered applications for knowledge retrieval, enterprise search, document understanding, and language-based workflows.',
      },
      {
        title: 'AI Agents & Workflows',
        href: '/ai/generative-ai-llms/autonomous-ai-agents',
        description:
          'Connect AI-driven tasks with tools, data, and business systems, with human oversight where decisions require review or approval.',
      },
      {
        title: 'Custom AI & ML',
        href: '/ai/ai-product-engineering/custom-ai-development',
        description:
          'Develop machine learning models and AI functionality for defined tasks such as prediction, classification, and computer vision.',
      },
      {
        title: 'Process Automation',
        href: '/ai/data-intelligent-automation/automation-custom-applications',
        description:
          'Connect applications, data, and business rules to reduce repetitive manual work and improve workflow consistency.',
      },
      {
        title: 'Data & Analytics',
        href: '/ai/data-intelligent-automation/data-modernization-analytics',
        description:
          'Integrate data sources and build pipelines that support reporting, analytics, and AI applications.',
      },
      {
        title: 'AI Strategy & Readiness',
        href: '/ai/ai-strategy-advisory/ai-roadmapping-consulting',
        description:
          'Evaluate potential AI use cases, assess technical feasibility and readiness, and establish practical priorities and next steps before committing to implementation.',
      },
    ],
  },
  {
    id: 'dedicated-teams',
    image: 'https://res.cloudinary.com/cauders/image/upload/c_scale,q_auto,f_auto,w_256/v1792742847/team-Photoroom_xrizaf.png',
    title: 'Teams & Partnerships',
    description:
      'Additional engagement options designed to provide the engineering capacity, expertise, and collaboration model that best fits your needs.',
    ctaText: 'Explore Partnerships',
    ctaHref: '/partners',
    services: [
      {
        title: 'Dedicated Teams',
        href: '/services/staff-augmentation/staff-augmentation-offshoring',
        description:
          'Extend your product or engineering team with additional capacity aligned with your technical environment, responsibilities, and delivery priorities.',
      },
      {
        title: 'Strategic Partnerships',
        href: '/partners',
        description:
          "Work with Cauders through a partnership model suited to your business, whether you're exploring referrals, white-label delivery, or complementary engineering capabilities.",
      },
    ],
  },
];

const industriesCards = [
  {
    name: 'Finance',
    image: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_800/v1792751012/Gemini_Generated_Image_hd74yghd74yghd74_dmhz1q.jpg',
    href: '/industries#banking-financial-services',
  },
  {
    name: 'Healthcare',
    image: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_800/v1792751011/Healthcare_yovzwz.jpg',
    href: '/industries#healthcare',
  },
  {
    name: 'Retail',
    image: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_800/v1792751014/Gemini_Generated_Image_95u9yw95u9yw95u9_nbhogb.jpg',
    href: '/industries#retail-ecommerce',
  },
  {
    name: 'Logistics',
    image: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_800/v1792751015/Gemini_Generated_Image_ur1ee2ur1ee2ur1e_tdolpy.jpg',
    href: '/industries#logistics-supply-chain',
  },
  {
    name: 'Technology',
    image: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_800/v1792751018/Gemini_Generated_Image_d7wwsdd7wwsdd7ww_bpcfni.jpg',
    href: '/industries#technology-software',
  },
  {
    name: 'Real Estate',
    image: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_800/v1792751019/Gemini_Generated_Image_o89e3to89e3to89e_ivkyvx.jpg',
    href: '/industries#real-estate',
  },
];

export default function AllServicesPage() {
  const allPracticeHubs = [
    ...getServiceCategories().map((cat) => ({
      title: cat.title,
      href: `/services/${cat.slug}`,
      services: cat.services.map((s) => ({
        title: s.title,
        href: `/services/${cat.slug}/${s.slug}`,
      })),
    })),
    ...getAiCategories().map((cat) => ({
      title: cat.title,
      href: `/ai/${cat.slug}`,
      services: cat.services.map((s) => ({
        title: s.title,
        href: `/ai/${cat.slug}/${s.slug}`,
      })),
    })),
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* 1. Services Hero Section */}
      <ServicesHero />

      {/* 2. Split-Screen Services Sections with Sticky Left Column */}
      <div id="services-directory" className="scroll-mt-24 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 space-y-36 md:space-y-48">
        {serviceSections.map((section, sIdx) => (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-28 ${sIdx !== serviceSections.length - 1 ? 'pb-28 md:pb-36 border-b border-border/40' : ''}`}
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
              {/* Left Column: Sticky Main Heading Side */}
              <div className="w-full lg:w-[40%] lg:sticky lg:top-24 flex-shrink-0 self-start z-10">
                <div className="flex flex-col items-start text-left pt-0 pb-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 sm:mb-6 overflow-hidden flex items-center justify-center -ml-2 -mt-2">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={160}
                      height={160}
                      sizes="128px"
                      className="w-full h-full object-contain scale-125 pointer-events-none select-none transition-transform duration-300 hover:scale-135"
                    />
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold font-headline text-foreground tracking-tight leading-[1.15] mb-4 sm:mb-5">
                    {section.title}
                  </h2>

                  <p className="text-sm sm:text-base text-foreground/75 dark:text-zinc-300 leading-relaxed font-normal max-w-md mb-8 sm:mb-10">
                    {section.description}
                  </p>

                  <DarkTealButton href={section.ctaHref} size="sm">
                    {section.ctaText}
                  </DarkTealButton>
                </div>
              </div>

              {/* Right Column: Services List */}
              <div className="w-full lg:w-[60%] flex flex-col divide-y divide-border/60 border-t lg:border-t-0 border-border/60">
                {section.services.map((item, idx) => (
                  <div key={idx} className="group py-8 sm:py-10 md:py-12 first:pt-0">
                    <Link href={item.href} className="block text-left">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-headline text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                          {item.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                      </div>

                      {/* Visible on mobile/touch & keyboard focus; hover disclosure on desktop */}
                      <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                        <div className="overflow-hidden">
                          <p className="pt-3 lg:pt-4 text-sm sm:text-base text-foreground/75 dark:text-zinc-300 font-normal leading-relaxed max-w-2xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-opacity duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 3. Specialized Practice Areas & Full Capability Index (Ensures 100% Crawl Discoverability) */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-y border-border/40 bg-zinc-50/60 dark:bg-zinc-900/30">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'Practice Areas & <span class="text-cyan-gradient font-medium inline-block">Specialized Capabilities</span>',
            ]}
            subheading="Browse our full directory of software engineering, cloud modernization, advisory, and applied AI practice areas."
            align="left"
            subheadingMaxWidth="max-w-2xl"
            subheadingClassName="text-sm sm:text-base text-foreground/70 dark:text-zinc-300 leading-relaxed font-normal"
            className="mb-12 sm:mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allPracticeHubs.map((hub) => (
              <div
                key={hub.href}
                className="rounded-3xl bg-white dark:bg-card border border-border/50 p-6 flex flex-col justify-between shadow-sm hover:border-darkTeal/40 transition-colors"
              >
                <div>
                  <Link
                    href={hub.href}
                    className="group inline-flex items-center justify-between gap-2 w-full mb-4 pb-3 border-b border-border/40"
                  >
                    <h3 className="text-base sm:text-lg font-bold font-headline text-foreground group-hover:text-darkTeal transition-colors leading-snug">
                      {hub.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-foreground/50 group-hover:text-darkTeal shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <ul className="space-y-2.5">
                    {hub.services.map((svc) => (
                      <li key={svc.href}>
                        <Link
                          href={svc.href}
                          className="text-xs sm:text-sm text-foreground/75 hover:text-darkTeal dark:hover:text-primary transition-colors flex items-start gap-2 leading-snug"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0 mt-1.5" />
                          <span>{svc.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve Section */}
      <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95rem] mx-auto">
          <SectionHeading
            lines={[
              'Industries We <span class="text-cyan-gradient font-medium inline-block">Serve</span>',
            ]}
            subheading="From healthcare and financial services to logistics, real estate, and technology, our services support a wide range of industries and operating environments."
            align="center"
            subheadingMaxWidth="max-w-2xl"
            subheadingClassName="text-sm sm:text-base text-foreground/70 dark:text-zinc-300 leading-relaxed font-normal"
            className="mb-14 sm:mb-16 md:mb-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industriesCards.map((ind, idx) => (
              <ScrollFadeIn key={ind.name} delay={idx * 80}>
                <Link
                  href={ind.href}
                  className="group relative flex flex-col justify-end p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] border border-border/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden h-[340px] sm:h-[380px] md:h-[420px] bg-white"
                >
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between w-full">
                    <h3 className="text-xl sm:text-2xl font-bold font-headline text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                      {ind.name}
                    </h3>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 border border-border/50 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Reusable Quote / Contact Banner */}
      <GetAQuote
        lines={['Have a Specific Requirement in Mind?']}
        description="Tell us what you're looking to build, improve, or automate, and we'll help identify a practical starting point."
        ctaText="Start a Discussion"
        ctaHref="/contact"
      />
    </div>
  );
}
