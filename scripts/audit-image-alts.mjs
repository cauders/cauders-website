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
    } else if (file.endsWith('.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const files = scanDir(path.join(__dirname, '..', 'src'));
const imageRegex = /<Image\b([^>]*?)\/?>/gs;
const altRegex = /alt=(?:"([^"]*)"|'([^']*)'|{([^}]*)})/;

const issues = [];
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const attrs = match[1];
    const altMatch = attrs.match(altRegex);
    const relPath = path.relative(path.join(__dirname, '..'), f);
    if (!altMatch) {
      issues.push({ file: relPath, issue: 'Missing alt attribute', snippet: match[0].replace(/\s+/g, ' ').slice(0, 100) });
    } else {
      const altVal = (altMatch[1] || altMatch[2] || altMatch[3] || '').trim();
      if (!altVal || altVal === '""' || altVal === "''") {
        issues.push({ file: relPath, issue: 'Empty alt attribute', snippet: match[0].replace(/\s+/g, ' ').slice(0, 100) });
      }
    }
  }
}

console.log('Image alt issues found:', issues.length);
console.log(JSON.stringify(issues, null, 2));
