const fs = require('fs');

const ind = fs.readFileSync('src/lib/industry-details.ts', 'utf-8');
const ser = fs.readFileSync('src/lib/service-details.ts', 'utf-8');

console.log('=== RUNNING COMPREHENSIVE IMAGE AUDIT ===');

const allUrls = new Map();
let duplicateFound = false;

function auditContent(fileContent, fileName) {
  // Extract all imageUrl
  const matches = [...fileContent.matchAll(/imageUrl:\s*['"]([^'"]+)['"]/g)];
  console.log(`[${fileName}] Total imageUrl instances: ${matches.length}`);

  matches.forEach(m => {
    const url = m[1];
    const base = url.split('?')[0];
    if (allUrls.has(base)) {
      duplicateFound = true;
      console.log(`❌ DUPLICATE FOUND: ${base}`);
      console.log(`  First seen in: ${allUrls.get(base)}`);
      console.log(`  Seen again in: ${fileName}`);
    } else {
      allUrls.set(base, fileName);
    }
  });
}

auditContent(ind, 'industry-details.ts');
auditContent(ser, 'service-details.ts');

if (!duplicateFound) {
  console.log(`\n🎉 SUCCESS: All ${allUrls.size} images across services and industries are 100% UNIQUE!`);
} else {
  console.log('\n⚠️ Duplicates were detected!');
}

// Check each industry page individually for duplicates on the same page
const indRegex = /'([a-z0-9-]+)':\s*{/g;
let m;
while ((m = indRegex.exec(ind)) !== null) {
  const slug = m[1];
  const start = m.index;
  const next = ind.indexOf("': {", start + 10);
  const chunk = ind.substring(start, next !== -1 ? next : ind.length);
  const chunkUrls = [...chunk.matchAll(/imageUrl:\s*['"]([^'"]+)['"]/g)].map(x => x[1].split('?')[0]);
  const set = new Set(chunkUrls);
  if (set.size !== chunkUrls.length) {
    console.log(`❌ Page duplicate in industry [${slug}]: ${chunkUrls.length} total, ${set.size} unique`);
  }
}

// Check each service page individually for duplicates on the same page
const serRegex = /'([a-z0-9-]+)':\s*{/g;
while ((m = serRegex.exec(ser)) !== null) {
  const slug = m[1];
  const start = m.index;
  const next = ser.indexOf("': {", start + 10);
  const chunk = ser.substring(start, next !== -1 ? next : ser.length);
  const chunkUrls = [...chunk.matchAll(/imageUrl:\s*['"]([^'"]+)['"]/g)].map(x => x[1].split('?')[0]);
  const set = new Set(chunkUrls);
  if (set.size !== chunkUrls.length) {
    console.log(`❌ Page duplicate in service [${slug}]: ${chunkUrls.length} total, ${set.size} unique`);
  }
}

console.log('Page-level duplicate check completed.');
