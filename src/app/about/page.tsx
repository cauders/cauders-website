
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { Check, Target, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    imageUrl: 'https://picsum.photos/400/400?random=21',
    aiHint: 'professional headshot',
  },
  {
    name: 'Samantha Lee',
    role: 'Lead Developer',
    imageUrl: 'https://picsum.photos/400/400?random=22',
    aiHint: 'developer portrait',
  },
  {
    name: 'David Chen',
    role: 'UI/UX Design Lead',
    imageUrl: 'https://picsum.photos/400/400?random=23',
    aiHint: 'designer photo',
  },
  {
    name: 'Maria Garcia',
    role: 'Project Manager',
    imageUrl: 'https://picsum.photos/400/400?random=24',
    aiHint: 'manager headshot',
  },
];

const values = [
    {
        icon: Zap,
        title: "Innovation",
        description: "We constantly push the boundaries of technology to create novel and effective solutions."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "We believe the best results come from working closely with our clients and each other."
    },
    {
        icon: Target,
        title: "Excellence",
        description: "We are committed to the highest standards of quality in every project we undertake."
    }
]

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                We are the architects of the digital future.
              </h1>
              <p className="mt-6 text-lg text-foreground/70">
                At Cauders, we blend creative vision with technical expertise to build digital experiences that are not only beautiful and intuitive but also powerful and scalable. We are more than just developers; we are your partners in innovation.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn delay="delay-200">
                <Image
                    src="https://picsum.photos/800/600?random=20"
                    alt="Our team collaborating"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="team collaboration"
                />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <ScrollFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission & Values</h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
                    Our mission is to empower businesses by transforming their ideas into high-performance, cutting-edge digital platforms that dominate the landscape. Our work is guided by these core values.
                </p>
             </ScrollFadeIn>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                 {values.map((value, index) => (
                     <ScrollFadeIn key={value.title} delay={`delay-${index * 100}`}>
                        <Card className="bg-card h-full text-center border">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                                    <value.icon className="w-8 h-8 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80">{value.description}</p>
                            </CardContent>
                        </Card>
                     </ScrollFadeIn>
                 ))}
             </div>
          </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              We are a collective of passionate designers, developers, and strategists dedicated to our craft.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollFadeIn key={member.name} delay={`delay-${index * 100}`}>
                <Card className="text-center overflow-hidden border bg-card hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                  <div className="aspect-square">
                     <Image
                        src={member.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={member.aiHint}
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn>
                <div className="bg-primary/10 rounded-lg p-12 text-center border border-primary/20">
                    <h2 className="text-3xl font-bold text-foreground">Have a Project in Mind?</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto">
                    We're ready to bring your vision to life. Let's discuss how we can build something amazing together.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>
                </ScrollFadeIn>
            </div>
        </section>
    </div>
  );
}
