"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

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
            <Link href="/" className={cn("text-2xl font-bold transition-colors", isHeroVisible ? "text-white hover:text-white/80" : "text-foreground hover:text-primary")}>
              Cauders
            </Link>
            
            <div className="flex items-center gap-4">
              <ThemeToggle className={cn(isHeroVisible ? "text-white hover:bg-white/10" : "text-foreground")} />
              <Button onClick={() => setIsMenuOpen(true)} variant="ghost" className={cn("text-sm font-semibold tracking-widest", isHeroVisible ? 'text-white hover:bg-white/10 hover:text-white' : 'text-foreground hover:bg-accent')} aria-label="Open menu">
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

            <nav className="flex-grow flex flex-col items-center justify-center gap-4 md:gap-8">
                {navLinks.map((link, index) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                        "relative text-4xl md:text-6xl font-bold text-background/80 hover:text-background transition-colors duration-300 opacity-0 group",
                        isMenuOpen && "animate-fade-in-down"
                    )}
                     style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                </Link>
                ))}
            </nav>

            <div className="h-24"></div>
        </div>
      </div>
    </header>
  );
}