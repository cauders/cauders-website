import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, Layers, PenTool, Rocket } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-accent" />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that provide an exceptional user experience.',
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and applications using modern technologies.',
  },
  {
    icon: <Layers className="w-8 h-8 text-accent" />,
    title: 'Full-Stack Solutions',
    description: 'From database to deployment, we provide end-to-end development for your complex projects.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-accent" />,
    title: 'SEO & Performance',
    description: 'Optimizing your digital presence to rank higher and load faster, ensuring maximum reach.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Our expertise spans the entire development lifecycle, delivering excellence at every step.
          </p>
        </ScrollFadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.title} delay={`delay-${index * 100}`}>
              <Card className="h-full text-center border-2 border-transparent hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-8">
                  <div className="mx-auto bg-accent/20 rounded-full p-4 w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="pt-2">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
