import { Metadata } from 'next';
import CaseStudiesListingPage from '@/components/cauders/CaseStudiesListingPage';

export const metadata: Metadata = {
  title: 'Case Studies & Production Outcomes | Cauders',
  description:
    'Explore real-world software engineering case studies, enterprise cloud migrations, headless e-commerce architectures, and intelligent workflow automations delivered by Cauders.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Case Studies & Production Outcomes | Cauders',
    description:
      'Explore real-world software engineering case studies, enterprise cloud migrations, headless e-commerce architectures, and intelligent workflow automations delivered by Cauders.',
    url: 'https://www.cauders.com/case-studies',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesListingPage />;
}
