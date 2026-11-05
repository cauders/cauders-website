'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

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

  useEffect(() => {
    if (!activeMenu) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMenu, setActiveMenu]);

  if (!activeMenu) return null;

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
            onClick={() => setActiveMenu(null)}
            className={cn(
              'text-[15px] font-medium transition-colors py-1 flex items-center group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#09555A] rounded-sm',
              isActive ? 'text-zinc font-semibold' : 'text-foreground/80 hover:text-zinc'
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
    <div
      role="region"
      aria-label={`${activeMenu} navigation menu`}
      className={cn(
        'fixed z-50 w-full left-1/2 -translate-x-1/2 max-w-2xl pt-3 animate-in fade-in zoom-in-95 duration-150 ease-out',
        isHeroHeader ? 'top-[76px] md:top-[88px]' : isScrolled ? 'top-[70px]' : 'top-[76px]'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative w-full bg-white dark:bg-zinc-950 border border-border/20 rounded-2xl shadow-2xl overflow-hidden">
        <div key={activeMenu} className="w-full py-6 px-6 sm:px-8 animate-in fade-in duration-100">
          {activeMenu === 'services' && renderTwoColumnList(servicesMenuItems)}
          {activeMenu === 'ai' && renderTwoColumnList(aiMenuItems)}
          {activeMenu === 'industries' && renderTwoColumnList(industryMenuItems)}
          {activeMenu === 'company' && renderTwoColumnList(companyMenuItems)}
        </div>
      </div>
    </div>
  );
}
