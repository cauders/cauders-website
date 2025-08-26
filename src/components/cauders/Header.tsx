"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-primary">
            Cauders
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="link" asChild className="text-foreground/80 hover:text-primary">
              <Link href="#services">Services</Link>
            </Button>
            <Button variant="link" asChild className="text-foreground/80 hover:text-primary">
              <Link href="#portfolio">Portfolio</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
