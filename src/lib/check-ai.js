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

for (const slug of aiSlugs) {
  const index = fileContent.indexOf(`'${slug}': {`);
  if (index === -1) {
    console.log(`❌ ${slug} is entirely MISSING from service-details.ts`);
    continue;
  }
  
  // Extract up to the next slug or end of file
  const nextSlugsIndex = aiSlugs
    .filter(s => s !== slug)
    .map(s => fileContent.indexOf(`'${s}': {`))
    .filter(i => i > index)
    .sort((a, b) => a - b)[0] || fileContent.length;
    
  const chunk = fileContent.substring(index, nextSlugsIndex);
  
  const requiredFields = [
    'hero', 'overview', 'capabilitiesTitle', 'capabilities', 
    'processTitle', 'processSteps', 'industriesTitle', 'industries', 
    'whyUsTitle', 'whyUsCards', 'techStackTitle', 'techStack', 
    'portfolioTitle', 'portfolioItems'
  ];
  
  const missingFields = requiredFields.filter(field => !new RegExp(`${field}\\s*:`).test(chunk));
  
  if (missingFields.length > 0) {
    console.log(`⚠️ ${slug} is missing: ${missingFields.join(', ')}`);
  } else {
    console.log(`✅ ${slug} has all sections.`);
  }
}
