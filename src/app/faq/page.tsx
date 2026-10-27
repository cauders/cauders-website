import type { Metadata } from 'next';
import FAQPageContent from '@/components/cauders/FAQPageContent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Cauders',
  description:
    'Find answers to common questions about Cauders custom software development, AI solutions, workflow automation, pricing, engagement models, and tech stack.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Cauders',
    description:
      'Find answers to common questions about Cauders custom software development, AI solutions, workflow automation, pricing, engagement models, and tech stack.',
    url: 'https://www.cauders.com/faq',
  },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
