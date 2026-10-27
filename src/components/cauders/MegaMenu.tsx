'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaMenuProps {
  activeMenu: 'services' | 'ai' | 'industries' | 'company' | null;
  setActiveMenu: (menu: 'services' | 'ai' | 'industries' | 'company' | null) => void;
  isScrolled?: boolean;
  isHeroHeader?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface MenuItem {
  href: string;
  label: string;
}

const aiMenuItems: MenuItem[] = [
  { href: '/ai/generative-ai-llms/generative-ai-solutions', label: 'Generative AI' },
  { href: '/ai/generative-ai-llms/autonomous-ai-agents', label: 'AI Agents & Workflows' },
  { href: '/ai/ai-product-engineering/custom-ai-development', label: 'Custom AI & ML' },
  { href: '/ai/data-intelligent-automation/automation-custom-applications', label: 'Process Automation' },
  { href: '/ai/data-intelligent-automation/data-modernization-analytics', label: 'Data & Analytics' },
  { href: '/ai/ai-strategy-advisory/ai-roadmapping-consulting', label: 'AI Strategy & Readiness' },
];

const servicesMenuItems: MenuItem[] = [
  { href: '/services/software-solutions/custom-software-development', label: 'Custom Software Development' },
  { href: '/services/software-solutions/web-development', label: 'Web Application Development' },
  { href: '/services/software-solutions/mobile-app-development', label: 'Mobile App Development' },
  { href: '/services/software-solutions/saas-development', label: 'SaaS Development' },
  { href: '/services/cloud-digital-transformation/cloud-transformation', label: 'Platform Modernization' },
  { href: '/services/staff-augmentation/staff-augmentation-offshoring', label: 'Dedicated Teams' },
];

const companyMenuItems: MenuItem[] = [
  { href: '/about', label: 'About Cauders' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/careers', label: 'Careers' },
  { href: '/partners', label: 'Partnerships' },
  { href: '/faq', label: 'FAQs' },
];

const industryMenuItems: MenuItem[] = [
  { href: '/industries#banking-financial-services', label: 'Banking & Financial Services' },
  { href: '/industries#healthcare', label: 'Healthcare & Life Sciences' },
  { href: '/industries#retail-ecommerce', label: 'Retail & E-Commerce' },
  { href: '/industries#technology-software', label: 'Technology & Software' },
  { href: '/industries#real-estate', label: 'Real Estate & PropTech' },
  { href: '/industries#logistics-supply-chain', label: 'Logistics & Supply Chain' },
];

export default function MegaMenu({ 
  activeMenu, 
  setActiveMenu, 
  isScrolled = false,
  isHeroHeader = false,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Aggressively prefetch all links of the active category as soon as the mega menu opens
  useEffect(() => {
    if (!activeMenu) return;
    let items: MenuItem[] = [];
    if (activeMenu === 'services') items = servicesMenuItems;
    else if (activeMenu === 'ai') items = aiMenuItems;
    else if (activeMenu === 'industries') items = industryMenuItems;
    else if (activeMenu === 'company') items = companyMenuItems;

    items.forEach((item) => {
      try {
        const cleanPath = item.href.split('#')[0];
        router.prefetch(cleanPath);
      } catch {
        // Safe fallback
      }
    });
  }, [activeMenu, router]);

  const handleContainerEnter = () => {
    onMouseEnter?.();
  };

  const handleContainerLeave = () => {
    onMouseLeave?.();
  };

  if (!isMounted) return null;

  const renderTwoColumnList = (items: MenuItem[]) => {
    const midpoint = Math.ceil(items.length / 2);
    const col1 = items.slice(0, midpoint);
    const col2 = items.slice(midpoint);

    const renderLink = (item: MenuItem) => {
      const isActive = pathname === item.href;
      return (
        <li key={item.href}>
          <Link
            href={item.href}
            prefetch={true}
            onMouseEnter={() => router.prefetch(item.href)}
            onClick={() => setActiveMenu(null)}
            className={cn(
              "text-[15px] font-medium transition-colors py-1 flex items-center group w-fit",
              isActive ? "text-zinc font-semibold" : "text-foreground/80 hover:text-zinc"
            )}
          >
            <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
              <span>{item.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-zinc shrink-0" />
            </span>
          </Link>
        </li>
      );
    };

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-12 gap-y-3 w-full">
        <ul className="flex flex-col space-y-2.5">{col1.map(renderLink)}</ul>
        <ul className="flex flex-col space-y-2.5">{col2.map(renderLink)}</ul>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.99, x: "-50%" }}
          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
          exit={{ opacity: 0, y: -4, scale: 0.99, x: "-50%", transition: { duration: 0.08, ease: "easeOut" } }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "fixed z-50 w-full left-1/2 max-w-2xl pt-3 transition-all duration-300 ease-out",
            isHeroHeader ? "top-[76px] md:top-[88px]" : (isScrolled ? "top-[70px]" : "top-[76px]")
          )}
          onMouseEnter={handleContainerEnter}
          onMouseLeave={handleContainerLeave}
        >
          <div className="relative w-full bg-white dark:bg-zinc-950 border border-border/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="w-full mx-auto relative">
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                className="w-full py-6 px-6 sm:px-8"
              >
                {activeMenu === 'services' && renderTwoColumnList(servicesMenuItems)}
                {activeMenu === 'ai' && renderTwoColumnList(aiMenuItems)}
                {activeMenu === 'industries' && renderTwoColumnList(industryMenuItems)}
                {activeMenu === 'company' && renderTwoColumnList(companyMenuItems)}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
