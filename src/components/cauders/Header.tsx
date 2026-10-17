"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import MegaMenu from './MegaMenu';
import { Button } from '../ui/button';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<'services' | 'ai' | 'industries' | 'company' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 40;
      setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const isHomePage = pathname === '/';
  
  // 1. Home page hero (no background, untouched)
  const isHomePageHero = isHomePage && !isScrolled;

  // 2. Pages with hero image background (services, industries, ai, careers, partners)
  const isImageHeroPage = !isHomePage && (
    pathname.startsWith('/services') ||
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
  const isCompanyActive = pathname.startsWith('/about') || pathname.startsWith('/company') || pathname.startsWith('/team') || pathname.startsWith('/contact') || pathname.startsWith('/careers') || pathname.startsWith('/partners');

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
    
    // Gradient 2: Hero image background (subtle shadow for visibility)
    if (isImageHero) {
      return cn(
        "relative group py-2 transition-colors duration-300 ease-out font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]",
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuContainerEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 250);
  };

  return (
    <header 
      ref={headerRef} 
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-smooth transform-gpu",
        isFullWidth 
          ? "pt-0 px-0" 
          : "pt-3 px-4 sm:px-6"
      )} 
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn(
        "mx-auto transition-all duration-500 ease-smooth transform-gpu",
        // Scrolled state: Floating capsule
        isScrolled && "relative z-50 w-full max-w-5xl rounded-[9999px] border border-border/20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-xl",
        
        // Gradient 1: Home page hero (untouched, transparent, no background)
        isHomePageHero && "w-full max-w-[100%] rounded-[0px] border border-b-white/15 border-t-transparent border-x-transparent bg-white/0 shadow-none",
        
        // Gradient 2: Image hero pages (clean, subtle backdrop blur for crisp visibility without harsh shadows)
        isImageHero && "w-full max-w-[100%] rounded-[0px] border-b border-white/10 border-t-transparent border-x-transparent bg-black/15 backdrop-blur-sm shadow-none",
        
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
              <Link href="/" className="hover:opacity-85 transition-opacity">
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
                onMouseEnter={() => handleMouseEnter('ai')}
              >
                <Link
                  href="/ai"
                  prefetch={true}
                  className={getNavLinkClass('ai', isAiActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  AI & Automation
                  {renderUnderline(isAiActive)}
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('services')}
              >
                <Link
                  href="/services"
                  prefetch={true}
                  className={getNavLinkClass('services', isServicesActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  Services
                  {renderUnderline(isServicesActive)}
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('industries')}
              >
                <Link
                  href="/industries"
                  prefetch={true}
                  className={getNavLinkClass('industries', isIndustriesActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  Industries
                  {renderUnderline(isIndustriesActive)}
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('company')}
              >
                <Link
                  href="/about"
                  prefetch={true}
                  className={getNavLinkClass('company', isCompanyActive)}
                  onClick={() => setActiveMenu(null)}
                >
                  Company
                  {renderUnderline(isCompanyActive)}
                </Link>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center justify-end min-w-[150px] md:min-w-[180px] shrink-0" onMouseEnter={handleMouseLeave}>
              {isScrolled ? (
                <Button 
                  asChild 
                  variant="zinc"
                  className="rounded-full transition-all duration-300 font-medium shadow-sm"
                >
                  <Link href="/contact" prefetch={true}>
                    Contact Us
                  </Link>
                </Button>
              ) : isLightHero ? (
                <Button 
                  asChild 
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-zinc-900 text-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white shadow-none"
                >
                  <Link href="/contact" prefetch={true}>
                    Contact Us
                  </Link>
                </Button>
              ) : isImageHero ? (
                <Button 
                  asChild 
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground shadow-sm backdrop-blur-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                >
                  <Link href="/contact" prefetch={true}>
                    Contact Us
                  </Link>
                </Button>
              ) : (
                <Button 
                  asChild 
                  variant="outline"
                  className="rounded-full transition-all duration-300 font-medium border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground shadow-none"
                >
                  <Link href="/contact" prefetch={true}>
                    Contact Us
                  </Link>
                </Button>
              )}
            </div>

          </div>
        </div>
      </div>
      
      {/* Mega Menu Overlay */}
      <MegaMenu 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        isScrolled={isScrolled}
        isHeroHeader={isFullWidth}
        onMouseEnter={handleMenuContainerEnter}
        onMouseLeave={handleMouseLeave}
      />
    </header>
  );
}
