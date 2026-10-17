const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. team-data.ts
const teamDataPath = path.join(root, 'src/lib/team-data.ts');
const teamDataContent = `import placeholderImages from './placeholder-images.json';

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
};

export type DeliveryDiscipline = {
  title: string;
  category: string;
  description: string;
  keySkills: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Anees Ahmad',
    role: 'Founder',
    imageUrl: placeholderImages.team.members.alex,
    bio: 'Software architect and technical strategist leading Cauders\\' engineering direction, system architecture, and AI initiatives.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Muryam Naveed',
    role: 'Co-founder & CEO',
    imageUrl: placeholderImages.team.members.samantha,
    bio: 'Oversees business operations, strategic client partnerships, and delivery alignment across all Cauders engagements.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
];

export const deliveryDisciplines: DeliveryDiscipline[] = [
  {
    title: 'Systems & Cloud Architecture',
    category: 'Architecture',
    description: 'Technical feasibility analysis, cloud architecture design (AWS, GCP, Azure), database schema modeling, and microservices decomposition.',
    keySkills: ['Cloud Infrastructure', 'Microservices', 'PostgreSQL / Redis', 'Security & Access Control']
  },
  {
    title: 'AI & Software Engineering',
    category: 'Engineering',
    description: 'Full-stack development across React, Next.js, Node.js, Python, and large language model orchestration with deterministic business logic.',
    keySkills: ['Next.js / React', 'Python / Node.js', 'LLM Integration & RAG', 'API Gateways']
  },
  {
    title: 'Product & UX/UI Design',
    category: 'Product Design',
    description: 'User workflow mapping, interactive design systems, component architecture, and high-fidelity wireframing tailored for operational efficiency.',
    keySkills: ['Interface Design', 'Design Systems', 'Workflow Prototyping', 'Usability Testing']
  },
  {
    title: 'Quality Assurance & Delivery',
    category: 'QA & DevOps',
    description: 'Automated end-to-end testing, CI/CD pipeline automation, cross-browser validation, performance profiling, and structured code handover.',
    keySkills: ['Playwright / Jest', 'CI/CD Pipelines', 'Automated Regression', 'Structured Handover']
  }
];
`;
fs.writeFileSync(teamDataPath, teamDataContent, 'utf8');
console.log('Updated team-data.ts');

// 2. FAQPreview.tsx
const faqPreviewPath = path.join(root, 'src/components/cauders/FAQPreview.tsx');
const faqPreviewUpdated = `'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";
import StandardizedHeading from "@/components/cauders/StandardizedHeading";
import ArrowBadge from "./ArrowBadge";
import { Plus } from "lucide-react";
import BlurCircle from "./BlurCircle";
 
export interface FAQ {
  question: string;
  answer: string;
}

export const canonicalFaqs: FAQ[] = [
  {
    question: "What kinds of services and software does Cauders build?",
    answer: "Cauders builds AI-enabled applications, business workflow automations, and custom software. Our engineering capabilities span web platforms, custom SaaS products, mobile applications, API architectures, and cloud infrastructure, backed by the systems integration and data engineering required to run solutions in production operations."
  },
  {
    question: "How do you apply AI and automation to real business workflows?",
    answer: "We focus on practical, high-utility use cases: language model integration, document triage, retrieval-augmented generation (RAG), automated customer support workflows, and multi-stage process automation. We pair AI models with deterministic application logic, strict validation rules, human-in-the-loop controls, and robust error handling rather than treating models as autonomous black boxes."
  },
  {
    question: "Can Cauders work with an existing codebase or legacy systems?",
    answer: "Yes. Many engagements involve connecting modern AI workflows and APIs into existing systems, relational databases (PostgreSQL, MySQL), or enterprise software. We perform an architectural and dependency assessment first, then implement incremental integrations with automated regression tests to safeguard existing operations."
  },
  {
    question: "How do you scope projects and determine timelines?",
    answer: "Timelines depend directly on technical scope, integration complexity, and testing requirements. A focused integration or workflow automation prototype typically takes a few weeks, while multi-tenant SaaS platforms or complex enterprise systems require phased multi-month milestones. We scope deliverables with clear milestones, sprint demos, and concrete acceptance criteria."
  },
  {
    question: "What engagement and pricing models do you offer?",
    answer: "We provide scoped milestone-based project delivery, dedicated engineering capacity (staff augmentation), and white-label development partnerships. Pricing is structured around defined requirements, architectural complexity, and engineering resource allocation, providing transparent breakdowns before work begins."
  },
  {
    question: "How are security, confidentiality, and code handover handled?",
    answer: "We operate under strict confidentiality and non-disclosure agreements. Project scopes establish clear expectations for code ownership, repository access, environment separation, and documentation. Upon project completion, all intellectual property, source repositories, deployment scripts, and architectural documentation are fully transferred to your team."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes. We offer structured maintenance and support agreements covering production monitoring, dependency updates, performance tuning, bug fixes, and continuous cloud optimization across AWS, Azure, and Google Cloud environments."
  },
  {
    question: "How do we begin a technical engagement with Cauders?",
    answer: "You can reach out through our contact form with an outline of your system requirements, operational bottlenecks, or product vision. Our technical team will review your context and coordinate a discovery call to discuss architectural feasibility, delivery models, and scope."
  }
];

interface FAQPreviewProps {
  faqs?: FAQ[];
  titleLines?: { text: string; gradientLastWords?: number; inline?: boolean; className?: string; isGradient?: boolean }[];
  badgeText?: string;
  badgeHref?: string;
  className?: string;
}

export default function FAQPreview({ faqs = canonicalFaqs.slice(0, 5), titleLines, badgeText = "FAQ", badgeHref = "/faq", className = "py-16 md:py-20 lg:py-20" }: FAQPreviewProps) {
  const defaultTitleLines = [
    { text: "Common Questions" }
  ];

  return (
    <div className={\`\${className} relative overflow-visible\`}>
      <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bottom-[-20rem] left-[-20rem]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col items-center justify-center gap-2">
            <ScrollFadeIn>
              <ArrowBadge href={badgeHref} text={badgeText} variant="black" />
            </ScrollFadeIn>
            <StandardizedHeading 
              lines={titleLines || defaultTitleLines} 
              className="text-foreground"
            />
            <ScrollFadeIn delay={100}>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-2">
                Clear answers regarding our engineering capabilities, AI implementations, project scoping, and delivery standards.
              </p>
            </ScrollFadeIn>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn delay={200}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={\`item-\${index}\`}
                  className="bg-card border border-border/50 rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-headline font-semibold text-base md:text-lg hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(faqPreviewPath, faqPreviewUpdated, 'utf8');
console.log('Updated FAQPreview.tsx');

// 3. FAQPage.tsx
const faqPagePath = path.join(root, 'src/components/cauders/FAQPage.tsx');
let faqPageContent = fs.readFileSync(faqPagePath, 'utf8');

// Replace baseFaqs in FAQPage.tsx with canonicalFaqs
const faqPageUpdated = `'use client';

import { useState, useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";
import StandardizedHeading from "@/components/cauders/StandardizedHeading";
import BlurCircle from "@/components/cauders/BlurCircle";
import { Search } from "lucide-react";
import ArrowBadge from "@/components/cauders/ArrowBadge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { industryDetails } from "@/lib/industry-details";
import { detailedServices } from "@/lib/service-details";
import { canonicalFaqs } from "./FAQPreview";

// Aggregate all FAQs from the platform
const allFaqs = [...canonicalFaqs];
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
      return canonicalFaqs;
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
      <section className="py-16 lg:py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
          <BlurCircle className="w-80 h-80 top-32 right-0" />
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative z-10 flex flex-col items-center">
            <ScrollFadeIn>
              <ArrowBadge href="/faq" text="Frequently Asked Questions" variant="black" />
            </ScrollFadeIn>
            <StandardizedHeading lines={[
              { text: "Everything You Need" },
              { text: "To Know About Our Delivery" }
            ]} />
            <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Transparent answers regarding our engineering standards, AI capabilities, architecture models, and engagement terms.
            </p>
            <div className="mt-8 relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search questions by topic or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full bg-card border-border/60 text-sm shadow-sm"
              />
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {displayedFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={\`item-\${index}\`}
                  className="bg-card border border-border/50 rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-headline font-semibold text-base md:text-lg hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-16 relative z-10">
            <p className="text-muted-foreground text-sm">Have a specific technical question or custom architecture requirement?</p>
            <Button asChild variant="zinc" className="mt-4">
              <Link href="/contact">Talk With An Engineer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
`;
fs.writeFileSync(faqPagePath, faqPageUpdated, 'utf8');
console.log('Updated FAQPage.tsx');

// 4. AboutPageContent.tsx
const aboutPath = path.join(root, 'src/components/cauders/AboutPageContent.tsx');
const aboutUpdated = `'use client';

import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import Image from 'next/image';
import SplitSectionHeader from '@/components/cauders/SplitSectionHeader';
import placeholderImages from '@/lib/placeholder-images.json';
import VisionMission from '@/components/cauders/VisionMission';
import Principles from '@/components/cauders/Principles';
import TeamPreview from './TeamPreview';
import FAQPreview from './FAQPreview';
import GetAQuote from './GetAQuote';

export default function AboutPageContent() {
  return (
    <div className="text-foreground bg-transparent">
      <section className="bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <SplitSectionHeader
            headingLines={[
              { text: "Where Engineering Meets" },
              { text: "Practical Innovation", isGradient: true }
            ]}
            description="Cauders applies practical AI and workflow automation to business operations, backed by the custom software engineering and systems integration required to build reliable digital products."
            ctaText="Explore Capabilities"
            ctaLink="#about-content"
            className="!mb-8 lg:!mb-12"
          />
          <ScrollFadeIn>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="https://res.cloudinary.com/cauders/image/upload/v1786823397/people-1_jivqap.png"
                alt="Cauders engineering team"
                width={1200}
                height={480}
                data-ai-hint={placeholderImages.about.hero.aiHint}
                className="w-full aspect-[21/9] md:aspect-[2.5/1] object-cover grayscale"
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <div id="about-content">
        <VisionMission />
        <Principles />
        <TeamPreview />
        <FAQPreview />
        <GetAQuote />
      </div>
    </div>
  );
}
`;
fs.writeFileSync(aboutPath, aboutUpdated, 'utf8');
console.log('Updated AboutPageContent.tsx');

// 5. VisionMission.tsx
const visionPath = path.join(root, 'src/components/cauders/VisionMission.tsx');
const visionUpdated = `'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollFadeIn from "./ScrollFadeIn";
import BlurCircle from "./BlurCircle";
import ArrowBadge from "./ArrowBadge";

const VisionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6.34315V3" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.6569 6.34315L19.7782 4.22183" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.6569 17.6569L19.7782 19.7782" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17.6569V21" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.34315 17.6569L4.22183 19.7782" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.34315 6.34315L4.22183 4.22183" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12H6.34315" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12H17.6569" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 22V15" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function VisionMission() {
  return (
    <section className="py-12 lg:py-20 relative">
      <BlurCircle className="w-96 h-96 top-0 -right-48" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-10 lg:col-span-8">
            <ScrollFadeIn>
              <div className="w-full">
                <ArrowBadge href="/about" text="About Cauders" variant="black" />
                <div className="space-y-4 mt-4">
                  <p className="text-body-base font-normal text-foreground leading-relaxed">
                    While many businesses identify opportunities to apply artificial intelligence, translating model prototypes into reliable production software requires substantial systems engineering. Cauders bridges that critical gap between AI experimentation and active business operations.
                  </p>
                  <p className="text-body-base font-normal text-foreground leading-relaxed">
                    Deploying effective automation requires far more than a model prompt. It requires clean data aggregation, robust API integrations, granular permission boundaries, deterministic business logic, and continuous monitoring. We build the comprehensive software infrastructure needed to make intelligent systems run dependably.
                  </p>
                  <p className="text-body-base font-normal text-foreground leading-relaxed">
                    Our capabilities span custom web and mobile applications, cloud infrastructure, and enterprise system integrations. Every engagement is scoped around clear technical constraints, measurable operational bottlenecks, and maintainable codebases designed for long-term ownership.
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          <div className="md:col-span-9 md:col-start-4 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <ScrollFadeIn delay={200}>
              <Card className="h-full bg-zinc border-0 flex flex-col hover:-translate-y-2 transition-transform duration-300 group p-4 md:p-6 text-left rounded-2xl shadow-smooth-lift">
                <CardHeader className="p-0 flex-row justify-start">
                  <div className="flex-shrink-0 bg-white rounded-full p-2 md:p-3 border border-white/20 group-hover:bg-white/90 transition-colors w-fit">
                    <VisionIcon />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-0 mt-4">
                  <CardTitle className="text-body-large lg:text-2xl font-medium font-headline text-white">Vision</CardTitle>
                  <p className="text-sm text-white/90 mt-2 font-body font-normal leading-relaxed">
                    To be the trusted engineering partner for organizations integrating AI and workflow automation into dependable, production-grade business operations.
                  </p>
                </CardContent>
              </Card>
            </ScrollFadeIn>
            <ScrollFadeIn delay={300}>
              <Card className="h-full bg-zinc border-0 flex flex-col hover:-translate-y-2 transition-transform duration-300 group p-4 md:p-6 text-left rounded-2xl shadow-smooth-lift">
                <CardHeader className="p-0 flex-row justify-start">
                  <div className="flex-shrink-0 bg-white rounded-full p-2 md:p-3 border border-white/20 group-hover:bg-white/90 transition-colors w-fit">
                    <MissionIcon />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-0 mt-4">
                  <CardTitle className="text-body-large lg:text-2xl font-medium font-headline text-white">Mission</CardTitle>
                  <p className="text-sm text-white/90 mt-2 font-body font-normal leading-relaxed">
                    To engineer resilient software solutions and intelligent automations that resolve real operational bottlenecks through rigorous architectural standards and transparent delivery.
                  </p>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(visionPath, visionUpdated, 'utf8');
console.log('Updated VisionMission.tsx');

// 6. Principles.tsx
const principlesPath = path.join(root, 'src/components/cauders/Principles.tsx');
const principlesUpdated = `'use client';

import { ShieldCheck, Target, Cpu, CheckSquare } from "lucide-react";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import BlurCircle from "./BlurCircle";
import InfoCard from "./InfoCard";

const principles = [
  {
    icon: Target,
    title: "Requirements-First",
    description: "We analyze commercial objectives, operational workflows, and technical constraints before selecting architectures or tools.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Rigor",
    description: "We build maintainable codebases with structured automated testing, clear API contracts, and scalable system design.",
  },
  {
    icon: Cpu,
    title: "Purposeful Innovation",
    description: "We apply AI and workflow automation only where they solve measurable business problems, avoiding unnecessary complexity.",
  },
  {
    icon: CheckSquare,
    title: "Delivery Integrity",
    description: "We maintain transparent scopes, realistic commitments, clear ownership boundaries, and diligent information handling.",
  },
];

export default function Principles() {
  const { principles: principlesImage } = placeholderImages;

  return (
    <section className="py-16 md:py-20 lg:py-20 relative overflow-hidden">
      <BlurCircle className="w-96 h-96 top-1/2 -translate-y-1/2 -left-48" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-start gap-4">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge href="#" text="Core Values" variant="black" className="mb-2" />
                </ScrollFadeIn>
                <StandardizedHeading lines={["The Values That Guide Our Work"]} />
              </div>
              <ScrollFadeIn delay={100}>
                <p className="text-sm lg:text-base text-muted-foreground max-w-md leading-relaxed">
                  Our engineering culture is governed by four practical principles that inform how we evaluate requirements, write code, and deliver solutions.
                </p>
              </ScrollFadeIn>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0">
              {principles.map((principle, index) => (
                <ScrollFadeIn key={principle.title} delay={index * 100} className="h-full">
                  <InfoCard
                    title={principle.title}
                    description={principle.description}
                    icon={principle.icon}
                  />
                </ScrollFadeIn>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <ScrollFadeIn direction="right">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/images/icon.png"
                alt="Cauders Core Principles"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={principlesImage.aiHint}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(principlesPath, principlesUpdated, 'utf8');
console.log('Updated Principles.tsx');

// 7. TeamPreview.tsx
const teamPreviewPath = path.join(root, 'src/components/cauders/TeamPreview.tsx');
const teamPreviewUpdated = `'use client';

import { teamMembers, deliveryDisciplines } from "@/lib/team-data";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import { Button } from "../ui/button";
import Link from "next/link";
import ScrollFadeIn from "./ScrollFadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Layers, Cpu } from 'lucide-react';
import ImageCard from '@/components/cauders/ImageCard';

export default function TeamPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="text-center flex flex-col items-center">
          <ScrollFadeIn>
            <ArrowBadge href="/team" text="Leadership & Delivery" variant="black" />
          </ScrollFadeIn>
          <StandardizedHeading lines={["Leadership & Delivery Disciplines"]} />
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Experienced technical leadership working alongside cross-functional engineering disciplines across every client engagement.
          </p>
        </div>

        <ScrollFadeIn delay={200} className="mt-8 md:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1600px] mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollFadeIn key={member.name} delay={index * 100}>
                <ImageCard
                  imageUrl={member.imageUrl}
                  altText={member.name}
                  heading={member.name}
                  subheading={member.role}
                  description={member.bio}
                  className="h-[400px] md:h-[480px]"
                  descriptionClassName="!line-clamp-3"
                  imageClassName="object-top"
                  icon={
                    <div className="flex gap-1">
                      {member.socials.linkedin && (
                        <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-white/10" asChild>
                          <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4 text-white hover:text-primary" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  }
                />
              </ScrollFadeIn>
            ))}

            {deliveryDisciplines.slice(0, 2).map((discipline, idx) => (
              <ScrollFadeIn key={discipline.title} delay={(idx + 2) * 100}>
                <Card className="h-[400px] md:h-[480px] bg-card rounded-2xl border border-border/50 shadow-smooth-lift p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-zinc text-white flex items-center justify-center mb-6">
                      {idx === 0 ? <Layers className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {discipline.category}
                    </span>
                    <h3 className="text-xl font-bold font-headline text-foreground mt-2">
                      {discipline.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {discipline.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/40">
                    <p className="text-xs font-medium text-foreground mb-2">Core Competencies:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {discipline.keySkills.slice(0, 2).map((skill, sIdx) => (
                        <span key={sIdx} className="text-[11px] bg-muted px-2 py-0.5 rounded text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={300} className="text-center max-w-2xl mx-auto mt-8 md:mt-12">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our delivery teams assemble specialized engineers, AI practitioners, software architects, and product designers focused on turning complex business requirements into dependable production systems.
          </p>
          <Button asChild variant="zinc" size="lg" className="mt-8">
            <Link href="/team">Explore Delivery Disciplines</Link>
          </Button>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(teamPreviewPath, teamPreviewUpdated, 'utf8');
console.log('Updated TeamPreview.tsx');

// 8. src/app/team/page.tsx
const teamPageRoute = path.join(root, 'src/app/team/page.tsx');
const teamPageUpdated = `'use client';

import { Button } from '@/components/ui/button';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { teamMembers, deliveryDisciplines } from '@/lib/team-data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Brush, TestTube2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import GetAQuote from '@/components/cauders/GetAQuote';
import TeamCarousel from '@/components/cauders/TeamCarousel';
import { Card } from '@/components/ui/card';
import CoreCompetencies from '@/components/cauders/CoreCompetencies';
import placeholderImages from '@/lib/placeholder-images.json';

const handleScrollToContent = () => {
  const contentElement = document.getElementById('team-content');
  if (contentElement) {
    contentElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const competencies = [
  {
    icon: TrendingUp,
    name: 'Strategy & Feasibility',
    description: 'Scoping technical requirements, assessing legacy constraints, and defining architectures.'
  },
  {
    icon: Brush,
    name: 'Product & Interface Design',
    description: 'Crafting responsive user flows and functional design systems.'
  },
  {
    icon: TestTube2,
    name: 'Engineering & Automated Testing',
    description: 'Building resilient backend APIs, AI workflows, and validated applications.'
  }
];

export default function TeamPage() {
  return (
    <div className="text-foreground relative">
      <section className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative pt-32 lg:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center">
          <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-0">
            <div className="relative z-10">
              <StandardizedHeading lines={["Technical Leadership & Delivery"]} />
              <p className="mt-4 text-body-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Cauders combines strategic leadership with cross-functional engineering disciplines across software architecture, AI integration, interface design, and delivery operations.
              </p>
              <div className="mt-8">
                <Button onClick={handleScrollToContent} variant="zinc" size="lg">
                  Explore Capabilities & Leadership
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <ScrollFadeIn className="md:col-span-4 h-full">
              <div className="relative aspect-[4/3] h-full w-full">
                <Image 
                  src="https://res.cloudinary.com/cauders/image/upload/v1786823397/people-1_jivqap.png"
                  alt="Engineering team collaboration"
                  fill
                  className="object-cover rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                  data-ai-hint={placeholderImages.team.meeting.aiHint}
                />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200} className="md:col-span-4 h-full">
              <Card className="w-full h-full rounded-2xl p-6 bg-card flex flex-col border-0 shadow-smooth-lift">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-lg text-foreground font-semibold">Delivery Disciplines</h3>
                    <p className="text-xs text-muted-foreground mb-0">How we assemble project teams.</p>
                  </div>
                  <Link href="/services" className="group -mt-1 -mr-1">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                      <div className="absolute inset-0 bg-zinc rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <ArrowUpRight className="w-5 h-5 text-zinc relative z-10 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </Link>
                </div>
                <hr className="-mx-6 my-4 border-t-[0.5px] border-border/50" />
                <div className="flex-grow flex flex-col justify-center gap-6">
                  {competencies.map(c => (
                    <div key={c.name} className="flex items-center gap-4">
                      <div className="bg-zinc text-white p-2.5 rounded-full shrink-0">
                        <c.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm md:text-base font-semibold text-foreground">{c.name}</p>
                        <p className="text-xs md:text-sm text-muted-foreground leading-normal">{c.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollFadeIn>
            <ScrollFadeIn delay={400} className="md:col-span-4 h-full">
              <div className="relative aspect-[4/3] h-full w-full">
                <Image 
                  src="https://res.cloudinary.com/cauders/image/upload/v1786823409/dashboard-1_jsh9tq.png"
                  alt="Production system dashboard"
                  fill
                  className="object-cover rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
                  data-ai-hint={placeholderImages.team.dataChart.aiHint}
                />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <div id="team-content">
        <TeamCarousel />
      </div>
      <CoreCompetencies />
      <GetAQuote />
    </div>
  );
}
`;
fs.writeFileSync(teamPageRoute, teamPageUpdated, 'utf8');
console.log('Updated src/app/team/page.tsx');

// 9. TeamCarousel.tsx
const teamCarouselPath = path.join(root, 'src/components/cauders/TeamCarousel.tsx');
const teamCarouselUpdated = `'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import ImageCard from '@/components/cauders/ImageCard';
import { teamMembers, deliveryDisciplines } from '@/lib/team-data';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { ArrowRight, Linkedin, Layers, Cpu, Brush, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import BlurCircle from './BlurCircle';
import GradientContainer from './GradientContainer';
import CircleIcon from './CircleIcon';

export default function TeamCarousel() {
  const disciplineIcons = [Layers, Cpu, Brush, ShieldCheck];

  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="flex flex-col">
                <ScrollFadeIn>
                  <ArrowBadge href="/team" text="Leadership & Disciplines" variant="black" className="mb-4" />
                </ScrollFadeIn>
                <StandardizedHeading lines={["Leadership & Delivery Capabilities"]} />
                <ScrollFadeIn delay={100}>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Our engagements are led by experienced technical leadership and delivered through cross-functional engineering disciplines across software development, AI integration, and systems architecture.
                  </p>
                </ScrollFadeIn>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ScrollFadeIn delay={200}>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {teamMembers.map((member, index) => (
                      <CarouselItem key={member.name} className="pl-4 basis-full sm:basis-1/2">
                        <div className="p-1 h-full">
                          <ImageCard
                            imageUrl={member.imageUrl}
                            altText={member.name}
                            heading={member.name}
                            subheading={member.role}
                            description={member.bio}
                            className="h-[400px] md:h-[460px]"
                            descriptionClassName="!line-clamp-3"
                            imageClassName="object-top"
                            icon={
                              member.socials.linkedin && (
                                <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-white/10" asChild>
                                  <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                                    <Linkedin className="h-4 w-4 text-white hover:text-primary" />
                                  </Link>
                                </Button>
                              )
                            }
                          />
                        </div>
                      </CarouselItem>
                    ))}

                    {deliveryDisciplines.map((discipline, index) => {
                      const IconComp = disciplineIcons[index % disciplineIcons.length];
                      return (
                        <CarouselItem key={discipline.title} className="pl-4 basis-full sm:basis-1/2">
                          <div className="p-1 h-full">
                            <Card className="h-[400px] md:h-[460px] bg-card rounded-2xl border border-border/50 shadow-smooth-lift p-6 flex flex-col justify-between">
                              <div>
                                <div className="w-12 h-12 rounded-full bg-zinc text-white flex items-center justify-center mb-6">
                                  <IconComp className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                  Delivery Discipline
                                </span>
                                <h3 className="text-xl font-bold font-headline text-foreground mt-2">
                                  {discipline.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                                  {discipline.description}
                                </p>
                              </div>
                              <div className="pt-4 border-t border-border/40">
                                <p className="text-xs font-medium text-foreground mb-2">Scope & Capabilities:</p>
                                <div className="flex flex-wrap gap-1.5">
                                  {discipline.keySkills.map((skill, sIdx) => (
                                    <span key={sIdx} className="text-[11px] bg-muted px-2 py-0.5 rounded text-muted-foreground">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </Card>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <CarouselPrevious className="static -translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
                    <CarouselNext className="static translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
                  </div>
                </Carousel>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>
      
      <GradientContainer className="relative overflow-hidden py-12 lg:py-20" imageSrc="">
        <BlurCircle className="w-96 h-96 top-[-10rem] right-[-10rem]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollFadeIn>
              <div className="relative aspect-video md:aspect-[4/3] w-full rounded-2xl overflow-hidden group shadow-lg">
                <Image 
                  src="https://res.cloudinary.com/cauders/image/upload/v1786803238/workspace_byyhyg.png"
                  alt="Cauders Engineering Workspace" 
                  fill
                  className="object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200} className="text-left md:row-start-auto row-start-1">
              <ArrowBadge href="/careers" text="Careers at Cauders" className="mb-4" />
              <StandardizedHeading 
                lines={["Engineering Standards & Culture"]} 
                className="text-left text-white"
              />
              <p className="text-white/90 mt-4 max-w-lg leading-relaxed text-sm md:text-base">
                We bring together engineers and practitioners who take pride in high-caliber software engineering, clean system architecture, and production-tested AI applications.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-white">Production AI Challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-white">Modern Tech Stack</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-white">Architecture Code Reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-white">Direct Client Impact</span>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <Button asChild size="lg" variant="outline" className="h-12 text-base px-8 group border-white text-white hover:bg-white hover:text-zinc bg-transparent">
                  <Link href="/careers">
                    Explore Career Opportunities <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:-rotate-45"/>
                  </Link>
                </Button>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </GradientContainer>
    </>
  );
}
`;
fs.writeFileSync(teamCarouselPath, teamCarouselUpdated, 'utf8');
console.log('Updated TeamCarousel.tsx');

// 10. CoreCompetencies.tsx
const coreCompPath = path.join(root, 'src/components/cauders/CoreCompetencies.tsx');
const coreCompUpdated = `'use client';

import { Bot, Brush, Code, Layers } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import ArrowBadge from './ArrowBadge';
import { cn } from '@/lib/utils';

const competencies = [
  {
    icon: Layers,
    title: 'Architecture & Strategy',
    description: 'Scoping technical requirements, assessing legacy constraints, and designing scalable database and service architectures.',
  },
  {
    icon: Bot,
    title: 'AI & Workflow Automation',
    description: 'Integrating large language models, document processing, and multi-stage orchestration with deterministic validation rules.',
  },
  {
    icon: Code,
    title: 'Custom Software Engineering',
    description: 'Building secure web platforms, custom SaaS products, and resilient APIs engineered for maintainability and scale.',
  },
  {
    icon: Brush,
    title: 'Product & UX/UI Design',
    description: 'Translating complex operational workflows into intuitive, responsive interfaces and structured design systems.',
  }
];

export default function CoreCompetencies() {
  return (
    <section className="py-16 md:py-20 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <ScrollFadeIn>
            <ArrowBadge href="/services" text="Our Capabilities" variant="black" />
          </ScrollFadeIn>
          <StandardizedHeading lines={["Core Engineering Competencies"]} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {competencies.map((item, index) => (
            <ScrollFadeIn key={item.title} delay={index * 100}>
              <Card className={cn(
                "h-full bg-card rounded-2xl shadow-smooth-lift border-0 transition-all duration-300"
              )}>
                <CardContent className="p-8 relative flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className={cn(
                      "rounded-full w-12 h-12 flex items-center justify-center bg-zinc text-white"
                    )}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <p className="text-4xl font-normal text-muted-foreground/40 font-headline">0{index + 1}</p>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold font-headline text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(coreCompPath, coreCompUpdated, 'utf8');
console.log('Updated CoreCompetencies.tsx');
