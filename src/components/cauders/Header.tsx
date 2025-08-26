"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white hover:text-primary transition-colors">
            Cauders
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button key={link.href} variant="link" asChild 
                className={cn(
                  "text-lg",
                  pathname === link.href ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'
                )}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button asChild className="text-lg">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
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
                     <Link href="/" className="text-2xl font-bold text-white">
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
    </header>
  );
}
