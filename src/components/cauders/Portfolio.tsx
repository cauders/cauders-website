
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollFadeIn from './ScrollFadeIn';
import { getProjects, getProjectCategories, Project } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = 'All' | Project['category'];

export default function Portfolio() {
  const allProjects = useMemo(() => getProjects(), []);
  const categories: Category[] = useMemo(() => ['All', ...getProjectCategories()], []);
  
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return allProjects;
    }
    return allProjects.filter(project => project.category === activeCategory);
  }, [activeCategory, allProjects]);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Our Recent Work</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We take pride in the solutions we deliver. Here’s a selection of our projects.
          </p>
        </ScrollFadeIn>
        
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
            {categories.map(category => (
                <Button 
                    key={category} 
                    variant={activeCategory === category ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category)}
                    className="transition-all duration-300"
                >
                    {category}
                </Button>
            ))}
        </div>

        <div className="flex flex-col gap-20 lg:gap-32">
          {filteredProjects.map((project, index) => (
            <ScrollFadeIn key={`${project.slug}-${activeCategory}`}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        data-ai-hint={project.aiHint}
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                    <div className="max-w-md">
                      <Badge variant="secondary" className="mb-4">{project.category}</Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-headline">{project.title}</h3>
                      <p className="text-foreground/80 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                      <div className="text-primary font-semibold flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-2">
                        View Project <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        {filteredProjects.length === 0 && (
            <ScrollFadeIn>
                <div className="text-center py-16">
                    <p className="text-foreground/70 text-lg">No projects found for this category.</p>
                </div>
            </ScrollFadeIn>
        )}
      </div>
    </section>
  );
}
