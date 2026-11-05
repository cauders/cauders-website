"use client";

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import MegaMenu from './MegaMenu';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

const LIGHT_HERO_SERVICE_SLUGS = new Set([
  'custom-software-development',
  'mobile-app-development',
  'web-development',
  'saas-development',
  'cloud-transformation',
  'platform-modernization',
  'staff-augmentation-offshoring',
  'staff-augmentation',
]);

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<'services' | 'ai' | 'industries' | 'company' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname() || '/';
  const timeoutRef = useRef<NodeJS.Timeout>();
  const headerRef = useRef<HTMLElement>(null);

  const [isHeaderHiddenByPage, setIsHeaderHiddenByPage] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const nextScrolled = window.scrollY > 40;
          setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));
          if (window.scrollY > 60 && isHeaderHiddenByPage) {
            setActiveMenu(null);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeaderHiddenByPage]);

  useEffect(() => {
    const handleHeaderVisibility = (e: CustomEvent<{ hide: boolean }>) => {
      const hide = Boolean(e.detail?.hide);
      setIsHeaderHiddenByPage(hide);
      if (hide) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(null);
      }
    };
    window.addEventListener('header-visibility-change', handleHeaderVisibility as EventListener);
    return () => window.removeEventListener('header-visibility-change', handleHeaderVisibility as EventListener);
  }, []);

  useEffect(() => {
    setIsHeaderHiddenByPage(false);
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleOpenMegaMenu = (e: CustomEvent) => {
      setActiveMenu(e.detail as 'services' | 'ai' | 'industries' | 'company');
    };
    window.addEventListener('open-mega-menu', handleOpenMegaMenu as EventListener);
    return () => window.removeEventListener('open-mega-menu', handleOpenMegaMenu as EventListener);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isHomePage = pathname === '/';
  const segments = pathname.split('/').filter(Boolean);

  // 1. Home page hero (transparent over dark hero)
  const isHomePageHero = isHomePage && !isScrolled;

  // 2. Pages whose top hero is dark/full-bleed image:
  //    - /industries, /careers (not /careers/apply), /partners
  //    - /ai/[category]/[service] (3 segments; 2-segment /ai/[category] is light)
  //    - /services/[category]/[service] when not one of the 6 light-hero bespoke pages
  const isImageHeroPage =
    !isHomePage &&
    (pathname === '/industries' ||
      pathname === '/careers' ||
      pathname === '/partners' ||
      (segments[0] === 'ai' && segments.length === 3) ||
      (segments[0] === 'services' && segments.length === 3 && !LIGHT_HERO_SERVICE_SLUGS.has(segments[2])));

  const isImageHero = isImageHeroPage && !isScrolled;

  // 3. Pages with light top background
  const isLightHero = !isHomePage && !isImageHeroPage && !isScrolled;

  const isFullWidth = !isScrolled;

  const isAiActive = pathname.startsWith('/ai');
  const isServicesActive = pathname.startsWith('/services');
  const isIndustriesActive = pathname.startsWith('/industries');
  const isCompanyActive =
    pathname.startsWith('/about') ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/careers') ||
    pathname.startsWith('/partners') ||
    pathname.startsWith('/faq') ||
    pathname.startsWith('/case-studies');

  const renderUnderline = (isActive: boolean) => {
    let underlineColor = 'bg-zinc-800 dark:bg-zinc-200';
    if (!isScrolled) {
      if (isHomePageHero || isImageHero) {
        underlineColor = 'bg-primary';
      } else {
        underlineColor = 'bg-zinc-900';
      }
    }

    if (isActive) {
      return (
        <span
          className={cn(
            'absolute left-0 bottom-0 w-full h-[2px] rounded-full transition-colors duration-300',
            underlineColor
          )}
        />
      );
    }
    return (
      <span
        className={cn(
          'absolute left-0 bottom-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-1/2',
          underlineColor
        )}
      />
    );
  };

  const getNavLinkClass = (menuName: 'ai' | 'services' | 'industries' | 'company', isActive: boolean) => {
    const isCurrent = activeMenu === menuName || isActive;

    if (isScrolled) {
      return cn(
        'relative group py-2 transition-colors duration-300 ease-out font-medium',
        isCurrent ? 'text-zinc font-semibold' : 'text-foreground/80 hover:text-zinc'
      );
    }

    if (isHomePageHero) {
      return cn(
        'relative group py-2 transition-colors duration-300 ease-out font-medium',
        isCurrent ? 'text-primary font-semibold' : 'text-white/90 hover:text-white'
      );
    }

    if (isImageHero) {
      return cn(
        'relative group py-2 transition-colors duration-300 ease-out font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]',
        isCurrent ? 'text-primary font-semibold' : 'text-white/95 hover:text-white'
      );
    }

    return cn(
      'relative group py-2 transition-colors duration-300 ease-out font-medium',
      isCurrent ? 'text-zinc-950 font-bold' : 'text-zinc-800 hover:text-zinc-950'
    );
  };

  const handleMouseEnter = (menu: 'services' | 'ai' | 'industries' | 'company') => {
    if (isHeaderHiddenByPage) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuContainerEnter = () => {
    if (isHeaderHiddenByPage) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 250);
  };

  const shouldHideHeader = isHeaderHiddenByPage;

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 z-50 w-full transform-gpu',
        isFullWidth ? 'pt-0 px-0' : 'pt-3 px-4 sm:px-6'
      )}
      style={{
        transform: shouldHideHeader ? 'translate3d(0, -125%, 0)' : 'translate3d(0, 0, 0)',
        opacity: shouldHideHeader ? 0 : 1,
        pointerEvents: shouldHideHeader ? 'none' : 'auto',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          'mx-auto transition-all duration-500 ease-smooth transform-gpu',
          isScrolled &&
            'relative z-50 w-full max-w-5xl rounded-[9999px] border border-border/20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-xl',
          isHomePageHero &&
            'w-full max-w-[100%] rounded-[0px] border border-b-white/15 border-t-transparent border-x-transparent bg-white/0 shadow-none',
          isImageHero &&
            'w-full max-w-[100%] rounded-[0px] border-b border-transparent bg-transparent shadow-none',
          isLightHero &&
            'w-full max-w-[100%] rounded-[0px] border-b border-zinc-200 border-t-transparent border-x-transparent bg-white/95 backdrop-blur-sm shadow-none'
        )}
      >
        <div
          className={cn(
            'w-full mx-auto transition-all duration-500 ease-smooth',
            isFullWidth ? 'px-6 sm:px-10 lg:px-12 xl:px-16' : 'px-4 sm:px-6 lg:px-8'
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500 ease-smooth',
              isFullWidth ? 'h-20' : 'h-14'
            )}
          >
            {/* Logo */}
            <div className="flex items-center justify-start min-w-[150px] md:min-w-[180px] shrink-0">
              <Link href="/" className="hover:opacity-85 transition-opacity">
                <Image
                  src="https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_360/v1786551887/logo-gd_ulbjsm.png"
                  alt="Cauders Logo"
                  width={185}
                  height={48}
                  sizes="175px"
                  className={cn(
                    'object-contain transition-all duration-500 ease-smooth',
                    isFullWidth ? 'w-[140px] md:w-[165px] lg:w-[175px] h-auto' : 'w-[120px] md:w-[130px] h-auto'
                  )}
                  priority
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className={cn(
                'hidden md:flex flex-1 items-center justify-center font-medium transition-all duration-500 ease-smooth',
                isFullWidth
                  ? 'gap-8 md:gap-10 lg:gap-12 text-[13px] md:text-[14px]'
                  : 'gap-6 lg:gap-8 text-[13px] md:text-[14px]'
              )}
            >
              <div className="relative py-4" onMouseEnter={() => handleMouseEnter('ai')}>
                <Link
                  href="/services#ai-automation"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === 'ai'}
                  onFocus={() => handleMouseEnter('ai')}
                  className={getNavLinkClass('ai', isAiActive)}
                  onClick={() => {
                    setActiveMenu(null);
                    if (pathname === '/services') {
                      const el = document.getElementById('ai-automation');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  AI &amp; Automation
                  {renderUnderline(isAiActive)}
                </Link>
              </div>
              <div className="relative py-4" onMouseEnter={() => handleMouseEnter('services')}>
                <Link
                  href="/services"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === 'services'}
                  onFocus={() => handleMouseEnter('services')}
                  className={getNavLinkClass('services', isServicesActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  Services
                  {renderUnderline(isServicesActive)}
                </Link>
              </div>
              <div className="relative py-4" onMouseEnter={() => handleMouseEnter('industries')}>
                <Link
                  href="/industries"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === 'industries'}
                  onFocus={() => handleMouseEnter('industries')}
                  className={getNavLinkClass('industries', isIndustriesActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  Industries
                  {renderUnderline(isIndustriesActive)}
                </Link>
              </div>
              <div className="relative py-4" onMouseEnter={() => handleMouseEnter('company')}>
                <Link
                  href="/about"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === 'company'}
                  onFocus={() => handleMouseEnter('company')}
                  className={getNavLinkClass('company', isCompanyActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  Company
                  {renderUnderline(isCompanyActive)}
                </Link>
              </div>
            </nav>

            {/* CTA Button */}
            <div
              className="hidden md:flex items-center justify-end min-w-[150px] md:min-w-[180px] shrink-0"
              onMouseEnter={handleMouseLeave}
            >
              {isScrolled ? (
                <Button
                  asChild
                  variant="zinc"
                  className="rounded-full transition-all duration-300 font-medium shadow-sm"
                >
                  <Link href="/contact" onFocus={() => setActiveMenu(null)}>
                    Contact Us
                  </Link>
                </Button>
              ) : isLightHero ? (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-zinc-900 text-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white shadow-none"
                >
                  <Link href="/contact" onFocus={() => setActiveMenu(null)}>
                    Contact Us
                  </Link>
                </Button>
              ) : isImageHero ? (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground shadow-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                >
                  <Link href="/contact" onFocus={() => setActiveMenu(null)}>
                    Contact Us
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground shadow-none"
                >
                  <Link href="/contact" onFocus={() => setActiveMenu(null)}>
                    Contact Us
                  </Link>
                </Button>
              )}
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary',
                  isScrolled || isLightHero
                    ? 'text-zinc-900 hover:bg-zinc-100'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 pointer-events-none" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 pointer-events-none" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay (Desktop) */}
      <MegaMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        isScrolled={isScrolled}
        isHeroHeader={isFullWidth}
        onMouseEnter={handleMenuContainerEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Mobile Drawer (Mobile / Small Tablet) */}
      {mounted &&
        isMobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] md:hidden bg-[#011417] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar with Logo and Close */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:opacity-85 transition-opacity"
              >
                <Image
                  src="https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_360/v1786551887/logo-gd_ulbjsm.png"
                  alt="Cauders Logo"
                  width={150}
                  height={40}
                  sizes="130px"
                  className="w-[130px] h-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close menu drawer"
              >
                <X className="w-6 h-6 pointer-events-none" aria-hidden="true" />
              </button>
            </div>

            {/* Links List */}
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-3 py-6 overflow-y-auto">
              <Link
                href="/services#ai-automation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>AI &amp; Automation</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-mono uppercase tracking-wide">
                  Featured
                </span>
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                Services
              </Link>
              <Link
                href="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                Industries
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                About Cauders
              </Link>
              <Link
                href="/careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                Careers
              </Link>
              <Link
                href="/partners"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                Partnerships
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                FAQ
              </Link>
              <Link
                href="/feedback"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-zinc-400 hover:text-white transition-colors py-1"
              >
                Feedback &amp; Suggestions
              </Link>
            </nav>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Button
                asChild
                className="w-full py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
              <p className="text-center text-xs text-zinc-400">
                info@cauders.com · Lahore, Pakistan
              </p>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
