const fs = require('fs');

const content = fs.readFileSync('src/lib/data.tsx', 'utf8');

// Find all `icon: <IconName>` usages
const iconUsages = [...content.matchAll(/icon:\s*([A-Z][a-zA-Z0-9]+)/g)].map(m => m[1]);

// Get unique icons
const uniqueIcons = [...new Set(iconUsages)];

// We also need the existing ones that might not be in the `icon:` field (like types or other usages)
const existingLucideImportMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/);
let allIconsToImport = [...uniqueIcons];

if (existingLucideImportMatch) {
  const existingImports = existingLucideImportMatch[1].split(',').map(s => s.trim()).filter(Boolean);
  allIconsToImport = [...new Set([...allIconsToImport, ...existingImports])];
}

// Generate the new import line
const newImportLine = `import { ${allIconsToImport.join(', ')} } from 'lucide-react';`;

// Replace the old import line or add it if it doesn't exist
if (existingLucideImportMatch) {
  const newContent = content.replace(existingLucideImportMatch[0], newImportLine);
  fs.writeFileSync('src/lib/data.tsx', newContent);
  console.log('Updated lucide-react imports.');
} else {
  // Just prepend it
  fs.writeFileSync('src/lib/data.tsx', newImportLine + '\n' + content);
  console.log('Added lucide-react imports.');
}
