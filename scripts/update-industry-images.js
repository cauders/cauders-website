const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// 1. UPDATE INDUSTRY DETAILS (src/lib/industry-details.ts)
// ─────────────────────────────────────────────────────────────────────────────

const industryImages = {
  'banking-financial-services': {
    hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1920',
    overview: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200',
    capabilities: {
      'Digital Banking Solutions': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      'Open Banking & API Integration': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      'Advanced Data Analytics': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'AI Integration & Automation': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      'Cybersecurity & KYC': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      'Risk Management': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      'Wealth Management & Lending': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
      'Cloud Migration & Scalability': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      'DeFi & Blockchain Solutions': 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
      'Custom Fintech Software': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800'
    }
  },
  'healthcare': {
    hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920',
    overview: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
    capabilities: {
      'Telemedicine & Remote Care': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
      'EHR/EMR Integration': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      'Health Data Analytics': 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
      'Patient Portals & UI/UX': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      'Medical Billing & RCM': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
      'Pharmacy & Clinical Trials': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800'
    }
  },
  'retail-ecommerce': {
    hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920',
    overview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    capabilities: {
      'Headless E-Commerce': 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      'Mobile Commerce Apps': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      'AI Personalization & AR': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
      'Supply Chain & WMS': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      'Omnichannel Integration': 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
      'Loyalty & Payments': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
      'Retail Analytics & UI/UX': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
  },
  'technology-software': {
    hero: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920',
    overview: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    capabilities: {
      'SaaS Architecture & Dev': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'Microservices & APIs': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      'Cloud-Native Engineering': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      'DevOps & CI/CD': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
      'Legacy Refactoring': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      'AI & ML Integration': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
      'QA & Test Automation': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      'SaaS UI/UX Design': 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800'
    }
  },
  'startups-high-growth': {
    hero: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920',
    overview: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
    capabilities: {
      'MVP Development Sprints': 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800',
      'AI Product Integration': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
      'CTO-as-a-Service': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    }
  },
  'logistics-supply-chain': {
    hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920',
    overview: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200',
    capabilities: {
      'Custom TMS Development': 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
      'Warehouse Management (WMS)': 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
      'Fleet Tracking & Telematics': 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=800',
      'AI Route Optimization': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800',
      'Supply Chain Visibility': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
      'Last-Mile Delivery Apps': 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800',
      'Freight Forwarding Software': 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800'
    }
  },
  'education-elearning': {
    hero: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920',
    overview: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200',
    capabilities: {
      'Custom LMS Development': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      'Virtual Classrooms': 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
      'Student Info Systems (SIS)': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      'E-Learning Mobile Apps': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      'Gamified Learning Apps': 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
      'AI Adaptive Learning': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
      'Educational Data Analytics': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
  },
  'real-estate': {
    hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920',
    overview: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    capabilities: {
      'Custom Listing Platforms': 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
      'Property Management (PMS)': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      'Real Estate CRM': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
      'Virtual Tours & AR': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      'PropTech Investment Platforms': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
      'AI Valuation Models (AVM)': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'Smart Home IoT Integration': 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800'
    }
  }
};

let indContent = fs.readFileSync('src/lib/industry-details.ts', 'utf8');

// Ensure interface has imageUrl
indContent = indContent.replace(
  /hero:\s*\{\s*title:\s*string;\s*subtitle:\s*string;\s*\};/,
  'hero: {\n  title: string;\n  subtitle: string;\n  imageUrl?: string;\n};'
);
indContent = indContent.replace(
  /overview:\s*\{\s*title:\s*string;\s*description:\s*string;\s*bullets\?:\s*string\[\];\s*\};/,
  'overview: {\n  title: string;\n  description: string;\n  bullets?: string[];\n  imageUrl?: string;\n};'
);

for (const [slug, data] of Object.entries(industryImages)) {
  // Replace hero
  const heroRegex = new RegExp(`(['"]?${slug}['"]?:\\s*\\{[\\s\\S]*?hero:\\s*\\{[\\s\\S]*?subtitle:\\s*['"][^'"]*?['"])(,?\\s*\\n)`, 'm');
  indContent = indContent.replace(heroRegex, (match, p1, p2) => {
    if (p1.includes('imageUrl:')) return match;
    return `${p1},\n  imageUrl: '${data.hero}'${p2}`;
  });

  // Replace overview
  const overviewRegex = new RegExp(`(['"]?${slug}['"]?:\\s*\\{[\\s\\S]*?overview:\\s*\\{[\\s\\S]*?description:\\s*['"][^'"]*?['"])(,?\\s*\\n)`, 'm');
  indContent = indContent.replace(overviewRegex, (match, p1, p2) => {
    if (p1.includes('imageUrl:')) return match;
    return `${p1},\n  imageUrl: '${data.overview}'${p2}`;
  });

  // Replace capability items
  for (const [title, capUrl] of Object.entries(data.capabilities)) {
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const capRegex = new RegExp(`(title:\\s*['"]${escapedTitle}['"][\\s\\S]*?description:\\s*['"][^'"]*?['"])(,?\\s*\\n)`, 'm');
    indContent = indContent.replace(capRegex, (match, p1, p2) => {
      if (p1.includes('imageUrl:')) return match;
      return `${p1},\n  imageUrl: '${capUrl}'${p2}`;
    });
  }
}

fs.writeFileSync('src/lib/industry-details.ts', indContent, 'utf8');
console.log('Successfully updated industry-details.ts!');
