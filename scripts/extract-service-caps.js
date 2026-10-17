const fs = require('fs');

const content = fs.readFileSync('src/lib/service-details.ts', 'utf8');

// Find all service entries
const serviceRegex = /['"]?([a-z0-9-]+)['"]?:\s*\{\s*slug:\s*['"]\1['"]/g;
const matches = [...content.matchAll(serviceRegex)].map(m => m[1]);

console.log('Total services found:', matches.length);

const summary = {};
matches.forEach(slug => {
  const startIdx = content.indexOf(`slug: '${slug}'`);
  if (startIdx !== -1) {
    const chunk = content.slice(startIdx, startIdx + 8000);
    const capStart = chunk.indexOf('capabilities: [');
    if (capStart !== -1) {
      const capChunk = chunk.slice(capStart, capStart + 4000);
      const capTitles = [...capChunk.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
      summary[slug] = capTitles.slice(0, 10);
    }
  }
});

fs.writeFileSync('scripts/services-summary.json', JSON.stringify(summary, null, 2), 'utf8');
console.log('Saved services-summary.json');
