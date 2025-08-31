
"use client";

import { useState, useEffect, useRef, type ReactNode, type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact',label: 'Contact' }
];

const MagneticLink: FC<{href: string, onClick: () => void, children: ReactNode, style?: React.CSSProperties, className?:string}> = ({ href, onClick, children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMagneticEffect(ref);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        transition: 'transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)',
      }}
      className="relative group"
    >
      <Link
        href={href}
        onClick={onClick}
        className={cn(
            "relative text-3xl font-medium text-background z-10 transition-colors duration-300 px-8 py-4",
            props.className
        )}
        style={props.style}
      >
        {children}
      </Link>
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <rect
          className="outline-pill"
          x="1" y="1"
          width="98" height="38"
          rx="19" 
          fill="none"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};


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
        hasScrolled ? "pt-4" : ""
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
              <Button onClick={() => setIsMenuOpen(true)} variant="ghost" className="text-lg font-semibold tracking-widest">
                MENU
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(
          "fixed inset-0 z-[100] bg-foreground text-background transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isMenuOpen ? 'transform-none' : '-translate-y-full'
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
             <div className="flex items-center justify-between h-24">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
                    Cauders
                </Link>
                <div className="group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-8 w-8 text-background transition-transform duration-300 group-hover:rotate-90" strokeWidth={1} />
                </div>
            </div>

            <nav ref={navRef} className="flex-grow flex items-center justify-center space-x-12">
                {navLinks.map((link, index) => (
                <MagneticLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                        "opacity-0",
                        isMenuOpen && "animate-fade-in-down"
                    )}
                     style={{ animationDelay: `${500 + index * 400}ms` }}
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
