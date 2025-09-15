
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
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
  const navRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
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

  return (
     <header className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out",
        hasScrolled ? "pt-4" : "pt-0"
      )}>
      <div 
        className={cn(
          "transition-all duration-500 ease-in-out",
          hasScrolled ? "floating-header-styles" : "w-full"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              Cauders
            </Link>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button onClick={() => setIsMenuOpen(true)} variant="ghost" className="text-sm font-semibold tracking-widest" aria-label="Open menu">
                MENU
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
        <div 
          className="absolute top-[-120px] left-[-80px] w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-80"
        ></div>
        <div 
          className="absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-80"
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col relative z-10">
             <div className="flex items-center justify-between h-24">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
                    Cauders
                </Link>
                <div className="group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-8 w-8 text-background transition-transform duration-300 group-hover:rotate-90" strokeWidth={1} />
                </div>
            </div>

            <nav ref={navRef} className="flex-grow flex items-center justify-center flex-wrap gap-4 md:gap-12">
                {navLinks.map((link, index) => (
                <MagneticLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                        "opacity-0 text-background text-lg",
                        isMenuOpen && "animate-fade-in-down"
                    )}
                     style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                    {link.label}
                </MagneticLink>
                ))}
            </nav>

            <div className="h-24"></div>
        </div>
      </div>
    </header>
  );
}
