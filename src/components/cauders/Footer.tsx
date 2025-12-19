
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import MagneticLink from './MagneticLink';

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: 'https://www.portfolio.cauders.com/', label: 'Portfolio' },
];

const companyLinks = [
    { href: '/team', label: 'Our Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQs' },
]

const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/feedback', label: 'Feedback' },
]

const socialLinks = [
    { href: 'https://www.facebook.com/people/Cauders/61580041683735/', label: 'Facebook' },
    { href: 'https://www.instagram.com/ccauders/', label: 'Instagram' },
    { href: 'https://www.linkedin.com/company/cauders/', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div 
        className="relative bg-card text-foreground z-20 border-t"
        data-footer-hover="true"
    >
      <footer className="relative z-10">
        <div className="container mx-auto py-8 md:py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-8">
              
              {/* Column 1: Logo and Socials */}
              <div className="col-span-2 md:col-span-2 flex flex-col items-start gap-4">
                  <Link href="/" className="inline-block">
                    <Image src="/images/logo/logo-full.svg" alt="Cauders Logo" width={40} height={40} className="md:w-[90px] md:h-[90px]" />
                  </Link>
                  <p className="text-sm text-foreground/80 max-w-xs">
                    Redefining the future of digital innovation.
                  </p>
              </div>

              {/* Column 2, 3, 4 */}
              <div className="col-span-2 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
                {/* Quick Links */}
                <div className="text-[10px] md:text-sm">
                    <h3 className="font-semibold tracking-wider uppercase mb-2 md:mb-4 text-foreground/80 text-[10px] md:text-xs">Quick Links</h3>
                    <nav className="flex flex-col gap-1 md:gap-2">
                        {quickLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Company */}
                <div className="text-[10px] md:text-sm">
                    <h3 className="font-semibold tracking-wider uppercase mb-2 md:mb-4 text-foreground/80 text-[10px] md:text-xs">Company</h3>
                    <nav className="flex flex-col gap-1 md:gap-2">
                        {companyLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                 {/* Social */}
                <div className="text-[10px] md:text-sm">
                    <h3 className="font-semibold tracking-wider uppercase mb-2 md:mb-4 text-foreground/80 text-[10px] md:text-xs">Social</h3>
                    <nav className="flex flex-col gap-1 md:gap-2">
                        {socialLinks.map((link) => (
                            <Link 
                                key={link.label} 
                                href={link.href} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
              </div>
          </div>

          <div className="mt-8 md:mt-12 lg:mt-16 pt-4 md:pt-6 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between text-[10px] md:text-xs text-foreground/60 gap-4">
              <p>
                  &copy; {year} Cauders. All Rights Reserved.
              </p>
              <div className="flex items-center gap-x-2 sm:gap-x-4">
                {legalLinks.map((link, index) => (
                    <React.Fragment key={link.label}>
                        <Link href={link.href} className="hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                        {index < legalLinks.length - 1 && <span className="hidden sm:inline">&bull;</span>}
                    </React.Fragment>
                ))}
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
