const fs = require('fs');
let content = fs.readFileSync('src/lib/data.tsx', 'utf8');

// Find all import { ... } from 'lucide-react'
const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
let match;
let allImports = new Set();
let allImportMatches = [];

while ((match = importRegex.exec(content)) !== null) {
  allImportMatches.push(match[0]);
  const importsStr = match[1];
  const imports = importsStr.split(',').map(s => s.trim()).filter(Boolean);
  imports.forEach(i => allImports.add(i));
}

// Remove all existing lucide-react import statements
for (const importStatement of allImportMatches) {
  content = content.replace(importStatement, '');
}

// Generate consolidated import
const consolidatedImport = `import { ${Array.from(allImports).join(', ')} } from 'lucide-react';\n`;

// Put it at the top after the first few lines, or just at line 1
content = consolidatedImport + content.replace(/^\s+/, '');

fs.writeFileSync('src/lib/data.tsx', content);
console.log('Fixed duplicate imports.');
