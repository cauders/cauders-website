const fs = require('fs');

// Check service-details.ts
const serviceFile = fs.readFileSync('src/lib/service-details.ts', 'utf-8');
const industryFile = fs.readFileSync('src/lib/industry-details.ts', 'utf-8');

console.log('=== SERVICE DETAILS IMAGES ===');
const serviceRegex = /'([a-z0-9-]+)':\s*{/g;
let match;
const services = [];
while ((match = serviceRegex.exec(serviceFile)) !== null) {
  services.push(match[1]);
}

let allServiceImages = [];
services.forEach(slug => {
  const index = serviceFile.indexOf(`'${slug}': {`);
  const nextSlugsIndex = services
    .filter(s => s !== slug)
    .map(s => serviceFile.indexOf(`'${s}': {`))
    .filter(i => i > index)
    .sort((a, b) => a - b)[0] || serviceFile.length;
  const chunk = serviceFile.substring(index, nextSlugsIndex);

  const heroImageMatch = chunk.match(/hero:\s*{[^}]*imageUrl:\s*['"]([^'"]+)['"]/);
  const overviewImageMatch = chunk.match(/overview:\s*{[^}]*imageUrl:\s*['"]([^'"]+)['"]/);
  const capImageMatches = [...chunk.matchAll(/imageUrl:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

  console.log(`Service [${slug}]:`);
  console.log(`  - hero.imageUrl: ${heroImageMatch ? heroImageMatch[1].substring(0, 50) + '...' : 'MISSING'}`);
  console.log(`  - overview.imageUrl: ${overviewImageMatch ? overviewImageMatch[1].substring(0, 50) + '...' : 'MISSING'}`);
  console.log(`  - total imageUrls found in chunk: ${capImageMatches.length}`);
});

console.log('\n=== INDUSTRY DETAILS IMAGES ===');
const indRegex = /'([a-z0-9-]+)':\s*{/g;
const industries = [];
while ((match = indRegex.exec(industryFile)) !== null) {
  industries.push(match[1]);
}

industries.forEach(slug => {
  const index = industryFile.indexOf(`'${slug}': {`);
  const nextSlugsIndex = industries
    .filter(s => s !== slug)
    .map(s => industryFile.indexOf(`'${s}': {`))
    .filter(i => i > index)
    .sort((a, b) => a - b)[0] || industryFile.length;
  const chunk = industryFile.substring(index, nextSlugsIndex);

  const heroImageMatch = chunk.match(/hero:\s*{[^}]*imageUrl:\s*['"]([^'"]+)['"]/);
  const overviewImageMatch = chunk.match(/overview:\s*{[^}]*imageUrl:\s*['"]([^'"]+)['"]/);
  const allImages = [...chunk.matchAll(/imageUrl:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

  console.log(`Industry [${slug}]:`);
  console.log(`  - hero.imageUrl: ${heroImageMatch ? heroImageMatch[1].substring(0, 50) + '...' : 'MISSING'}`);
  console.log(`  - overview.imageUrl: ${overviewImageMatch ? overviewImageMatch[1].substring(0, 50) + '...' : 'MISSING'}`);
  console.log(`  - total imageUrls found in chunk: ${allImages.length}`);
});
