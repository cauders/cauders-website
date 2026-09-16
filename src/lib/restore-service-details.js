const fs = require('fs');
let content = fs.readFileSync('./src/lib/service-details.ts', 'utf8');
const marker = "  'ai-roadmapping-consulting': {";
const index = content.lastIndexOf(marker);
if (index !== -1) {
    // Also remove the comma and newline added before it
    content = content.substring(0, index - 2) + '\n};';
    fs.writeFileSync('./src/lib/service-details.ts', content, 'utf8');
    console.log('Restored original');
}
