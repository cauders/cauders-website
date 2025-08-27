"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className={cn(
        "transition-all duration-300 ease-in-out rounded-xl",
        scrolled 
          ? "bg-card/60 backdrop-blur-lg border border-border/50 shadow-lg" 
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              Cauders
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Button key={link.href} variant="link" asChild 
                  className={cn(
                    "text-base font-medium",
                    pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                  )}>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <Button asChild className="ml-4">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <ThemeToggle />
            </nav>

            {/* Mobile Navigation Trigger */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b">
                      <Link href="/" className="text-2xl font-bold text-foreground">
                          Cauders
                        </Link>
                    </div>
                    <nav className="flex-grow p-6 flex flex-col gap-y-4">
                      {navLinks.map((link) => (
                          <Link key={link.href} href={link.href}
                            className={cn(
                              "text-2xl font-medium",
                              pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-primary transition-colors'
                            )}>
                            {link.label}
                          </Link>
                        ))}
                        <Button asChild size="lg" className="mt-auto">
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
