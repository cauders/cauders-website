"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
     <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Cauders
          </Link>
          
          <div className="flex items-center gap-4">
             <ThemeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="text-lg font-semibold tracking-widest">
                    MENU
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
    </header>
  );
}
