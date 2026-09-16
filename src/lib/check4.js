const fs = require('fs');

const fileContent = fs.readFileSync('src/lib/service-details.ts', 'utf-8');

const aiSlugs = [
  'ai-roadmapping-consulting',
  'ai-readiness-assessments',
  'custom-ai-development',
  'machine-learning-solutions',
  'ai-integration-apis',
  'generative-ai-solutions',
  'autonomous-ai-agents',
  'rapid-ai-prototyping',
  'corporate-ai-automation',
  'ai-security-compliance',
  'data-modernization-analytics',
  'automation-custom-applications'
];

// We can extract keys by looking for `  'slug': {` or similar.
// Better yet, let's just find the keys that exist and what fields they have.
for (const slug of aiSlugs) {
  const index = fileContent.indexOf(`'${slug}': {`);
  if (index === -1) {
    console.log(`❌ ${slug} is entirely MISSING from service-details.ts`);
    continue;
  }
  
  // Extract the object block for this slug
  // We'll just check if the strings exist within a reasonable chunk (e.g., next 5000 characters)
  const chunk = fileContent.substring(index, index + 5000);
  
  const requiredFields = [
    'hero:', 'overview:', 'capabilitiesTitle:', 'capabilities:', 
    'processTitle:', 'processSteps:', 'industriesTitle:', 'industries:', 
    'whyUsTitle:', 'whyUsCards:', 'techStackTitle:', 'techStack:', 
    'portfolioTitle:', 'portfolioItems:'
  ];
  
  const missingFields = requiredFields.filter(field => !chunk.includes(field));
  
  if (missingFields.length > 0) {
    console.log(`⚠️ ${slug} is missing: ${missingFields.join(', ')}`);
  } else {
    console.log(`✅ ${slug} has all sections.`);
  }
}
