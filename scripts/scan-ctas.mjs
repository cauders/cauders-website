import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

console.log('=== BUTTON / CTA SCAN RESULTS ===\n');

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Find Button usages
  const buttonMatches = [...content.matchAll(/<Button([\s\S]*?)>([\s\S]*?)<\/Button>/g)];
  if (buttonMatches.length > 0) {
    console.log(`\nFILE: ${file}`);
    buttonMatches.forEach((m, idx) => {
      const attrs = m[1].replace(/\s+/g, ' ').trim();
      const rawInner = m[2].trim();
      // Extract link href if asChild
      const hrefMatch = rawInner.match(/href=["']([^"']*)["']/);
      const innerText = rawInner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      console.log(`  [Button #${idx + 1}]`);
      if (hrefMatch) console.log(`    Target URL: ${hrefMatch[1]}`);
      console.log(`    Attributes: ${attrs}`);
      console.log(`    Rendered Text/Content: "${innerText}"`);
    });
  }

  // Also check for ArrowButton / SplitButton usages
  const arrowButtonMatches = [...content.matchAll(/<(?:ArrowButton|SplitButton)([\s\S]*?)\/>/g)];
  if (arrowButtonMatches.length > 0) {
    console.log(`\nFILE (Arrow/Split Button): ${file}`);
    arrowButtonMatches.forEach((m, idx) => {
      console.log(`  [Special Button #${idx + 1}] Attributes: ${m[1].replace(/\s+/g, ' ').trim()}`);
    });
  }
}
