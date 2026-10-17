const fs = require('fs');

const serviceFile = fs.readFileSync('src/lib/service-details.ts', 'utf-8');
const industryFile = fs.readFileSync('src/lib/industry-details.ts', 'utf-8');

// Parse service keys and titles
console.log('=== ALL SERVICES AND SUB-ITEMS NEEDING IMAGES ===');
const serviceRegex = /'([a-z0-9-]+)':\s*{/g;
let match;
const services = [];
while ((match = serviceRegex.exec(serviceFile)) !== null) {
  services.push(match[1]);
}

const serviceNeeds = [];
services.forEach(slug => {
  const index = serviceFile.indexOf(`'${slug}': {`);
  const nextSlugsIndex = services
    .filter(s => s !== slug)
    .map(s => serviceFile.indexOf(`'${s}': {`))
    .filter(i => i > index)
    .sort((a, b) => a - b)[0] || serviceFile.length;
  const chunk = serviceFile.substring(index, nextSlugsIndex);

  const titleMatch = chunk.match(/title:\s*['"]([^'"]+)['"]/);
  const capMatches = [...chunk.matchAll(/capabilities:\s*\[([\s\S]*?)\]\s*,/g)];
  let caps = [];
  if (capMatches.length > 0) {
    caps = [...capMatches[0][1].matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  }
  serviceNeeds.push({ slug, title: titleMatch ? titleMatch[1] : slug, caps });
});

console.log(`Total Services: ${serviceNeeds.length}`);
serviceNeeds.forEach(s => {
  console.log(`- [${s.slug}] "${s.title}": ${s.caps.length} capabilities (${s.caps.join(', ')})`);
});

console.log('\n=== ALL INDUSTRIES AND SUB-ITEMS NEEDING IMAGES ===');
const indRegex = /'([a-z0-9-]+)':\s*{/g;
const industries = [];
while ((match = indRegex.exec(industryFile)) !== null) {
  industries.push(match[1]);
}

const industryNeeds = [];
industries.forEach(slug => {
  const index = industryFile.indexOf(`'${slug}': {`);
  const nextSlugsIndex = industries
    .filter(s => s !== slug)
    .map(s => industryFile.indexOf(`'${s}': {`))
    .filter(i => i > index)
    .sort((a, b) => a - b)[0] || industryFile.length;
  const chunk = industryFile.substring(index, nextSlugsIndex);

  const titleMatch = chunk.match(/title:\s*['"]([^'"]+)['"]/);
  const svcMatches = [...chunk.matchAll(/servicesBuiltForIndustry:\s*{[\s\S]*?items:\s*\[([\s\S]*?)\]\s*}/g)];
  let svcs = [];
  if (svcMatches.length > 0) {
    svcs = [...svcMatches[0][1].matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  }
  industryNeeds.push({ slug, title: titleMatch ? titleMatch[1] : slug, svcs });
});

console.log(`Total Industries: ${industryNeeds.length}`);
industryNeeds.forEach(ind => {
  console.log(`- [${ind.slug}] "${ind.title}": ${ind.svcs.length} services (${ind.svcs.join(', ')})`);
});
