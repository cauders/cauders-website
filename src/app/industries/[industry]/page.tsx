import { redirect } from 'next/navigation';
import { getIndustries } from '@/lib/data';

export async function generateStaticParams() {
  const industries = getIndustries();
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

export default function Page({ params }: { params: { industry: string } }) {
  // Gracefully redirect any individual industry subpage to the consolidated industries page section
  redirect(`/industries#${params.industry}`);
}
