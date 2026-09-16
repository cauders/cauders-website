import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArrowBadge from './ArrowBadge';
import StandardizedHeading from './StandardizedHeading';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

 interface SectionHeaderProps {
 badgeText?: string;
 badgeHref?: string;
 headingLines: (string | { text: string; isGradient?: boolean; gradientType?: 'primary' | 'light'; gradientLastWords?: number; inline?: boolean })[];
 description?: string;
 ctaText?: string;
 ctaLink?: string;
 onCtaClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
 className?: string;
 theme?: 'light' | 'dark'; // dark theme means text is white
 align?: 'left' | 'center';
}

export default function SectionHeader({
 badgeText,
 badgeHref = '#',
 headingLines,
 description,
 ctaText,
 ctaLink,
 onCtaClick,
 className = '',
 theme = 'light',
 align = 'left',
}: SectionHeaderProps) {
 const isDark = theme === 'dark';
 const isCenter = align === 'center';
 
 return (
 <div className={`mb-12 lg:mb-20 w-full flex flex-col gap-4 md:gap-6 ${className}`}>
 {badgeText && (
 <div className={`w-full ${isCenter ? 'flex justify-center' : 'flex justify-start'}`}>
 <ArrowBadge href={badgeHref} text={badgeText} variant={isDark ? "white" : "black"} />
 </div>
 )}
 
 <div className={`flex flex-col gap-y-4 md:gap-y-6 w-full ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
 <div className={`w-full ${isCenter ? 'max-w-7xl flex flex-col items-center' : 'max-w-3xl'}`}>
 <StandardizedHeading lines={headingLines} className={cn(isCenter ? 'text-center' : 'text-left', isDark ? 'text-white' : '')} />
 </div>
 {(description || ctaText) && (
 <div className={`flex flex-col gap-5 ${isCenter ? 'max-w-2xl mx-auto items-center' : 'items-start max-w-xl text-left'}`}>
 {description && (
 <p className={`${typography.bodyBase} font-normal ${isDark ? 'text-white' : 'text-foreground'}`}>
 {description}
 </p>
 )}
 {ctaText && ctaLink && (
 <Button asChild variant="zinc" size="lg" className="mt-2">
 <Link href={ctaLink} onClick={onCtaClick}>
 {ctaText}
 </Link>
 </Button>
 )}
 </div>
 )}
 </div>
 </div>
 );
}
