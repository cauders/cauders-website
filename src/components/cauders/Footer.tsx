
'use client';

import Link from 'next/link';
import MagneticLink from './MagneticLink';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

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
    { href: '/faq', label: 'FAQ' },
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
        className="relative bg-foreground text-background overflow-hidden z-20"
        data-footer-hover="true"
    >
      <div 
        className="absolute top-[-120px] left-[-80px] w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-80"
      ></div>
      <div 
        className="absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-80"
      ></div>
      
      <footer className="glass-effect relative z-10">
        <div className="container mx-auto py-6 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Column 1: Logo and Copyright */}
              <div className="lg:col-span-4 flex flex-col items-start">
                  <Link href="/" className="text-3xl font-bold hover:text-primary transition-colors mb-4">
                      Cauders
                  </Link>
                  <p className="text-sm text-background/70 mt-2 max-w-xs">
                      Crafting premium, modern, and dynamic websites and applications to elevate your digital presence.
                  </p>
              </div>

              {/* Column 2: Links */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-sm">
                  <div>
                      <h3 className="font-semibold tracking-wider uppercase mb-4 text-sm">Quick Links</h3>
                      <nav className="flex flex-col gap-2 lg:gap-3">
                          {quickLinks.map((link) => (
                              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                                  {link.label}
                              </Link>
                          ))}
                      </nav>
                  </div>
                  <div>
                      <h3 className="font-semibold tracking-wider uppercase mb-4 text-sm">Company</h3>
                      <nav className="flex flex-col gap-2 lg:gap-3">
                          {companyLinks.map((link) => (
                              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                                  {link.label}
                              </Link>
                          ))}
                      </nav>
                  </div>
              </div>

              {/* Column 3: Contact & Legal */}
              <div className="lg:col-span-4 text-sm">
                  <h3 className="font-semibold tracking-wider uppercase mb-4 text-sm">Get in Touch</h3>
                  <a href="mailto:info@cauders.com" className="block hover:text-primary transition-colors mb-6">info@cauders.com</a>

                  <h3 className="font-semibold tracking-wider uppercase mb-4 text-sm">Legal</h3>
                  <nav className="flex flex-col gap-2 lg:gap-3">
                      {legalLinks.map((link) => (
                          <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                              {link.label}
                          </Link>
                      ))}
                  </nav>
              </div>
          </div>

          <div className="mt-6 lg:mt-12 pt-6 lg:pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-xs text-background/70 text-center md:text-left">
                  &copy; {year} Cauders. All Rights Reserved.
              </p>
              <div className="flex items-center justify-center flex-wrap gap-2">
                  {socialLinks.map((link) => (
                      <MagneticLink key={link.label} href={link.href} className="w-20 h-20" linkClassName="text-xs text-background">
                          {link.label}
                      </MagneticLink>
                  ))}
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
