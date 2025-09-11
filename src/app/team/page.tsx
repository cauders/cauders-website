
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from '@/lib/team-data';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';

export default function TeamPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StandardizedHeading lines={["Meet Our Team"]} />
            <ScrollFadeIn>
              <p className="mt-4 text-base text-foreground/70 max-w-2xl mx-auto">
                The creative minds and dedicated professionals driving innovation at Cauders.
              </p>
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <ScrollFadeIn key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="h-full text-center bg-card border group overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="p-0 relative">
                    <div className="aspect-square relative">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint="professional portrait"
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-4 left-4 text-left">
                        <h3 className="text-2xl font-bold text-white font-headline">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 text-left">
                    <p className="text-sm text-foreground/80 mb-6 min-h-[60px]">{member.bio}</p>
                    <div className="flex justify-start gap-2">
                      {member.socials.linkedin && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={member.socials.linkedin} target="_blank" aria-label={`${member.name}'s LinkedIn`}>
                            <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary" />
                          </Link>
                        </Button>
                      )}
                      {member.socials.github && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={member.socials.github} target="_blank" aria-label={`${member.name}'s GitHub`}>
                            <Github className="h-5 w-5 text-foreground/70 hover:text-primary" />
                          </Link>
                        </Button>
                      )}
                      {member.socials.twitter && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={member.socials.twitter} target="_blank" aria-label={`${member.name}'s Twitter`}>
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
