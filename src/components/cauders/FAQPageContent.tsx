'use client';

import { useState, useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";
import SectionHeading from "@/components/cauders/SectionHeading";
import BlurCircle from "@/components/cauders/BlurCircle";
import { Plus, Search } from "lucide-react";
import ArrowBadge from "@/components/cauders/ArrowBadge";
import SplitSectionHeader from "@/components/cauders/SplitSectionHeader";
import FaqScroller from "@/components/ui/habit-faq-scroller";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { typography } from '@/lib/typography';
import { industryDetails } from "@/lib/industry-details";
import { detailedServices } from "@/lib/service-details";
import GradientContainer from "@/components/cauders/GradientContainer";
import GetAQuote from "@/components/cauders/GetAQuote";
import CaseStudiesSection from "@/components/cauders/CaseStudiesSection";

const faqs = [
  {
    question: "What kind of services does Cauders offer?",
    answer: "Cauders specializes in AI integration, workflow automation, and custom software development. We build enterprise-grade web and mobile applications, implement intelligent AI-driven features, and design cloud solutions that help businesses scale and innovate."
  },
  {
    question: "How can AI integration benefit my business?",
    answer: "Integrating AI into your existing systems can automate repetitive tasks, provide deeper insights into your data, enhance customer experiences through intelligent chatbots, and optimize your overall operational efficiency. We tailor AI solutions specifically to your business goals."
  },
  {
    question: "What kind of automation solutions do you provide?",
    answer: "We design and implement custom workflow automations that connect your disparate software systems. This includes automating data entry, streamlining CRM and ERP processes, setting up intelligent alert systems, and reducing manual overhead so your team can focus on high-value tasks."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our tech stack is built for the modern web and AI ecosystem. We specialize in React, Next.js, React Native, Node.js, and Python. For AI, we leverage advanced machine learning frameworks, large language models (LLMs), and cloud AI services on AWS and Google Cloud."
  },
  {
    question: "Can you work with an existing legacy codebase?",
    answer: "Absolutely. Our team is highly experienced in legacy system modernization. We can help you safely migrate old codebases to modern frameworks, integrate new AI features into existing platforms, or incrementally improve performance and security without downtime."
  },
  {
    question: "How long does it take to deploy a custom software solution?",
    answer: "The timeline depends entirely on the complexity of the project. A straightforward automation script might take a few weeks, while a comprehensive enterprise platform with custom AI models could take several months. We provide clear, phased milestones during our discovery process."
  },
  {
    question: "How much will my project cost?",
    answer: "Project costs are tailored to your specific requirements and the technical complexity involved. After our initial consultation, we provide a transparent, itemized proposal. Our focus is always on delivering a solution that provides a clear and rapid return on investment."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, deployment is just the beginning. We offer dedicated support, maintenance, and monitoring packages to ensure your software remains secure, scales smoothly with your user base, and adapts to any future technological shifts."
  },
  {
    question: "What is your software development process?",
    answer: "We use an agile, highly collaborative approach. We begin with a deep discovery phase to map out your business logic, followed by prototyping and architecture design. During development, you'll have full visibility into our progress, followed by rigorous QA testing before deployment."
  },
  {
    question: "How do I get started with Cauders?",
    answer: "Getting started is simple. Head over to our contact page or drop your email below. We'll set up a free strategy call to discuss your challenges, explore potential AI or software solutions, and outline the best path forward."
  }
];

const conciseFaqs = [
  { question: "Custom ERP Systems", answer: "Tailor-made resource planning solutions built to perfectly map your unique business workflows." },
  { question: "LLM Fine-Tuning", answer: "Train AI models on your proprietary data to automate complex decisions and generative tasks." },
  { question: "Cloud Architecture", answer: "Design resilient, auto-scaling infrastructure on AWS and Google Cloud for zero downtime." },
  { question: "Workflow Automation", answer: "Eliminate manual data entry by seamlessly integrating and automating your disparate software tools." },
  { question: "Rapid Prototyping", answer: "Accelerate your time-to-market with fast, high-fidelity proof-of-concept development." },
  { question: "Legacy Modernization", answer: "Safely migrate and rewrite old codebases into secure, high-performance modern stacks." },
  { question: "Post-Launch Support", answer: "Continuous monitoring, maintenance, and feature updates long after your product goes live." },
  { question: "AI Chatbots", answer: "Deploy intelligent, context-aware agents that provide 24/7 customer support and lead qualification." },
  { question: "Data Analytics", answer: "Transform raw business data into actionable visual insights with custom reporting dashboards." },
  { question: "API Integration", answer: "Connect your entire software ecosystem with robust, secure, and custom-built APIs." },
  { question: "Mobile App Development", answer: "Build stunning, high-performance iOS and Android applications using React Native." },
  { question: "Cybersecurity First", answer: "Implement enterprise-grade security protocols to protect your infrastructure and user data." },
  { question: "UI/UX Design", answer: "Craft intuitive, beautiful user interfaces that maximize engagement and conversion rates." },
  { question: "E-Commerce Solutions", answer: "Develop scalable, high-converting storefronts optimized for modern shopping experiences." },
  { question: "DevOps Automation", answer: "Streamline your development pipeline with continuous integration and deployment (CI/CD)." },
  { question: "Machine Learning", answer: "Leverage predictive algorithms to forecast trends and optimize business operations." },
  { question: "Performance Audits", answer: "Identify and eliminate bottlenecks in your existing software to ensure lightning-fast speeds." },
  { question: "Agile Methodology", answer: "We iterate quickly and transparently, giving you full visibility into the development cycle." },
];

// Aggregate all FAQs from the platform
const allFaqs = [...faqs];
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
const uniqueFaqs = Array.from(new Map(allFaqs.map(item => [item.question, item])).values());

export default function FAQPageContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const displayedFaqs = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqs;
    }
    const lowerQuery = searchQuery.toLowerCase();
    return uniqueFaqs.filter(faq => 
      faq.question.toLowerCase().includes(lowerQuery) || 
      faq.answer.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  // Split displayed FAQs into two columns for layout
  const midpoint = Math.ceil(displayedFaqs.length / 2);
  const leftColumnFaqs = displayedFaqs.slice(0, midpoint);
  const rightColumnFaqs = displayedFaqs.slice(midpoint);

  return (
    <div className="bg-transparent text-foreground relative">
      <BlurCircle className="w-96 h-96 bottom-[20rem] left-[-15rem]" />
      <BlurCircle className="w-80 h-80 top-32 -right-16 md:-right-24" />
      <BlurCircle className="w-[30rem] h-[30rem] top-[40rem] -left-32 md:-left-40" />
      
      <section className="pt-32 pb-4 lg:pt-40 lg:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SplitSectionHeader 
            as="h1"
            badgeText="Frequently Asked Questions"
            badgeHref="/faq"
            headingLines={[
              'You Have <span class="text-cyan-gradient font-medium inline-block">Questions,</span>',
              'We Have <span class="text-cyan-gradient font-medium inline-block">Answers</span>'
            ]}
            description="Find quick answers to common questions about our engineering process and technical services. If you can't find what you're looking for, reach out to our team."
            ctaText="Contact Support"
            ctaLink="/contact"
          />
          
          {/* Search Bar - Positioned under title section, above questions */}
          <div className="w-full max-w-3xl mx-auto mb-0 relative z-20">
            <ScrollFadeIn delay={150}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Search questions from across the entire site..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-full bg-white dark:bg-zinc-900 border border-border/50 shadow-smooth-lift text-base focus-visible:ring-1 focus-visible:ring-primary/50"
              />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-4 lg:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollFadeIn delay={200}>
            {displayedFaqs.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {leftColumnFaqs.map((faq, index) => (
                    <AccordionItem key={`left-${index}`} value={`left-item-${index}`} className="bg-white dark:bg-zinc-900 rounded-2xl px-4 md:px-6 shadow-smooth-lift border-0">
                      <AccordionTrigger 
                        className="text-left text-body-base font-medium hover:no-underline py-5"
                        icon={<Plus className="h-5 w-5 md:h-6 md:w-6 text-foreground" />}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-body-base text-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {rightColumnFaqs.map((faq, index) => (
                    <AccordionItem key={`right-${index}`} value={`right-item-${index}`} className="bg-white dark:bg-zinc-900 rounded-2xl px-4 md:px-6 shadow-smooth-lift border-0">
                      <AccordionTrigger 
                        className="text-left text-body-base font-medium hover:no-underline py-5"
                        icon={<Plus className="h-5 w-5 md:h-6 md:w-6 text-foreground" />}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-body-base text-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className="text-center py-16 bg-card/50 backdrop-blur-sm rounded-3xl shadow-smooth-lift max-w-4xl mx-auto border border-border/50">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-xl font-medium">No questions found matching "{searchQuery}"</p>
                <p className="text-muted-foreground mt-2 text-sm">Try adjusting your search or contact support if you need further assistance.</p>
              </div>
            )}
          </ScrollFadeIn>
        </div>
      </section>

      {/* Quick Insights in Default Gradient Container */}
      <section className="py-16 relative overflow-hidden w-full">
        <GradientContainer className="py-12 md:py-20 w-full rounded-none">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 md:mb-10">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
              <ArrowBadge 
                href="/services"
                text="Quick Insights"
                variant="white"
                className="mb-4"
              />
              <SectionHeading 
                align="center"
                lines={['Specialized Services & Expertise']}
                headingClassName="!text-white"
                subheadingClassName="!text-white/90 max-w-2xl mx-auto"
                subheading="A quick snapshot of our core engineering capabilities and digital competencies."
              />
            </div>
          </div>
          <FaqScroller faqs={conciseFaqs} />
          <div className="container mx-auto px-4 mt-12 md:mt-16 text-center relative z-10 flex flex-col items-center">
            <ScrollFadeIn>
              <p className={`${typography.bodyBase} font-normal text-white/90 max-w-3xl mx-auto mb-8`}>
                Discover a snapshot of our technical capabilities, from AI integration and cloud architecture to custom enterprise software solutions.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-2 text-white border-white/30 hover:bg-white/10">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </ScrollFadeIn>
          </div>
        </GradientContainer>
      </section>

      <CaseStudiesSection />
      
      <GetAQuote title="Ready to start your project?" description="Let's build something extraordinary together." />
    </div>
  );
}
