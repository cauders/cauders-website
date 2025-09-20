
import { getServiceBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";
import StandardizedHeading from "@/components/cauders/StandardizedHeading";
import { Separator } from "@/components/ui/separator";

type ServicePageParams = {
  params: {
    slug: string;
  };
};

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
            <ScrollFadeIn>
                <div className="mb-12">
                    <Button asChild variant="ghost" className="mb-8">
                        <Link href="/services">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Services
                        </Link>
                    </Button>
                    <div className="flex items-center gap-4 mb-4">
                        <StandardizedHeading lines={[service.title]} />
                    </div>
                    <p className="text-lg text-foreground/70 max-w-4xl">{service.description}</p>
                </div>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left/Main Column */}
                <div className={service.caseStudy ? "lg:col-span-2" : "lg:col-span-3"}>
                    <ScrollFadeIn>
                        <section id="details">
                            <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">Service Details</h2>
                            <div className="prose prose-lg dark:prose-invert text-base text-foreground/80 max-w-none" dangerouslySetInnerHTML={{ __html: service.details }} />
                        </section>
                    </ScrollFadeIn>
                    
                    <Separator className="my-12" />

                    <ScrollFadeIn>
                       <section id="included">
                            <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">What's Included</h2>
                            <ul className="space-y-4 text-base">
                                {service.included.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                                        <span className="text-foreground/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </ScrollFadeIn>
                </div>

                {/* Right Column (Case Study) */}
                {service.caseStudy && (
                    <div className="lg:col-span-1">
                        <ScrollFadeIn className="sticky top-24">
                           <section id="case-study">
                                <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">Featured Project</h2>
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
                                            <CardTitle className="mb-2 text-xl text-foreground font-headline">{service.caseStudy.title}</CardTitle>
                                            <p className="text-sm text-foreground/70 mb-4">{service.caseStudy.description}</p>
                                            <Button variant="link" className="px-0 text-base">
                                                View Project Details <ArrowRight className="ml-2 h-4 w-4"/>
                                            </Button>
                                        </CardHeader>
                                    </Card>
                                </Link>
                           </section>
                        </ScrollFadeIn>
                    </div>
                )}
            </div>
        </div>
      </div>
        <section className="py-20 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <ScrollFadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-headline">Ready to get started?</h2>
                    <p className="text-base text-foreground/70 mb-6 max-w-xl mx-auto">Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals.</p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </ScrollFadeIn>
            </div>
        </section>
    </div>
  );
}
