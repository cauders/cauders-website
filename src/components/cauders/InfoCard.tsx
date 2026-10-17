import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContainerCard from './ContainerCard';

export interface InfoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon | React.ReactNode;
  stepNumber?: string | number;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  contentAlign?: 'top' | 'bottom' | 'split';
  lineClamp?: 2 | 3 | 4 | 5 | 6 | 'none';
  hoverReveal?: boolean;
  headingPosition?: 'top' | 'bottom';
  titleClassName?: string;
  descriptionClassName?: string;
}

const lineClampClasses = {
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
  'none': 'line-clamp-none',
};

export default function InfoCard({
  title,
  description,
  icon: IconOrNode,
  stepNumber,
  ctaText,
  ctaHref,
  className = '',
  contentAlign = 'top',
  lineClamp = 3,
  hoverReveal = false,
  headingPosition = 'top',
  titleClassName = '',
  descriptionClassName = '',
}: InfoCardProps) {
  return (
    <ContainerCard
      className={`h-full flex flex-col group text-left relative overflow-hidden ${className.includes('p-') ? '' : 'p-6'} ${className}`}
      hoverEffect
    >
      <div className="relative z-10 flex flex-col h-full w-full">
        {(IconOrNode || stepNumber) && (
          <div className="flex justify-between items-start mb-6 md:mb-8">
            {IconOrNode && (
              <div className="flex-shrink-0 bg-zinc rounded-full w-16 h-16 flex items-center justify-center border border-primary/20 transition-colors">
                {typeof IconOrNode === 'function' || (typeof IconOrNode === 'object' && 'render' in (IconOrNode as any)) ? (
                  // @ts-ignore
                  <IconOrNode className="w-8 h-8 text-white" strokeWidth={1.5} />
                ) : (
                  // Otherwise, it's a raw React Node
                  IconOrNode
                )}
              </div>
            )}
            
            {stepNumber && (
              <div className="text-4xl text-zinc transition-colors font-headline ml-auto">
                {typeof stepNumber === 'number'
                  ? stepNumber.toString().padStart(2, '0')
                  : stepNumber}
              </div>
            )}
          </div>
        )}

        <div className={`flex-1 flex flex-col ${contentAlign === 'bottom' ? 'justify-end' : contentAlign === 'split' ? 'justify-between' : ''}`}>
          {headingPosition === 'bottom' ? (
            <>
              <p className={`text-sm md:text-base text-foreground/80 leading-relaxed transition-all duration-300 ${hoverReveal ? 'line-clamp-2 group-hover:line-clamp-none' : lineClamp !== 'none' ? `group-hover:line-clamp-none ${lineClampClasses[lineClamp]}` : ''} mb-4 ${descriptionClassName}`}>
                {description}
              </p>
              <h4 className={`text-xl lg:text-2xl font-medium font-headline text-foreground tracking-tight transition-all duration-300 mt-auto leading-snug ${titleClassName}`}>
                {title}
              </h4>
            </>
          ) : (
            <>
              <h4 className={`text-xl lg:text-2xl font-medium font-headline text-foreground tracking-tight transition-all duration-300 ${contentAlign === 'bottom' ? 'mt-auto mb-2' : contentAlign === 'split' ? 'mb-auto' : 'mb-3'} ${titleClassName}`}>
                {title}
              </h4>
              <p className={`text-sm md:text-base text-foreground/80 leading-relaxed transition-all duration-300 ${hoverReveal ? 'line-clamp-2 group-hover:line-clamp-none' : lineClamp !== 'none' ? `group-hover:line-clamp-none ${lineClampClasses[lineClamp]}` : ''} ${contentAlign === 'bottom' || contentAlign === 'split' ? 'mb-0' : 'mb-4'} ${descriptionClassName}`}>
                {description}
              </p>
            </>
          )}

          {ctaText && ctaHref && (
            <div className={`flex items-start ${contentAlign === 'bottom' ? 'mt-6' : contentAlign === 'split' ? 'mt-auto' : 'mt-2'}`}>
              <Button asChild variant="zinc" size="lg">
                <Link href={ctaHref}>
                  {ctaText}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </ContainerCard>
  );
}
