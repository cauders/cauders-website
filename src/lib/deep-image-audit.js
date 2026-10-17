const fs = require('fs');

const serviceFile = fs.readFileSync('src/lib/service-details.ts', 'utf-8');
const industryFile = fs.readFileSync('src/lib/industry-details.ts', 'utf-8');
const dataFile = fs.readFileSync('src/lib/data.tsx', 'utf-8');

// Find all services defined in data.tsx
const allDataServices = [...dataFile.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)].map(m => m[1]);
console.log('Total slugs in data.tsx:', allDataServices.length);

// Audit duplicate images across service-details.ts and industry-details.ts
const allImagesMap = new Map();

function trackImage(url, location) {
  if (!url || !url.startsWith('http')) return;
  const cleanUrl = url.split('?')[0]; // compare base url
  if (!allImagesMap.has(cleanUrl)) {
    allImagesMap.set(cleanUrl, []);
  }
  allImagesMap.get(cleanUrl).push(location);
}

// Extract from serviceFile
const serviceMatches = [...serviceFile.matchAll(/'([a-z0-9-]+)':\s*{/g)];
serviceMatches.forEach((m, idx) => {
  const slug = m[1];
  const start = m.index;
  const end = idx + 1 < serviceMatches.length ? serviceMatches[idx + 1].index : serviceFile.length;
  const chunk = serviceFile.substring(start, end);

  // Check hero
  const heroMatch = chunk.match(/hero:\s*{[^}]*imageUrl:\s*['"]([^'"]+)['"]/);
  if (heroMatch) trackImage(heroMatch[1], `service[${slug}].hero`);
  else console.log(`Service [${slug}] has NO hero.imageUrl`);

  // Check overview
  const overviewMatch = chunk.match(/overview:\s*{[^}]*imageUrl:\s*['"]([^'"]+)['"]/);
  if (overviewMatch) trackImage(overviewMatch[1], `service[${slug}].overview`);
  else console.log(`Service [${slug}] has NO overview.imageUrl`);

  // Check capabilities
  const capMatches = [...chunk.matchAll(/title:\s*['"]([^'"]+)['"][^}]*imageUrl:\s*['"]([^'"]+)['"]/g)];
  capMatches.forEach(cm => {
    trackImage(cm[2], `service[${slug}].capability[${cm[1]}]`);
  });
});

// Extract from industryFile
const industryMatches = [...industryFile.matchAll(/'([a-z0-9-]+)':\s*{/g)];
industryMatches.forEach((m, idx) => {
  const slug = m[1];
  const start = m.index;
  const end = idx + 1 < industryMatches.length ? industryMatches[idx + 1].index : industryFile.length;
  const chunk = industryFile.substring(start, end);

  const heroMatch = chunk.match(/hero:\s*{[^}]*imageUrl:\s*['"]([^'"]+)['"]/);
  if (heroMatch) trackImage(heroMatch[1], `industry[${slug}].hero`);
  else console.log(`Industry [${slug}] has NO hero.imageUrl`);

  const overviewMatch = chunk.match(/overview:\s*{[^}]*imageUrl:\s*['"]([^'"]+)['"]/);
  if (overviewMatch) trackImage(overviewMatch[1], `industry[${slug}].overview`);
  else console.log(`Industry [${slug}] has NO overview.imageUrl`);

  const capMatches = [...chunk.matchAll(/title:\s*['"]([^'"]+)['"][^}]*imageUrl:\s*['"]([^'"]+)['"]/g)];
  capMatches.forEach(cm => {
    trackImage(cm[2], `industry[${slug}].service[${cm[1]}]`);
  });
});

console.log('\n=== DUPLICATE IMAGES DETECTED ===');
let dupCount = 0;
for (const [url, locations] of allImagesMap.entries()) {
  if (locations.length > 1) {
    dupCount++;
    console.log(`\nURL: ${url}`);
    console.log(`Used ${locations.length} times in:`);
    locations.forEach(loc => console.log(`  - ${loc}`));
  }
}
console.log(`\nTotal duplicate URLs: ${dupCount}`);
