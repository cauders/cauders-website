"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
     <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Cauders
          </Link>
          
          <div className="flex items-center gap-4">
            <Button onClick={() => setIsMenuOpen(true)} variant="ghost" className="text-lg font-semibold tracking-widest">
              MENU
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-secondary text-secondary-foreground animate-fade-in-up">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
                 <div className="flex items-center justify-between h-24">
                    <Link href="/" className="text-2xl font-bold">
                        Cauders
                    </Link>
                    <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon">
                        <X className="h-8 w-8" />
                    </Button>
                </div>

                <nav className="flex-grow flex flex-col items-center justify-center space-y-8 text-center">
                    {navLinks.map((link, index) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                        "text-4xl md:text-5xl font-light transition-colors hover:text-primary group",
                        pathname === link.href ? 'text-primary' : ''
                        )}
                    >
                        <span className="text-xl md:text-2xl font-mono text-primary/80 group-hover:text-primary transition-colors mr-4">0{index + 1}</span>
                        {link.label}
                    </Link>
                    ))}
                </nav>

                <div className="h-24"></div>
            </div>
        </div>
      )}
    </header>
  );
}
