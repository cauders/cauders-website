
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollFadeIn from './ScrollFadeIn';
import { getProjects } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Portfolio() {
  const projects = getProjects();

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Recent Work</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We take pride in the solutions we deliver. Here’s a selection of our projects.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollFadeIn key={project.slug} delay={`delay-${index * 100}`} className="h-full">
              <div className="flip-card h-full">
                <div className="flip-card-inner relative w-full h-full">
                    <div className="flip-card-front absolute w-full h-full">
                      <Card className="overflow-hidden h-full flex flex-col bg-card border">
                        <CardHeader className="p-0">
                          <Link href={`/portfolio/${project.slug}`} className="block aspect-video overflow-hidden group">
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={project.aiHint}
                            />
                          </Link>
                        </CardHeader>
                        <CardContent className="p-6 flex flex-col flex-grow">
                          <CardTitle className="mb-2 text-foreground">{project.title}</CardTitle>
                          <CardDescription className="text-foreground/80 mb-4 flex-grow">{project.description}</CardDescription>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                          <Button asChild variant="link" className="mt-4 px-0 justify-start">
                            <Link href={`/portfolio/${project.slug}`}>
                              View Project <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flip-card-back absolute w-full h-full">
                      <Card className={cn("h-full bg-card flex flex-col animated-border-card p-6 justify-between")}>
                          <div>
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-foreground">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <ul className="space-y-2 text-left">
                                {project.tags.slice(0, 3).map((item, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                                    <span className="text-foreground/80">{item}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                          </div>
                          <div className="mt-auto">
                              <Button asChild className="w-full">
                              <Link href={`/portfolio/${project.slug}`}>
                                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                              </Button>
                          </div>
                      </Card>
                    </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
