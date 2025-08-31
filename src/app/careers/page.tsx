
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { ArrowRight, Briefcase, Coffee, Puzzle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const jobOpenings = [
  {
    title: 'Senior Frontend Developer (Next.js)',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced frontend developer to lead the development of our client-facing applications using Next.js and Tailwind CSS.'
  },
  {
    title: 'Full-Stack Engineer (Node.js & React)',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our core team to build and maintain our SaaS platform. Expertise in Node.js, React, and cloud services is required.'
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    description: 'We need a creative UI/UX designer to help us craft beautiful and intuitive interfaces for our upcoming mobile and web projects.'
  }
];

const benefits = [
    {
        icon: Briefcase,
        title: "Meaningful Work",
        description: "Contribute to projects that have a real impact on our clients' success and shape the future of digital interaction."
    },
    {
        icon: Puzzle,
        title: "Continuous Learning",
        description: "We support your growth with access to the latest technologies, courses, and conferences."
    },
    {
        icon: Coffee,
        title: "Flexible Culture",
        description: "Enjoy a healthy work-life balance with flexible hours and remote work opportunities."
    }
]

export default function CareersPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">Join Our Team</h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
              At Cauders, we're not just building products; we're building the future of digital interaction. We are looking for passionate, creative, and driven individuals to join us on our journey.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFadeIn className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Cauders?</h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                    We're committed to creating an environment where our team can thrive, innovate, and do their best work.
                </p>
            </ScrollFadeIn>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {benefits.map((benefit, index) => (
                     <ScrollFadeIn key={benefit.title} delay={`delay-${index * 100}`} className="h-full">
                        <div className="flip-card h-full min-h-[300px] md:min-h-[320px]">
                            <div className="flip-card-inner relative w-full h-full">
                                <div className="flip-card-front absolute w-full h-full">
                                    <Card className="bg-card h-full text-center border flex flex-col">
                                        <CardHeader className="flex-grow">
                                            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                                                <benefit.icon className="w-8 h-8 text-primary" />
                                            </div>
                                            <CardTitle className="text-foreground">{benefit.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flip-card-back absolute w-full h-full">
                                    <Card className={cn("h-full bg-card flex flex-col justify-center items-center animated-border-card")}>
                                        <CardContent className="text-center">
                                            <p className="text-foreground/80">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                     </ScrollFadeIn>
                 ))}
             </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Current Openings</h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Find your next challenge. If you don't see a role that fits, feel free to reach out at hr@cauders.com. We're always looking for great talent.
            </p>
          </ScrollFadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <ScrollFadeIn key={job.title} delay={`delay-${index * 100}`} className="group">
                  <Card className="bg-card border transition-all duration-300 ease-out hover:scale-[1.03] hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                      <CardHeader className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                      <div className="md:col-span-2">
                          <CardTitle className="text-foreground">{job.title}</CardTitle>
                          <CardDescription className="text-foreground/70">{job.location} &middot; {job.type}</CardDescription>
                      </div>
                      <div className="md:text-right">
                          <Button asChild>
                              <Link href="/contact">
                                  Apply Now <ArrowRight className="ml-2" />
                              </Link>
                          </Button>
                      </div>
                      </CardHeader>
                      <CardContent>
                      <p className="text-foreground/80">{job.description}</p>
                      </CardContent>
                  </Card>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
