import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface ImageCardProps {
 imageUrl: string;
 altText: string;
 heading: string;
 subheading?: string;
 description?: string;
 href?: string;
 className?: string; // For aspect ratios (e.g., 'aspect-square') or heights
 descriptionClassName?: string; // Custom classes for the description (e.g. line-clamp-2)
 imageClassName?: string; // Custom classes for the image (e.g. object-top)
 icon?: React.ReactNode;
}

export default function ImageCard({
 imageUrl,
 altText,
 heading,
 subheading,
 description,
 href,
 className,
 descriptionClassName,
 imageClassName,
 icon
}: ImageCardProps) {
 const Wrapper = href ? Link : 'div';
 
 return (
 <Wrapper 
 href={href || ''} 
 className={cn(
 "group block relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border-0 bg-black/5",
 className
 )}
 >
 <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
 <Image 
 src={imageUrl}
 alt={altText}
 fill
 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
 />
 </div>
 
 {/* Default gradient overlay that provides contrast for the bottom text */}
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
 
 {/* 1. Default Text (Always rendered, but fades out if hovering AND there is a description) */}
 <div className={cn(
 "absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col items-start text-left transition-opacity duration-300",
 description ? "opacity-100 group-hover:opacity-0" : "opacity-100"
 )}>
 <h3 className="text-white font-medium text-xl md:text-2xl mb-1 leading-snug drop-shadow-md">
 {heading}
 </h3>
 {(subheading || icon || href) && (
 <div className="flex items-center text-primary text-sm font-medium mt-1">
 {subheading && <span>{subheading}</span>}
 {icon ? (
 <span className={cn(subheading && "ml-2")}>{icon}</span>
 ) : href ? (
 <ArrowRight className={cn("w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:-rotate-45", subheading && "ml-1")} />
 ) : null}
 </div>
 )}
 </div>

 {/* 2. Glass Container (Rendered ONLY if description exists. Fades in on hover.) */}
 {description && (
 <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 text-white pointer-events-none">
 <div className="p-4 md:p-5 rounded-xl glass-effect border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto transform translate-y-4 group-hover:translate-y-0">
 <h3 className="text-white font-medium text-xl md:text-2xl mb-1 leading-snug drop-shadow-md">
 {heading}
 </h3>
 {subheading && (
 <p className="text-primary text-sm font-medium mb-2 md:mb-3">{subheading}</p>
 )}
 <p className={cn("text-sm font-light leading-relaxed text-white/90 line-clamp-4", descriptionClassName)}>
 {description}
 </p>
 
 {/* Icons inside the glass card */}
 {icon && (
 <div className="flex items-center gap-2 mt-4">
 {icon}
 </div>
 )}
 </div>
 </div>
 )}
 
 </Wrapper>
 );
}
