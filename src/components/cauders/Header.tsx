"use client";

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import MegaMenu from './MegaMenu';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<'services' | 'ai' | 'industries' | 'company' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
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

  // Proactively warm up primary routes in the background during idle time
  useEffect(() => {
    const idleRoutes = ['/about', '/services', '/industries', '/contact', '/case-studies', '/careers', '/partners', '/faq'];
    const prefetchRoutes = () => {
      idleRoutes.forEach((route) => {
        try {
          router.prefetch(route);
        } catch {
          // Fallback safe
        }
      });
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = (window as Window & { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(prefetchRoutes);
      return () => {
        if ('cancelIdleCallback' in window) {
          (window as Window & { cancelIdleCallback: (h: number) => void }).cancelIdleCallback(handle);
        }
      };
    } else {
      const timer = setTimeout(prefetchRoutes, 2000);
      return () => clearTimeout(timer);
    }
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const isHomePage = pathname === '/';
  
  // 1. Home page hero (no background, untouched)
  const isHomePageHero = isHomePage && !isScrolled;

  // 2. Pages with hero image background (services subpages, industries, ai, careers, partners)
  const isImageHeroPage = !isHomePage && (
    (pathname.startsWith('/services') &&
      pathname !== '/services' &&
      !pathname.includes('custom-software-development') &&
      !pathname.includes('mobile-app-development') &&
      !pathname.includes('web-development') &&
      !pathname.includes('saas-development') &&
      !pathname.includes('cloud-transformation') &&
      !pathname.includes('platform-modernization') &&
      !pathname.includes('staff-augmentation')) ||
    pathname.startsWith('/industries') ||
    pathname.startsWith('/ai') ||
    pathname.startsWith('/careers') ||
    pathname.startsWith('/partners')
  );
  const isImageHero = isImageHeroPage && !isScrolled;

  // 3. Pages with light background without hero image (contact, policies, faq, about, team, feedback)
  const isLightHero = !isHomePage && !isImageHeroPage && !isScrolled;

  // Header is full-width at top on all pages; only floats when scrolled down
  const isFullWidth = !isScrolled;

  const isAiActive = pathname.startsWith('/ai');
  const isServicesActive = pathname.startsWith('/services');
  const isIndustriesActive = pathname.startsWith('/industries');
  const isCompanyActive = pathname.startsWith('/about') || pathname.startsWith('/contact') || pathname.startsWith('/careers') || pathname.startsWith('/partners') || pathname.startsWith('/faq') || pathname.startsWith('/case-studies');

  const renderUnderline = (isActive: boolean) => {
    let underlineColor = "bg-zinc-800 dark:bg-zinc-200";
    if (!isScrolled) {
      if (isHomePageHero || isImageHero) {
        underlineColor = "bg-primary";
      } else {
        underlineColor = "bg-zinc-900";
      }
    }
    
    if (isActive) {
      return <span className={cn("absolute left-0 bottom-0 w-full h-[2px] rounded-full transition-colors duration-300", underlineColor)}></span>;
    }
    return <span className={cn("absolute left-0 bottom-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-1/2", underlineColor)}></span>;
  };

  const getNavLinkClass = (menuName: 'ai' | 'services' | 'industries' | 'company', isActive: boolean) => {
    const isCurrent = activeMenu === menuName || isActive;
    
    // When scrolled down: floating pill capsule styling
    if (isScrolled) {
      return cn(
        "relative group py-2 transition-colors duration-300 ease-out font-medium",
        isCurrent ? "text-zinc font-semibold" : "text-foreground/80 hover:text-zinc"
      );
    }
    
    // Gradient 1: Home page hero (untouched)
    if (isHomePageHero) {
      return cn(
        "relative group py-2 transition-colors duration-300 ease-out font-medium",
        isCurrent ? "text-primary font-semibold" : "text-white/90 hover:text-white"
      );
    }
    
    // Gradient 2: Hero image background (soft, subtle shadow for clean legibility)
    if (isImageHero) {
      return cn(
        "relative group py-2 transition-colors duration-300 ease-out font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]",
        isCurrent ? "text-primary font-semibold" : "text-white/95 hover:text-white"
      );
    }
    
    // Gradient 3: Light background without image (contact, policies, etc. - zinc colors)
    return cn(
      "relative group py-2 transition-colors duration-300 ease-out font-medium",
      isCurrent ? "text-zinc-950 font-bold" : "text-zinc-800 hover:text-zinc-950"
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
        "fixed top-0 left-0 z-50 w-full transform-gpu",
        isFullWidth 
          ? "pt-0 px-0" 
          : "pt-3 px-4 sm:px-6"
      )} 
      style={{
        transform: shouldHideHeader ? 'translate3d(0, -125%, 0)' : 'translate3d(0, 0, 0)',
        opacity: shouldHideHeader ? 0 : 1,
        pointerEvents: shouldHideHeader ? 'none' : 'auto',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease'
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn(
        "mx-auto transition-all duration-500 ease-smooth transform-gpu",
        // Scrolled state: Floating capsule
        isScrolled && "relative z-50 w-full max-w-5xl rounded-[9999px] border border-border/20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-xl",
        
        // Gradient 1: Home page hero (untouched, transparent, no background)
        isHomePageHero && "w-full max-w-[100%] rounded-[0px] border border-b-white/15 border-t-transparent border-x-transparent bg-white/0 shadow-none",
        
        // Gradient 2: Image hero pages (fully transparent header, blends seamlessly into the hero scrim)
        isImageHero && "w-full max-w-[100%] rounded-[0px] border-b border-transparent bg-transparent shadow-none",
        
        // Light pages without image: clean divider border on white bg, no shadow
        isLightHero && "w-full max-w-[100%] rounded-[0px] border-b border-zinc-200 border-t-transparent border-x-transparent bg-white/95 backdrop-blur-sm shadow-none"
      )}>
        <div className={cn(
          "w-full mx-auto transition-all duration-500 ease-smooth",
          isFullWidth ? "px-6 sm:px-10 lg:px-12 xl:px-16" : "px-4 sm:px-6 lg:px-8"
        )}>
          <div className={cn(
            "flex items-center justify-between transition-all duration-500 ease-smooth",
            isFullWidth ? "h-20" : "h-14"
          )}>
            
            {/* Logo */}
            <div className="flex items-center justify-start min-w-[150px] md:min-w-[180px] shrink-0">
              <Link 
                href="/" 
                
                
                className="hover:opacity-85 transition-opacity"
              >
                <Image 
                  src="https://res.cloudinary.com/cauders/image/upload/v1786551887/logo-gd_ulbjsm.png" 
                  alt="Cauders Logo" 
                  width={185} 
                  height={48} 
                  className={cn(
                    "object-contain transition-all duration-500 ease-smooth",
                    isFullWidth ? "w-[140px] md:w-[165px] lg:w-[175px] h-auto" : "w-[120px] md:w-[130px] h-auto"
                  )} 
                  priority 
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className={cn(
              "hidden md:flex flex-1 items-center justify-center font-medium transition-all duration-500 ease-smooth",
              isFullWidth ? "gap-8 md:gap-10 lg:gap-12 text-[13px] md:text-[14px]" : "gap-6 lg:gap-8 text-[13px] md:text-[14px]"
            )}>
              <div 
                className="relative py-4"
                onMouseEnter={() => {
                  handleMouseEnter('ai');
                  router.prefetch('/services');
                }}
              >
                <Link
                  href="/services#ai-automation"
                 
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
                  AI & Automation
                  {renderUnderline(isAiActive)}
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => {
                  handleMouseEnter('services');
                  router.prefetch('/services');
                }}
              >
                <Link
                  href="/services"
                 
                  className={getNavLinkClass('services', isServicesActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  Services
                  {renderUnderline(isServicesActive)}
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => {
                  handleMouseEnter('industries');
                  router.prefetch('/industries');
                }}
              >
                <Link
                  href="/industries"
                 
                  className={getNavLinkClass('industries', isIndustriesActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  Industries
                  {renderUnderline(isIndustriesActive)}
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => {
                  handleMouseEnter('company');
                  router.prefetch('/about');
                  router.prefetch('/case-studies');
                  router.prefetch('/careers');
                  router.prefetch('/partners');
                  router.prefetch('/faq');
                }}
              >
                <Link
                  href="/about"
                 
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
              onMouseEnter={() => {
                handleMouseLeave();
                router.prefetch('/contact');
              }}
            >
              {isScrolled ? (
                <Button 
                  asChild 
                  variant="zinc"
                  className="rounded-full transition-all duration-300 font-medium shadow-sm"
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              ) : isLightHero ? (
                <Button 
                  asChild 
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-zinc-900 text-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white shadow-none"
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              ) : isImageHero ? (
                <Button 
                  asChild 
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground shadow-none backdrop-blur-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              ) : (
                <Button 
                  asChild 
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground shadow-none"
                >
                  <Link href="/contact">
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
                  "p-2 rounded-xl transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-primary",
                  isScrolled || isLightHero
                    ? "text-zinc-900 hover:bg-zinc-100"
                    : "text-white hover:bg-white/10"
                )}
                aria-label={isMobileMenuOpen ? "Toggle menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 pointer-events-none" />
                ) : (
                  <Menu className="w-6 h-6 pointer-events-none" />
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
      {mounted && isMobileMenuOpen && typeof document !== 'undefined' && createPortal(
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
                src="https://res.cloudinary.com/cauders/image/upload/v1786551887/logo-gd_ulbjsm.png" 
                alt="Cauders Logo" 
                width={150} 
                height={40} 
                className="w-[130px] h-auto object-contain" 
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu drawer"
            >
              <X className="w-6 h-6 pointer-events-none" />
            </button>
          </div>

          {/* Links List */}
          <nav className="flex flex-col gap-3 py-6 overflow-y-auto">
            <Link
              href="/services#ai-automation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>AI & Automation</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-mono uppercase tracking-wide">Featured</span>
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
              Feedback & Suggestions
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
              info@cauders.com · Oslo · London · Remote
            </p>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
