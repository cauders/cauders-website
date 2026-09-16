const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/service-details.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Update capabilitiesTitle and capabilitiesDescription
content = content.replace(
    /capabilitiesTitle:\s*'([^']+)',/g,
    (match, title) => {
        let newTitle = title;
        if (!newTitle.includes('Capabilities')) {
            newTitle = newTitle + ' Capabilities';
        }
        return `capabilitiesTitle: '${newTitle}',\n    capabilitiesDescription: 'Explore our comprehensive suite of capabilities tailored to meet your unique technological and business requirements.',`;
    }
);

fs.writeFileSync(filePath, content);
console.log('Successfully updated service-details.ts');
