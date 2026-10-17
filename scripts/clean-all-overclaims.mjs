import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const industryDetailsPath = path.resolve(__dirname, '../src/lib/industry-details.ts');
const serviceDetailsPath = path.resolve(__dirname, '../src/lib/service-details.ts');

// 1. CLEAN INDUSTRY DETAILS
let indContent = fs.readFileSync(industryDetailsPath, 'utf8');

const industryReplacements = [
  // Banking
  {
    target: "title: 'Extensive fintech experience',",
    replacement: "title: 'Financial Systems & Architecture',"
  },
  {
    target: "description: 'Our extensive experience has given us a thorough understanding of fintech processes, business models, challenges, and software needs.',",
    replacement: "description: 'We focus on the architectural requirements of fintech platforms, including high concurrency, secure transaction pipelines, and clean API integrations.',"
  },
  {
    target: "description: 'Our diverse expertise (multiple stacks, AI and ML) allows us to tailor our developments perfectly to clients\\' needs and environments.',",
    replacement: "description: 'Our engineering disciplines across modern stacks and data pipelines allow us to tailor solutions to specific organizational requirements.',"
  },
  {
    target: "description: 'From managing dependencies to compliant data handling, we ensure strict regulatory adherence and security from initial development stages.',",
    replacement: "description: 'From dependency management to sensitive data isolation, we apply structured application security practices throughout development.',"
  },
  {
    target: "title: 'Regulatory Peace of Mind',",
    replacement: "title: 'Security & Data Controls',"
  },
  {
    target: "description: 'Our comprehensive regulatory understanding covering industry, privacy, and technology domains allows us to embed compliance checks and controls at all critical layers within the software.',",
    replacement: "description: 'We implement structured data segregation, encryption standards, and role-based access controls to support your compliance objectives.',"
  },
  {
    target: "title: 'Adaptive Compliance',",
    replacement: "title: 'Configurable Governance Controls',"
  },
  {
    target: "description: 'This ensures maximum regulatory safety without undermining performance and enhanced adaptability for a shifting compliance landscape.',",
    replacement: "description: 'Architectural controls designed for auditability and adaptability as technical requirements and policies evolve.',"
  },
  {
    target: "description: 'Our custom software can be perfectly aligned to your business goals, both short-term and long-term. No wasted features and over- or under-fitting make it leaner and more potent.',",
    replacement: "description: 'Our custom software is engineered around your specific business goals, both short-term and long-term, eliminating bloat and prioritizing maintainability.',"
  },
  {
    target: "description: 'Deploy advanced risk management software that continuously monitors transactions, evaluates credit scoring, and ensures stringent regulatory compliance across all operations.',",
    replacement: "description: 'Deploy risk management software that continuously monitors transactions, evaluates credit scoring logic, and supports internal compliance workflows.',"
  },
  {
    target: "description: 'Enhance your resilience with secure cloud migrations designed specifically for banking workloads, ensuring maximum uptime and scalability for growing customer bases.',",
    replacement: "description: 'Enhance system resilience with structured cloud migrations engineered for financial workloads, supporting scalability for growing customer bases.',"
  },

  // Healthcare
  {
    target: "intro: 'Cauders has been assisting healthcare organizations with their software needs for years. Our compliance-driven approach makes us a trusted partner.',",
    replacement: "intro: 'Cauders designs secure digital solutions and workflow automations tailored for healthcare providers and health-tech teams.',"
  },
  {
    target: "title: 'Extensive healthcare experience',",
    replacement: "title: 'Healthcare Workflow Architecture',"
  },
  {
    target: "description: 'Our deep experience gives us a thorough understanding of clinical workflows, interoperability standards (HL7/FHIR), and health-tech business models.',",
    replacement: "description: 'We engineer patient portals, appointment scheduling pipelines, and telemedicine interfaces with secure data access controls and audit logging.',"
  },
  {
    target: "answer: 'Yes, we have deep experience integrating custom software with major EHR providers using modern interoperability standards like FHIR (Fast Healthcare Interoperability Resources) and HL7.'",
    replacement: "answer: 'Yes, we can build integrations with healthcare platforms utilizing structured REST/JSON endpoints and standards such as HL7 and FHIR, following client-provided specifications and interface requirements.'"
  },

  // Retail & Ecommerce
  {
    target: "intro: 'Cauders has been assisting retailers with their software needs for years. Our conversion-focused approach makes us a trusted partner.',",
    replacement: "intro: 'Cauders engineers conversion-oriented digital commerce platforms, order management workflows, and inventory integrations.',"
  },
  {
    target: "title: 'Extensive retail experience',",
    replacement: "title: 'Modern Commerce Architecture',"
  },
  {
    target: "description: 'Our deep experience gives us a thorough understanding of e-commerce conversion funnels, supply chain logistics, and retail business models.',",
    replacement: "description: 'We design responsive e-commerce storefronts, payment gateway integrations, and order routing pipelines engineered for peak commercial events.',"
  },

  // Technology / Software
  {
    target: "intro: 'Cauders has been assisting tech companies with their software needs for years. Our focus on modern stacks makes us a trusted partner.',",
    replacement: "intro: 'Cauders provides dedicated engineering pods and technical services for SaaS providers, software companies, and technology teams.',"
  },
  {
    target: "title: 'Extensive tech experience',",
    replacement: "title: 'Full-Stack Architecture Disciplines',"
  },
  {
    target: "description: 'Our extensive experience gives us a thorough understanding of complex architectures, modern stacks, and scalable cloud deployments.',",
    replacement: "description: 'Our teams deliver clean codebases, typed API contracts, and scalable backend services using Next.js, Node.js, Python, and cloud infrastructure.',"
  },
  {
    target: "performs flawlessly,",
    replacement: "performs consistently under load,"
  },
  {
    target: "instant data synchronization",
    replacement: "real-time data synchronization"
  },

  // Startups & High-growth
  {
    target: "intro: 'Cauders has been assisting startups with their software needs for years. Our agile-first approach makes us a trusted partner.',",
    replacement: "intro: 'Cauders helps high-growth startups build MVP foundations, scale product architecture, and integrate automation without unnecessary technical debt.',"
  },
  {
    target: "title: 'Extensive startup experience',",
    replacement: "title: 'Rapid Architectural Execution',"
  },
  {
    target: "description: 'Our extensive experience gives us a thorough understanding of startup dynamics, resource constraints, and the need for rapid validation.',",
    replacement: "description: 'We design modular foundations that allow founders to launch initial versions quickly and scale smoothly as traction builds.',"
  },
  {
    target: "instant scalability",
    replacement: "rapid scalability"
  },

  // Logistics & Supply Chain
  {
    target: "intro: 'Cauders has been assisting logistics companies with their software needs for years. Our experience with complex data flows makes us a trusted partner.',",
    replacement: "intro: 'Cauders builds tracking dashboards, warehouse workflow automations, and operational portals for logistics teams.',"
  },
  {
    target: "title: 'Extensive logistics experience',",
    replacement: "title: 'Operational Data Pipelines',"
  },
  {
    target: "description: 'Our extensive experience gives us a thorough understanding of supply chain complexities, from warehouse operations to last-mile delivery challenges.',",
    replacement: "description: 'We build systems to ingest, normalize, and visualize operational events across dispatch, fleet tracking, and warehouse operations.',"
  },

  // Education / Edtech
  {
    target: "intro: 'Cauders has been assisting edtech companies with their software needs for years. Our interactive-first approach makes us a trusted partner.',",
    replacement: "intro: 'Cauders develops learning management portals, interactive course platforms, and administrative workflows for educational organizations.',"
  },
  {
    target: "title: 'Extensive edtech experience',",
    replacement: "title: 'Scalable Learning Systems',"
  },
  {
    target: "description: 'Our extensive experience gives us a thorough understanding of pedagogy-driven UX, student engagement mechanics, and institutional compliance.',",
    replacement: "description: 'We design digital classrooms, student progress dashboards, and assessment workflows optimized for usability and cross-device access.',"
  },

  // Real Estate
  {
    target: "intro: 'Cauders has been assisting real estate firms with their software needs for years. Our portal-driven approach makes us a trusted partner.',",
    replacement: "intro: 'Cauders develops property listing platforms, tenant portals, and lease workflow automations for real estate organizations.',"
  },
  {
    target: "title: 'Extensive real estate experience',",
    replacement: "title: 'Property Technology Solutions',"
  },
  {
    target: "description: 'Our extensive experience gives us a thorough understanding of real estate workflows, lead conversion funnels, and property management challenges.',",
    replacement: "description: 'We build intuitive property search portals, CRM connectors, and lease management workflows built for desktop and mobile users.',"
  },
  {
    target: "instant search filtering",
    replacement: "fast search filtering"
  }
];

let indReplacedCount = 0;
for (const { target, replacement } of industryReplacements) {
  if (indContent.includes(target)) {
    indContent = indContent.replace(target, replacement);
    indReplacedCount++;
  } else {
    console.warn('Industry target not found:', target.slice(0, 40));
  }
}

fs.writeFileSync(industryDetailsPath, indContent, 'utf8');
console.log(`Updated industry-details.ts (${indReplacedCount} replacements applied)`);

// 2. CLEAN SERVICE DETAILS
let srvContent = fs.readFileSync(serviceDetailsPath, 'utf8');

const srvReplacements = [
  // Flawless performance boilerplate
  {
    target: "description: 'Rigorous testing and QA processes ensure flawless performance.',",
    replacement: "description: 'Rigorous testing and QA processes ensure reliable, predictable performance.',",
    all: true
  },
  {
    target: "description: 'We keep your ERP, CRM, and fulfillment tools perfectly synced.',",
    replacement: "description: 'We keep your ERP, CRM, and fulfillment tools reliably synchronized.',"
  },
  {
    target: "stat: { value: 'Flawless', label: 'Sync' }",
    replacement: "stat: { value: 'Automated', label: 'Sync' }"
  },
  {
    target: "description: 'We connect inventory and payment systems, ensuring flawless transaction flows.',",
    replacement: "description: 'We connect inventory and payment systems, ensuring dependable transaction flows.'"
  },
  {
    target: "description: 'Flawless shopping experiences on any device.',",
    replacement: "description: 'Responsive, tested shopping experiences across all devices.'"
  },
  {
    target: "engineered to integrate flawlessly with their existing systems",
    replacement: "engineered to integrate reliably with their existing systems"
  },
  {
    target: "cross-reference our extensive industry experience",
    replacement: "cross-reference established technical patterns"
  },
  {
    target: "instant insight generation",
    replacement: "automated insight generation"
  },
  {
    target: "instant API responses",
    replacement: "low-latency API responses"
  },
  {
    target: "instant system notifications",
    replacement: "automated system notifications"
  },
  {
    target: "stat: { value: '99.9%', label: 'Uptime' }",
    replacement: "stat: { value: 'High Availability', label: 'Architecture' }"
  },
  {
    target: "stat: { value: '100%', label: 'Responsive' }",
    replacement: "stat: { value: 'Mobile-First', label: 'Adaptive Design' }"
  },
  {
    target: "stat: { value: '100%', label: 'Test Coverage' }",
    replacement: "stat: { value: 'Multi-Layer', label: 'Test Coverage' }"
  }
];

let srvReplacedCount = 0;
for (const { target, replacement, all } of srvReplacements) {
  if (all) {
    let count = 0;
    while (srvContent.includes(target)) {
      srvContent = srvContent.replace(target, replacement);
      count++;
    }
    console.log(`Replaced ${count} global occurrences of: ${target.slice(0, 40)}`);
    srvReplacedCount += count;
  } else if (srvContent.includes(target)) {
    srvContent = srvContent.replace(target, replacement);
    srvReplacedCount++;
  } else {
    console.warn('Service target not found:', target.slice(0, 40));
  }
}

fs.writeFileSync(serviceDetailsPath, srvContent, 'utf8');
console.log(`Updated service-details.ts (${srvReplacedCount} replacements applied)`);
