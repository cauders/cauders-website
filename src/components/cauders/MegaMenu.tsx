'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { getServiceCategories, getIndustries, getServiceCategoryBySlug, getAiCategories } from '@/lib/data';
import { ChevronRight } from 'lucide-react';

interface MegaMenuProps {
 activeMenu: 'services' | 'ai' | 'industries' | 'company' | null;
 setActiveMenu: (menu: 'services' | 'ai' | 'industries' | 'company' | null) => void;
}
import { motion, AnimatePresence } from 'framer-motion';

export default function MegaMenu({ activeMenu, setActiveMenu }: MegaMenuProps) {
 const pathname = usePathname();
 const serviceCategories = getServiceCategories();
 const aiCategories = getAiCategories();
 const industries = getIndustries();
 const [isMounted, setIsMounted] = useState(false);
 const lastActiveMenu = useRef<'services' | 'ai' | 'industries' | 'company' | null>(null);
 
 if (activeMenu) {
 lastActiveMenu.current = activeMenu;
 }
 
 const displayedMenu = activeMenu || lastActiveMenu.current;
 
 // Timeout ref for delayed closing to prevent flickering
 const timeoutRef = useRef<NodeJS.Timeout | null>(null);

 const partitionedServices = [
 serviceCategories.filter(c => c.slug.includes('software-solutions') || c.services.length === 1),
 serviceCategories.filter(c => c.slug.includes('cloud')),
 serviceCategories.filter(c => c.slug.includes('quality-assurance'))
 ];

 const partitionedAi = [
 aiCategories.filter(c => c.slug.includes('product-engineering') || c.slug.includes('data-intelligent')),
 aiCategories.filter(c => c.slug.includes('strategy-advisory') || c.slug.includes('enterprise-ai')),
 aiCategories.filter(c => c.slug.includes('generative-ai'))
 ];

 // Helper component for rendering a category
 const renderCategory = (category: any) => {
 const singleServiceHref = `/services/${category.slug}/${category.services[0]?.slug}`;
 const isSingleServiceActive = pathname === singleServiceHref;

 return (
 <div key={category.slug} className={cn("flex flex-col space-y-6 w-full", category.services.length === 1 ? "mb-5" : "mb-10")}>
 {category.services.length === 1 ? (
 <Link 
 href={singleServiceHref}
 onClick={() => setActiveMenu(null)}
 className="group inline-block"
 >
 <span className={cn("text-xl font-bold font-headline group-hover:text-zinc transition-colors leading-snug block", isSingleServiceActive ? "text-zinc" : "text-foreground")}>
 {category.title}
 </span>
 </Link>
 ) : (
 <span className="text-xl font-bold font-headline text-foreground leading-snug block">
 {category.title}
 </span>
 )}
 
 {category.services.length > 1 && (
 <ul className="flex flex-col space-y-4">
 {category.services.map((service: any) => {
 const serviceHref = `/${displayedMenu === 'ai' ? 'ai' : 'services'}/${category.slug}/${service.slug}`;
 const isServiceActive = pathname === serviceHref;
 return (
 <li key={service.slug}>
 <Link
 href={serviceHref}
 onClick={() => setActiveMenu(null)}
 className={cn("text-[15px] hover:text-zinc transition-colors flex items-center group/link", isServiceActive ? "text-zinc font-medium" : "text-")}
 >
 <span className="group-hover/link:translate-x-1 transition-transform">
 {service.title}
 </span>
 </Link>
 </li>
 )})}
 </ul>
 )}
 </div>
 )};

 useEffect(() => {
 setIsMounted(true);
 return () => {
 if (timeoutRef.current) clearTimeout(timeoutRef.current);
 };
 }, []);

 const handleMouseEnter = () => {
 if (timeoutRef.current) clearTimeout(timeoutRef.current);
 };

 const handleMouseLeave = () => {
 timeoutRef.current = setTimeout(() => {
 setActiveMenu(null);
 }, 150);
 };

 if (!isMounted) return null;

 return (
 <AnimatePresence>
 {activeMenu && (
 <motion.div
 initial={{ opacity: 0, y: -10, x: "-50%" }}
 animate={{ opacity: 1, y: 0, x: "-50%" }}
 exit={{ opacity: 0, y: 0, x: "-50%", transition: { duration: 0.1, ease: "easeIn" } }}
 transition={{ duration: 0.1, ease: "easeOut" }}
 className="fixed z-40 w-full top-[72px] left-1/2 max-w-5xl pt-4"
 onMouseEnter={handleMouseEnter}
 onMouseLeave={handleMouseLeave}
 >
 <div className="relative w-full bg-white dark:bg-zinc-950 border border-border/20 rounded-3xl shadow-xl overflow-hidden">
 <div className="w-full max-w-[1600px] mx-auto relative ">
 <AnimatePresence mode="wait">
 {displayedMenu === 'services' && (
 <motion.div
 key="services"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.15 }}
 className="w-full py-10 pb-12 px-4 sm:px-6 lg:px-12"
 >
 <div className="flex flex-col lg:flex-row gap-x-16">
 <div className="flex-1 flex flex-col">
 {partitionedServices[0].map(renderCategory)}
 </div>
 <div className="flex-1 flex flex-col">
 {partitionedServices[1].map(renderCategory)}
 </div>
 <div className="flex-1 flex flex-col">
 {partitionedServices[2].map(renderCategory)}
 </div>
 </div>
 </motion.div>
 )}

 {displayedMenu === 'ai' && (
 <motion.div
 key="ai"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.15 }}
 className="w-full py-10 pb-12 px-4 sm:px-6 lg:px-12"
 >
 <div className="flex flex-col lg:flex-row gap-x-16">
 <div className="flex-1 flex flex-col">
 {partitionedAi[0].map(renderCategory)}
 </div>
 <div className="flex-1 flex flex-col">
 {partitionedAi[1].map(renderCategory)}
 </div>
 <div className="flex-1 flex flex-col">
 {partitionedAi[2].map(renderCategory)}
 </div>
 </div>
 </motion.div>
 )}

 {displayedMenu === 'industries' && (
 <motion.div
 key="industries"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.15 }}
 className="w-full py-10 pb-12 px-4 sm:px-6 lg:px-12"
 >
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 max-w-4xl">
 {industries.map((industry) => (
 <div key={industry.slug} className="w-full">
 <Link 
 href={`/industries/${industry.slug}`}
 onClick={() => setActiveMenu(null)}
 className="group inline-block"
 >
 <span className={cn("text-xl font-bold font-headline group-hover:text-zinc transition-colors leading-snug block", pathname === `/industries/${industry.slug}` ? "text-zinc" : "text-foreground")}>
 {industry.title}
 </span>
 </Link>
 {/* Subcategories removed per user request */}
 </div>
 ))}
 </div>
 </motion.div>
 )}
 {displayedMenu === 'company' && (
 <motion.div
 key="about"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.15 }}
 className="w-full py-10 pb-12 px-4 sm:px-6 lg:px-12"
 >
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16 max-w-4xl mx-auto">
 <div className="flex flex-col space-y-6">
 <span className="text-xl font-bold font-headline text-foreground leading-snug block">
 Company
 </span>
 <ul className="flex flex-col space-y-4">
 <li>
 <Link href="/about" onClick={() => setActiveMenu(null)} className={cn("text-[15px] hover:text-zinc transition-colors flex items-center group/link", pathname === "/about" ? "text-zinc font-medium" : "text-")}>
 <span className="group-hover/link:translate-x-1 transition-transform">About Us</span>
 </Link>
 </li>
 <li>
 <Link href="/team" onClick={() => setActiveMenu(null)} className={cn("text-[15px] hover:text-zinc transition-colors flex items-center group/link", pathname === "/team" ? "text-zinc font-medium" : "text-")}>
 <span className="group-hover/link:translate-x-1 transition-transform">Our Team</span>
 </Link>
 </li>
 <li>
 <Link href="/careers" onClick={() => setActiveMenu(null)} className={cn("text-[15px] hover:text-zinc transition-colors flex items-center group/link", pathname === "/careers" ? "text-zinc font-medium" : "text-")}>
 <span className="group-hover/link:translate-x-1 transition-transform">Careers</span>
 </Link>
 </li>
 <li>
 <Link href="/partners" onClick={() => setActiveMenu(null)} className={cn("text-[15px] hover:text-zinc transition-colors flex items-center group/link", pathname === "/partners" ? "text-zinc font-medium" : "text-")}>
 <span className="group-hover/link:translate-x-1 transition-transform">Partner Program</span>
 </Link>
 </li>
 </ul>
 </div>
 <div className="flex flex-col space-y-6">
 <span className="text-xl font-bold font-headline text-foreground leading-snug block">
 Support
 </span>
 <ul className="flex flex-col space-y-4">
 <li>
 <Link href="/contact" onClick={() => setActiveMenu(null)} className={cn("text-[15px] hover:text-zinc transition-colors flex items-center group/link", pathname === "/contact" ? "text-zinc font-medium" : "text-")}>
 <span className="group-hover/link:translate-x-1 transition-transform">Contact Us</span>
 </Link>
 </li>
 <li>
 <Link href="/faq" onClick={() => setActiveMenu(null)} className={cn("text-[15px] hover:text-zinc transition-colors flex items-center group/link", pathname === "/faq" ? "text-zinc font-medium" : "text-")}>
 <span className="group-hover/link:translate-x-1 transition-transform">FAQs</span>
 </Link>
 </li>
 </ul>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 );
}
