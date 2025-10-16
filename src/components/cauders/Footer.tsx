
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import MagneticLink from './MagneticLink';

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: 'https://www.portfolio.cauders.com/', label: 'Portfolio' },
];

const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
    { href: '/faq', label: 'FAQs' },
]

const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
]

const socialLinks = [
    { href: 'https://www.facebook.com/people/Cauders/61580041683735/', label: 'Facebook' },
    { href: 'https://www.instagram.com/ccauders/', label: 'Instagram' },
    { href: 'https://github.com/cauders', label: 'Github' },
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
        <div className="container mx-auto py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8">
              
              {/* Column 1: Logo and Email */}
              <div className="md:col-span-1 lg:col-span-2 flex flex-col items-start gap-4">
                  <Link href="/" className="inline-block">
                    <Image src="/images/logo/logo-full.svg" alt="Cauders Logo" width={90} height={90} />
                  </Link>
                  <a href="mailto:info@cauders.com" className="text-2xl lg:text-3xl font-normal text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary">
                    info@cauders.com
                  </a>
              </div>

              {/* Column 2: Quick Links */}
              <div className="text-sm">
                  <h3 className="font-semibold tracking-wider uppercase mb-4 text-foreground/80 text-xs">Quick Links</h3>
                  <nav className="flex flex-col gap-2">
                      {quickLinks.map((link) => (
                          <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                              {link.label}
                          </Link>
                      ))}
                  </nav>
              </div>

              {/* Column 3: Company */}
              <div className="text-sm">
                  <h3 className="font-semibold tracking-wider uppercase mb-4 text-foreground/80 text-xs">Company</h3>
                  <nav className="flex flex-col gap-2">
                      {companyLinks.map((link) => (
                          <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                              {link.label}
                          </Link>
                      ))}
                  </nav>
              </div>
          </div>
          
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8">
              <div className="col-span-1 lg:col-span-2"></div>
              <div className="md:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-x-2 gap-y-2 justify-start md:justify-end">
                    {socialLinks.map((link) => (
                        <MagneticLink
                            key={link.label}
                            href={link.href}
                            className="w-auto h-auto p-2"
                            linkClassName="text-sm text-foreground/80 hover:text-primary"
                        >
                            {link.label}
                        </MagneticLink>
                    ))}
                </div>
              </div>
          </div>

          <div className="mt-12 lg:mt-16 pt-6 border-t border-foreground/10 flex justify-center text-xs text-foreground/60">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  {legalLinks.map((link, index) => (
                      <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                          {link.label}
                      </Link>
                  ))}
                  <span className="hidden sm:inline">•</span>
                  <p>
                      &copy; {year} Cauders. All Rights Reserved.
                  </p>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
