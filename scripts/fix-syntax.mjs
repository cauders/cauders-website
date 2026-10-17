import fs from 'fs';
let content = fs.readFileSync('src/lib/service-details.ts', 'utf8');
content = content.replace(
  "description: 'Responsive, tested shopping experiences across all devices.'\n",
  "description: 'Responsive, tested shopping experiences across all devices.',\n"
);
content = content.replace(
  "description: 'Responsive, tested shopping experiences across all devices.'\r\n",
  "description: 'Responsive, tested shopping experiences across all devices.',\r\n"
);
fs.writeFileSync('src/lib/service-details.ts', content, 'utf8');
console.log('Fixed line 1668');
