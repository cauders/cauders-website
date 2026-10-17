const fs = require('fs');
const content = fs.readFileSync('src/lib/service-details.ts', 'utf8');

const lines = content.split('\n');
let currentSlug = null;
let currentItems = [];
const allDupes = {};

function checkPage(slug, items) {
  const counts = {};
  for (const item of items) {
    const base = item.url.split('?')[0];
    counts[base] = counts[base] || [];
    counts[base].push(item);
  }
  const dupes = Object.entries(counts).filter(([b, list]) => list.length > 1);
  if (dupes.length > 0) {
    allDupes[slug] = dupes.map(([base, list]) => ({
      base,
      occurrences: list
    }));
  }
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^\s*['"]([a-z0-9-]+)['"]\s*:\s*\{/);
  if (m) {
    if (currentSlug) checkPage(currentSlug, currentItems);
    currentSlug = m[1];
    currentItems = [];
  }
  const urlMatch = line.match(/https:\/\/images\.unsplash\.com\/[^\s'",]+/);
  if (urlMatch) {
    currentItems.push({ lineNum: i + 1, text: line.trim(), url: urlMatch[0] });
  }
}
if (currentSlug) checkPage(currentSlug, currentItems);

fs.writeFileSync('scripts/dupes-report.json', JSON.stringify(allDupes, null, 2), 'utf8');
console.log('Saved report. Pages with dupes:', Object.keys(allDupes).length);
