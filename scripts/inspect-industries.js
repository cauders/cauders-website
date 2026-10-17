const fs = require('fs');

const content = fs.readFileSync('src/lib/industry-details.ts', 'utf8');
const industries = [
  'banking-financial-services', 
  'healthcare', 
  'retail-ecommerce', 
  'technology-software', 
  'startups-high-growth', 
  'logistics-supply-chain', 
  'education-elearning', 
  'real-estate'
];

industries.forEach(ind => {
  const regex = new RegExp(`['"]?${ind}['"]?:\\s*\\{[\\s\\S]*?servicesBuiltForIndustry:\\s*\\{[\\s\\S]*?items:\\s*\\[([\\s\\S]*?)\\]\\s*\\}`, 'm');
  const match = content.match(regex);
  if (match) {
    const titles = [...match[1].matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    console.log(ind + ':', titles);
  } else {
    console.log(ind + ': NOT FOUND');
  }
});
