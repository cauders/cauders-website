const fs = require('fs');
const path = require('path');

const serviceFile = path.join(__dirname, '..', 'src', 'lib', 'service-details.ts');
let content = fs.readFileSync(serviceFile, 'utf8');

const overviewImages = {
  'web-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
  'mobile-app-development': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200',
  'custom-software-development': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
  'ui-ux-design': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
  'automation-custom-applications': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200',
  'generative-ai-solutions': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=1200',
  'saas-development': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  'cloud-transformation': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
  'digital-consulting-strategy': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
  'business-applications': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
  'data-modernization-analytics': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200',
  'cybersecurity-compliance': 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1200',
  'staff-augmentation-offshoring': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
  'ecommerce-development': 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200',
  'ecommerce-design': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
  'quality-assurance': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
  'software-testing': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
  'application-maintenance-support': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
  'ecommerce-maintenance-support': 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200'
};

const lines = content.split(/\r?\n/);
let currentSlug = null;
let updatedLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^\s*['"]([a-z0-9-]+)['"]\s*:\s*\{/);
  if (m) {
    currentSlug = m[1];
  }

  updatedLines.push(line);

  // If this line is 'overview: {' and we have an image for this service, insert imageUrl on next line
  if (currentSlug && overviewImages[currentSlug] && line.includes('overview: {')) {
    // Check if next lines already have imageUrl
    const nextCoupleLines = lines.slice(i + 1, i + 5).join('\n');
    if (!nextCoupleLines.includes('imageUrl:')) {
      const imgUrl = overviewImages[currentSlug];
      updatedLines.push(`    imageUrl: '${imgUrl}',`);
      console.log(`Added overview.imageUrl to [${currentSlug}]: ${imgUrl.split('?')[0]}`);
    }
  }
}

const isCrlf = content.includes('\r\n');
fs.writeFileSync(serviceFile, updatedLines.join(isCrlf ? '\r\n' : '\n'), 'utf8');
console.log('✅ Successfully added all overview images.');
