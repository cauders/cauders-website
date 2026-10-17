const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('src/lib/master-image-bank.json', 'utf-8'));
const usedImages = new Set();

function getUniqueImage(preferredCats, width = 800) {
  for (const cat of preferredCats) {
    const list = bank[cat] || [];
    for (const url of list) {
      if (!usedImages.has(url)) {
        usedImages.add(url);
        return `${url}?auto=format&fit=crop&q=80&w=${width}`;
      }
    }
  }
  // Fallback to general_tech, then any category
  const allCats = ['general_tech', ...Object.keys(bank)];
  for (const cat of allCats) {
    const list = bank[cat] || [];
    for (const url of list) {
      if (!usedImages.has(url)) {
        usedImages.add(url);
        return `${url}?auto=format&fit=crop&q=80&w=${width}`;
      }
    }
  }
  throw new Error(`Exhausted image pool! Used: ${usedImages.size}`);
}

const industryCatPrefs = {
  'banking-financial-services': ['finance', 'data_science', 'cybersecurity', 'general_tech'],
  'healthcare': ['healthcare', 'data_science', 'general_tech'],
  'retail-ecommerce': ['ecommerce', 'finance', 'logistics', 'general_tech'],
  'technology-software': ['coding', 'server', 'general_tech'],
  'startups-high-growth': ['general_tech', 'mobile', 'coding'],
  'logistics-supply-chain': ['logistics', 'server', 'general_tech'],
  'education-elearning': ['education', 'general_tech', 'mobile'],
  'real-estate': ['architecture', 'general_tech', 'finance']
};

const serviceCatPrefs = {
  'web-development': ['coding', 'server', 'general_tech'],
  'mobile-app-development': ['mobile', 'coding', 'general_tech'],
  'custom-software-development': ['coding', 'server', 'general_tech'],
  'ui-ux-design': ['general_tech', 'mobile', 'coding'],
  'automation-custom-applications': ['ai', 'server', 'coding'],
  'generative-ai-solutions': ['ai', 'data_science', 'general_tech'],
  'saas-development': ['server', 'coding', 'general_tech'],
  'cloud-transformation': ['server', 'general_tech', 'coding'],
  'digital-consulting-strategy': ['general_tech', 'finance', 'data_science'],
  'business-applications': ['general_tech', 'ecommerce', 'server'],
  'data-modernization-analytics': ['data_science', 'server', 'general_tech'],
  'cybersecurity-compliance': ['cybersecurity', 'server', 'general_tech'],
  'staff-augmentation-offshoring': ['general_tech', 'coding', 'mobile'],
  'ecommerce-development': ['ecommerce', 'coding', 'finance'],
  'ecommerce-design': ['ecommerce', 'general_tech', 'mobile'],
  'quality-assurance': ['coding', 'cybersecurity', 'general_tech'],
  'software-testing': ['coding', 'server', 'general_tech'],
  'application-maintenance-support': ['server', 'coding', 'general_tech'],
  'ecommerce-maintenance-support': ['ecommerce', 'server', 'general_tech'],
  'ai-roadmapping-consulting': ['ai', 'general_tech', 'data_science'],
  'ai-readiness-assessments': ['ai', 'data_science', 'general_tech'],
  'custom-ai-development': ['ai', 'coding', 'data_science'],
  'machine-learning-solutions': ['ai', 'data_science', 'coding'],
  'ai-integration-apis': ['ai', 'server', 'coding'],
  'autonomous-ai-agents': ['ai', 'server', 'data_science'],
  'rapid-ai-prototyping': ['ai', 'mobile', 'coding'],
  'corporate-ai-automation': ['ai', 'general_tech', 'server'],
  'ai-security-compliance': ['cybersecurity', 'ai', 'server'],
  'intelligent-process-automation': ['ai', 'data_science', 'logistics'],
  'predictive-analytics': ['data_science', 'finance', 'ai'],
  'data-engineering': ['data_science', 'server', 'coding'],
  'computer-vision': ['ai', 'data_science', 'general_tech']
};

// 1. UPDATE INDUSTRY DETAILS
console.log('=== UPDATING INDUSTRY DETAILS ===');
let industryContent = fs.readFileSync('src/lib/industry-details.ts', 'utf-8');
const indRegex = /'([a-z0-9-]+)':\s*{/g;
let indMatch;
const industrySlugs = [];
while ((indMatch = indRegex.exec(industryContent)) !== null) {
  industrySlugs.push(indMatch[1]);
}

for (const slug of industrySlugs) {
  const prefs = industryCatPrefs[slug] || ['general_tech'];
  const startIdx = industryContent.indexOf(`'${slug}': {`);
  const nextSlugsIdx = industrySlugs
    .filter(s => s !== slug)
    .map(s => industryContent.indexOf(`'${s}': {`))
    .filter(i => i > startIdx)
    .sort((a, b) => a - b)[0] || industryContent.length;

  let chunk = industryContent.substring(startIdx, nextSlugsIdx);

  // Replace hero.imageUrl
  const heroImg = getUniqueImage(prefs, 1920);
  if (/hero:\s*{[\s\S]*?imageUrl:/.test(chunk)) {
    chunk = chunk.replace(/(hero:\s*{[\s\S]*?imageUrl:\s*')[^']+(')/, `$1${heroImg}$2`);
  } else {
    chunk = chunk.replace(/(hero:\s*{[\s\S]*?subtitle:\s*['"][^'"]*['"])/, `$1,\n    imageUrl: '${heroImg}'`);
  }

  // Replace overview.imageUrl
  const overviewImg = getUniqueImage(prefs, 1200);
  if (/overview:\s*{[\s\S]*?imageUrl:/.test(chunk)) {
    chunk = chunk.replace(/(overview:\s*{[\s\S]*?imageUrl:\s*')[^']+(')/, `$1${overviewImg}$2`);
  } else {
    chunk = chunk.replace(/(overview:\s*{[\s\S]*?description:\s*['"][^'"]*['"])/, `$1,\n    imageUrl: '${overviewImg}'`);
  }

  // Replace servicesBuiltForIndustry items
  const svcStart = chunk.indexOf('servicesBuiltForIndustry:');
  if (svcStart !== -1) {
    let svcPart = chunk.substring(svcStart);
    const itemsStart = svcPart.indexOf('items: [');
    if (itemsStart !== -1) {
      let itemsPart = svcPart.substring(itemsStart);
      const itemsEnd = itemsPart.indexOf(']');
      let itemsListStr = itemsPart.substring(0, itemsEnd);

      // Replace each imageUrl in items
      itemsListStr = itemsListStr.replace(/(title:\s*['"][^'"]+['"][\s\S]*?imageUrl:\s*')[^']+(')/g, (match, prefix, suffix) => {
        const cardImg = getUniqueImage(prefs, 800);
        return `${prefix}${cardImg}${suffix}`;
      });

      svcPart = svcPart.substring(0, itemsStart) + itemsListStr + itemsPart.substring(itemsEnd);
      chunk = chunk.substring(0, svcStart) + svcPart;
    }
  }

  industryContent = industryContent.substring(0, startIdx) + chunk + industryContent.substring(nextSlugsIdx);
}

fs.writeFileSync('src/lib/industry-details.ts', industryContent);
console.log(`Industry details updated. Total used images so far: ${usedImages.size}`);

// 2. UPDATE SERVICE DETAILS
console.log('=== UPDATING SERVICE DETAILS ===');
let serviceContent = fs.readFileSync('src/lib/service-details.ts', 'utf-8');
const sRegex = /'([a-z0-9-]+)':\s*{/g;
let sMatch;
const serviceSlugs = [];
while ((sMatch = sRegex.exec(serviceContent)) !== null) {
  serviceSlugs.push(sMatch[1]);
}

for (const slug of serviceSlugs) {
  const prefs = serviceCatPrefs[slug] || ['general_tech'];
  const startIdx = serviceContent.indexOf(`'${slug}': {`);
  const nextSlugsIdx = serviceSlugs
    .filter(s => s !== slug)
    .map(s => serviceContent.indexOf(`'${s}': {`))
    .filter(i => i > startIdx)
    .sort((a, b) => a - b)[0] || serviceContent.length;

  let chunk = serviceContent.substring(startIdx, nextSlugsIdx);

  // Replace hero.imageUrl
  const heroImg = getUniqueImage(prefs, 1920);
  if (/hero:\s*{[\s\S]*?imageUrl:/.test(chunk)) {
    chunk = chunk.replace(/(hero:\s*{[\s\S]*?imageUrl:\s*')[^']+(')/, `$1${heroImg}$2`);
  } else {
    chunk = chunk.replace(/(hero:\s*{[\s\S]*?description:\s*['"][^'"]*['"])/, `$1,\n    imageUrl: '${heroImg}'`);
  }

  // Replace overview.imageUrl
  const overviewImg = getUniqueImage(prefs, 1200);
  if (/overview:\s*{[\s\S]*?imageUrl:/.test(chunk)) {
    chunk = chunk.replace(/(overview:\s*{[\s\S]*?imageUrl:\s*')[^']+(')/, `$1${overviewImg}$2`);
  } else {
    chunk = chunk.replace(/(overview:\s*{[\s\S]*?heading:\s*['"][^'"]*['"])/, `$1,\n    imageUrl: '${overviewImg}'`);
  }

  // Replace ONLY items in capabilities: [...]
  const capStart = chunk.indexOf('capabilities: [');
  if (capStart !== -1) {
    let capPart = chunk.substring(capStart);
    // Find matching closing bracket for capabilities array
    const capEnd = capPart.indexOf('processTitle:');
    if (capEnd !== -1) {
      let capArrayStr = capPart.substring(0, capEnd);

      capArrayStr = capArrayStr.replace(/(title:\s*['"][^'"]+['"][\s\S]*?imageUrl:\s*')[^']+(')/g, (match, prefix, suffix) => {
        const cardImg = getUniqueImage(prefs, 800);
        return `${prefix}${cardImg}${suffix}`;
      });

      capPart = capArrayStr + capPart.substring(capEnd);
      chunk = chunk.substring(0, capStart) + capPart;
    }
  }

  serviceContent = serviceContent.substring(0, startIdx) + chunk + serviceContent.substring(nextSlugsIdx);
}

fs.writeFileSync('src/lib/service-details.ts', serviceContent);
console.log(`Service details updated. Total used images: ${usedImages.size}`);
