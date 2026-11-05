import type { Metadata } from 'next';
import ApplicationForm from '@/components/cauders/ApplicationForm';
import { Suspense } from 'react';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Job Application',
  description:
    'Submit your application for open software engineering, design, DevOps, and AI roles at Cauders.',
  path: '/careers/apply',
  noIndex: true,
});

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplicationForm />
    </Suspense>
  );
}
