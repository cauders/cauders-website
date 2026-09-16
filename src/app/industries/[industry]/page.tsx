import { getIndustries, getIndustryBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import IndustryPage from '@/components/cauders/IndustryPage';
import { industryDetails } from '@/lib/industry-details';

export async function generateStaticParams() {
 const industries = getIndustries();
 return industries.map((industry) => ({
 industry: industry.slug,
 }));
}

export default function Page({ params }: { params: { industry: string } }) {
 const industry = getIndustryBySlug(params.industry);
 const detailedData = industryDetails[params.industry];
 
 if (!industry || !detailedData) {
 notFound();
 }

 return <IndustryPage industry={industry} detailedData={detailedData} />;
}
