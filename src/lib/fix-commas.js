const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(path, 'utf8');

// Replace any occurrence of `}` followed by `    'some-key': {` with `},`
content = content.replace(/\}\s+('[a-z0-9-]+': \{)/g, '},\n    $1');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed missing commas.');
