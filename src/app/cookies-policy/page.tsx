import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import PolicyLayout, { PolicySectionItem } from '@/components/cauders/PolicyLayout';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Cookies Policy',
  description:
    'Information about essential and analytical cookies used on the Cauders website and how you can manage your browser preferences.',
  path: '/cookies-policy',
});

const policySections: PolicySectionItem[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>
          This Cookies Policy explains how CAUDERS (PRIVATE) LIMITED (&quot;Cauders,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies on{' '}
          <Link href="/" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">https://www.cauders.com</Link>.
        </p>
        <p>
          It should be read alongside our Privacy Policy, which explains how we collect and use personal information.
        </p>
        <p>
          Privacy Policy:{' '}
          <Link href="/privacy-policy" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">
            https://www.cauders.com/privacy-policy
          </Link>
        </p>
      </>
    ),
  },
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies?',
    content: (
      <>
        <p>
          Cookies are small text files that a website may store on your device when you visit it. They can help a website function, remember preferences, maintain security, or understand how visitors use its pages.
        </p>
        <p>
          Similar technologies may include browser storage, tags, scripts, and other identifiers used to support website functionality or measure activity.
        </p>
        <p>
          Cookies may be set by the website you visit or by third-party services integrated into it.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use-cookies-and-similar-technologies',
    title: 'How We Use Cookies and Similar Technologies',
    content: (
      <>
        <p>
          Our website uses or may use the following categories of technologies, depending on the features and services enabled:
        </p>

        <div className="space-y-4 pt-2">
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Essential technologies</h3>
            <p>
              Some technologies may be necessary to deliver website pages, maintain security, support requested features, or ensure that the website functions correctly.
            </p>
            <p className="mt-1">
              Where a technology is strictly necessary for a service you have requested or is otherwise exempt from consent under applicable law, it may be used without optional-cookie consent.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Analytics and marketing cookies</h3>
            <p>
              Where enabled, we may use the LinkedIn Insight Tag to understand how professional visitors interact with our website, evaluate content performance, and gain aggregate insights into our B2B audience.
            </p>
            <p className="mt-1">
              Cookies and identifiers that may be deployed by the LinkedIn Insight Tag include:
            </p>
            <ul className="list-disc list-outside space-y-1.5 pl-6 my-2 text-sm lg:text-base text-zinc-700">
              <li>
                <strong className="text-zinc-900">bcookie:</strong> Browser identifier cookie used by LinkedIn to uniquely identify devices accessing the website.
              </li>
              <li>
                <strong className="text-zinc-900">lidc:</strong> Facilitates routing and ensures reliable data center communication for analytics requests.
              </li>
              <li>
                <strong className="text-zinc-900">UserMatchHistory:</strong> Used for conversion tracking and to provide aggregate demographic reporting without identifying individuals.
              </li>
            </ul>
            <p className="mt-1">
              LinkedIn cookies typically persist for up to 90 days. You can opt out of LinkedIn tracking via your LinkedIn account settings or through the Digital Advertising Alliance opt-out portal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-1">Functional and third-party technologies</h3>
            <p>
              If you interact with embedded media or an external service linked through our website, that service may use its own cookies or similar technologies to provide the requested functionality.
            </p>
            <p className="mt-1">
              We do not describe every possible third-party cookie as active on our website. The actual cookies and technologies depend on the production website&apos;s configuration.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'consent-and-cookie-preferences',
    title: 'Consent and Cookie Preferences',
    content: (
      <>
        <p>
          Where applicable law requires consent before non-essential cookies or similar technologies are stored or accessed, we will obtain the required consent before using those technologies.
        </p>
        <p>
          Essential technologies that qualify for an applicable exemption may operate without optional-cookie consent.
        </p>
        <p>
          Where website cookie-preference controls are available, you can use them to manage or withdraw your choices. You may also contact us at{' '}
          <a href="mailto:info@cauders.com" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">info@cauders.com</a> with questions about your preferences.
        </p>
        <p>
          Please note that withdrawing consent does not necessarily remove cookies that were already stored on your device. You may need to delete existing cookies through your browser settings.
        </p>
      </>
    ),
  },
  {
    id: 'managing-cookies-through-your-browser',
    title: 'Managing Cookies Through Your Browser',
    content: (
      <>
        <p>
          Most browsers let you view, block, or delete cookies through their privacy or security settings.
        </p>
        <p>
          You can usually manage cookies in the settings of browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, and Apple Safari.
        </p>
        <p>
          Blocking all cookies may affect certain website features. Deleting a cookie does not necessarily prevent a website or third-party service from setting it again during a later visit.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-privacy-policies',
    title: 'Third-Party Privacy Policies',
    content: (
      <>
        <p>
          LinkedIn and any other third-party services integrated into our website may process information according to their own privacy policies and cookie settings.
        </p>
        <p>
          For more information about how LinkedIn uses cookies and handles personal data, please review:
        </p>
        <ul className="list-disc list-outside space-y-2 pl-6 text-sm lg:text-base text-zinc-700">
          <li>
            LinkedIn Privacy Policy:{' '}
            <a
              href="https://www.linkedin.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors"
            >
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </li>
          <li>
            LinkedIn Cookie Policy &amp; Opt-Out:{' '}
            <a
              href="https://www.linkedin.com/legal/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors"
            >
              https://www.linkedin.com/legal/cookie-policy
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'changes-to-this-cookies-policy',
    title: 'Changes to This Cookies Policy',
    content: (
      <>
        <p>
          We may update this Cookies Policy when our website technologies, integrations, or applicable requirements change.
        </p>
        <p>
          Any updated version will be published on this page with a revised &quot;Last Updated&quot; date.
        </p>
      </>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <>
        <p>If you have questions about our use of cookies or this Cookies Policy, contact:</p>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 space-y-2 mt-4 text-sm lg:text-base text-zinc-800">
          <p className="font-bold text-zinc-900 font-headline">CAUDERS (PRIVATE) LIMITED</p>
          <p className="text-xs text-zinc-500 font-mono">Incorporation No. (SECP): 0351558</p>
          <p>
            Email:{' '}
            <a href="mailto:info@cauders.com" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">
              info@cauders.com
            </a>
          </p>
          <p>
            Registered Office: F1 Block Phase 2, Pak Arab Housing Society, Ferozpur Road, Lahore, Pakistan
          </p>
          <p>
            Official Website:{' '}
            <Link href="/" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-600 font-medium transition-colors">
              https://www.cauders.com
            </Link>
          </p>
        </div>
      </>
    ),
  },
];

export default function CookiesPolicyPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Cookies Policy', path: '/cookies-policy' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PolicyLayout
        title="Cookies Policy"
        lastUpdated="November 2026"
        badge="Cookies"
        sections={policySections}
      />
    </>
  );
}
