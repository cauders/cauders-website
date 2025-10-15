'use client';

import React from 'react';
import GradientContainer from './GradientContainer';
import ArrowBadge from './ArrowBadge';
import StandardizedHeading from './StandardizedHeading';
import { Button } from '../ui/button';
import Link from 'next/link';
import { getProjects } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";
import placeholderImages from '@/lib/placeholder-images.json';
import ScrollFadeIn from './ScrollFadeIn';


const mobileProjects = [
    {
      slug: 'mobile-app-1',
      title: 'User Profile Management',
      description: 'Manage your profile easily and keep track of your learning journey.',
      imageUrl: placeholderImages.mobilePortfolio.screen1.imageUrl,
      aiHint: placeholderImages.mobilePortfolio.screen1.aiHint,
    },
    {
      slug: 'mobile-app-2',
      title: 'Creative Fields Discovery',
      description: 'Find no less than 20+ Creative fields to learn & get yourself on the road of your dream career.',
      imageUrl: placeholderImages.mobilePortfolio.screen2.imageUrl,
      aiHint: placeholderImages.mobilePortfolio.screen2.aiHint,
    },
    {
        slug: 'mobile-app-3',
        title: 'Job Search',
        description: 'Find countless Jobs according to your skillset right from highly paying firms.',
        imageUrl: placeholderImages.mobilePortfolio.screen3.imageUrl,
        aiHint: placeholderImages.mobilePortfolio.screen3.aiHint,
    },
    {
        slug: 'mobile-app-4',
        title: 'Course Catalog',
        description: 'Explore a wide range of creative fields to find your passion and start your journey.',
        imageUrl: placeholderImages.mobilePortfolio.screen4.imageUrl,
        aiHint: placeholderImages.mobilePortfolio.screen4.aiHint,
    },
    {
        slug: 'mobile-app-5',
        title: 'Profile View',
        description: 'A clean and simple profile view to track your progress and achievements.',
        imageUrl: placeholderImages.mobilePortfolio.screen5.imageUrl,
        aiHint: placeholderImages.mobilePortfolio.screen5.aiHint,
    },
];

export default function NewPortfolioSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

  return (
    <GradientContainer className="py-20 lg:py-32 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
            <ArrowBadge href="https://portfolio.cauders.com" text="Our Portfolio" />
            <StandardizedHeading lines={['Featured Mobile Projects']} className="mt-4 text-background" />
        </ScrollFadeIn>

        <ScrollFadeIn delay="delay-200" className='mt-12'>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {mobileProjects.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
                        <div className="p-1 h-full">
                            <Card className="relative bg-transparent border-0 shadow-none text-left h-[500px] flex flex-col items-center">
                                <div className="relative w-[250px] h-[500px]">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-contain"
                                        data-ai-hint={project.aiHint}
                                    />
                                </div>
                                <p className="text-xs text-background/80 mt-4 text-center max-w-[250px]">
                                    {project.description}
                                </p>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </ScrollFadeIn>

        <ScrollFadeIn className="mt-16">
          <p className="text-base text-background/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-8 bg-transparent text-background border-background hover:bg-background hover:text-foreground">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </ScrollFadeIn>
      </div>
    </GradientContainer>
  );
}
