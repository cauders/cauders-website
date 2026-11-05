import { notFound, permanentRedirect } from 'next/navigation';
import { getIndustries } from '@/lib/data';

const INDUSTRY_HASH_MAP: Record<string, string> = {
  'banking-financial-services': 'banking-financial-services',
  healthcare: 'healthcare',
  'retail-ecommerce': 'retail-ecommerce',
  'technology-software': 'technology-software',
  'real-estate': 'real-estate',
  'logistics-supply-chain': 'logistics-supply-chain',
  'startups-high-growth': 'technology-software',
  'education-elearning': 'technology-software',
};

export async function generateStaticParams() {
  const industries = getIndustries();
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

export default function Page({ params }: { params: { industry: string } }) {
  const targetHash = INDUSTRY_HASH_MAP[params.industry];
  if (!targetHash) {
    notFound();
  }
  permanentRedirect(`/industries#${targetHash}`);
}
