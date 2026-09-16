const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\],,/g, '],');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed syntax error in data.tsx');
