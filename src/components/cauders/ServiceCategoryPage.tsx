
import { ServiceCategory } from '@/lib/data';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import ScrollFadeIn from './ScrollFadeIn';
import HomePageContact from './HomePageContact';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

interface ServiceCategoryPageProps {
 category: ServiceCategory;
}

export default function ServiceCategoryPage({ category }: ServiceCategoryPageProps) {
 return (
 <div className="pt-24 md:pt-32 bg-background">
 {/* Hero Section */}
 <section className="relative py-16 md:py-20 flex items-center justify-center">
 <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
 <Image
 src="/images/background/overlay-bg-3.svg"
 alt="background overlay"
 width={1920}
 height={1080}
 className="w-full h-full object-cover"
 />
 <Image
 src="/images/background/overlay-bg-2.svg"
 alt="background overlay"
 width={500}
 height={500}
 className="w-1/2 h-auto absolute -top-48 -left-48 object-cover opacity-60"
 />
 </div>
 <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="max-w-4xl mx-auto flex flex-col items-center">
 <div className="w-20 h-20 rounded-2xl bg-zinc border border-primary/20 flex items-center justify-center mb-8 shadow-smooth-lift">
 <category.icon className="w-10 h-10 text-primary" />
 </div>
 <SectionHeader
 headingLines={[category.title]}
 description={category.heroDescription}
 align="center"
 className="!mb-0"
 />
 </div>
 </div>
 </section>

 {/* Services List */}
 <section className="py-12 md:py-20 bg-accent/30 relative">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
 {category.services.map((service, index) => (
 <ScrollFadeIn key={service.slug} delay={index * 0.1}>
 <div id={service.slug} className="scroll-mt-32 h-full">
 <Link href={`/services/${category.slug}/${service.slug}`} className="block h-full">
 <ServiceCard 
 iconNode={<category.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />} 
 title={service.title} 
 description={service.description} 
 ctaText="Learn more"
 >
 {/* Additional details like capabilities */}
 <div className="mt-6 pt-6 border-t border-border/50">
 <h4 className="text-xs uppercase tracking-wider text-foreground mb-4 opacity-80">Core Capabilities</h4>
 <ul className="space-y-3">
 {service.capabilities.map((capability, i) => (
 <li key={i} className="flex items-start gap-3">
 <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
 <span className="text-sm text-foreground">{capability}</span>
 </li>
 ))}
 </ul>
 </div>
 </ServiceCard>
 </Link>
 </div>
 </ScrollFadeIn>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <HomePageContact />
 </div>
 );
}
