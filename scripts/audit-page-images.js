const fs = require('fs');
const path = require('path');

// Load service details
const serviceDetailsPath = path.join(__dirname, '..', 'src', 'lib', 'service-details.ts');
const serviceContent = fs.readFileSync(serviceDetailsPath, 'utf8');

// Load industry details
const industryDetailsPath = path.join(__dirname, '..', 'src', 'lib', 'industry-details.ts');
const industryContent = fs.readFileSync(industryDetailsPath, 'utf8');

function extractServices(content) {
  // Matches each service block
  const lines = content.split('\n');
  const services = {};
  let currentKey = null;
  let block = [];

  for (let line of lines) {
    const m = line.match(/^\s*['"]([a-z0-9-]+)['"]\s*:\s*\{/);
    if (m) {
      if (currentKey) {
        services[currentKey] = block.join('\n');
      }
      currentKey = m[1];
      block = [line];
    } else if (currentKey) {
      block.push(line);
    }
  }
  if (currentKey) {
    services[currentKey] = block.join('\n');
  }
  return services;
}

function extractIndustries(content) {
  const lines = content.split('\n');
  const industries = {};
  let currentKey = null;
  let block = [];

  for (let line of lines) {
    const m = line.match(/^\s*['"]([a-z0-9-]+)['"]\s*:\s*\{/);
    if (m) {
      if (currentKey) {
        industries[currentKey] = block.join('\n');
      }
      currentKey = m[1];
      block = [line];
    } else if (currentKey) {
      block.push(line);
    }
  }
  if (currentKey) {
    industries[currentKey] = block.join('\n');
  }
  return industries;
}

const services = extractServices(serviceContent);
const industries = extractIndustries(industryContent);

console.log(`Found ${Object.keys(services).length} services and ${Object.keys(industries).length} industries.\n`);

function auditPage(slug, type, text) {
  // Extract all URLs
  const urlRegex = /https:\/\/images\.unsplash\.com\/[^\s'"]+/g;
  const matches = [...text.matchAll(urlRegex)].map(m => m[0]);
  
  // Count frequencies
  const counts = {};
  for (const url of matches) {
    // Normalize url without query params for duplicate checking or full url
    const baseUrl = url.split('?')[0];
    counts[baseUrl] = counts[baseUrl] || { fullUrls: [], count: 0 };
    counts[baseUrl].count++;
    counts[baseUrl].fullUrls.push(url);
  }

  const dupes = Object.entries(counts).filter(([base, data]) => data.count > 1);
  return {
    slug,
    type,
    totalImages: matches.length,
    dupes
  };
}

console.log('=== INDUSTRY AUDIT ===');
for (const [slug, text] of Object.entries(industries)) {
  const res = auditPage(slug, 'Industry', text);
  if (res.dupes.length > 0) {
    console.log(`❌ [${slug}] has duplicates:`);
    for (const [base, data] of res.dupes) {
      console.log(`   Repeated ${data.count}x: ${base}`);
    }
  } else {
    console.log(`✅ [${slug}] - ${res.totalImages} images, all unique`);
  }
}

console.log('\n=== SERVICE & AI AUDIT ===');
let serviceDupeCount = 0;
for (const [slug, text] of Object.entries(services)) {
  const res = auditPage(slug, 'Service', text);
  if (res.dupes.length > 0) {
    serviceDupeCount++;
    console.log(`❌ [${slug}] has duplicates:`);
    for (const [base, data] of res.dupes) {
      console.log(`   Repeated ${data.count}x: ${base}`);
    }
  } else {
    console.log(`✅ [${slug}] - ${res.totalImages} images, all unique`);
  }
}
console.log(`\nTotal services with duplicates: ${serviceDupeCount}`);
