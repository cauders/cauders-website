'use client';

import CaseStudiesSection from './CaseStudiesSection';

export { default as CaseStudiesSection } from './CaseStudiesSection';
export default function Testimonials(props: React.ComponentProps<typeof CaseStudiesSection>) {
  return <CaseStudiesSection {...props} />;
}
