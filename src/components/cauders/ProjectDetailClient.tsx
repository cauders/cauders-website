
'use client';

import { useRef, useEffect, useState } from 'react';
import { getProjects, type Project } from "@/lib/data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from '@/lib/utils';
import ScrollFadeIn from './ScrollFadeIn';

interface ProjectDetailClientProps {
    project: Project;
    nextProject: Project | null;
}

const WebProjectLayout = ({ project }: { project: Project }) => (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-4 font-headline">{project.title}</h1>
        <p className="text-lg text-foreground/70 mb-8">{project.description}</p>
        
        <div className="mb-8 overflow-hidden rounded-lg shadow-lg border">
            <Image
                src={project.imageUrl}
                alt={`Cover image for ${project.title}`}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                data-ai-hint={project.aiHint}
            />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">About the Project</h2>
                <div className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none" dangerouslySetInnerHTML={{ __html: project.details }} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                {project.testimonial && (
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-foreground mb-4">Testimonial</h3>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                            <p>"{project.testimonial.text}"</p>
                            <footer className="mt-2 not-italic font-semibold">- {project.testimonial.author}</footer>
                        </blockquote>
                    </div>
                )}
            </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
            <div>
                <h2 className="text-3xl font-bold text-center text-foreground mb-8 font-headline">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                        <ScrollFadeIn key={index} delay={`delay-${index * 100}`}>
                            <Image
                                src={image.url}
                                alt={image.alt}
                                width={800}
                                height={600}
                                className="rounded-lg shadow-md border"
                                data-ai-hint={image.aiHint}
                            />
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        )}
    </div>
);

const MobileProjectLayout = ({ project }: { project: Project }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <div className="lg:sticky top-32 h-fit">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 font-headline">{project.title}</h1>
                    <p className="text-lg text-foreground/70 mb-6">{project.description}</p>
                    <div className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none mb-8" dangerouslySetInnerHTML={{ __html: project.details }} />
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>

                    {project.testimonial && (
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">Testimonial</h3>
                            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                                <p>"{project.testimonial.text}"</p>
                                <footer className="mt-2 not-italic font-semibold">- {project.testimonial.author}</footer>
                            </blockquote>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <div className="flex flex-col gap-16 lg:gap-32">
                         {project.gallery && project.gallery.map((image, index) => (
                            <ScrollFadeIn key={index} delay={`delay-${index * 100}`}>
                                <div className={cn(
                                    "mx-auto w-full max-w-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-foreground",
                                    index % 2 !== 0 && "lg:ml-auto lg:mr-0"
                                )}>
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        width={400}
                                        height={800}
                                        className="w-full h-auto"
                                        data-ai-hint={image.aiHint}
                                    />
                                </div>
                            </ScrollFadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function ProjectDetailClient({ project, nextProject }: ProjectDetailClientProps) {

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="/portfolio">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>
            </Button>
        </div>

        {project.type === 'mobile' ? (
            <MobileProjectLayout project={project} />
        ) : (
            <WebProjectLayout project={project} />
        )}

        {nextProject && (
            <div className="mt-24 pt-16 border-t">
                <ScrollFadeIn className="text-center">
                    <h3 className="text-lg text-foreground/70 mb-2">Next Project</h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground font-headline mb-8">
                        {nextProject.title}
                    </h2>
                    <Button asChild size="lg">
                        <Link href={`/portfolio/${nextProject.slug}`}>
                            View Project <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </ScrollFadeIn>
            </div>
        )}
      </div>
    </div>
  );
}