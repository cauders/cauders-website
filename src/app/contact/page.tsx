import ContactPageContent from '@/components/cauders/ContactPageContent';
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageContent />
    </Suspense>
  );
}
