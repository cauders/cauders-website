const fs = require('fs');
const path = require('path');

const urls = new Set();

function scan(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') scan(full);
    } else if (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.js') || f.endsWith('.json')) {
      const content = fs.readFileSync(full, 'utf-8');
      const matches = content.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g);
      if (matches) {
        matches.forEach(u => urls.add(u));
      }
    }
  }
}

scan('src');
console.log('Unique Unsplash photo URLs found in src:', urls.size);
fs.writeFileSync('src/lib/existing-unsplash.json', JSON.stringify([...urls], null, 2));
