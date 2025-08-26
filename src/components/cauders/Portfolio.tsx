import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollFadeIn from './ScrollFadeIn';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A scalable online store with a custom CMS and integrated payment gateways.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    aiHint: 'ecommerce website',
  },
  {
    title: 'SaaS Dashboard',
    description: 'An analytics dashboard for a B2B software-as-a-service product.',
    tags: ['React', 'D3.js', 'Node.js'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    aiHint: 'analytics dashboard',
  },
  {
    title: 'Corporate Website',
    description: 'A modern, professional website for a leading financial services firm.',
    tags: ['Gatsby', 'Contentful', 'Animation'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    aiHint: 'corporate business',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Recent Work</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We take pride in the solutions we deliver. Here’s a selection of our projects.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollFadeIn key={project.title} delay={`delay-${index * 100}`}>
              <Card className="overflow-hidden h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="p-0">
                   <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
