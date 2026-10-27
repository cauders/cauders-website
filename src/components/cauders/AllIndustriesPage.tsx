'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { 
  Building2, 
  BarChart3, 
  ShoppingCart, 
  Monitor, 
  Truck, 
  Home,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Quote,
  Target,
  Link2,
  Wrench,
  Handshake,
  MessageSquare,
  Landmark,
  Network,
  BarChart,
  Brain,
  Shield,
  ShieldAlert,
  Smartphone,
  Database,
  Cog,
  Lock,
  Laptop,
  Smile,
  LineChart,
  Settings,
  Heart,
  Activity,
  FileText,
  Stethoscope,
  Box,
  Cloud,
  Zap,
  TrendingUp,
  Cpu,
  Workflow,
  type LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  landmark: Landmark,
  network: Network,
  barchart: BarChart,
  brain: Brain,
  shield: Shield,
  shieldalert: ShieldAlert,
  smartphone: Smartphone,
  database: Database,
  cog: Cog,
  lock: Lock,
  laptop: Laptop,
  smile: Smile,
  linechart: LineChart,
  settings: Settings,
  heart: Heart,
  activity: Activity,
  filetext: FileText,
  stethoscope: Stethoscope,
  shoppingcart: ShoppingCart,
  truck: Truck,
  box: Box,
  cloud: Cloud,
  layers: Layers,
  zap: Zap,
  trendingup: TrendingUp,
  cpu: Cpu,
  workflow: Workflow,
};

const getIndustryIcon = (name?: string): LucideIcon => {
  if (!name) return Layers;
  const key = name.toLowerCase().replace(/[-_\s]/g, '');
  return iconMap[key] || Layers;
};
import { motion, AnimatePresence } from 'framer-motion';
import DarkTealButton from './DarkTealButton';
import SectionHeading from './SectionHeading';
import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import BlurCircle from './BlurCircle';
import ZincGradientContainer from './ZincGradientContainer';
import GetAQuote from './GetAQuote';
import { industryDetails, DetailedIndustryData } from '@/lib/industry-details';

/* ================================================================
   INDUSTRY METADATA — Exactly the 6 target industries in order
   1. Banking & Financial Services
   2. Healthcare & Life Sciences
   3. Retail & E-Commerce
   4. Technology & Software
   5. Real Estate & PropTech
   6. Logistics & Supply Chain
   ================================================================ */

interface IndustryMeta {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  ctaLabel?: string;
  shortDescription?: string;
  tagline: string;
  icon: any;
  heroImage: string;
  badge: string;
  commonAreas: string[];
}

const industryList: IndustryMeta[] = [
  {
    id: 'banking-financial-services',
    slug: 'banking-financial-services',
    title: 'Banking & Financial Services',
    shortTitle: 'Finance & Banking',
    ctaLabel: 'Discuss Finance',
    shortDescription: 'Delivering fintech software solutions that drive growth, scalability, and security.',
    tagline: 'High-security fintech platforms, transaction engines, and digital banking architectures.',
    icon: BarChart3,
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751012/Gemini_Generated_Image_hd74yghd74yghd74_dmhz1q.jpg',
    badge: 'Financial Sector',
    commonAreas: [
      'Internal operations platforms',
      'Payments & transaction workflows',
      'System integrations & APIs',
      'Document-driven automation'
    ]
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    shortTitle: 'Healthcare',
    ctaLabel: 'Discuss Healthcare',
    shortDescription: 'Delivering healthcare software that drives patient engagement and interoperability.',
    tagline: 'HIPAA-compliant patient portals, clinical systems, and connected health technologies.',
    icon: Building2,
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751011/Healthcare_yovzwz.jpg',
    badge: 'Digital Health & Care',
    commonAreas: [
      'Patient & provider portals',
      'Scheduling & workflow automation',
      'Document processing & retrieval',
      'EHR / EMR system integrations'
    ]
  },
  {
    id: 'retail-ecommerce',
    slug: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    shortTitle: 'Retail & E-comm',
    ctaLabel: 'Discuss Retail',
    shortDescription: 'Delivering e-commerce platforms that drive sales, scalability, and innovation.',
    tagline: 'High-conversion headless storefronts, omnichannel inventories, and retail intelligence.',
    icon: ShoppingCart,
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751014/Gemini_Generated_Image_95u9yw95u9yw95u9_nbhogb.jpg',
    badge: 'Commerce & Retail',
    commonAreas: [
      'E-commerce platforms',
      'Order & inventory management',
      'Customer digital experiences',
      'Operational system integrations'
    ]
  },
  {
    id: 'technology-software',
    slug: 'technology-software',
    title: 'Technology & Software',
    shortTitle: 'Tech & SaaS',
    ctaLabel: 'Discuss Tech',
    shortDescription: 'Engineering dedicated SaaS platforms and scalable enterprise software solutions.',
    tagline: 'Scalable multi-tenant SaaS architectures, developer tools, and product modernization.',
    icon: Monitor,
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751018/Gemini_Generated_Image_d7wwsdd7wwsdd7ww_bpcfni.jpg',
    badge: 'SaaS & Tech',
    commonAreas: [
      'SaaS & product engineering',
      'APIs & system integrations',
      'Platform modernization',
      'Dedicated engineering teams'
    ]
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate & PropTech',
    shortTitle: 'Real Estate',
    ctaLabel: 'Discuss Real Estate',
    shortDescription: 'Building PropTech platforms that drive property sales and operational efficiency.',
    tagline: 'Property marketplaces, virtual tours, tenant portals, and asset management systems.',
    icon: Home,
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751019/Gemini_Generated_Image_o89e3to89e3to89e_ivkyvx.jpg',
    badge: 'PropTech & Real Estate',
    commonAreas: [
      'Property platforms & listings',
      'Tenant & customer portals',
      'Workflow & CRM automation',
      'MLS & system integrations'
    ]
  },
  {
    id: 'logistics-supply-chain',
    slug: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    shortTitle: 'Logistics',
    ctaLabel: 'Discuss Logistics',
    shortDescription: 'Delivering logistics software that drives efficiency, visibility, and automation.',
    tagline: 'End-to-end fleet tracking, route optimization, and automated warehouse platforms.',
    icon: Truck,
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751015/Gemini_Generated_Image_ur1ee2ur1ee2ur1e_tdolpy.jpg',
    badge: 'Supply Chain & Fleet',
    commonAreas: [
      'Operations platforms & TMS',
      'Workflow automation',
      'Tracking & operational visibility',
      'ERP & EDI system integrations'
    ]
  }
];

/* ================================================================
   OUR APPROACH — 4 Pillars (including Requirements Defined With You)
   ================================================================ */
const approachPillars = [
  {
    icon: Target,
    title: 'Start with the business problem',
    description: 'Requirements, users, and constraints are defined before any solution is proposed.',
  },
  {
    icon: Link2,
    title: 'Connect to what you already run',
    description: 'Software is built to work with your existing systems and workflows.',
  },
  {
    icon: Wrench,
    title: 'Build to be maintained',
    description: 'Documentation, handover, and support are part of the engagement.',
  },
  {
    icon: Handshake,
    title: 'Requirements Defined With You',
    description: 'Regulatory, security, and data-handling requirements differ by sector and by organization. We identify them with you during discovery and build them into the design from the start.',
  },
];

const toStandardHeading = (text: string, count: number = 2): string => {
  if (!text) return '';
  if (text.includes('<span')) return text;
  const words = text.trim().split(/\s+/);
  if (words.length <= count) {
    return `<span class="text-cyan-gradient font-medium inline-block">${text}</span>`;
  }
  const main = words.slice(0, -count).join(' ');
  const accent = words.slice(-count).join(' ');
  return `${main} <span class="text-cyan-gradient font-medium inline-block">${accent}</span>`;
};

export default function AllIndustriesPage() {
  const [activeTab, setActiveTab] = useState<string>(industryList[0].slug);
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const bannerPlaceholderRef = useRef<HTMLDivElement>(null);
  const bannerHeightRef = useRef<number>(58);
  const lastScrollYRef = useRef<number>(0);
  const isHeaderHiddenRef = useRef<boolean>(false);
  const isTabSwitchingRef = useRef<boolean>(false);

  // Handle URL hash changes on load and popstate/hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        let targetSlug = hash;
        if (hash === 'banking' || hash === 'finance') targetSlug = 'banking-financial-services';
        if (hash === 'ecommerce' || hash === 'retail') targetSlug = 'retail-ecommerce';
        if (hash === 'technology' || hash === 'tech' || hash === 'saas') targetSlug = 'technology-software';
        if (hash === 'proptech' || hash === 'real-estate-proptech') targetSlug = 'real-estate';
        if (hash === 'logistics') targetSlug = 'logistics-supply-chain';
        if (hash === 'education' || hash === 'education-elearning') targetSlug = 'technology-software';
        if (hash === 'startups' || hash === 'startups-high-growth') targetSlug = 'technology-software';

        const match = industryList.find((i) => i.slug === targetSlug || i.id === targetSlug);
        if (match) {
          setActiveTab(match.slug);
        }

        // Scroll to the tab navigator / industry content so the user lands exactly at that tab
        setTimeout(() => {
          const bannerTop = bannerPlaceholderRef.current?.offsetTop || 350;
          window.scrollTo({
            top: bannerTop + 2,
            behavior: 'smooth'
          });
        }, 150);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Coordinated scroll logic (Lenis smooth-scroll compatible):
  // - In hero section top (<=60px): header is visible, tab banner in flow.
  // - Scrolling down through hero (>60px): header hides early, ensuring it NEVER collides with the tab banner as it approaches!
  // - Past hero: tab banner sticks at top-0 (downward scroll) or top-72px (upward scroll with header revealed).
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      // Ignore programmatic scroll during tab switching so the header never pops down
      if (isTabSwitchingRef.current) {
        lastY = window.scrollY;
        return;
      }

      const currentY = window.scrollY;
      const delta = currentY - lastY;

      // Measure banner top position in document coordinates
      let bannerTop = 500;
      if (bannerPlaceholderRef.current) {
        bannerTop = bannerPlaceholderRef.current.offsetTop;
      }

      // Check if user has reached/passed the banner
      const pastBanner = currentY >= bannerTop;
      setIsSticky(pastBanner);

      // Zone 1: At the very top of the page (Hero Top)
      if (currentY <= 60) {
        if (isHeaderHiddenRef.current) {
          isHeaderHiddenRef.current = false;
          setIsHeaderHidden(false);
          window.dispatchEvent(
            new CustomEvent('header-visibility-change', { detail: { hide: false } })
          );
        }
      } 
      // Zone 2: Scrolling down through the hero section before the banner
      else if (!pastBanner) {
        // Hide the header early so it is completely gone before the banner hits the top!
        if (delta > 2) {
          if (!isHeaderHiddenRef.current) {
            isHeaderHiddenRef.current = true;
            setIsHeaderHidden(true);
            window.dispatchEvent(
              new CustomEvent('header-visibility-change', { detail: { hide: true } })
            );
          }
        } else if (delta < -2) {
          // Scrolling back up to the very top: reveal header
          if (isHeaderHiddenRef.current) {
            isHeaderHiddenRef.current = false;
            setIsHeaderHidden(false);
            window.dispatchEvent(
              new CustomEvent('header-visibility-change', { detail: { hide: false } })
            );
          }
        }
      } 
      // Zone 3: Below the banner (inside industry content)
      else {
        // Downward scroll: hide header, tab bar stays at top-0
        if (delta > 2) {
          if (!isHeaderHiddenRef.current) {
            isHeaderHiddenRef.current = true;
            setIsHeaderHidden(true);
            window.dispatchEvent(
              new CustomEvent('header-visibility-change', { detail: { hide: true } })
            );
          }
        } 
        // Upward scroll: reveal header, tab bar moves down under header to 72px
        else if (delta < -2) {
          if (isHeaderHiddenRef.current) {
            isHeaderHiddenRef.current = false;
            setIsHeaderHidden(false);
            window.dispatchEvent(
              new CustomEvent('header-visibility-change', { detail: { hide: false } })
            );
          }
        }
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.dispatchEvent(
        new CustomEvent('header-visibility-change', { detail: { hide: false } })
      );
    };
  }, []);

  const handleTabChange = (slug: string) => {
    setActiveTab(slug);
    window.history.replaceState(null, '', `/industries#${slug}`);

    // Lock header hidden while switching tabs so it never pops down or overlaps
    isTabSwitchingRef.current = true;
    isHeaderHiddenRef.current = true;
    setIsHeaderHidden(true);
    window.dispatchEvent(
      new CustomEvent('header-visibility-change', { detail: { hide: true } })
    );

    // If sticky or scrolled down, keep view cleanly aligned to the top of tab content
    const bannerTop = bannerPlaceholderRef.current?.offsetTop || 500;
    if (window.scrollY > bannerTop) {
      window.scrollTo({
        top: bannerTop + 2,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isTabSwitchingRef.current = false;
    }, 600);
  };

  const currentItem = industryList.find((i) => i.slug === activeTab) || industryList[0];
  const currentDetail: DetailedIndustryData | undefined = industryDetails[currentItem.slug];
  const ActiveIcon = currentItem.icon;

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#8CEAE5]/30">
      
      {/* ================= 1. HERO SECTION (MATCHING SERVICES OVERVIEW HEIGHT EXACTLY) ================= */}
      <section className="relative w-full bg-transparent overflow-hidden">
        {/* Exact same height mechanism as Services Overview: uses identical reference image bounds */}
        <div className="relative w-full overflow-hidden">
          {/* Reference spacer: invisible identical image that sets the exact height of Services Overview on every screen width */}
          <div className="w-full flex justify-center overflow-hidden pointer-events-none select-none">
            <img
              src="https://res.cloudinary.com/cauders/image/upload/v1792742641/Group_4654_t9qwca.png"
              alt=""
              aria-hidden="true"
              className="w-[110%] max-w-none h-auto block opacity-0 pointer-events-none select-none"
            loading="lazy" decoding="async" />
          </div>

          {/* Actual hero background image filling the exact same dimensions */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
            <img
              src="https://res.cloudinary.com/cauders/image/upload/v1792719663/Rectangle_219_rvczyb.png"
              alt=""
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            loading="lazy" decoding="async" />
          </div>

          {/* Smooth black gradient overlay on the left to ensure crystal-clear text readability */}
          <div 
            className="absolute inset-0 z-[5] bg-gradient-to-r from-black/85 via-black/50 sm:via-black/40 to-transparent pointer-events-none" 
            aria-hidden="true"
          />

          {/* Content overlay */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl lg:max-w-2xl text-left">
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#industry-tab-content"
                    text="Industries"
                    variant="white"
                    className="mb-3 sm:mb-5"
                  />
                </ScrollFadeIn>

                <SectionHeading
                  as="h1"
                  lines={[
                    'Software for the Way Your <span class="text-cyan-radial font-medium inline-block">Industry Operates</span>'
                  ]}
                  headingClassName="text-white"
                  subheading="Software, AI, automation, and connected systems support organizations across different sectors. The workflows, operational requirements, and systems may differ, but the need for reliable technology remains the same."
                  align="left"
                  subheadingMaxWidth="max-w-xl"
                  subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed font-normal mb-5 sm:mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                  className="mb-0"
                />

                <ScrollFadeIn delay={250}>
                  <div className="pt-1">
                    <DarkTealButton href="/contact" size="md">
                      Start a Conversation
                    </DarkTealButton>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. FULL-WIDTH TAB BAR (STICKY NAVIGATOR) ================= */}
      <div 
        ref={bannerPlaceholderRef} 
        className="w-full relative z-40"
        style={{ height: isSticky ? `${bannerHeightRef.current}px` : 'auto' }}
      >
        <div
          ref={(node) => {
            if (node && node.offsetHeight > 0) {
              bannerHeightRef.current = node.offsetHeight;
            }
          }}
          className={cn(
            "w-full z-40",
            isSticky
              ? "fixed left-0 right-0 shadow-lg backdrop-blur-md bg-zinc-950/90 border-b border-primary/20"
              : "relative"
          )}
          style={
            isSticky
              ? {
                  top: isHeaderHidden ? '0px' : '72px',
                  transition: 'top 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }
              : undefined
          }
        >
          <ZincGradientContainer
            withRadialGlow={true}
            className="w-full p-0 border-t border-primary/20 shadow-md relative backdrop-blur-md"
          >
            <div className="relative z-10 max-w-[95rem] mx-auto overflow-x-auto no-scrollbar scroll-smooth">
              <div className="grid grid-flow-col auto-cols-max lg:auto-cols-fr divide-x divide-white/20 min-w-full">
                {industryList.map((ind) => {
                  const TabIcon = ind.icon;
                  const isCurrent = activeTab === ind.slug;
                  return (
                    <button
                      key={ind.slug}
                      type="button"
                      onClick={() => handleTabChange(ind.slug)}
                      className={`group relative flex items-center justify-center gap-2.5 py-4 sm:py-5 px-5 transition-colors duration-200 cursor-pointer text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap outline-none bg-transparent ${
                        isCurrent
                          ? 'text-primary font-semibold'
                          : 'text-white hover:text-primary'
                      }`}
                    >
                      <TabIcon className={`w-4 h-4 transition-colors duration-200 ${isCurrent ? 'text-primary' : 'text-white group-hover:text-primary'}`} />
                      <span className="transition-colors duration-200">
                        {ind.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ZincGradientContainer>
        </div>
      </div>

      {/* ================= 3. ACTIVE INDUSTRY TAB CONTENT ================= */}
      <div className="relative overflow-x-clip">
        {/* Ambient atmospheric glows matching HomePage */}
        <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-[10%] right-[-250px]" />
        <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-[45%] left-[-250px]" />
        <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bottom-[10%] right-[-250px]" />

        <main id="industry-tab-content" className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-20 md:pb-28">
          {currentDetail ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Split Section Heading (Matching Case Studies & Services Pattern) */}
                <div className="mb-12 sm:mb-16">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                      <ScrollFadeIn>
                        <ArrowBadge
                          href="#industry-tab-content"
                          text={currentItem.badge}
                          variant="black"
                          className="mb-4"
                        />
                      </ScrollFadeIn>
                      <ScrollFadeIn delay={100}>
                        <SectionHeading
                          lines={[toStandardHeading(currentDetail.hero.title, 2)]}
                          align="left"
                          className="mb-0"
                        />
                      </ScrollFadeIn>
                    </div>

                    <ScrollFadeIn delay={150} className="flex flex-col items-start md:items-end gap-4 max-w-md">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed font-normal md:text-right line-clamp-2">
                        {currentItem.shortDescription || currentDetail.hero.subtitle}
                      </p>
                      <DarkTealButton href="/contact" size="md">
                        {currentItem.ctaLabel || `Discuss ${currentItem.shortTitle}`}
                      </DarkTealButton>
                    </ScrollFadeIn>
                  </div>
                </div>

                {/* Grid: Left Column (Vision & Overview + Common Areas) + Right Column (Cover Photo & Bullets) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-16 sm:mb-20">
                  
                  {/* Vision Box */}
                  <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 lg:p-10 rounded-3xl bg-white dark:bg-card border border-border/40">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-darkTeal dark:bg-[#8CEAE5]" />
                        <span className="text-xs sm:text-sm font-semibold text-darkTeal dark:text-[#8CEAE5]">
                          Sector Focus &amp; Operations
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold font-headline text-foreground tracking-tight mb-4">
                        {currentDetail.overview.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-8">
                        {currentDetail.overview.description}
                      </p>
                    </div>

                    {/* Bullets & Common Areas */}
                    <div className="space-y-6 pt-6 border-t border-border/40">
                      {currentDetail.overview.bullets && currentDetail.overview.bullets.length > 0 && (
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground/75 dark:text-zinc-300 mb-3.5 flex items-center gap-1.5">
                            <span>Key Strategic Objectives</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {currentDetail.overview.bullets.map((bullet, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-border/40"
                              >
                                <div className="w-5 h-5 rounded-full bg-[#8CEAE5]/20 dark:bg-[#8CEAE5]/10 text-darkTeal dark:text-[#8CEAE5] flex items-center justify-center shrink-0 mt-0.5">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs sm:text-sm text-foreground/90 dark:text-zinc-200 font-medium leading-snug">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentItem.commonAreas && currentItem.commonAreas.length > 0 && (
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground/75 dark:text-zinc-300 mb-3">
                            Common Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {currentItem.commonAreas.map((area, aIdx) => (
                              <span
                                key={aIdx}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-foreground/85 dark:text-zinc-200 border border-border/60 hover:border-darkTeal/50 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-darkTeal dark:bg-[#8CEAE5]" />
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cover Photograph with Sleek Glassmorphic Bottom Card */}
                  <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden border border-border/40 group flex flex-col justify-end">
                    <Image
                      src={currentItem.heroImage || currentDetail.hero.imageUrl || 'https://res.cloudinary.com/cauders/image/upload/v1792742850/dev_xfjby4.png'}
                      alt={currentItem.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                    
                    {/* Bottom floating glassmorphic card matching WhatWeBuildSection */}
                    <div className="relative z-10 m-5 sm:m-6 p-5 sm:p-6 rounded-2xl bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-darkTeal dark:text-[#8CEAE5] font-semibold">
                          {currentItem.title}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#8CEAE5] animate-pulse" />
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/90 dark:text-zinc-200 font-normal leading-relaxed line-clamp-2 mb-3">
                        {currentItem.tagline}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-border/30">
                        <Link
                          href="/contact"
                          className="text-xs font-medium text-darkTeal dark:text-[#8CEAE5] hover:text-darkTeal/80 transition-colors"
                        >
                          Discuss {currentItem.shortTitle}
                        </Link>
                        <Link
                          href="/contact"
                          aria-label={`Discuss ${currentItem.shortTitle}`}
                          className="w-8 h-8 rounded-full bg-darkTeal text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Core Capabilities / Specialized Solutions */}
                {currentDetail.servicesBuiltForIndustry?.items && currentDetail.servicesBuiltForIndustry.items.length > 0 && (
                  <div className="mb-16 sm:mb-20">
                    <div className="flex flex-col items-center justify-center text-center max-w-5xl lg:max-w-6xl mx-auto mb-12 sm:mb-16">
                      <ScrollFadeIn>
                        <ArrowBadge href="#capabilities" text="Core Capabilities" variant="black" className="mb-3 md:mb-4" />
                      </ScrollFadeIn>
                      <SectionHeading
                        lines={[toStandardHeading(currentDetail.servicesBuiltForIndustry.title || `Capabilities Built for ${currentItem.shortTitle}`, 2)]}
                        subheading={currentDetail.servicesBuiltForIndustry.description}
                        align="center"
                        className="text-center"
                        subheadingMaxWidth="max-w-4xl lg:max-w-5xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                      {currentDetail.servicesBuiltForIndustry.items.slice(0, 4).map((svc, sIdx) => {
                        const IconComponent = getIndustryIcon(svc.icon);
                        return (
                          <ScrollFadeIn key={sIdx} delay={sIdx * 80} className="h-full">
                            <div className="group relative rounded-3xl bg-card border-0 p-6 sm:p-7 flex flex-col justify-between shadow-smooth-lift hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden">
                              <div>
                                {/* Circular Dark Teal Icon Container matching Homepage InfoCard */}
                                <div className="flex-shrink-0 bg-darkTeal rounded-full w-14 h-14 flex items-center justify-center border border-primary/20 shadow-md transition-transform duration-300 group-hover:scale-105 mb-6 text-white">
                                  <IconComponent className="w-7 h-7 text-white" strokeWidth={1.75} />
                                </div>

                                <h4 className="text-xl font-medium font-headline text-foreground tracking-tight mb-3 group-hover:text-darkTeal dark:group-hover:text-[#8CEAE5] transition-colors leading-snug">
                                  {svc.title}
                                </h4>
                                <p className="text-sm text-foreground/80 leading-relaxed font-normal">
                                  {svc.description}
                                </p>
                              </div>

                              {/* Bottom Action Row matching Homepage InfoCard */}
                              <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between">
                                <Link
                                  href="/contact"
                                  className="text-xs sm:text-sm font-medium text-darkTeal dark:text-[#8CEAE5] hover:text-darkTeal/80 transition-colors"
                                >
                                  Explore Solution
                                </Link>
                                <Link
                                  href="/contact"
                                  aria-label={`Explore ${svc.title}`}
                                  className="w-9 h-9 rounded-full bg-zinc text-white dark:bg-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm group-hover:bg-darkTeal"
                                >
                                  <ArrowUpRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          </ScrollFadeIn>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Challenges Tackled */}
                {currentDetail.challenges?.items && currentDetail.challenges.items.length > 0 && (
                  <div className="mb-16 sm:mb-20">
                    <div className="flex flex-col items-center justify-center text-center max-w-5xl lg:max-w-6xl mx-auto mb-12 sm:mb-16">
                      <ScrollFadeIn>
                        <ArrowBadge href="#challenges" text="Industry Complexities" variant="black" className="mb-3 md:mb-4" />
                      </ScrollFadeIn>
                      <SectionHeading
                        lines={[toStandardHeading(currentDetail.challenges.title || 'Overcoming Operational Barriers', 2)]}
                        subheading={currentDetail.challenges.intro}
                        align="center"
                        className="text-center"
                        subheadingMaxWidth="max-w-4xl lg:max-w-5xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                      {currentDetail.challenges.items.slice(0, 3).map((ch, cIdx) => {
                        const IconComponent = getIndustryIcon(ch.icon);
                        return (
                          <ScrollFadeIn key={cIdx} delay={cIdx * 80} className="h-full">
                            <div className="group relative rounded-3xl bg-card border-0 flex flex-col justify-between shadow-smooth-lift hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                              {/* Top Section */}
                              <div className="p-6 sm:p-7 pb-4 sm:pb-5">
                                {/* Icon + Number Row matching Homepage Numbered Process Cards */}
                                <div className="flex items-center justify-between mb-4 sm:mb-5">
                                  {/* Circular Dark Teal Icon Container */}
                                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-darkTeal flex items-center justify-center shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105 text-white">
                                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.75} />
                                  </div>

                                  {/* Step Number in Montserrat Medium */}
                                  <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 dark:text-zinc-600 select-none tracking-tight">
                                    {String(cIdx + 1).padStart(2, '0')}
                                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-headline font-semibold text-foreground tracking-tight mb-2 sm:mb-2.5 group-hover:text-darkTeal dark:group-hover:text-[#8CEAE5] transition-colors leading-snug">
                                  {ch.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                                  {ch.description}
                                </p>
                              </div>

                              {/* Bottom Callout Sub-card matching Homepage Engineering Process Cards */}
                              <div className="bg-[#003431]/5 dark:bg-white/5 border-t border-border/40 px-6 sm:px-7 py-3.5 sm:py-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-darkTeal dark:bg-[#8CEAE5]" />
                                  <span className="text-xs font-headline font-semibold text-darkTeal dark:text-[#8CEAE5] tracking-wide">
                                    Operational Focus
                                  </span>
                                </div>
                                <Link
                                  href="/contact"
                                  className="text-xs font-medium text-foreground/75 hover:text-darkTeal dark:hover:text-[#8CEAE5] transition-colors inline-flex items-center gap-1 group/link"
                                >
                                  <span>Resolve</span>
                                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </Link>
                              </div>
                            </div>
                          </ScrollFadeIn>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quote / Sector Revolution Statement — ZincGradientContainer matching HomePage */}
                {currentDetail.industryRevolution && (
                  <ZincGradientContainer
                    withRadialGlow={true}
                    className="py-12 sm:py-16 md:py-20 px-6 sm:px-12 md:px-16 mb-16 sm:mb-20 rounded-3xl overflow-hidden relative border border-primary/20 shadow-2xl"
                  >
                    <Quote className="absolute -top-6 -right-6 w-36 h-36 text-white/5 pointer-events-none" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                      <ArrowBadge
                        href="#manifesto"
                        text={`${currentItem.title} Philosophy`}
                        variant="white"
                        className="mb-6 justify-center"
                      />
                      <blockquote className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white/95 italic mb-6">
                        &ldquo;{currentDetail.industryRevolution}&rdquo;
                      </blockquote>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#8CEAE5] text-xs font-medium">
                        <span>Cauders Engineering Manifesto</span>
                      </div>
                    </div>
                  </ZincGradientContainer>
                )}

              </motion.div>
            </AnimatePresence>
          ) : null}
        </main>

        {/* ================= 4. OUR APPROACH — One Engineering Approach Across Sectors ================= */}
        <section className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <ScrollFadeIn>
              <ArrowBadge href="#approach" text="Engineering Discipline" variant="black" className="mb-3 md:mb-4" />
            </ScrollFadeIn>
            <SectionHeading
              lines={['One Engineering Approach <span class="text-cyan-gradient font-medium inline-block">Across Sectors</span>']}
              subheading="Whatever the sector, every engagement follows the same discipline: clarity on goals, interoperability with existing tech, and systems engineered to be maintained."
              align="center"
              className="text-center"
              subheadingMaxWidth="max-w-3xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {approachPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <ScrollFadeIn key={idx} delay={idx * 75} className="h-full">
                  <div className="group h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white dark:bg-card border border-border/40 shadow-[0_6px_25px_rgba(0,49,46,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#003431]/5 dark:bg-white/5 border border-primary/20 flex items-center justify-center text-darkTeal dark:text-[#8CEAE5] group-hover:bg-darkTeal group-hover:text-white transition-all duration-300 shadow-sm">
                          <PillarIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-muted-foreground">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold font-headline text-foreground tracking-tight mb-2.5 group-hover:text-darkTeal dark:group-hover:text-[#8CEAE5] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </section>

      </div>

      {/* ================= 5. GET A QUOTE BOTTOM CTA ================= */}
      <GetAQuote 
        title="Ready to Transform Your Industry Operations?"
        description="Schedule a technical consultation with our engineering team to review requirements, architectures, and implementation roadmaps."
      />

    </div>
  );
}
