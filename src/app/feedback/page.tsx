import type { Metadata } from 'next';
import FeedbackPageContent from '@/components/cauders/FeedbackPageContent';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Client Feedback',
  description:
    'Share your project feedback, collaboration experience, and improvement suggestions directly with the Cauders engineering team.',
  path: '/feedback',
  noIndex: true,
});

export default function FeedbackPage() {
  return <FeedbackPageContent />;
}
