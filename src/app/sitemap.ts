import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cauders.com';
  const currentDate = new Date().toISOString();

  // Core indexable landing pages
  const coreRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/case-studies',
    '/contact',
    '/careers',
    '/partners',
    '/faq',
    '/privacy-policy',
    '/terms-of-service',
    '/cookies-policy',
    '/legal-information',
  ];

  // Specific canonical service & AI capabilities
  const serviceRoutes = [
    '/services/software-solutions/custom-software-development',
    '/services/software-solutions/web-development',
    '/services/software-solutions/mobile-app-development',
    '/services/software-solutions/saas-development',
    '/services/cloud-digital-transformation/cloud-transformation',
    '/services/staff-augmentation/staff-augmentation-offshoring',
    '/ai/generative-ai-llms/generative-ai-solutions',
    '/ai/generative-ai-llms/autonomous-ai-agents',
    '/ai/ai-product-engineering/custom-ai-development',
    '/ai/data-intelligent-automation/automation-custom-applications',
    '/ai/data-intelligent-automation/data-modernization-analytics',
    '/ai/ai-strategy-advisory/ai-roadmapping-consulting',
  ];

  // Verified production case studies
  const caseStudyRoutes = [
    '/case-studies/nordic-ecommerce-storefront',
    '/case-studies/telecom-core-infrastructure-portal',
    '/case-studies/smart-building-proptech-platform',
    '/case-studies/global-language-exchange-platform',
    '/case-studies/social-commerce-fashion-discovery',
    '/case-studies/on-demand-delivery-marketplace',
    '/case-studies/api-marketplace-developer-gateway',
    '/case-studies/cognitive-fitness-gamified-platform',
    '/case-studies/self-hosted-streaming-platform',
    '/case-studies/contracting-service-portal',
  ];

  const allUrls: MetadataRoute.Sitemap = [
    ...coreRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: path === '' ? ('daily' as const) : ('weekly' as const),
      priority: path === '' ? 1.0 : path === '/services' || path === '/case-studies' || path === '/contact' ? 0.9 : 0.8,
    })),
    ...serviceRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    ...caseStudyRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ];

  return allUrls;
}
