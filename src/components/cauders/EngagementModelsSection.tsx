import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ShieldCheck, Clock, CheckCircle2, Lock } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import ZincGradientContainer from './ZincGradientContainer';

interface EngagementModel {
  number: string;
  image: string;
  title: string;
  subhead: string;
  description: string;
  promptQuestion: string;
  items: string[];
  slaHighlights: string[];
  ctaText: string;
  ctaHref: string;
}

const engagementModels: EngagementModel[] = [
  {
    number: '01',
    image:
      'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_256/v1792712759/image-Photoroom1_1_hecjtb.png',
    title: 'Project-Based Delivery',
    subhead: 'Fixed-scope or milestone-driven engineering for defined initiatives.',
    description:
      'Architect, build, and deploy custom software products, modern web platforms, or applied AI pipelines with deterministic milestones, strict acceptance criteria, and full transparency.',
    promptQuestion: 'Core Deliverables & Scope:',
    items: [
      'Custom Product & SaaS Engineering',
      'Platform Modernization & Refactoring',
      'Applied AI & Intelligent Automations',
      'API Gateway & Cloud Integration',
    ],
    slaHighlights: [
      '100% IP & source code ownership upon sign-off',
      'Milestone-gated reviews & zero unexpected costs',
      'Comprehensive 30-day post-launch warranty',
    ],
    ctaText: 'Explore Our Services',
    ctaHref: '/services',
  },
  {
    number: '02',
    image:
      'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_256/v1792712760/image-Photoroom3_1_swfron.png',
    title: 'Dedicated Engineering Teams',
    subhead: 'Dedicated senior engineering pods scaled around your roadmap.',
    description:
      'Embed dedicated full-stack engineers, architects, and QA specialists directly into your delivery cadence. Pre-vetted senior talent aligned with your codebase, tools, and technical leadership.',
    promptQuestion: 'Pod Capabilities & Roles:',
    items: [
      'Full-Stack Engineers (React, Next.js, Node, Python)',
      'Cloud & DevOps Specialists (AWS, GCP, Kubernetes)',
      'Embedded QA & Test Automation Leads',
      'Applied AI & Machine Learning Engineers',
    ],
    slaHighlights: [
      'Guaranteed 4+ hours daily US / UK timezone overlap',
      'Senior engineers embedded directly into your Slack & Jira',
      'Strict 90%+ test coverage & automated CI/CD',
    ],
    ctaText: 'Explore Dedicated Teams',
    ctaHref: '/services/staff-augmentation/staff-augmentation-offshoring',
  },
  {
    number: '03',
    image:
      'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_256/v1792712759/image-Photoroom4_1_dvnidv.png',
    title: 'Strategic Partnerships',
    subhead: 'White-label engineering capacity for consultancies and digital agencies.',
    description:
      'Deliver complex enterprise builds, expand high-margin technical capabilities, and protect client relationships under strict confidential non-disclosure and white-label governance.',
    promptQuestion: 'Partnership Frameworks:',
    items: [
      'White-Label Software Delivery',
      'Co-Branded Architecture Proposals',
      'Referral & Strategic Alliances',
      'Technology & Solutions Partner',
    ],
    slaHighlights: [
      'Strict bilateral NDAs & complete white-label privacy',
      'Direct access to solutions architects on pre-sales calls',
      'Transparent wholesale partner pricing in USD',
    ],
    ctaText: 'Explore Partnership Models',
    ctaHref: '/partners',
  },
];

export default function EngagementModelsSection() {
  return (
    <ZincGradientContainer className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[95rem] mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-9 sm:mb-12">
          <ScrollFadeIn>
            <ArrowBadge
              href="/services"
              text="Engagement Models & SLAs"
              variant="white"
              className="mb-2 md:mb-3"
            />
          </ScrollFadeIn>
          <StandardizedHeading
            lines={['Predictable Delivery,', '<span class="text-cyan-gradient font-medium inline-block">Flexible Engagement</span>']}
            className="text-center font-medium !text-white"
          />
          <p className="mt-3 text-xs sm:text-sm md:text-base text-white/80 max-w-2xl font-light leading-relaxed">
            Choose the operational model aligned with your technical roadmap, team structure, and governance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {engagementModels.map((model, idx) => (
            <ScrollFadeIn key={model.number} delay={idx * 120} className="h-full">
              <div className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full bg-black/[0.14] border-[0.5px] border-primary/40 hover:border-primary/90 hover:bg-black/[0.20] backdrop-blur-[20px] transition-all duration-300 shadow-none hover:-translate-y-1 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={model.image}
                        alt={model.title}
                        fill
                        sizes="(max-width: 768px) 112px, 128px"
                        className="object-contain"
                      />
                    </div>
                    <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-white/35 select-none tracking-tight">
                      {model.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary font-medium leading-relaxed mb-3">
                    {model.subhead}
                  </p>

                  <p className="text-xs sm:text-[0.825rem] text-white/85 leading-relaxed font-normal mb-5">
                    {model.description}
                  </p>

                  {/* Scope bullets */}
                  <div className="pt-3.5 border-t border-white/15">
                    <p className="text-xs sm:text-[0.825rem] font-semibold text-white mb-2.5">
                      {model.promptQuestion}
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-[0.825rem] text-white/90">
                      {model.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SLA Commitments */}
                  <div className="pt-3.5 mt-3.5 border-t border-white/15">
                    <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary mb-2">
                      SLA Commitments:
                    </p>
                    <ul className="space-y-1.5 text-[11px] sm:text-xs text-white/80">
                      {model.slaHighlights.map((sla, slaIdx) => (
                        <li key={slaIdx} className="flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{sla}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/15">
                  <Link
                    href={model.ctaHref}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-primary transition-colors group/cta"
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1 text-primary" />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Enterprise Operational SLAs & Engineering Standards Strip */}
        <ScrollFadeIn delay={220}>
          <div className="mt-10 sm:mt-12 rounded-3xl p-6 sm:p-8 bg-black/30 border border-primary/30 backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-5 border-b border-white/15">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary block mb-1">
                  Operational Standards
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight">
                  Enterprise Service Level Agreements &amp; Governance
                </h3>
              </div>
              <span className="text-xs text-white/70 font-mono shrink-0">
                Guaranteed across all engagements
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* SLA 1 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">100% IP &amp; Code Ownership</h4>
                </div>
                <p className="text-xs text-white/75 leading-relaxed pl-10">
                  All source code, Docker configs, CI/CD pipelines, and infrastructure scripts transfer directly to your organization upon milestone sign-off. Zero vendor lock-in.
                </p>
              </div>

              {/* SLA 2 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Guaranteed Timezone Overlap</h4>
                </div>
                <p className="text-xs text-white/75 leading-relaxed pl-10">
                  Guaranteed minimum 4 hours daily synchronous overlap with US (EST/PST) and UK/European business hours for standups and architecture reviews.
                </p>
              </div>

              {/* SLA 3 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">30-Day Defect Warranty</h4>
                </div>
                <p className="text-xs text-white/75 leading-relaxed pl-10">
                  Every release is backed by a 30-day post-handover warranty. Any discovered bugs or regressions are resolved promptly at zero cost.
                </p>
              </div>

              {/* SLA 4 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Security &amp; Bilateral NDAs</h4>
                </div>
                <p className="text-xs text-white/75 leading-relaxed pl-10">
                  OWASP Top 10 remediation, encrypted data stores, SOC-2 readiness protocols, and mutual NDAs executed prior to technical architecture disclosure.
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </ZincGradientContainer>
  );
}
