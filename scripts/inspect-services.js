const fs = require('fs');

const content = fs.readFileSync('src/lib/service-details.ts', 'utf8');
const lines = content.split('\n');

const services = [];
let currentService = null;
let inCapabilities = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const slugMatch = line.match(/^\s*slug:\s*['"]([a-z0-9-]+)['"]/);
  if (slugMatch && !inCapabilities) {
    const slug = slugMatch[1];
    // check if it's a top-level service slug
    if (lines[i-1] && (lines[i-1].includes(': {') || lines[i-2]?.includes(': {'))) {
      currentService = { slug, capabilities: [] };
      services.push(currentService);
    }
  }
}

console.log('Total services found:', services.length);
console.log(services.map(s => s.slug));
