
'use client';

import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { teamMembers } from '@/lib/team-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StandardizedHeading lines={["Meet Our Team"]} />
            <ScrollFadeIn>
              <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                The creative minds and dedicated professionals driving innovation at Cauders.
              </p>
            </ScrollFadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollFadeIn key={index} style={{ animationDelay: `${index * 100}ms` }} className="h-full">
                <Card className="h-full bg-card border text-center hover:border-primary hover:-translate-y-2 transition-transform duration-300 group overflow-hidden flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-80">
                        <Image 
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold font-headline text-foreground">{member.name}</h3>
                      <p className="text-primary text-sm font-medium">{member.role}</p>
                      <p className="text-sm text-foreground/70 mt-4">{member.bio}</p>
                    </div>
                    <div className="flex justify-center gap-2 mt-6">
                        {member.socials.linkedin && (
                            <Button variant="ghost" size="icon" asChild>
                                <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary" />
                                </Link>
                            </Button>
                        )}
                        {member.socials.github && (
                            <Button variant="ghost" size="icon" asChild>
                                <Link href={member.socials.github} target="_blank" aria-label="GitHub">
                                    <Github className="h-5 w-5 text-foreground/70 hover:text-primary" />
                                </Link>
                            </Button>
                        )}
                        {member.socials.twitter && (
                            <Button variant="ghost" size="icon" asChild>
                                <Link href={member.socials.twitter} target="_blank" aria-label="Twitter">
                                    <Twitter className="h-5 w-5 text-foreground/70 hover:text-primary" />
                                </Link>
                            </Button>
                        )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
