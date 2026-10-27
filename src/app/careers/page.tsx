import type { Metadata } from 'next';
import CareersPageContent from '@/components/cauders/CareersPageContent';

export const metadata: Metadata = {
  title: 'Careers at Cauders | Build Next-Gen Software & AI Systems',
  description:
    'Join our team of software engineers, cloud architects, and AI developers. Explore current openings, engineering culture, and career growth opportunities at Cauders.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers at Cauders | Build Next-Gen Software & AI Systems',
    description:
      'Join our team of software engineers, cloud architects, and AI developers. Explore current openings, engineering culture, and career growth opportunities at Cauders.',
    url: 'https://www.cauders.com/careers',
  },
};

export default function CareersPage() {
  return <CareersPageContent />;
}
