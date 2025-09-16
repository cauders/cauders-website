
import { getServiceBySlug, getServices } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";

type ServicePageParams = {
  params: {
    slug: string;
  };
};

export const dynamic = 'force-static';

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
    <div className="bg-background relative overflow-hidden">
       {/* Background decorative elements */}
        <div className="absolute top-[-10rem] right-[-10rem] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[-15rem] left-[-15rem] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-5xl mx-auto">
            <ScrollFadeIn>
                <Card className="glass-effect shadow-lg rounded-2xl w-full">
                    <CardContent className="p-8 md:p-12">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 rounded-full p-3 border border-primary/20">
                                    <service.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground font-headline">{service.title}</h1>
                            </div>
                            <Button asChild variant="ghost">
                                <Link href="/services">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Services
                                </Link>
                            </Button>
                        </div>
                        
                        <p className="text-lg text-foreground/70 mb-12">{service.description}</p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                            <div className="lg:col-span-3">
                                <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">Service Details</h2>
                                <div className="prose prose-lg dark:prose-invert text-base text-foreground/80 max-w-none" dangerouslySetInnerHTML={{ __html: service.details }} />
                            </div>
                            <div className="lg:col-span-2">
                                <Card className="bg-card/50 border shadow-md h-fit">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-headline text-foreground">What's Included</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3 text-sm">
                                            {service.included.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                                                    <span className="text-foreground/80">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </ScrollFadeIn>
          
          {service.caseStudy && (
            <ScrollFadeIn className="mt-20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">Case Study</h2>
                <p className="text-base text-foreground/70 mb-8 max-w-2xl mx-auto">{service.caseStudy.description}</p>
                 <Link href={`https://www.portfolio.cauders.com/${service.caseStudy.projectSlug}`}>
                  <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card border text-left">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={service.caseStudy.imageUrl}
                        alt={service.caseStudy.title}
                        width={800}
                        height={450}
                        priority
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={service.caseStudy.title}
                      />
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="mb-2 text-2xl text-foreground font-headline">{service.caseStudy.title}</CardTitle>
                      <Button variant="link" className="px-0 text-base">
                        View Project Details <ArrowRight className="ml-2 h-4 w-4"/>
                      </Button>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </ScrollFadeIn>
          )}

          <ScrollFadeIn className="mt-20">
            <div className="bg-card border rounded-lg p-8 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">Ready to get started?</h2>
              <p className="text-base text-foreground/70 mb-6 max-w-xl mx-auto">Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals.</p>
              <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
}
