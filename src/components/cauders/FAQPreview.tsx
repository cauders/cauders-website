'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";
import SectionHeading from "@/components/cauders/SectionHeading";
import ArrowBadge from "./ArrowBadge";
import DarkTealButton from "./DarkTealButton";
import { Plus } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

const defaultFaqs: FAQ[] = [
  {
    question: "Do I need a complete specification before contacting Cauders?",
    answer:
      "No. A clear description of your business objective, current challenge and the systems involved is enough to begin. The initial discussion can help clarify the requirements and identify a practical next step.",
  },
  {
    question: "Can Cauders work with our existing applications and systems?",
    answer:
      "Yes. We begin by understanding the existing architecture, interfaces, dependencies and access requirements. That helps determine whether integration, targeted improvements or a broader modernization is the appropriate approach.",
  },
  {
    question: "How do you decide whether AI is appropriate?",
    answer:
      "We start with the task, not the technology. AI can help with language, unstructured information and classification. Predictable processes may be better handled by conventional software or rules-based automation. The right approach depends on the task, the risks and the level of control required.",
  },
  {
    question: "How is security addressed?",
    answer:
      "Security requirements depend on the data involved, user access, integrations and deployment environment. The relevant controls and responsibilities should be defined around the specific solution and agreed scope.",
  },
  {
    question: "How do we get started?",
    answer:
      "Tell us what you need to build or improve, the business issue behind it and any relevant systems. You do not need every technical answer upfront. An initial discussion can establish priorities and the next step.",
  },
];

interface FAQPreviewProps {
  faqs?: FAQ[];
  badgeText?: string;
  badgeHref?: string;
  className?: string;
}

export default function FAQPreview({
  faqs = defaultFaqs,
  badgeText = "FAQ",
  badgeHref = "/faq",
  className = "py-16 sm:py-20 md:py-24",
}: FAQPreviewProps) {
  return (
    <section className={`${className} relative z-10 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden`}>
      <div className="max-w-[95rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: Badge, SectionHeading, CTA Button ================= */}
          <div className="lg:col-span-5 flex flex-col items-start justify-start">
            <ScrollFadeIn>
              <ArrowBadge
                href={badgeHref}
                text={badgeText}
                variant="black"
                className="mb-3 md:mb-4"
              />
            </ScrollFadeIn>

            <SectionHeading
              lines={[
                'You Have <span class="text-cyan-gradient font-medium inline-block">Questions,</span>',
                'We Have <span class="text-cyan-gradient font-medium inline-block">Answers</span>'
              ]}
              align="left"
              className="mb-6 sm:mb-8"
            />

            <ScrollFadeIn delay={150}>
              <DarkTealButton href="/faq" size="md">
                View All FAQs
              </DarkTealButton>
            </ScrollFadeIn>
          </div>

          {/* ================= RIGHT COLUMN: Interactive Accordion ================= */}
          <div className="lg:col-span-7 w-full">
            <ScrollFadeIn delay={200}>
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-3.5 sm:space-y-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group bg-white dark:bg-card rounded-2xl px-5 sm:px-7 py-1.5 sm:py-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 border-0 overflow-hidden"
                  >
                    <AccordionTrigger
                      className="text-left text-sm sm:text-base font-headline font-medium text-foreground py-4 hover:no-underline gap-4"
                      icon={<Plus className="h-5 w-5 sm:h-6 sm:w-6 text-foreground/70 flex-shrink-0 transition-transform duration-300 group-hover:text-foreground" />}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal pb-5 pt-1">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollFadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
