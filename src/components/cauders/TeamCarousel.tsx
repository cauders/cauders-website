'use client';

import React, { useState, useEffect } from 'react';
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import ImageCard from '@/components/cauders/ImageCard';
import { teamMembers, type TeamMember } from '@/lib/team-data';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { ArrowRight, Linkedin, TrendingUp, MapPin, Users, Laptop } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import BlurCircle from './BlurCircle';
import GradientContainer from './GradientContainer';
import CircleIcon from './CircleIcon';

export default function TeamCarousel() {
 // The carousel is now display-only, so we don't need selectedMember state here.

 return (
 <>
 <section className="py-16 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
 <div className="lg:col-span-1">
 <div className="flex flex-col">
 <ScrollFadeIn>
 <ArrowBadge href="/team" text="Our Team" variant="black" className="mb-4" />
 </ScrollFadeIn>
 <StandardizedHeading lines={["Meet With Our Experts"]} />
 <ScrollFadeIn delay={100}>
 <p className="mt-4 text-sm text-foreground">
 We're a collective of dedicated problem-solvers and engineers united by a shared passion for crafting exceptional digital experiences.
 </p>
 </ScrollFadeIn>
 </div>
 </div>
 <div className="lg:col-span-2">
 <ScrollFadeIn delay={200}>
 <Carousel
 opts={{
 align: "start",
 loop: true,
 }}
 className="w-full"
 >
 <CarouselContent className="-ml-4">
 {teamMembers.map((member, index) => (
 <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
 <div className="p-1 h-full">
 <ImageCard
 imageUrl={member.imageUrl}
 altText={member.name}
 heading={member.name}
 subheading={member.role}
 description={member.bio}
 className="h-[400px] md:h-[480px]"
 descriptionClassName="!line-clamp-2"
 imageClassName={member.imageClassName}
 imageStyle={member.imageStyle}
 icon={
 member.socials.linkedin && (
 <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-white/10" asChild>
 <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
 <Linkedin className="h-4 w-4 text-white hover:text-primary" />
 </Link>
 </Button>
 )
 }
 />
 </div>
 </CarouselItem>
 ))}
 </CarouselContent>
 <div className="flex items-center justify-center gap-4 mt-8">
 <CarouselPrevious className="static -translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
 <CarouselNext className="static translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
 </div>
 </Carousel>
 </ScrollFadeIn>
 </div>
 </div>
 </div>
 </section>
 
 <GradientContainer className="relative overflow-hidden py-12 lg:py-20" imageSrc="">
 <BlurCircle className="w-96 h-96 top-[-10rem] right-[-10rem]" />
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
 <ScrollFadeIn>
 <div className="relative aspect-video md:aspect-[4/3] w-full rounded-2xl overflow-hidden group shadow-lg">
 <Image 
 src="https://res.cloudinary.com/cauders/image/upload/v1786803238/workspace_byyhyg.png"
 alt="Cauders Workspace" 
 fill
 className="object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
 />
 </div>
 </ScrollFadeIn>
 <ScrollFadeIn delay={200} className="text-left md:row-start-auto row-start-1">
 <ArrowBadge href="/careers" text="Careers" className="mb-4" />
 <StandardizedHeading 
 lines={["Build the Future with Us"]} 
 className="text-left text-white"
 />
  <p className="text-white mt-4 max-w-lg leading-relaxed">
 We're always looking for brilliant, driven individuals who want to create high-impact software and AI solutions. If you're passionate about innovation and want to work in an environment that values creativity and excellence, we'd love to hear from you.
 </p>

 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
 <div className="flex items-center gap-4">
 <CircleIcon icon={TrendingUp} iconClassName="text-zinc" />
 <span className="text-sm font-semibold text-white">Growth Opportunities</span>
 </div>
 <div className="flex items-center gap-4">
 <CircleIcon icon={MapPin} iconClassName="text-zinc" />
 <span className="text-sm font-semibold text-white">Remote & Flexible</span>
 </div>
 <div className="flex items-center gap-4">
 <CircleIcon icon={Users} iconClassName="text-zinc" />
 <span className="text-sm font-semibold text-white">Great Culture</span>
 </div>
 <div className="flex items-center gap-4">
 <CircleIcon icon={Laptop} iconClassName="text-zinc" />
 <span className="text-sm font-semibold text-white">Latest Tech Stack</span>
 </div>
 </div>
 <div className="mt-10 flex items-center gap-4">
 <Button asChild size="lg" variant="outline" className="h-12 text-base px-8 group border-white text-white hover:bg-white hover:text-zinc bg-transparent">
 <Link href="/careers">
 View Open Positions <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:-rotate-45"/>
 </Link>
 </Button>
 </div>
 </ScrollFadeIn>
 </div>
 </div>
 </GradientContainer>
 </>
 );
}
