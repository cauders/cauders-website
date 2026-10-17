const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Add submitPartnerForm in src/app/actions.ts
const actionsPath = path.join(root, 'src/app/actions.ts');
let actionsContent = fs.readFileSync(actionsPath, 'utf8');

if (!actionsContent.includes('submitPartnerForm')) {
  const partnerActionCode = `
// --- Partner Form Logic ---

const partnerFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  country: z.string().optional(),
  model: z.string().min(1, { message: "Please select a partnership model." }),
  message: z.string().optional(),
});

export async function submitPartnerForm(data: unknown) {
  const parsedData = partnerFormSchema.safeParse(data);
  if (!parsedData.success) {
    console.error("Partner form validation error:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Invalid data provided.", errors: parsedData.error.flatten().fieldErrors };
  }

  const { firstName, lastName, email, company, country, model, message } = parsedData.data;

  try {
    const info = await transporter.sendMail({
      from: \`"Cauders Partnerships" <\${process.env.SMTP_FROM_EMAIL}>\`,
      to: 'info@cauders.com',
      subject: \`New Partner Application: \${company} (\${model})\`,
      replyTo: email,
      html: \`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Partner Program Application</h2>
          <p><strong>Name:</strong> \${firstName} \${lastName}</p>
          <p><strong>Email:</strong> \${email}</p>
          <p><strong>Company:</strong> \${company}</p>
          <p><strong>Country:</strong> \${country || 'Not specified'}</p>
          <p><strong>Model:</strong> \${model}</p>
          <p><strong>Message / Project Scope:</strong></p>
          <p>\${message || 'None'}</p>
        </div>
      \`,
    });
    return { success: true, message: "Thank you for applying. Our partnerships team will review your submission and contact you." };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    console.error("Failed to send partner application email:", error);
    return { success: false, message: \`Server Error: \${errorMessage}\` };
  }
}
`;
  actionsContent += partnerActionCode;
  fs.writeFileSync(actionsPath, actionsContent, 'utf8');
  console.log('Added submitPartnerForm to src/app/actions.ts');
}

// 2. Rewrite PartnersPageContent.tsx
const partnersPath = path.join(root, 'src/components/cauders/PartnersPageContent.tsx');
const partnersUpdated = `"use client";

import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ScrollFadeIn from './ScrollFadeIn';
import ContainerCard from './ContainerCard';
import { ArrowRight, CheckCircle2, Briefcase, Handshake, Users, Shield, Wallet, Building2, Zap, Settings2, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { typography } from '@/lib/typography';
import ProcessHoverSection from './ProcessHoverSection';
import ImageContainerHero from './ImageContainerHero';
import ArrowBadge from './ArrowBadge';
import { submitPartnerForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

export default function PartnersPageContent() {
  const { toast } = useToast();

  const processSteps = [
    { title: 'Inquiry', description: 'Submit your partnership inquiry outlining your agency model, technical focus, and client profile.' },
    { title: 'Discovery & Scoping', description: 'We schedule a technical discussion to align on capabilities, delivery workflows, communication channels, and agreed terms.' },
    { title: 'Framework & NDA', description: 'We establish mutual non-disclosure agreements, master services frameworks, and transparent pricing schedules.' },
    { title: 'Delivery Kickoff', description: 'Begin scoping and delivering projects with direct access to our technical leads and dedicated engineering pods.' }
  ];

  const models = [
    {
      icon: Briefcase,
      title: '1. White-Label Delivery',
      intro: 'We build custom software, web platforms, and AI applications under your brand. Your team maintains the client relationship and commercial contracts, while our engineering pods execute the technical delivery.',
      points: [
        { icon: Shield, title: 'Confidential Integration', desc: 'We operate under strict non-disclosure agreements, using your organization tools and communication channels.' },
        { icon: Users, title: 'Dedicated Engineering Pods', desc: 'Full-stack engineering teams spanning Next.js, Python, Flutter, cloud infrastructure, and AI integration.' },
        { icon: CheckCircle2, title: 'Complete IP Handover', desc: 'All repositories, deployment scripts, and architectural documentation are authored under your brand and fully transferred.' }
      ]
    },
    {
      icon: Handshake,
      title: '2. Technical Referral Program',
      intro: 'When your prospective clients require specialized custom software engineering, AI integration, or workflow automation outside your primary focus, introduce them to Cauders.',
      points: [
        { icon: CheckCircle2, title: 'Defined Referral Terms', desc: 'Transparent, agreed commercial commission structures established upon successful client contract execution.' },
        { icon: Wallet, title: 'Technical Scoping Support', desc: 'Our technical architects handle discovery sessions, feasibility analyses, and architecture proposals directly.' },
        { icon: Shield, title: 'Relationship Protection', desc: 'We maintain ethical boundaries, ensuring your primary client relationship is preserved.' }
      ]
    },
    {
      icon: Building2,
      title: '3. Strategic Reseller & Delivery',
      intro: 'Combine your industry domain presence and client access with Cauders\\' engineering depth to bid on larger, more complex technology initiatives.',
      points: [
        { icon: Zap, title: 'Pre-Sales Architecture', desc: 'We support your bids with architectural blueprints, technical feasibility analyses, and realistic effort estimates.' },
        { icon: Settings2, title: 'Joint Delivery Governance', desc: 'Clearly defined responsibilities for client management, solution architecture, and implementation.' },
        { icon: Shield, title: 'Milestone Predictability', desc: 'Structured milestone billing schedules that ensure predictable margins for your business.' }
      ]
    }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    model: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitPartnerForm(formData);
      setIsSubmitting(false);
      if (result.success) {
        setSubmitStatus('success');
        toast({
          title: "Application Received",
          description: result.message || "Thank you. Our partnership team will review your application.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          country: '',
          model: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: result.message || "There was a problem submitting your application.",
        });
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex flex-col pb-24 lg:pb-32">
      
      {/* 1. Centered "Command Center" Hero */}
      <ImageContainerHero 
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Cauders Partner Program"
        badgeText="Partner Program"
        badgeHref="#overview"
        headingLines={["Engineering Partnerships"]}
        description="White-label delivery, strategic reseller arrangements, and technical referral partnerships for agencies and consultancies."
        ctaText="Apply for the Program"
        ctaHref="#apply"
        secondaryCtaText="Explore Models"
        secondaryCtaHref="#models"
      />

      {/* 2. Floating "Vision" Overview */}
      <section id="overview" className="py-16 md:py-20 bg-transparent relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative z-10">
              <ScrollFadeIn>
                <div className="flex flex-col items-start mb-6">
                  <ArrowBadge href="#overview" text="Overview" variant="black" className="mb-4" />
                </div>
                <div className="space-y-6 mt-6">
                  <p className={\`text-foreground font-normal \${typography.bodyBase} leading-relaxed\`}>
                    Growing an agency or consultancy frequently introduces delivery bottlenecks: sudden spikes in engineering demand, specialized AI requirements, or tight client deadlines. Cauders partners with agencies and consultancies to deliver software engineering, AI applications, and workflow automation under clear commercial agreements.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <h4 className="text-base font-bold font-headline text-foreground mb-1">Strict Confidentiality</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Protected under mutual NDAs with full IP and repository transfer upon release.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <h4 className="text-base font-bold font-headline text-foreground mb-1">Dedicated Pods</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Specialized engineering teams aligned with your sprint rhythms and tech stack.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <h4 className="text-base font-bold font-headline text-foreground mb-1">Transparent Scoping</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Clear architectural blueprints, milestone breakdowns, and agreed budgets.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <h4 className="text-base font-bold font-headline text-foreground mb-1">Production Quality</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Automated regression testing, CI/CD pipeline automation, and code standards.</p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
            <div className="lg:col-span-6 relative">
              <ScrollFadeIn direction="left" delay={200}>
                <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-primary/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
                    alt="Overview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Partnership Models"
            headingLines={[{ text: "Collaboration Structures", gradientLastWords: 2 }]}
            description="Select the partnership engagement that aligns with your client relationships, commercial objectives, and delivery workflow."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
            {models.map((model, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <ContainerCard hoverEffect className="rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-zinc border border-primary/20 flex items-center justify-center mb-8">
                      <model.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-headline font-semibold text-foreground mb-4">
                      {model.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                      {model.intro}
                    </p>
                    <ul className="space-y-6">
                      {model.points.map((point, i) => (
                        <li key={i} className="flex flex-col">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="flex-shrink-0 bg-zinc rounded-full p-1.5 border border-primary/20 flex items-center justify-center">
                              <point.icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                            </div>
                            <h4 className="text-sm font-semibold text-foreground">{point.title}</h4>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed pl-8">{point.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ContainerCard>
              </ScrollFadeIn>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild variant="zinc" size="lg">
              <Link href="#apply">
                Apply for the Program
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 relative z-10 text-foreground bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
            
            {/* Left Column (Sticky Heading) */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32">
                <ScrollFadeIn>
                  <SectionHeader
                    badgeText="Standards"
                    headingLines={[{ text: "Engineering Reliability For Your Clients", gradientLastWords: 2 }]}
                    description="Delivering client projects demands dependable technical execution. Here is how we support your delivery integrity:"
                    align="left"
                  />
                </ScrollFadeIn>
              </div>
            </div>
            
            {/* Right Column (Scrolling List) */}
            <div className="lg:col-span-7 flex flex-col">
              {[
                {
                  title: 'Modern, Maintainable Tech Stack',
                  desc: 'We build with proven modern frameworks including Next.js, React, React Native, Flutter, Python, Node.js, and multi-cloud infrastructure with typed APIs.'
                },
                {
                  title: 'Architecture & Design Alignment',
                  desc: 'We work directly from your Figma design systems and user flows, translating wireframes into responsive, pixel-accurate web and mobile applications.'
                },
                {
                  title: 'Structured Documentation & Handover',
                  desc: 'Every project delivery includes clean git history, automated test suites, architectural documentation, and transparent deployment guides.'
                }
              ].map((item, idx, arr) => {
                const isFirst = idx === 0;
                const isLast = idx === arr.length - 1;
                return (
                  <ScrollFadeIn key={idx} delay={idx * 100}>
                    <div className={\`pb-10 lg:pb-16 \${isFirst ? '' : 'pt-10 lg:pt-16'} \${isLast ? '' : 'border-b border-border'}\`}>
                      <h4 className={\`\${typography.headingSection} font-medium font-headline text-foreground mb-4\`}>{item.title}</h4>
                      <p className="text-muted-foreground font-normal text-sm md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollFadeIn>
                );
              })}
            </div>
            
          </div>
        </div>
      </section>

      {/* How It Works */}
      <ProcessHoverSection title="How Engagements Work" steps={processSteps} />

      {/* Apply Form */}
      <section id="apply" className="py-24 relative z-10 overflow-hidden bg-gradient-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
            
            {/* Left Side: Text and Bullets */}
            <div className="flex flex-col mt-4 lg:col-span-5">
              <ScrollFadeIn>
                <SectionHeader
                  theme="dark"
                  badgeText="Application"
                  badgeHref="#apply"
                  headingLines={[
                    { text: "Apply For A", isGradient: false },
                    { text: "Partnership Engagement", isGradient: false }
                  ]}
                  description="Tell us about your organization, market focus, and preferred collaboration model. Our leadership team will review your application and arrange an introductory discussion."
                  align="left"
                  className="mb-8 lg:mb-12"
                />
              </ScrollFadeIn>

              <div className="grid grid-cols-1 gap-y-8">
                <ScrollFadeIn delay={100} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <h4 className="text-white font-medium text-lg">Direct Technical Leadership</h4>
                  </div>
                  <p className="text-white/80 text-sm pl-5 leading-relaxed">
                    Speak directly with technical founders and software architects to scope delivery feasibility.
                  </p>
                </ScrollFadeIn>

                <ScrollFadeIn delay={200} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <h4 className="text-white font-medium text-lg">Agreed Commercial Terms</h4>
                  </div>
                  <p className="text-white/80 text-sm pl-5 leading-relaxed">
                    Transparent milestone-based contracts or dedicated engineering pod rates with no hidden fees.
                  </p>
                </ScrollFadeIn>

                <ScrollFadeIn delay={300} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <h4 className="text-white font-medium text-lg">Ethical Relationship Boundaries</h4>
                  </div>
                  <p className="text-white/80 text-sm pl-5 leading-relaxed">
                    Strict non-compete and non-solicitation protections to preserve your client relationships.
                  </p>
                </ScrollFadeIn>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7 w-full">
              <ScrollFadeIn delay={200}>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-foreground">
                  <h3 className="text-2xl font-bold font-headline mb-2 text-foreground">Partner Application</h3>
                  <p className="text-sm text-muted-foreground mb-8">Complete the form below to initiate an introductory partnership review.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Company Name *</label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Agency or Organization"
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="e.g. United States, UK"
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Partnership Model *</label>
                        <select
                          name="model"
                          required
                          value={formData.model}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        >
                          <option value="">Select a model</option>
                          <option value="White-Label Delivery">White-Label Delivery</option>
                          <option value="Technical Referral Program">Technical Referral Program</option>
                          <option value="Strategic Reseller / Co-Delivery">Strategic Reseller / Co-Delivery</option>
                          <option value="General Discussion">General Technical Discussion</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Tell us about your organization and requirements</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your agency focus, upcoming client requirements, or target collaboration model..."
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-base font-semibold bg-zinc hover:bg-zinc/90 text-white transition-all shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting Application...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </form>
                </div>
              </ScrollFadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
`;
fs.writeFileSync(partnersPath, partnersUpdated, 'utf8');
console.log('Updated PartnersPageContent.tsx');

// 3. Update src/app/careers/page.tsx
const careersPath = path.join(root, 'src/app/careers/page.tsx');
let careersContent = fs.readFileSync(careersPath, 'utf8');

// Update benefits in careers
careersContent = careersContent.replace(
  /const benefits = \[[\s\S]*?\];/,
  `const benefits = [
  {
    icon: TrendingUp,
    title: "Production Engineering",
    subheading: "High Technical Standards",
    description: "Work on maintainable software architectures, structured code reviews, and automated CI/CD pipelines across diverse client domains.",
    imageUrl: placeholderImages.expertise.imageUrl
  },
  {
    icon: Briefcase,
    title: "Applied AI Work",
    subheading: "Practical Innovation",
    description: "Build beyond basic prompts: integrate retrieval pipelines, vector databases, deterministic business logic, and automated workflows.",
    imageUrl: placeholderImages.innovation.imageUrl
  },
  {
    icon: Puzzle,
    title: "Direct Accountability",
    subheading: "Transparent Ownership",
    description: "Collaborate closely with technical founders and experienced leads with ownership over your technical decisions and deliverables.",
    imageUrl: placeholderImages.vision.imageUrl
  }
];`
);

// Update hiring steps in careers
careersContent = careersContent.replace(
  /const hiringSteps = \[[\s\S]*?\];/,
  `const hiringSteps = [
  {
    icon: Send,
    number: '01',
    title: 'Application',
    description: 'Submit your profile and technical portfolio or GitHub repositories for review.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Technical Review',
    description: 'We evaluate practical code samples, problem-solving depth, and architectural reasoning.',
  },
  {
    icon: UserCheck,
    number: '03',
    title: 'Technical Discussion',
    description: 'A conversation with engineering leadership to discuss past systems, depth, and expectations.',
  },
  {
    icon: Handshake,
    number: '04',
    title: 'Offer & Onboarding',
    description: 'Clear offer terms and structured onboarding into our repositories, tools, and sprint workflows.',
  },
];`
);

// Update culture intro copy
careersContent = careersContent.replace(
  "We're shaping the future of digital experiences, and we're looking for the ones who'll shape it with us.",
  "Join a focused technical team building AI-enabled applications, workflow automation, and custom software systems."
);

careersContent = careersContent.replace(
  "Designers, engineers, strategists, and dreamers. If you're driven by purpose and energized by innovation, you've found your people. At Cauders, every voice shapes the product, every idea gets a seat at the table.",
  "At Cauders, we build software and automation for businesses solving real operational challenges. We value engineering rigor, clean codebases, thoughtful architecture, and clear accountability."
);

careersContent = careersContent.replace(
  "Whether you're a seasoned professional seeking your next chapter or a fresh graduate ready to make your mark, we provide the platform, mentorship, and culture to help you do the most meaningful work of your career.",
  "Whether developing full-stack web applications, integrating language models, or architecting cloud infrastructure, our team works directly on challenging technical implementations with direct visibility into delivery."
);

fs.writeFileSync(careersPath, careersContent, 'utf8');
console.log('Updated src/app/careers/page.tsx');

// 4. Update Header.tsx nav label
const headerPath = path.join(root, 'src/components/cauders/Header.tsx');
let headerContent = fs.readFileSync(headerPath, 'utf8');
headerContent = headerContent.replace("Artificial Intelligence", "AI & Automation");
fs.writeFileSync(headerPath, headerContent, 'utf8');
console.log('Updated Header.tsx');

// 5. Update Footer.tsx
const footerPath = path.join(root, 'src/components/cauders/Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');

// Ensure /partners is in companyLinks
if (!footerContent.includes("href: '/partners'")) {
  footerContent = footerContent.replace(
    "{ href: '/contact', label: 'Contact Us' },",
    "{ href: '/partners', label: 'Partnerships' },\n  { href: '/contact', label: 'Contact Us' },"
  );
}

// Update footer description
footerContent = footerContent.replace(
  "We provide business consultation and build high-performance digital products to scale your operations.",
  "Cauders builds AI-enabled applications and automates business workflows, backed by custom software engineering and systems integration."
);

fs.writeFileSync(footerPath, footerContent, 'utf8');
console.log('Updated Footer.tsx');

// 6. Fix src/app/faq/page.tsx
const faqRoutePath = path.join(root, 'src/app/faq/page.tsx');
let faqRouteContent = fs.readFileSync(faqRoutePath, 'utf8');

// Fix type error line 212: remove className inside headingLines
faqRouteContent = faqRouteContent.replace(
  '{ text: "Specialized Services & Expertise", className: "text-white" }',
  '{ text: "Specialized Services & Expertise" }'
);

// Fix type error line 237: change subtitle to description in GetAQuote
faqRouteContent = faqRouteContent.replace(
  '<GetAQuote title="Ready to start your project?" subtitle="Let\'s build something extraordinary together." />',
  '<GetAQuote title="Ready to discuss your project?" description="Connect with our technical team to review architecture, scope, and delivery timelines." />'
);

// Fix free strategy call claim
faqRouteContent = faqRouteContent.replace(
  "We'll set up a free strategy call to discuss your challenges, explore potential AI or software solutions, and outline the best path forward.",
  "Our technical team will review your requirements and coordinate a discovery call to discuss architectural feasibility, delivery models, and scope."
);

fs.writeFileSync(faqRoutePath, faqRouteContent, 'utf8');
console.log('Updated src/app/faq/page.tsx');
