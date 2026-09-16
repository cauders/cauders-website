const fs = require('fs');

// 1. CHECK SERVICES
console.log('=== CHECKING SERVICES (service-details.ts) ===');
const serviceContent = fs.readFileSync('src/lib/service-details.ts', 'utf-8');
const serviceRegex = /'([a-z0-9-]+)':\s*{/g;
let match;
const allServices = [];
while ((match = serviceRegex.exec(serviceContent)) !== null) {
  allServices.push(match[1]);
}

const reqServiceFields = [
  'hero', 'overview', 'capabilitiesTitle', 'capabilities', 
  'processTitle', 'processSteps', 'industriesTitle', 'industries', 
  'whyUsTitle', 'whyUsCards', 'techStackTitle', 'techStack', 
  'portfolioTitle', 'portfolioItems'
];

let servicesMissing = [];

for (const slug of allServices) {
  const index = serviceContent.indexOf(`'${slug}': {`);
  const nextSlugsIndex = allServices
    .filter(s => s !== slug)
    .map(s => serviceContent.indexOf(`'${s}': {`))
    .filter(i => i > index)
    .sort((a, b) => a - b)[0] || serviceContent.length;
    
  const chunk = serviceContent.substring(index, nextSlugsIndex);
  
  const missing = reqServiceFields.filter(f => !new RegExp(`\\b${f}\\s*:`).test(chunk));
  if (missing.length > 0) {
    console.log(`⚠️ Service '${slug}' is missing: ${missing.join(', ')}`);
    servicesMissing.push({slug, missing});
  }
}
if (servicesMissing.length === 0) console.log('✅ All services are complete!');

// 2. CHECK INDUSTRIES
console.log('\n=== CHECKING INDUSTRIES (industry-details.ts) ===');
const industryContent = fs.readFileSync('src/lib/industry-details.ts', 'utf-8');
const industryRegex = /'([a-z0-9-]+)':\s*{/g;
const allIndustries = [];
while ((match = industryRegex.exec(industryContent)) !== null) {
  allIndustries.push(match[1]);
}

const reqIndustryFields = [
  'hero', 'overview', 'challengesTitle', 'challenges', 
  'solutionsTitle', 'solutions', 'benefitsTitle', 'benefits',
  'servicesTitle', 'services', 'techStackTitle', 'techStack',
  'portfolioTitle', 'portfolioItems'
];

let industriesMissing = [];

for (const slug of allIndustries) {
  const index = industryContent.indexOf(`'${slug}': {`);
  const nextSlugsIndex = allIndustries
    .filter(s => s !== slug)
    .map(s => industryContent.indexOf(`'${s}': {`))
    .filter(i => i > index)
    .sort((a, b) => a - b)[0] || industryContent.length;
    
  const chunk = industryContent.substring(index, nextSlugsIndex);
  
  const missing = reqIndustryFields.filter(f => !new RegExp(`\\b${f}\\s*:`).test(chunk));
  if (missing.length > 0) {
    console.log(`⚠️ Industry '${slug}' is missing: ${missing.join(', ')}`);
    industriesMissing.push({slug, missing});
  }
}
if (industriesMissing.length === 0) console.log('✅ All industries are complete!');

