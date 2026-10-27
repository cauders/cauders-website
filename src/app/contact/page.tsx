import type { Metadata } from 'next';
import ContactPageContent from '@/components/cauders/ContactPageContent';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us | Start Your Project with Cauders',
  description:
    'Have a project in mind, need custom AI automation, or want to consult with our software architects? Contact the Cauders team for a free strategy session.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Start Your Project with Cauders',
    description:
      'Have a project in mind, need custom AI automation, or want to consult with our software architects? Contact the Cauders team for a free strategy session.',
    url: 'https://www.cauders.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
