'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const serviceLinks = [
 { href: '/services/software-solutions/web-development', label: 'Web Development' },
 { href: '/services/software-solutions/mobile-app-development', label: 'Mobile Apps' },
 { href: '/services/software-solutions/saas-development', label: 'SaaS Development' },
 { href: '/services/design-digital-commerce/ui-ux-design', label: 'UI/UX Design' },
 { href: '/services/quality-assurance-cybersecurity/quality-assurance', label: 'QA & Testing' },
 { href: '/services/maintenance-support/application-maintenance-support', label: 'Maintenance & Support' },
];

const aiAndConsultancyLinks = [
 { href: '/ai/ai-strategy-advisory/ai-roadmapping-consulting', label: 'AI Strategy' },
 { href: '/ai/ai-product-engineering/custom-ai-development', label: 'AI Product Engineering' },
 { href: '/ai/generative-ai-llms/generative-ai-solutions', label: 'Generative AI & LLMs' },
 { href: '/ai/data-intelligent-automation/data-modernization-analytics', label: 'Data & Analytics' },
 { href: '/services/cloud-digital-transformation/digital-consulting-strategy', label: 'Business Consultation' },
 { href: '/services/cloud-digital-transformation/cloud-transformation', label: 'Cloud Transformation' },
];

const industryLinks = [
 { href: '/industries/healthcare', label: 'Healthcare' },
 { href: '/industries/banking-financial-services', label: 'Finance' },
 { href: '/industries/retail-ecommerce', label: 'Retail & E-commerce' },
 { href: '/industries/technology-software', label: 'Technology' },
 { href: '/industries/logistics-supply-chain', label: 'Logistics' },
];

const companyLinks = [
 { href: '/about', label: 'About Us' },
 { href: '/team', label: 'Our Team' },
 { href: 'https://www.portfolio.cauders.com/', label: 'Portfolio' },
 { href: '/careers', label: 'Careers' },
 { href: '/contact', label: 'Contact Us' },
 { href: '/faq', label: 'FAQs' },
];

const legalLinks = [
 { href: '/privacy-policy', label: 'Privacy Policy' },
 { href: '/terms-of-service', label: 'Terms of Service' },
 { href: '/cookies-policy', label: 'Cookies Policy' },
 { href: '/feedback', label: 'Feedback' },
];

const socialLinks = [
 { href: 'https://www.facebook.com/people/Cauders/61580041683735/', label: 'Facebook' },
 { href: 'https://www.instagram.com/ccauders/', label: 'Instagram' },
 { href: 'https://www.linkedin.com/company/cauders/', label: 'LinkedIn' },
];

export default function Footer() {
 const year = new Date().getFullYear();

 return (
 <div 
 className="relative text-black z-20"
 data-footer-hover="true"
 >
 <footer className="relative z-10">
 <div className="container mx-auto pt-10 md:pt-16 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-8">
 
 {/* Column 1: Logo, Address, and Info */}
 <div className="col-span-2 lg:col-span-2 flex flex-col items-start gap-6">
 <Link href="/" className="inline-block">
 <Image src="https://res.cloudinary.com/cauders/image/upload/v1786551887/logo-gd_ulbjsm.png" alt="Cauders Logo" width={240} height={120} className="w-[180px] h-auto object-contain" />
 </Link>
 <div className="flex flex-col gap-2">
 <p className="text-base font-medium text-black max-w-xs">
 AI, Automation & Software Solutions.
 </p>
 <p className="text-sm text-black/80 max-w-xs leading-relaxed">
 We provide business consultation and build high-performance digital products to scale your operations.
 </p>
 </div>
 
 <div className="flex flex-col gap-4 mt-2 text-sm text-black/80">
 <div className="flex items-start gap-3">
 <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-black/50" />
 <span>F1 Block Phase 2<br />Pak Arab Housing Society<br />Ferozpur Road, Lahore</span>
 </div>
 <div className="flex items-center gap-3">
 <Mail className="w-5 h-5 shrink-0 text-black/50" />
 <a href="mailto:info@cauders.com" className="hover:text-primary transition-colors">info@cauders.com</a>
 </div>
 </div>
 </div>

 {/* Column 2: Services */}
 <div className="col-span-1 lg:col-span-1">
 <h3 className="font-semibold tracking-widest uppercase mb-5 text-black text-sm">Services</h3>
 <nav className="flex flex-col gap-3">
 {serviceLinks.map((link) => (
 <Link key={link.label} href={link.href} className="text-sm text-black/70 hover:text-primary transition-colors w-fit">
 {link.label}
 </Link>
 ))}
 </nav>
 </div>

 {/* Column 3: AI & Consultancy */}
 <div className="col-span-1 lg:col-span-1">
 <h3 className="font-semibold tracking-widest uppercase mb-5 text-black text-sm">AI & Solutions</h3>
 <nav className="flex flex-col gap-3">
 {aiAndConsultancyLinks.map((link) => (
 <Link key={link.label} href={link.href} className="text-sm text-black/70 hover:text-primary transition-colors w-fit">
 {link.label}
 </Link>
 ))}
 </nav>
 </div>

 {/* Column 4: Industries */}
 <div className="col-span-1 lg:col-span-1">
 <h3 className="font-semibold tracking-widest uppercase mb-5 text-black text-sm">Industries</h3>
 <nav className="flex flex-col gap-3">
 {industryLinks.map((link) => (
 <Link key={link.label} href={link.href} className="text-sm text-black/70 hover:text-primary transition-colors w-fit">
 {link.label}
 </Link>
 ))}
 </nav>
 </div>

 {/* Column 5: Company */}
 <div className="col-span-1 lg:col-span-1">
 <h3 className="font-semibold tracking-widest uppercase mb-5 text-black text-sm">Company</h3>
 <nav className="flex flex-col gap-3">
 {companyLinks.map((link) => (
 <Link key={link.label} href={link.href} className="text-sm text-black/70 hover:text-primary transition-colors w-fit">
 {link.label}
 </Link>
 ))}
 </nav>
 </div>

 </div>
 </div>

 {/* Bottom Tier: Socials & Legal */}
 <div className="border-t border-black/10 w-full">
 <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
 
 <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-black/60">
 <p>&copy; {year} Cauders. All Rights Reserved.</p>
 <div className="hidden sm:block h-3 w-px bg-black/20"></div>
 <div className="flex items-center gap-x-4">
 {legalLinks.map((link, index) => (
 <React.Fragment key={link.label}>
 <Link href={link.href} className="hover:text-primary transition-colors">
 {link.label}
 </Link>
 </React.Fragment>
 ))}
 </div>
 </div>

 <div className="flex flex-wrap items-center justify-center gap-4">
 {socialLinks.map((link) => (
 <Link 
 key={link.label} 
 href={link.href} 
 target="_blank"
 rel="noopener noreferrer"
 className="text-xs text-black/60 hover:text-primary transition-colors tracking-widest uppercase font-medium"
 >
 {link.label}
 </Link>
 ))}
 </div>
 </div>
 </div>
 </footer>
 </div>
 );
}
