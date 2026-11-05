import type { Metadata } from 'next';
import CareersPageContent from '@/components/cauders/CareersPageContent';
import { jobOpenings } from '@/lib/data';
import { buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Careers — Build Software & AI Systems',
  description:
    'Join our team of software engineers, cloud architects, and AI developers. Explore open roles, engineering culture, and career growth at Cauders.',
  path: '/careers',
  ogImage:
    'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1786803238/workspace_byyhyg.png',
  ogAlt: 'Careers at Cauders',
});

const employmentTypeMap: Record<string, string> = {
  'Full-time': 'FULL_TIME',
  Contract: 'CONTRACTOR',
  Internship: 'INTERN',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers' },
    ]),
    ...jobOpenings.map((job) => ({
      '@type': 'JobPosting',
      title: job.title,
      description: job.description,
      datePosted: '2026-10-01',
      employmentType: employmentTypeMap[job.type] || 'FULL_TIME',
      hiringOrganization: {
        '@id': `${SITE_URL}/#organization`,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'F1 Block Phase 2, Pak Arab Housing Society, Ferozpur Road',
          addressLocality: 'Lahore',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
      },
    })),
  ],
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareersPageContent />
    </>
  );
}
