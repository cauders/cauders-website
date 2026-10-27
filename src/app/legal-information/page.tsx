import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import PolicyLayout, { PolicySectionItem } from '@/components/cauders/PolicyLayout';
import { Building2, FileText, MapPin, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Information & Corporate Disclosures | Cauders',
  description: 'Official corporate registration, legal disclosures, registered office address, and regulatory compliance details for Cauders (Private) Limited.',
  alternates: {
    canonical: '/legal-information',
  },
  openGraph: {
    title: 'Legal Information & Corporate Disclosures | Cauders',
    description: 'Official corporate registration, legal disclosures, registered office address, and regulatory compliance details for Cauders (Private) Limited.',
    url: 'https://www.cauders.com/legal-information',
    siteName: 'Cauders',
    locale: 'en_US',
    type: 'website',
  },
};

const legalInfoSections: PolicySectionItem[] = [
  {
    id: "company-details",
    title: "Company Identification",
    content: (
      <>
        <p>
          This page sets forth statutory, corporate, and legal registration information for Cauders in accordance with applicable corporate transparency and disclosure regulations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-card/90 backdrop-blur-sm p-6 shadow-sm space-y-1.5 transition-all hover:border-[#09555A]/30">
            <span className="text-xs font-bold uppercase tracking-wider text-[#09555A] dark:text-primary block">Company Name</span>
            <p className="text-lg font-bold text-foreground font-headline">CAUDERS (PRIVATE) LIMITED</p>
            <p className="text-xs text-zinc-500">Private company limited by shares</p>
          </div>

          <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-card/90 backdrop-blur-sm p-6 shadow-sm space-y-1.5 transition-all hover:border-[#09555A]/30">
            <span className="text-xs font-bold uppercase tracking-wider text-[#09555A] dark:text-primary block">Incorporation Number (Inc. No.)</span>
            <p className="text-lg font-bold text-[#09555A] dark:text-primary font-mono tracking-tight">0351558</p>
            <p className="text-xs text-zinc-500">Registered with SECP</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "registered-office",
    title: "Registered Office & Principal Address",
    content: (
      <>
        <p>
          The official registered address and physical operational office of Cauders (Private) Limited is as follows:
        </p>

        <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-[#09555A]/[0.03] dark:bg-white/[0.03] p-6 sm:p-7 space-y-4 mt-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#09555A]/10 text-[#09555A] dark:bg-primary/10 dark:text-primary flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-foreground text-base font-headline">CAUDERS (PRIVATE) LIMITED</p>
              <p className="text-zinc-500 text-xs sm:text-sm">Corporate Headquarters</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 pt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
            <div className="w-9 h-9 rounded-xl bg-[#09555A]/10 text-[#09555A] dark:bg-primary/10 dark:text-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                F1 Block Phase 2 Pak Arab Housing Society,
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Ferozpur Road, Lahore,
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                Pakistan
              </p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: "contact-channels",
    title: "Official Contact Channels",
    content: (
      <>
        <p>
          For regulatory inquiries, commercial verification, contractual notices, or general business correspondence, our authorized corporate channels are:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
          <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-card/90 backdrop-blur-sm p-5 shadow-sm space-y-2.5 transition-all hover:border-[#09555A]/30 hover:shadow-md">
            <div className="w-9 h-9 rounded-xl bg-[#09555A]/10 text-[#09555A] dark:bg-primary/10 dark:text-primary flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Telephone</span>
            <a 
              href="tel:+923390107377" 
              className="text-sm font-semibold text-foreground hover:text-[#09555A] dark:hover:text-primary transition-colors block"
            >
              +92 3390107377
            </a>
          </div>

          <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-card/90 backdrop-blur-sm p-5 shadow-sm space-y-2.5 transition-all hover:border-[#09555A]/30 hover:shadow-md">
            <div className="w-9 h-9 rounded-xl bg-[#09555A]/10 text-[#09555A] dark:bg-primary/10 dark:text-primary flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Email Inquiries</span>
            <a 
              href="mailto:info@cauders.com" 
              className="text-sm font-semibold text-foreground hover:text-[#09555A] dark:hover:text-primary transition-colors block"
            >
              info@cauders.com
            </a>
          </div>

          <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-card/90 backdrop-blur-sm p-5 shadow-sm space-y-2.5 transition-all hover:border-[#09555A]/30 hover:shadow-md">
            <div className="w-9 h-9 rounded-xl bg-[#09555A]/10 text-[#09555A] dark:bg-primary/10 dark:text-primary flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Official Website</span>
            <Link 
              href="/" 
              className="text-sm font-semibold text-foreground hover:text-[#09555A] dark:hover:text-primary transition-colors block"
            >
              https://cauders.com
            </Link>
          </div>
        </div>
      </>
    )
  },
  {
    id: "statutory-status",
    title: "Statutory & Corporate Standing",
    content: (
      <>
        <p>
          Cauders (Private) Limited is duly incorporated and validly existing under the corporate laws of Pakistan. 
          The company provides business-to-business (B2B) digital engineering, artificial intelligence integrations, custom enterprise software development, SaaS products, and workflow automation services.
        </p>
        <p>
          All commercial engagements, master services agreements (MSAs), and statements of work (SOWs) entered into under the Cauders brand are executed on behalf of Cauders (Private) Limited unless explicitly stated otherwise in a signed contractual instrument.
        </p>
      </>
    )
  },
  {
    id: "related-policies",
    title: "Related Corporate Policies",
    content: (
      <>
        <p>
          Please review our complementary governance and website terms:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <Link href="/terms-of-service" className="text-zinc-900 underline font-medium hover:text-primary">
              Terms of Service
            </Link>{' '}
            — Governs access to and use of this website.
          </li>
          <li>
            <Link href="/privacy-policy" className="text-zinc-900 underline font-medium hover:text-primary">
              Privacy Policy
            </Link>{' '}
            — Details how we collect, store, and process personal and corporate data.
          </li>
          <li>
            <Link href="/cookies-policy" className="text-zinc-900 underline font-medium hover:text-primary">
              Cookies Policy
            </Link>{' '}
            — Outlines cookie utilization and user preferences.
          </li>
        </ul>
      </>
    )
  }
];

export default function LegalInfoPage() {
  return (
    <PolicyLayout
      title="Legal Information"
      lastUpdated="October 2026"
      badge="Legal Information"
      sections={legalInfoSections}
    />
  );
}
