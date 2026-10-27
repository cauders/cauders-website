import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import PolicyLayout, { PolicySectionItem } from '@/components/cauders/PolicyLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cauders',
  description: 'Understand how Cauders collects, processes, and protects your personal data in compliance with international privacy laws and GDPR standards.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Cauders',
    description: 'Understand how Cauders collects, processes, and protects your personal data in compliance with international privacy laws and GDPR standards.',
    url: 'https://www.cauders.com/privacy-policy',
    siteName: 'Cauders',
    locale: 'en_US',
    type: 'website',
  },
};

const policySections: PolicySectionItem[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Cauders (Private) Limited (&quot;Cauders,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to handling personal information responsibly.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit{' '}
          <Link href="/" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">https://cauders.com</Link>, contact us, book a meeting, subscribe to our newsletter, apply for a position, or otherwise interact with our website.
        </p>
        <p>
          Cauders provides business-to-business technology services, including custom software development, SaaS development, AI solutions, workflow automation, and related software engineering services.
        </p>
        <p>
          This Privacy Policy covers information collected through our public website and related business communications. When we process personal information on behalf of a client as part of a software development or technology engagement, that processing may be governed by the applicable client agreement and, where relevant, a separate Data Processing Agreement.
        </p>
      </>
    )
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We collect information that you provide directly, information generated through your use of the website, and information received through the services used to operate our website.
        </p>
        
        <div className="space-y-4 pt-2">
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Contact and project inquiries</h3>
            <p>
              When you contact us through our website (/contact, homepage contact form, or /partners), we collect your name, work email address, phone number if provided, company name, job title, company size, service interests, and details of your project or inquiry.
            </p>
            <p className="mt-1">
              For partnership applications (/partners), we additionally collect information about your agency or business model, client base, and collaboration goals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Careers and job applications</h3>
            <p>
              When you submit a job application through our careers portal (/careers/apply), we collect your full name, email address, targeted role, cover message, and your uploaded resume or CV file (PDF or Word document).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">User feedback and bug reports</h3>
            <p>
              When you submit feedback or report an issue via /feedback, we collect your name, email address, feedback category (bug, suggestion, praise, or other), your feedback description, and any optional screenshot file you upload.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Website and technical information</h3>
            <p>
              When you visit our website, certain technical information is collected automatically, including your IP address, browser type, operating system, device characteristics, referring URL, pages visited, and timestamps.
            </p>
            <p className="mt-1">
              Our hosting and cloud infrastructure process this data to deliver web pages securely, optimize performance, and prevent unauthorized access.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Analytics and marketing tracking</h3>
            <p>
              We use the LinkedIn Insight Tag to understand professional visitor demographics, assess marketing effectiveness, and measure B2B engagement. Depending on your browser settings, this involves cookies and tracking pixels. Further details and opt-out instructions are available in our{' '}
              <Link href="/cookies-policy" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">Cookies Policy</Link>.
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "how-we-use-personal-information",
    title: "How We Use Personal Information",
    content: (
      <>
        <p>We use personal information for the following purposes:</p>
        <ul className="list-disc list-outside space-y-2 pl-6 text-sm lg:text-base text-zinc-700">
          <li>To respond to inquiries and communicate with prospective clients.</li>
          <li>To understand business and technical requirements and arrange discovery meetings.</li>
          <li>To evaluate potential software development, AI, automation, and technology engagements.</li>
          <li>To manage meeting bookings and related communications.</li>
          <li>To deliver newsletters and business updates to subscribers.</li>
          <li>To receive, evaluate, and manage job applications and recruitment communications.</li>
          <li>To operate, maintain, troubleshoot, and improve our website.</li>
          <li>To understand website traffic and usage through analytics.</li>
          <li>To protect our website, prevent misuse, and investigate suspected security incidents.</li>
          <li>To comply with applicable legal obligations and establish, exercise, or defend legal claims.</li>
        </ul>
        <p className="mt-4 text-zinc-500 font-medium text-xs sm:text-sm">
          We do not use an inquiry submission to automatically subscribe you to our newsletter. Newsletter subscriptions are handled separately.
        </p>
      </>
    )
  },
  {
    id: "legal-grounds-for-processing",
    title: "Legal Grounds for Processing",
    content: (
      <>
        <p>
          We process personal information for legitimate business purposes and in accordance with applicable law.
        </p>
        <p>
          Depending on the circumstances and the law applicable to a particular person or activity, processing may be based on your request to take steps before entering into a contract, performance of a contract, our legitimate business interests, your consent, or compliance with a legal obligation.
        </p>
        <p>
          Where consent is required for a particular activity, including certain cookies or marketing communications, we will seek consent as required by applicable law. You may withdraw consent where processing relies on it, without affecting the lawfulness of processing that occurred before withdrawal.
        </p>
      </>
    )
  },
  {
    id: "how-we-share-personal-information",
    title: "How We Share Personal Information",
    content: (
      <>
        <p>
          We do not sell personal information in exchange for money. We may disclose personal information to the following categories of recipients when reasonably necessary for the purposes described in this Policy:
        </p>
        <div className="space-y-4 pt-2">
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Service providers</h3>
            <p>
              We may use hosting, infrastructure, website analytics, scheduling, email delivery, newsletter, recruitment, and other technology providers to help operate our website and business communications.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">LinkedIn Insight Tag</h3>
            <p>
              We use the LinkedIn Insight Tag to track professional website engagement and conversion analytics. Data collected through the tag (including URL, IP address, device metadata, and timestamp) is processed by LinkedIn Ireland Unlimited Company in accordance with LinkedIn&apos;s privacy policy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Professional advisers</h3>
            <p>
              We may disclose relevant information to legal, accounting, auditing, or other professional advisers when necessary to obtain advice or manage our business obligations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Legal and regulatory authorities</h3>
            <p>
              We may disclose information where required by applicable law, a valid legal process, or a competent authority, or where disclosure is reasonably necessary to protect our rights or address unlawful activity.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Business transactions</h3>
            <p>
              If Cauders undergoes a merger, restructuring, acquisition, or sale of relevant business assets, personal information may be disclosed as part of that transaction, subject to applicable legal requirements.
            </p>
          </div>
        </div>
        <p className="mt-4">
          We do not permit service providers acting on our behalf to use personal information for purposes unrelated to the services they provide, except where their separate role or applicable law permits otherwise.
        </p>
      </>
    )
  },
  {
    id: "international-data-transfers",
    title: "International Data Transfers",
    content: (
      <>
        <p>
          Cauders operates from Pakistan and may work with clients and individuals in other countries.
        </p>
        <p>
          Our technology and service providers may process or store information in countries other than the country in which you reside. The locations involved depend on the providers and services used.
        </p>
        <p>
          Where applicable law requires safeguards for international transfers of personal information, we will use appropriate transfer mechanisms and safeguards as required by that law.
        </p>
      </>
    )
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including responding to inquiries, managing business relationships, evaluating applications, delivering newsletters, maintaining website security, and meeting legal obligations.
        </p>
        <p>
          Retention periods depend on the type of information, the purpose for which it is held, whether a business or recruitment relationship continues, and any applicable legal requirements.
        </p>
        <ul className="list-disc list-outside space-y-2 pl-6 text-sm lg:text-base text-zinc-700">
          <li>Newsletter information is retained while you remain subscribed and for any additional period reasonably necessary to maintain unsubscribe records and respect your preferences.</li>
          <li>Information relating to job applications is retained for as long as reasonably necessary to manage recruitment, consider applications, and address applicable legal obligations.</li>
          <li>Technical logs and analytics information are retained according to the applicable service configuration and operational requirements.</li>
        </ul>
        <p className="mt-4">
          When personal information is no longer required, we will take reasonable steps to delete it or otherwise dispose of it appropriately, subject to legal requirements, legitimate recordkeeping needs, and backup-system limitations.
        </p>
      </>
    )
  },
  {
    id: "information-security",
    title: "Information Security",
    content: (
      <>
        <p>
          We take reasonable steps to protect personal information against unauthorized access, disclosure, alteration, loss, and misuse. The measures appropriate to particular information depend on its nature, sensitivity, and the systems through which it is processed.
        </p>
        <p>
          No method of transmitting or storing information electronically can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security.
        </p>
        <p>
          Please avoid sending passwords, API keys, confidential production credentials, or highly sensitive information through ordinary public website forms. Where a proposed client engagement requires the exchange or processing of confidential information, appropriate contractual and technical arrangements should be established before that information is shared.
        </p>
      </>
    )
  },
  {
    id: "your-privacy-rights-and-choices",
    title: "Your Privacy Rights and Choices",
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have rights concerning your personal information, including the right to request access, correction, deletion, or restriction of certain processing.
        </p>
        <p>
          You may also have the right to object to particular processing activities, withdraw consent where processing relies on consent, or exercise other rights provided by applicable law. You can unsubscribe from our newsletters using the unsubscribe mechanism included in the relevant communication.
        </p>
        <p>
          To submit a privacy request, contact us at{' '}
          <a href="mailto:info@cauders.com" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">info@cauders.com</a>. Please describe your request clearly so that we can identify the relevant information. We may need to verify your identity before responding. We will review and respond to requests in accordance with applicable legal requirements. Certain information may need to be retained where required by law or where a valid legal ground applies.
        </p>
      </>
    )
  },
  {
    id: "third-party-websites-and-services",
    title: "Third-Party Websites and Services",
    content: (
      <>
        <p>
          Our website may link to third-party websites, social media platforms, scheduling services, or other external resources.
        </p>
        <p>
          These services operate independently and may collect information directly from you under their own privacy policies and terms. Cauders does not control the privacy practices of third-party websites.
        </p>
        <p>
          We encourage you to review the relevant privacy information before submitting personal information through an external service.
        </p>
      </>
    )
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy to reflect changes in our website, services, information-handling practices, or applicable legal requirements.
        </p>
        <p>
          Any updated version will be published on this page with a revised &quot;Last Updated&quot; date. We encourage you to review this page periodically.
        </p>
      </>
    )
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions or requests concerning this Privacy Policy or the handling of your personal information, contact:</p>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 space-y-2 mt-4 text-sm lg:text-base text-zinc-800">
          <p className="font-semibold text-zinc-900">Cauders (Private) Limited</p>
          <p>
            Email:{' '}
            <a href="mailto:info@cauders.com" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">
              info@cauders.com
            </a>
          </p>
          <p>
            Registered office: F1 Block Phase 2, Pak Arab Housing Society, Ferozpur Road, Lahore, Pakistan
          </p>
          <p>
            Website:{' '}
            <Link href="/" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">
              https://cauders.com/
            </Link>
          </p>
        </div>
      </>
    )
  }
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="October 17, 2026"
      badge="Privacy"
      sections={policySections}
    />
  );
}
