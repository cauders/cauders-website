
import { getServices } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "./ScrollFadeIn";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesPreview() {
  const services = getServices();

  return (
    <section id="services-preview" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
            <ScrollFadeIn>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight">
                We Engineer <span className="text-primary">High-Performance</span>,
              </h2>
            </ScrollFadeIn>
            <ScrollFadeIn style={{ animationDelay: '200ms' }}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight">
                <span className="text-primary">Cutting-Edge Platforms</span>
              </h2>
            </ScrollFadeIn>
            <ScrollFadeIn style={{ animationDelay: '400ms' }}>
               <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight">
                That Empower Businesses to
              </h2>
            </ScrollFadeIn>
            <ScrollFadeIn style={{ animationDelay: '600ms' }}>
               <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight">
                Dominate The Digital Landscape.
              </h2>
            </ScrollFadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <ScrollFadeIn
              key={service.slug}
              className="h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flip-card h-full min-h-[300px] md:min-h-[320px]">
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front of the card */}
                  <div className="flip-card-front absolute w-full h-full">
                    <Card className="h-full text-center bg-card flex flex-col">
                      <CardHeader className="p-8 flex-grow">
                        <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-foreground">{service.title}</CardTitle>
                        <CardDescription className="pt-2 text-foreground/80 line-clamp-3">{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  {/* Back of the card */}
                  <div className="flip-card-back absolute w-full h-full">
                    <Card className={cn("h-full bg-card flex flex-col justify-between animated-border-card")}>
                      <CardHeader>
                        <CardTitle className="text-foreground">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-left">
                          {service.included.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                              <span className="text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <div className="p-6 pt-0">
                        <Button asChild className="w-full">
                          <Link href={`/services/${service.slug}`}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
        
        <ScrollFadeIn className="text-center mt-16">
          <Button size="lg" asChild>
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
