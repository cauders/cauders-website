
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import MagneticLink from './MagneticLink';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: 'https://www.portfolio.cauders.com/', label: 'Portfolio' },
  { href: '/contact',label: 'Contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isHeroVisible = pathname === '/' && !hasScrolled;

  return (
     <header className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out",
        hasScrolled ? "pt-4 px-4" : "pt-6"
      )}>
      <div 
        className={cn(
          "transition-all duration-500 ease-in-out",
          hasScrolled ? "floating-header-styles" : "w-full"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className={cn("text-2xl font-bold transition-colors", isHeroVisible ? "text-white hover:text-white/80" : "text-foreground hover:text-primary")}>
              Cauders
            </Link>
            
            <div className="flex items-center gap-4">
              <Button onClick={() => setIsMenuOpen(true)} variant="ghost" className={cn("text-xl font-normal", isHeroVisible ? 'text-white hover:bg-white/10 hover:text-white' : 'text-foreground hover:bg-accent')} aria-label="Open menu">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div 
          className={cn(
              "fixed inset-0 z-[100] bg-foreground text-background transition-transform duration-700 ease-in-out overflow-hidden",
              isMenuOpen ? 'transform-none' : '-translate-y-full'
          )}
          data-menu-hover="true"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col relative z-10">
             <div className="flex items-center justify-between h-24">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
                    Cauders
                </Link>
                <div className="group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-8 w-8 text-background transition-transform duration-300 group-hover:rotate-90" strokeWidth={1} />
                </div>
            </div>

            <nav className="flex-grow flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    {navLinks.map((link, index) => (
                        <div 
                            key={link.href}
                            className={cn("opacity-0", isMenuOpen && "animate-fade-in-down")}
                            style={{ animationDelay: `${500 + index * 100}ms` }}
                        >
                            <MagneticLink
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="w-28 h-28"
                                linkClassName="text-sm text-background"
                            >
                                {link.label}
                            </MagneticLink>
                        </div>
                    ))}
                </div>
            </nav>

            <div className="h-24"></div>
        </div>
      </div>
    </header>
  );
}
