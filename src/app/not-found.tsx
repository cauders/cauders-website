import type { Metadata } from 'next';
import FallbackPage from '@/components/cauders/FallbackPage';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for could not be found or has moved.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <FallbackPage />;
}
