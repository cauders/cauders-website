import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import PolicyLayout, { PolicySectionItem } from '@/components/cauders/PolicyLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | Cauders',
  description: 'Review the terms and conditions governing the use of the Cauders website, consulting, and professional software engineering services.',
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service | Cauders',
    description: 'Review the terms and conditions governing the use of the Cauders website, consulting, and professional software engineering services.',
    url: 'https://www.cauders.com/terms-of-service',
    siteName: 'Cauders',
    locale: 'en_US',
    type: 'website',
  },
};

const termsSections: PolicySectionItem[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Cauders website at{' '}
          <Link href="/" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">https://cauders.com</Link> and its publicly available content and features.
        </p>
        <p>
          The website is operated under the Cauders name by Cauders (Private) Limited (&quot;Cauders,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing or using the website, you agree to these Terms. If you do not agree, you should discontinue use of the website.
        </p>
        <p>
          If you access the website on behalf of a company or other organization, you confirm that you are authorized to act on its behalf in connection with that use.
        </p>
      </>
    )
  },
  {
    id: "scope-of-these-terms",
    title: "Scope of These Terms",
    content: (
      <>
        <p>
          Cauders provides B2B technology services, including custom software development, SaaS development, AI integrations, workflow automation, application development, and related software engineering services.
        </p>
        <p>
          These Terms govern use of the public website. They do not, by themselves, constitute a complete agreement for a software development project or other paid professional engagement.
        </p>
        <p>
          Any actual engagement between Cauders and a client will be governed by the applicable written agreement, statement of work, or other contractual documentation agreed to by the parties.
        </p>
        <p>
          Where a signed client agreement addresses a matter differently from these website Terms, the signed client agreement will govern that matter to the extent of the inconsistency.
        </p>
        <p>
          Project scope, deliverables, timelines, fees, payment obligations, acceptance criteria, intellectual property ownership, confidentiality, warranties, support, and project-specific liability provisions should be addressed in the applicable client agreement.
        </p>
        <p>
          Submitting an inquiry or booking a meeting does not, by itself, oblige Cauders to accept a project or provide services.
        </p>
      </>
    )
  },
  {
    id: "website-information-and-service-descriptions",
    title: "Website Information and Service Descriptions",
    content: (
      <>
        <p>
          The information presented on our website is provided for general information about Cauders, our capabilities, and our services.
        </p>
        <p>
          Descriptions of services, technologies, portfolio projects, and potential business outcomes are illustrative and may be updated as our work and capabilities evolve.
        </p>
        <p>
          Specific services, deliverables, timelines, fees, and technical requirements will be confirmed through direct discussions and the applicable client agreement.
        </p>
        <p>
          Nothing on the website guarantees a particular business outcome, project result, commercial performance, or implementation timeline.
        </p>
      </>
    )
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: (
      <>
        <p>
          You may use our website for lawful purposes, including learning about Cauders, evaluating our services, reviewing our publicly available work, and contacting us about potential business or career opportunities.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc list-outside space-y-2 pl-6 text-sm lg:text-base text-zinc-700">
          <li>Use the website in violation of applicable law or the rights of others.</li>
          <li>Attempt to gain unauthorized access to the website, its infrastructure, or connected systems.</li>
          <li>Interfere with the website&apos;s operation, security, or availability.</li>
          <li>Upload or transmit malicious code, harmful files, or deceptive content.</li>
          <li>Use automated methods to extract website content or personal information in a manner that violates applicable law or these Terms.</li>
          <li>Copy or exploit protected website materials for unauthorized commercial purposes.</li>
          <li>Impersonate another person or submit knowingly false information.</li>
          <li>Use contact, booking, or subscription forms for spam, fraudulent activity, or other misuse.</li>
        </ul>
        <p className="pt-2">
          We may take reasonable steps to protect the website, investigate suspected abuse, and restrict access where necessary.
        </p>
      </>
    )
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, the website and its content, including text, graphics, design elements, branding, logos, illustrations, visual assets, code, and other materials, are owned by Cauders or used under appropriate authorization.
        </p>
        <p>
          These materials are protected by applicable intellectual property laws.
        </p>
        <p>
          You may access and view website content for personal or legitimate business evaluation purposes. You may not reproduce, distribute, modify, publicly display, sell, or commercially exploit protected materials without appropriate permission.
        </p>
        <p>
          The Cauders name, logo, and associated branding may not be used in a way that suggests an endorsement, partnership, or affiliation without authorization.
        </p>
        <p>
          References to third-party companies, products, technologies, trademarks, or client projects remain subject to the rights of their respective owners.
        </p>
        <p>
          Ownership and permitted use of software, source code, designs, and other deliverables created for a client will be determined by the applicable client agreement. These website Terms do not independently transfer ownership of project deliverables.
        </p>
      </>
    )
  },
  {
    id: "information-you-submit",
    title: "Information You Submit",
    content: (
      <>
        <p>
          When you submit an inquiry, booking request, newsletter subscription, job application, or other information through our website, you remain responsible for ensuring that the information you provide is accurate and that you are entitled to share it.
        </p>
        <p>
          You retain any rights you have in the information and materials you submit, subject to applicable law and any separate agreement.
        </p>
        <p>
          You authorize Cauders to receive, review, use, and process your submission as reasonably necessary to respond to your inquiry, arrange a meeting, consider your application, deliver requested communications, or otherwise fulfil the purpose for which you submitted it.
        </p>
        <p>
          A public website submission does not, by itself, create a confidentiality agreement. Please do not submit confidential source code, passwords, API keys, trade secrets, or sensitive production data through public forms unless appropriate arrangements have been agreed in advance.
        </p>
        <p>
          Nothing in this section overrides an applicable confidentiality agreement or other signed contract.
        </p>
      </>
    )
  },
  {
    id: "meetings-newsletters-and-applications",
    title: "Meetings, Newsletters, and Applications",
    content: (
      <>
        <p>
          Booking a meeting through our website is an arrangement for a discussion. It does not guarantee that Cauders will accept a project or enter into a commercial relationship.
        </p>
        <p>
          Meeting availability, confirmations, cancellations, and rescheduling may be subject to the relevant booking service and arrangements communicated to you.
        </p>
        <p>
          Newsletter subscriptions are voluntary. You may unsubscribe at any time using the mechanism provided in the communication.
        </p>
        <p>
          Submitting a job application does not guarantee an interview, offer, or employment relationship. Any employment or contractor engagement will be subject to applicable agreements and requirements.
        </p>
      </>
    )
  },
  {
    id: "third-party-services-and-links",
    title: "Third-Party Services and Links",
    content: (
      <>
        <p>
          Our website may link to or incorporate services operated by third parties, including scheduling, analytics, recruitment, communication, and social media providers.
        </p>
        <p>
          Third-party services may be governed by separate terms, privacy policies, and operational rules. Cauders does not control and is not responsible for the independent operation or content of external services.
        </p>
        <p>
          Your interaction with those services is subject to their applicable terms and policies.
        </p>
      </>
    )
  },
  {
    id: "website-availability-and-disclaimers",
    title: "Website Availability and Disclaimers",
    content: (
      <>
        <p>
          We make reasonable efforts to maintain useful and accurate website content. However, we do not guarantee that the website will always be available, uninterrupted, error-free, or completely up to date.
        </p>
        <p>
          We may modify, suspend, or discontinue website features or content when reasonably necessary.
        </p>
        <p>
          To the extent permitted by applicable law, the website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties that cannot be excluded under applicable law.
        </p>
        <p>
          Any warranties, service levels, or performance commitments relating to paid client services must be established in the applicable client agreement.
        </p>
      </>
    )
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, Cauders will not be liable for indirect, incidental, special, consequential, or punitive losses arising solely from your access to or use of the public website, including loss of business opportunity, revenue, or data.
        </p>
        <p>
          This provision applies only to the extent such limitations are legally enforceable and do not override obligations or liabilities established by an applicable signed client agreement.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law.
        </p>
      </>
    )
  },
  {
    id: "privacy",
    title: "Privacy",
    content: (
      <>
        <p>
          Your use of the website is also subject to our Privacy Policy and Cookies Policy:
        </p>
        <ul className="list-disc list-outside space-y-2 pl-6 text-sm lg:text-base text-zinc-700">
          <li>
            Privacy Policy:{' '}
            <Link href="/privacy-policy" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">
              https://cauders.com/privacy-policy
            </Link>
          </li>
          <li>
            Cookies Policy:{' '}
            <Link href="/cookies-policy" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">
              https://cauders.com/cookies-policy
            </Link>
          </li>
        </ul>
        <p className="pt-2">
          These policies explain how personal information is handled and how cookies and similar technologies are used.
        </p>
      </>
    )
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may revise these Terms when our website, services, or relevant legal requirements change.
        </p>
        <p>
          The revised Terms will be published on this page with an updated &quot;Last Updated&quot; date. Changes will apply prospectively from the date of publication, subject to applicable law.
        </p>
      </>
    )
  },
  {
    id: "governing-law-and-disputes",
    title: "Governing Law and Disputes",
    content: (
      <>
        <p>
          These Terms are governed by the laws of Pakistan, subject to any mandatory legal requirements that apply in the circumstances.
        </p>
        <p>
          Subject to applicable law, disputes relating to these website Terms will be submitted to the competent courts in Lahore, Pakistan.
        </p>
        <p>
          Nothing in this section limits any rights that cannot lawfully be restricted or excluded.
        </p>
      </>
    )
  },
  {
    id: "general-provisions",
    title: "General Provisions",
    content: (
      <>
        <p>
          If any part of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.
        </p>
        <p>
          A failure to enforce a provision immediately does not constitute a waiver of the right to enforce it later.
        </p>
        <p>
          These Terms, together with the Privacy Policy and Cookies Policy, govern your use of the public website. They do not replace or amend a separate signed client agreement.
        </p>
      </>
    )
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <>
        <p>For questions concerning these Terms, contact:</p>
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

export default function TermsOfServicePage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      lastUpdated="October 17, 2026"
      badge="Terms"
      sections={termsSections}
    />
  );
}
