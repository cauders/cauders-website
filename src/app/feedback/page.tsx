import type { Metadata } from 'next';
import FeedbackPageContent from '@/components/cauders/FeedbackPageContent';

export const metadata: Metadata = {
  title: 'Client Feedback | Cauders',
  description: 'Share your feedback, reviews, and project experiences with Cauders.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function FeedbackPage() {
  return <FeedbackPageContent />;
}
