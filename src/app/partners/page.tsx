import type { Metadata } from 'next';
import PartnersPageContent from '@/components/cauders/PartnersPageContent';

export const metadata: Metadata = {
  title: 'Partner Program | Strategic Agency & Referral Partnerships | Cauders',
  description:
    'Join the Cauders Partner Program. Offer white-label custom software, enterprise AI, and modern web applications to your clients with dedicated engineering support.',
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: 'Partner Program | Strategic Agency & Referral Partnerships | Cauders',
    description:
      'Join the Cauders Partner Program. Offer white-label custom software, enterprise AI, and modern web applications to your clients with dedicated engineering support.',
    url: 'https://www.cauders.com/partners',
  },
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen text-foreground">
      <PartnersPageContent />
    </main>
  );
}
