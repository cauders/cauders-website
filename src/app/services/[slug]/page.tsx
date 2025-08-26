import { getServiceBySlug, getServices } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServicePageParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const services = getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: ServicePageParams) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{service.title}</h1>
          </div>
          
          <p className="text-lg text-foreground/70 mb-12">{service.description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Details</h2>
              <div className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none">
                {service.details}
              </div>
            </div>
            <div className="lg:col-span-2">
                <Card className="bg-card border shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-foreground">What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {service.included.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                                    <span className="text-foreground/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
          </div>
          
          {service.caseStudy && (
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Case Study</h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">{service.caseStudy.description}</p>
               <Link href={`/portfolio/${service.caseStudy.projectSlug}`}>
                <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card border text-left">
                  <CardHeader className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={service.caseStudy.imageUrl}
                        alt={service.caseStudy.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 text-foreground">{service.caseStudy.title}</CardTitle>
                    <Button variant="link" className="px-0">
                      View Project Details <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          )}

          <div className="mt-20 bg-card border rounded-lg p-8 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals.</p>
            <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
