'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ListFilter } from 'lucide-react';
import StandardizedHeading from './StandardizedHeading';
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
  sections: PolicySectionItem[];
}

export default function PolicyLayout({
  title,
  lastUpdated,
  badge = "Legal Document",
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

  // Generate signature heading lines with gradient on the final word
  const headingLines = useMemo(() => {
    const words = title.trim().split(' ');
    if (words.length <= 1) return [title];
    const lastWord = words.pop()!;
    return [
      { text: words.join(' '), inline: true },
      { text: lastWord, isGradient: true, inline: true }
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
      <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] -top-32 -right-40" />
      <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-1/3 -left-48" />
      <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] -bottom-32 -right-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 lg:pt-36 lg:pb-20 relative z-10">
        
        {/* Header Section */}
        <header className="mb-10 lg:mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <ScrollFadeIn>
            <ArrowBadge href="#" text={badge} variant="black" className="mb-3" />
          </ScrollFadeIn>
          <StandardizedHeading lines={headingLines} className="mt-1" />
          <ScrollFadeIn delay={100}>
            <p className="text-xs text-muted-foreground font-mono mt-3">
              Last Updated: {lastUpdated}
            </p>
          </ScrollFadeIn>
        </header>

        {/* Mobile Jump-to Dropdown (< lg screens) */}
        <div className="lg:hidden mb-8 sticky top-24 z-20">
          <div className="bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-2 shadow-smooth-lift">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-left rounded-xl bg-card border border-border/80 text-foreground font-medium text-sm transition-colors hover:bg-muted/40"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex items-center gap-2 truncate">
                <ListFilter className="w-4 h-4 text-zinc flex-shrink-0" />
                <span className="text-xs font-mono text-muted-foreground">Jump to:</span>
                <span className="truncate text-foreground font-semibold">{activeSection?.title}</span>
              </div>
              <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform duration-200", mobileMenuOpen && "rotate-180")} />
            </button>

            {mobileMenuOpen && (
              <div className="mt-2 max-h-72 overflow-y-auto rounded-xl bg-card border border-border/80 p-1.5 space-y-1 shadow-md">
                {normalizedSections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "w-full flex items-start gap-2.5 px-3 py-2 text-left rounded-lg text-xs transition-colors",
                        isActive
                          ? "bg-zinc text-white font-medium shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-zinc/5"
                      )}
                    >
                      <span className={cn(
                        "font-mono text-[11px] flex-shrink-0 mt-0.5",
                        isActive ? "text-primary font-semibold" : "text-zinc/60"
                      )}>
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="truncate">{section.title}</span>
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
            <div className="rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md p-4 xl:p-5 shadow-smooth-lift">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/70">
                <div className="flex items-center gap-2">
                  <ListFilter className="w-4 h-4 text-zinc" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Table of Contents
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc/10 text-zinc font-semibold border border-zinc/20">
                  {normalizedSections.length} sections
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="max-h-[calc(100vh-14rem)] overflow-y-auto pr-1 space-y-1 scrollbar-thin">
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
                        "group flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs xl:text-sm text-left transition-all duration-150 leading-snug",
                        isActive
                          ? "bg-zinc text-white font-medium shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-zinc/5"
                      )}
                    >
                      <span className={cn(
                        "font-mono text-[11px] mt-0.5 flex-shrink-0 transition-colors",
                        isActive ? "text-primary font-semibold" : "text-zinc/60 group-hover:text-zinc"
                      )}>
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="flex-1 break-words">{section.title}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Bottom Quick Help Card */}
              <div className="mt-4 pt-4 border-t border-border/70 text-xs text-muted-foreground">
                <p className="leading-relaxed">
                  Questions about our terms?{' '}
                  <a
                    href="mailto:info@cauders.com"
                    className="text-zinc font-semibold hover:underline"
                  >
                    info@cauders.com
                  </a>
                </p>
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
                className="scroll-mt-44 lg:scroll-mt-32 pt-2 pb-10 border-b border-border/70 last:border-b-0"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <span className="flex-shrink-0 inline-flex items-center justify-center font-mono font-semibold text-xs text-zinc bg-zinc/10 border border-zinc/20 rounded-md px-2.5 py-1 mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground font-headline leading-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="text-foreground/80 space-y-4 text-sm lg:text-base leading-relaxed pl-0 sm:pl-11 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-base [&_a]:text-zinc [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-zinc/30 hover:[&_a]:decoration-zinc hover:[&_a]:text-foreground [&_a]:font-medium [&_a]:transition-colors">
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
