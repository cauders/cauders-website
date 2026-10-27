'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ListFilter } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ArrowBadge from './ArrowBadge';
import BlurCircle from './BlurCircle';
import ScrollFadeIn from './ScrollFadeIn';

export interface PolicySectionItem {
  id?: string;
  title: string;
  content: React.ReactNode;
}

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  badge?: string;
  subtitle?: string;
  sections: PolicySectionItem[];
}

export default function PolicyLayout({
  title,
  lastUpdated,
  badge = "Legal Document",
  subtitle,
  sections
}: PolicyLayoutProps) {
  // Normalize IDs for each section
  const normalizedSections = useMemo(() => {
    return sections.map((sec, index) => ({
      ...sec,
      id: sec.id || `section-${index + 1}`
    }));
  }, [sections]);

  const [activeId, setActiveId] = useState<string>(normalizedSections[0]?.id || '');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  // Generate signature homepage-styled heading line with cyan gradient on the final word
  const headingLines = useMemo(() => {
    const words = title.trim().split(' ');
    if (words.length <= 1) return [title];
    const lastWord = words.pop()!;
    return [
      `${words.join(' ')} <span class="text-cyan-gradient font-medium inline-block">${lastWord}</span>`
    ];
  }, [title]);

  // Smooth scroll handler with offset for floating navbar
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveId(id);
    setMobileMenuOpen(false);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const navOffset = isMobile ? 165 : 120;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  // Scroll spy using IntersectionObserver
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      if (normalizedSections.some(s => s.id === hashId)) {
        setTimeout(() => scrollToSection(hashId), 200);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => {
            const aTop = Math.abs(a.boundingClientRect.top - 120);
            const bTop = Math.abs(b.boundingClientRect.top - 120);
            return aTop - bTop;
          });
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1.0]
      }
    );

    normalizedSections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [normalizedSections]);

  const activeSection = normalizedSections.find(s => s.id === activeId) || normalizedSections[0];

  return (
    <div className="relative min-h-screen text-foreground overflow-x-clip">
      {/* Cauders signature ambient glow circles */}
      <BlurCircle className="w-[600px] h-[600px] md:w-[850px] md:h-[850px] -top-32 -right-40 opacity-70" />
      <BlurCircle className="w-[600px] h-[600px] md:w-[850px] md:h-[850px] top-1/3 -left-48 opacity-60" />
      <BlurCircle className="w-[600px] h-[600px] md:w-[850px] md:h-[850px] -bottom-32 -right-40 opacity-70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 lg:pt-36 lg:pb-24 relative z-10">
        
        {/* Header Section */}
        <header className="mb-10 lg:mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <ScrollFadeIn>
            <ArrowBadge href="#" text={badge} variant="black" className="mb-4" />
          </ScrollFadeIn>
          <SectionHeading
            as="h1"
            lines={headingLines}
            subheading={subtitle}
            align="center"
            className="mt-1"
            headingClassName="font-medium tracking-tight text-center"
            subheadingClassName="max-w-2xl mx-auto text-center"
          />
          <ScrollFadeIn delay={120}>
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-sm text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </ScrollFadeIn>
        </header>

        {/* Mobile Jump-to Dropdown (< lg screens) */}
        <div className="lg:hidden mb-8 sticky top-24 z-20">
          <div className="bg-white/95 dark:bg-card/95 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.1] rounded-2xl p-2 shadow-[0_8px_30px_rgba(0,49,46,0.08)]">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-left rounded-xl bg-[#09555A]/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-foreground font-medium text-sm transition-all hover:bg-[#09555A]/[0.08]"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex items-center gap-2.5 truncate">
                <ListFilter className="w-4 h-4 text-[#09555A] dark:text-primary flex-shrink-0" />
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Jump to:</span>
                <span className="truncate text-foreground font-bold">{activeSection?.title}</span>
              </div>
              <ChevronDown className={cn("w-4 h-4 text-zinc-500 transition-transform duration-200", mobileMenuOpen && "rotate-180")} />
            </button>

            {mobileMenuOpen && (
              <div className="mt-2 max-h-72 overflow-y-auto rounded-xl bg-white dark:bg-card border border-black/[0.06] dark:border-white/[0.08] p-1.5 space-y-1 shadow-lg">
                {normalizedSections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "w-full flex items-start gap-2.5 px-3 py-2.5 text-left rounded-xl text-xs transition-all",
                        isActive
                          ? "bg-[#003431] text-white font-medium shadow-sm"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
                      )}
                    >
                      <span className={cn(
                        "font-mono text-[11px] font-bold flex-shrink-0 mt-0.5",
                        isActive ? "text-primary" : "text-[#09555A]/70 dark:text-zinc-500"
                      )}>
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="truncate font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Sticky Sidebar (TOC) - Desktop */}
          <aside className="hidden lg:block w-72 xl:w-80 flex-shrink-0 sticky top-28 xl:top-32">
            <div className="rounded-3xl border border-black/[0.07] dark:border-white/[0.08] bg-white/90 dark:bg-card/90 backdrop-blur-xl p-5 xl:p-6 shadow-[0_12px_40px_rgba(0,49,46,0.06)] dark:shadow-none transition-all">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <ListFilter className="w-4 h-4 text-[#09555A] dark:text-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Table of Contents
                  </h3>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#09555A]/10 text-[#09555A] dark:bg-primary/10 dark:text-primary border border-[#09555A]/20 dark:border-primary/20">
                  {normalizedSections.length} sections
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="max-h-[calc(100vh-15rem)] overflow-y-auto pr-1 space-y-1 scrollbar-thin">
                {normalizedSections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section.id);
                      }}
                      className={cn(
                        "group flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl text-xs xl:text-sm text-left transition-all duration-200 leading-snug",
                        isActive
                          ? "bg-[#003431] text-white font-medium shadow-md translate-x-0.5"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                      )}
                    >
                      <span className={cn(
                        "font-mono text-[11px] font-bold mt-0.5 flex-shrink-0 transition-colors",
                        isActive ? "text-primary" : "text-[#09555A]/60 dark:text-zinc-500 group-hover:text-[#09555A]"
                      )}>
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="flex-1 break-words">{section.title}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Bottom Quick Help Card */}
              <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] text-xs text-zinc-500">
                <div className="rounded-2xl bg-[#09555A]/[0.05] dark:bg-white/[0.04] p-3 border border-[#09555A]/10 dark:border-white/[0.06]">
                  <p className="font-semibold text-foreground mb-1">Need Clarification?</p>
                  <p className="leading-relaxed">
                    Have questions about our policies? Contact us at{' '}
                    <a
                      href="mailto:info@cauders.com"
                      className="text-[#09555A] dark:text-primary font-semibold hover:underline underline-offset-2"
                    >
                      info@cauders.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Policy Content */}
          <main className="flex-1 min-w-0 max-w-3xl xl:max-w-4xl space-y-12">
            {normalizedSections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                data-policy-section={section.id}
                className="scroll-mt-44 lg:scroll-mt-32 pt-2 pb-12 border-b border-black/[0.07] dark:border-white/[0.08] last:border-b-0"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-5">
                  <span className="flex-shrink-0 inline-flex items-center justify-center font-mono font-bold text-xs text-[#09555A] dark:text-primary bg-[#09555A]/10 dark:bg-primary/10 border border-[#09555A]/20 dark:border-primary/20 rounded-xl w-8 h-8 mt-0.5 shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-headline tracking-tight leading-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="text-zinc-700 dark:text-zinc-300 space-y-4 text-sm sm:text-base leading-relaxed pl-0 sm:pl-12 [&_p]:leading-relaxed [&_h3]:text-foreground [&_h3]:font-headline [&_h3]:font-bold [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_a]:text-[#09555A] dark:[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[#09555A]/30 dark:[&_a]:decoration-primary/40 hover:[&_a]:decoration-[#09555A] dark:hover:[&_a]:decoration-primary hover:[&_a]:text-[#003431] [&_a]:font-semibold [&_a]:transition-colors">
                  {section.content}
                </div>
              </section>
            ))}
          </main>
        </div>

      </div>
    </div>
  );
}
