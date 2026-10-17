import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function scanDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next')) {
        scanDir(fullPath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const files = scanDir(path.join(__dirname, '..', 'src'));
const linkPattern = /(?:href|link|url|ctaLink|ctaHref)\s*[:=]\s*["'](\/[^"']*)["']/g;

const allLinks = new Map();

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    const link = match[1];
    if (!allLinks.has(link)) {
      allLinks.set(link, []);
    }
    allLinks.get(link).push(path.relative(path.join(__dirname, '..'), f));
  }
}

console.log('Total unique internal paths:', allLinks.size);
for (const [link, srcs] of Array.from(allLinks.entries()).sort()) {
  console.log(`${link} (${srcs.length} occurrences)`);
}
