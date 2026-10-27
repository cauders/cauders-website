import { Metadata } from 'next';
import AllServicesPage from '@/components/cauders/AllServicesPage';

export const metadata: Metadata = {
  title: 'Services & AI Capabilities | What We Build, Connect & Improve',
  description: 'Explore Cauders full-spectrum software development, custom SaaS engineering, applied AI, platform modernization, and dedicated engineering pods.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services & AI Capabilities | Cauders',
    description: 'Explore Cauders full-spectrum software development, custom SaaS engineering, applied AI, platform modernization, and dedicated engineering pods.',
    url: 'https://www.cauders.com/services',
    siteName: 'Cauders',
    images: [
      {
        url: 'https://res.cloudinary.com/cauders/image/upload/v1792742641/Group_4654_t9qwca.png',
        width: 1200,
        height: 630,
        alt: 'Cauders Services & AI Capabilities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & AI Capabilities | Cauders',
    description: 'Explore Cauders full-spectrum software development, custom SaaS engineering, applied AI, platform modernization, and dedicated engineering pods.',
    images: ['https://res.cloudinary.com/cauders/image/upload/v1792742641/Group_4654_t9qwca.png'],
  },
};

export default function ServicesPage() {
  return <AllServicesPage />;
}
