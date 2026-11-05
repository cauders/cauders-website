'use client';

import { useState, useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import SectionHeading from '@/components/cauders/SectionHeading';
import BlurCircle from '@/components/cauders/BlurCircle';
import { Plus, Search } from 'lucide-react';
import ArrowBadge from '@/components/cauders/ArrowBadge';
import SplitSectionHeader from '@/components/cauders/SplitSectionHeader';
import FaqScroller from '@/components/ui/habit-faq-scroller';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { typography } from '@/lib/typography';
import GradientContainer from '@/components/cauders/GradientContainer';
import GetAQuote from '@/components/cauders/GetAQuote';
import CaseStudiesSection from '@/components/cauders/CaseStudiesSection';
import { coreFaqs, type FaqItem } from '@/lib/faq-data';

export type { FaqItem };

const conciseFaqs: FaqItem[] = [
  { question: 'Custom ERP Systems', answer: 'Tailor-made resource planning solutions built around your operational workflows.' },
  { question: 'LLM Grounding & RAG', answer: 'Connect language models to approved internal data sources for context-aware workflows.' },
  { question: 'Cloud Architecture', answer: 'Design resilient, scalable infrastructure on AWS and Google Cloud.' },
  { question: 'Workflow Automation', answer: 'Reduce manual data entry by connecting and automating disparate software tools.' },
  { question: 'Rapid Prototyping', answer: 'Validate technical feasibility quickly with focused proof-of-concept builds.' },
  { question: 'Legacy Modernization', answer: 'Refactor and migrate aging codebases into maintainable modern stacks.' },
  { question: 'Post-Launch Support', answer: 'Ongoing monitoring, maintenance, and iterative updates after launch.' },
  { question: 'AI Copilots & Agents', answer: 'Deploy context-aware assistants with clear human-in-the-loop controls.' },
  { question: 'Data Analytics', answer: 'Structure operational data into reliable pipelines and reporting dashboards.' },
  { question: 'API Integration', answer: 'Connect your software ecosystem with secure, well-documented APIs.' },
  { question: 'Mobile App Development', answer: 'Build responsive iOS and Android applications tailored to user workflows.' },
  { question: 'Security & Governance', answer: 'Incorporate access controls, auditability, and secure engineering practices.' },
  { question: 'UI/UX Design', answer: 'Craft intuitive interfaces focused on clarity, usability, and task completion.' },
  { question: 'E-Commerce Solutions', answer: 'Develop modern storefronts, headless catalogs, and checkout integrations.' },
  { question: 'DevOps & CI/CD', answer: 'Streamline release workflows with automated testing and deployment pipelines.' },
  { question: 'Machine Learning', answer: 'Apply classification, forecasting, and domain ML models to defined tasks.' },
  { question: 'Performance Audits', answer: 'Identify and resolve bottlenecks across frontend, API, and database layers.' },
  { question: 'Collaborative Delivery', answer: 'Iterate transparently with clear milestones and technical documentation.' },
];

export default function FAQPageContent({ allFaqs = coreFaqs }: { allFaqs?: FaqItem[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const displayedFaqs = useMemo(() => {
    if (!searchQuery.trim()) {
      return coreFaqs;
    }
    const lowerQuery = searchQuery.toLowerCase();
    return allFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowerQuery) ||
        faq.answer.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, allFaqs]);

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
              'We Have <span class="text-cyan-gradient font-medium inline-block">Answers</span>',
            ]}
            description="Find quick answers to common questions about our engineering process and technical services. If you can't find what you're looking for, reach out to our team."
            ctaText="Contact Support"
            ctaLink="/contact"
          />

          <div className="w-full max-w-3xl mx-auto mb-0 relative z-20">
            <ScrollFadeIn delay={150}>
              <Search
                aria-hidden="true"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
              />
              <Input
                type="search"
                aria-label="Search frequently asked questions"
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
        <h2 className="sr-only">Common Questions</h2>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollFadeIn delay={200}>
            {displayedFaqs.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {leftColumnFaqs.map((faq, index) => (
                    <AccordionItem
                      key={`left-${index}`}
                      value={`left-item-${index}`}
                      className="bg-white dark:bg-zinc-900 rounded-2xl px-4 md:px-6 shadow-smooth-lift border-0"
                    >
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
                    <AccordionItem
                      key={`right-${index}`}
                      value={`right-item-${index}`}
                      className="bg-white dark:bg-zinc-900 rounded-2xl px-4 md:px-6 shadow-smooth-lift border-0"
                    >
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
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
                <p className="text-muted-foreground text-xl font-medium">
                  No questions found matching &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Try adjusting your search or contact support if you need further assistance.
                </p>
              </div>
            )}
          </ScrollFadeIn>
        </div>
      </section>

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
                <Link href="/services">View All Services</Link>
              </Button>
            </ScrollFadeIn>
          </div>
        </GradientContainer>
      </section>

      <CaseStudiesSection />

      <GetAQuote
        title="Ready to start your project?"
        description="Let's build something extraordinary together."
      />
    </div>
  );
}
