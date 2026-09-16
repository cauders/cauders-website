
'use client';

import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ContainerCard from './ContainerCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { LucideProps } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';

interface ServiceCardProps {
 icon?: ComponentType<LucideProps>;
 iconNode?: ReactNode;
 title: string;
 description: string;
 ctaText?: string;
 children?: ReactNode;
}

export default function ServiceCard({ icon: Icon, iconNode, title, description, ctaText, children }: ServiceCardProps) {
 return (
 <ContainerCard 
 className="h-full flex flex-col group p-4 md:p-6 text-left"
 hoverEffect
 >
 <CardHeader className="p-0 flex-row justify-start">
 <div className="flex-shrink-0 bg-zinc rounded-full p-2 md:p-3 border border-primary/20 group-hover:bg-zinc/90 transition-colors w-fit">
 {iconNode ? iconNode : (Icon && <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />)}
 </div>
 </CardHeader>
 <CardContent className="flex-grow p-0 mt-4">
 <CardTitle className="text-xl md:text-2xl font-medium font-headline text-foreground">{title}</CardTitle>
 <p className="text-sm font-light leading-relaxed text-foreground/90 mt-2 line-clamp-3">{description}</p>
 {children}
 </CardContent>
 {ctaText && (
 <CardFooter className="p-0 mt-4 md:mt-6 justify-start">
 <Button asChild variant="zinc" size="lg">
 <Link href="/contact">
 {ctaText}
 </Link>
 </Button>
 </CardFooter>
 )}
 </ContainerCard>
 );
}
