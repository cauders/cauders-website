import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { ArrowUpRight, Home } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import ImageCard from '@/components/cauders/ImageCard';

interface FallbackPageProps {
 code?: string;
 title?: string;
 description?: string;
}

export default function FallbackPage({
 code = "404",
 title = "Page Not Found.",
 description = "The page you are looking for doesn't exist or has been moved. Let's get you back on track."
}: FallbackPageProps) {
 const quickLinks = [
 {
 title: "Services",
 linkText: "Explore",
 href: "/services",
 image: placeholderImages.services['web-development'].imageUrl
 },
 {
 title: "Portfolio",
 linkText: "View work",
 href: "/",
 image: placeholderImages.hero.front.imageUrl
 },
 {
 title: "About Us",
 linkText: "Read story",
 href: "/about",
 image: placeholderImages.about.hero.imageUrl
 }
 ];

 // Adjust text sizing dynamically based on code length to ensure it always fits
 const isLongCode = code.length > 5;

 return (
 <div className="min-h-screen bg-transparent text-foreground relative overflow-hidden flex flex-col pt-32 pb-16">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col items-center justify-center relative z-10 text-center">
 <ScrollFadeIn>
 <div className="relative inline-block mb-4">
 <h1 className={`${isLongCode ? 'text-6xl md:text-8xl' : 'text-[10rem] md:text-[16rem]'} leading-none font-bold font-headline bg-gradient-to-r from-teal-300 via-teal-600 to-teal-950 text-transparent bg-clip-text tracking-tighter uppercase`}>
 {code}
 </h1>
 </div>
 
 <h2 className="text-heading-card font-headline text-foreground mb-3">
 {title}
 </h2>
 <p className="text-foreground max-w-lg mx-auto text-body-base mb-10">
 {description}
 </p>

 <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16 w-full max-w-lg mx-auto">
 <Button asChild variant="zinc" className="rounded-full px-10 h-14 md:h-16 text-base w-full sm:w-auto">
 <Link href="/">
 <Home className="w-5 h-5 mr-3" />
 Back home
 </Link>
 </Button>
 <Button asChild variant="ghost" className="rounded-full px-10 group h-14 md:h-16 text-base w-full sm:w-auto border border-foreground/10 hover:border-foreground/20">
 <Link href="/contact">
 Contact support
 <ArrowUpRight className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
 </Link>
 </Button>
 </div>
 </ScrollFadeIn>

 <ScrollFadeIn delay={200} className="w-full max-w-6xl mx-auto text-left mt-16">
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-8 border-b border-foreground/10 gap-8">
 <div>
 <StandardizedHeading lines={["Looking for something else?"]} />
 <p className="text-foreground text-body-base mt-4 max-w-md ">
 Explore our core services and portfolio.
 </p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {quickLinks.map((item, i) => (
 <ImageCard 
 key={i}
 imageUrl={item.image}
 altText={item.title}
 heading={item.title}
 subheading={item.linkText}
 href={item.href}
 className="h-[360px]"
 icon={<ArrowUpRight className="h-5 w-5 text- group-hover:text-white transition-colors" />}
 />
 ))}
 </div>
 </ScrollFadeIn>
 </div>
 </div>
 );
}
