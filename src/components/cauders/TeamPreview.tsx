'use client';

import { teamMembers } from "@/lib/team-data";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import ScrollFadeIn from "./ScrollFadeIn";
import { Card } from "@/components/ui/card";
import { Linkedin, Github, Twitter } from 'lucide-react';
import ImageCard from '@/components/cauders/ImageCard';
import { cn } from "@/lib/utils";


export default function TeamPreview() {
 return (
 <section className="py-16 md:py-20 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
 <div className="text-center flex flex-col items-center">
 <ScrollFadeIn>
 <ArrowBadge href="/team" text="Meet the Experts" variant="black" />
 </ScrollFadeIn>
 <StandardizedHeading lines={["The Minds Behind Our Success"]} />
 </div>

 <ScrollFadeIn delay={200} className="mt-8 md:mt-12">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1600px] mx-auto">
 {teamMembers.map((member, index) => (
 <ScrollFadeIn key={index} delay={index * 100}>
 <ImageCard
 imageUrl={member.imageUrl}
 altText={member.name}
 heading={member.name}
 subheading={member.role}
 description={member.bio}
 className="h-[400px] md:h-[480px]"
 descriptionClassName="!line-clamp-3"
 imageClassName="object-top"
 icon={
 <div className="flex gap-1">
 {member.socials.linkedin && (
 <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-white/10" asChild>
 <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
 <Linkedin className="h-4 w-4 text-white hover:text-primary" />
 </Link>
 </Button>
 )}
 {member.socials.twitter && (
 <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-white/10" asChild>
 <Link href={member.socials.twitter} target="_blank" aria-label="Twitter">
 <Twitter className="h-4 w-4 text-white hover:text-primary" />
 </Link>
 </Button>
 )}
 </div>
 }
 />
 </ScrollFadeIn>
 ))}
 </div>
 </ScrollFadeIn>

 <ScrollFadeIn delay={300} className="text-center max-w-2xl mx-auto mt-8 md:mt-12">
 <p className="text-sm text-foreground">
 Our diverse team of fintech engineers, financial analysts, and designers share one goal: to build a better future for your finances. With backgrounds from top institutions and startups alike, we blend precision with creativity in everything we do.
 </p>
 <Button asChild variant="zinc" size="lg" className="mt-8">
 <Link href="/team">Meet The Entire Team</Link>
 </Button>
 </ScrollFadeIn>
 </div>
 </section>
 );
}
