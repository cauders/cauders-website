
'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

interface ServiceCardProps {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
  ctaText?: string;
}

export default function ServiceCard({ icon: Icon, title, description, ctaText }: ServiceCardProps) {
  return (
    <Card className="h-full bg-card border-0 flex flex-col hover:-translate-y-2 transition-transform duration-300 group p-4 md:p-6 text-left rounded-2xl shadow-smooth-lift">
        <CardHeader className="p-0 flex-row justify-start">
            <div className="flex-shrink-0 bg-zinc rounded-full p-2 md:p-3 border border-primary/20 group-hover:bg-zinc/90 transition-colors w-fit">
                <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 mt-4">
            <CardTitle className="text-lg md:text-xl lg:text-2xl font-medium font-headline text-foreground">{title}</CardTitle>
            <p className="text-xs md:text-sm text-foreground/80 mt-2 line-clamp-3">{description}</p>
        </CardContent>
        {ctaText && (
            <CardFooter className="p-0 mt-4 md:mt-6 justify-start">
                <Button asChild variant="zinc" size="zinc">
                    <Link href="/contact">
                        {ctaText}
                    </Link>
                </Button>
            </CardFooter>
        )}
    </Card>
  );
}
