'use client';

import { useState, useMemo } from 'react';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion"
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";
import StandardizedHeading from "@/components/cauders/StandardizedHeading";
import BlurCircle from "@/components/cauders/BlurCircle";
import { Plus, Search } from "lucide-react";
import ArrowBadge from "@/components/cauders/ArrowBadge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GradientContainer from "@/components/cauders/GradientContainer";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { industryDetails } from "@/lib/industry-details";
import { detailedServices } from "@/lib/service-details";
 
const baseFaqs = [
 {
 question: "What kind of services does Cauders offer?",
 answer: "Cauders specializes in a wide range of IT solutions including custom web and mobile application development, AI integrations, UI/UX design, cloud solutions, and enterprise-grade software. We build future-ready platforms that help businesses grow and innovate."
 },
 {
 question: "What technologies do you specialize in?",
 answer: "Our team is proficient in a modern tech stack that includes Next.js, React, React Native, and Flutter for frontend development, and Node.js, Python, and .NET for backend systems. We are also experts in AI/ML technologies like Genkit and cloud platforms such as AWS and Google Cloud."
 },
 {
 question: "How long does it take to build a website or an application?",
 answer: "The timeline for a project varies depending on its scope and complexity. A simple website might take a few weeks, while a complex enterprise application could take several months. We provide a detailed project timeline after an initial consultation and discovery phase."
 },
 {
 question: "How much will my project cost?",
 answer: "Project costs are tailored to the specific requirements of each client. We offer a detailed proposal with a transparent cost breakdown after discussing your needs. Our goal is to provide maximum value and a clear return on your investment."
 },
 {
 question: "Do you offer support and maintenance after the project is launched?",
 answer: "Yes, we offer ongoing support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. We believe in building long-term partnerships with our clients."
 },
 {
 question: "Can you work with an existing codebase?",
 answer: "Absolutely. Our team is experienced in taking over, maintaining, and enhancing existing projects. We can help you modernize your legacy systems, add new features, or improve performance and scalability."
 },
 {
 question: "What is your development process like?",
 answer: "Our process is collaborative and transparent. We start with a discovery phase to understand your goals, followed by strategy, design, development, and testing. We provide regular updates and involve you at every stage to ensure the final product aligns perfectly with your vision."
 },
 {
 question: "How do I get started with Cauders?",
 answer: "Getting started is easy! Simply head over to our contact page and send us a message about your project idea. We'll schedule a free consultation to discuss your needs and how we can help."
 }
];

// Aggregate all FAQs from the platform
const allFaqs = [...baseFaqs];
Object.values(industryDetails).forEach(industry => {
 if (industry.faqs) {
 allFaqs.push(...industry.faqs);
 }
});
Object.values(detailedServices).forEach(service => {
 if (service.faqs) {
 allFaqs.push(...service.faqs);
 }
});

// Remove duplicates based on exact question text
const uniqueFaqs = Array.from(new Map(allFaqs.map(item => [item.question, item])).values());

export default function FAQPage() {
 const [searchQuery, setSearchQuery] = useState("");

 const displayedFaqs = useMemo(() => {
 if (!searchQuery.trim()) {
 return baseFaqs;
 }
 const lowerQuery = searchQuery.toLowerCase();
 return uniqueFaqs.filter(faq => 
 faq.question.toLowerCase().includes(lowerQuery) || 
 faq.answer.toLowerCase().includes(lowerQuery)
 );
 }, [searchQuery]);

 return (
 <div className="bg-transparent text-foreground relative overflow-hidden">
 <BlurCircle className="w-96 h-96 bottom-[20rem] left-[-15rem]" />
 <section className="py-16 lg:py-20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
 <BlurCircle className="w-80 h-80 top-32 right-0" />
 <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative z-10 flex flex-col items-center">
 <ScrollFadeIn>
 <ArrowBadge href="/faq" text="FAQ" variant="black" />
 </ScrollFadeIn>
 <StandardizedHeading lines={[
 { text: "You Have Questions," },
 { text: "We Have Answers" }
 ]} className="mt-4" />
 <ScrollFadeIn delay={100}>
 <p className="mt-4 text-sm lg:text-base text-foreground max-w-2xl mx-auto">
 Have questions? We've got answers. We've compiled a list of the most common questions we receive to provide clarity and help you understand our process and services better. If you can't find what you're looking for, feel free to contact us.
 </p>
 </ScrollFadeIn>
 
 <ScrollFadeIn delay={150} className="w-full max-w-xl mx-auto mt-8 relative">
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-" />
 <Input 
 type="text"
 placeholder="Search questions..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full h-14 pl-12 pr-4 rounded-full bg-card/50 backdrop-blur-sm border-0 shadow-smooth-lift text-base focus-visible:ring-1 focus-visible:ring-primary/50"
 />
 </ScrollFadeIn>
 </div>

 <ScrollFadeIn delay={200}>
 <div className="max-w-3xl mx-auto min-h-[400px]">
 {displayedFaqs.length > 0 ? (
 <Accordion 
 type="single" 
 collapsible 
 defaultValue="item-0"
 className="w-full space-y-4"
 >
 {displayedFaqs.map((faq, index) => (
 <AccordionItem 
 key={index} 
 value={`item-${index}`} 
 className="bg-card/50 backdrop-blur-sm rounded-2xl px-4 md:px-6 shadow-smooth-lift border-0"
 >
 <AccordionTrigger 
 className="text-left text-body-base font-medium hover:no-underline"
 icon={<Plus className="h-5 w-5 md:h-6 md:w-6 text-foreground" />}
 >
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-body-base text-foreground">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 ) : (
 <div className="text-center py-12 bg-card/50 backdrop-blur-sm rounded-2xl shadow-smooth-lift">
 <p className="text-muted-foreground text-lg">No questions found matching "{searchQuery}"</p>
 </div>
 )}
 </div>
 </ScrollFadeIn>
 </div>
 </section>

 <section className="py-16">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <GradientContainer className="rounded-2xl py-12 px-6">
 <div className="text-center max-w-2xl mx-auto">
 <StandardizedHeading lines={["Still have questions?"]} className="text-3xl text-white" />
 <ScrollFadeIn delay={100}>
 <p className="mt-4 text-sm text-">
 Can't find the answer you're looking for? Don't hesitate to reach out. Our team is ready to assist you with any inquiries you may have.
 </p>
 <Button asChild variant="default" size="lg" className={cn("mt-8", "hover-white-to-black")}>
 <Link href="/contact">Contact Us</Link>
 </Button>
 </ScrollFadeIn>
 </div>
 </GradientContainer>
 </div>
 </section>
 </div>
 );
}
