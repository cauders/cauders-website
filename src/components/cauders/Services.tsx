
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollFadeIn from './ScrollFadeIn';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'We build high-performance, secure, and scalable web applications using cutting-edge technologies. From custom portals to enterprise-grade solutions, we create seamless digital experiences that drive engagement and conversion.'
  },
  {
    title: 'Mobile App Development',
    description: 'Our mobile apps are designed for iOS and Android with a focus on speed, usability, and flawless performance. Whether it’s a startup MVP or a fully-featured enterprise application, we ensure smooth navigation and optimized functionality for end users.'
  },
  {
    title: 'AI Integrations',
    description: 'Our AI-powered solutions bring automation, personalization, and predictive analytics to your digital products. From chatbots and machine learning models to business intelligence systems, we turn data into intelligent business outcomes.'
  },
  {
    title: 'Fintech Solutions',
    description: 'We develop secure, compliant, and intelligent fintech platforms for banking, payments, and digital finance. With advanced encryption, API integrations, and AI-driven insights, we empower businesses to deliver next-generation financial services.'
  },
  {
    title: 'E-commerce Development',
    description: 'We build feature-rich online stores with secure payment systems, inventory management, and personalized shopping experiences. Our e-commerce solutions are optimized for speed, SEO, and scalability, ensuring higher sales and smoother customer journeys.'
  },
  {
    title: 'ERP Systems',
    description: 'Our enterprise-grade ERP systems streamline operations by integrating core business processes such as finance, inventory, HR, and supply chain into a single, intelligent platform.'
  },
  {
    title: 'UI/UX Designing',
    description: 'User experience defines product success. Our UI/UX design team creates intuitive, engaging, and visually stunning interfaces that elevate user satisfaction while driving conversions and brand loyalty.'
  },
  {
    title: 'Banking Solutions',
    description: 'Our enterprise-grade banking solutions focus on security, compliance, and seamless customer experience. From core banking systems to digital wallets and mobile banking apps, we help financial institutions stay ahead of innovation.'
  }
];

const whyChooseUs = [
  'Future-ready digital solutions',
  'Industry-focused expertise',
  'Secure, scalable, and user-driven approach'
];


export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            At Cauders, we deliver future-ready digital solutions that combine innovation, performance, and scalability. Our expertise spans across multiple domains to help businesses thrive in the evolving tech landscape.
          </p>
        </ScrollFadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.title} delay={`delay-${index * 100}`}>
                <Card className="h-full bg-card border shadow-sm text-left">
                    <CardHeader>
                        <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80">{service.description}</p>
                    </CardContent>
                </Card>
            </ScrollFadeIn>
          ))}
        </div>

        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Cauders?</h2>
                </ScrollFadeIn>
                <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {whyChooseUs.map((reason, index) => (
                        <ScrollFadeIn key={reason} delay={`delay-${index * 100}`}>
                            <div className="flex flex-col items-center">
                                <div className="bg-primary/10 rounded-full p-4 mb-4">
                                    <CheckCircle className="w-8 h-8 text-primary" />
                                </div>
                                <p className="text-lg text-foreground/80">{reason}</p>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
      </div>
    </section>
  );
}
