import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const industryDetailsPath = path.resolve(__dirname, '../src/lib/industry-details.ts');
const serviceDetailsPath = path.resolve(__dirname, '../src/lib/service-details.ts');

let indContent = fs.readFileSync(industryDetailsPath, 'utf8');
let srvContent = fs.readFileSync(serviceDetailsPath, 'utf8');

const indFixes = [
  {
    target: "Cauders has been assisting healthcare organizations with their software needs for years. Our secure development approach makes us a trusted medical partner.",
    replacement: "Cauders engineers digital solutions and workflow automations tailored for healthcare providers, medical practices, and health-tech teams."
  },
  {
    target: "Cauders has been assisting tech companies with their software needs for years. Our rigorous engineering standards make us a trusted technical partner.",
    replacement: "Cauders provides dedicated engineering pods and architectural services for software platforms, SaaS products, and technical teams."
  },
  {
    target: "We instantly provide the engineering velocity you need to hit your product roadmap milestones without the delays of recruiting and onboarding in-house talent.",
    replacement: "We provide structured engineering capacity to help teams achieve product roadmap milestones without protracted hiring cycles."
  },
  {
    target: "Cauders has been assisting founders with their software needs for years. Our agile approach makes us the perfect technical partner for your startup.",
    replacement: "Cauders helps founders build MVP foundations, scale product architecture, and integrate automation as their operations grow."
  },
  {
    target: "Skip the months required to recruit, vet, and onboard a technical team. We provide instant access to cohesive pods of senior engineers and designers.",
    replacement: "Avoid extended hiring cycles. We provide access to cohesive delivery pods of experienced engineers and designers."
  },
  {
    target: "Cauders has been assisting educational institutions and EdTech startups for years. Our focus on user experience makes us a trusted technical partner.",
    replacement: "Cauders develops learning management platforms, student portals, and course workflows for educational institutions and EdTech providers."
  },
  {
    target: "Cauders has been assisting real estate innovators for years. Our deep understanding of PropTech makes us a trusted digital partner for your business.",
    replacement: "Cauders develops property portals, tenant management workflows, and operational integrations for real estate and PropTech companies."
  },
  {
    target: "Capturing and routing high-value leads to agents instantly before they bounce to a competitor’s platform.",
    replacement: "Capturing and routing inquiries to agent workflows promptly to accelerate response times."
  },
  {
    target: "ensure that even complex, map-based queries across thousands of listings return results instantly.",
    replacement: "ensure that even complex, map-based queries across large listing databases return results with minimal latency."
  }
];

let indCount = 0;
for (const { target, replacement } of indFixes) {
  if (indContent.includes(target)) {
    indContent = indContent.replace(target, replacement);
    indCount++;
  } else {
    console.warn('Ind fix not found:', target.slice(0, 40));
  }
}
fs.writeFileSync(industryDetailsPath, indContent, 'utf8');
console.log(`Applied ${indCount} industry fixes`);

const srvFixes = [
  {
    target: "value: '100%', label: 'Test Coverage'",
    replacement: "value: 'Multi-Tier', label: 'Test Coverage'"
  },
  {
    target: "value: '100%'",
    replacement: "value: 'High'"
  },
  {
    target: "We ensure your site loads instantly, preventing lost sales.",
    replacement: "We optimize storefront rendering and caching to maintain fast page load times and protect conversions."
  },
  {
    target: "so your users experience near-instantaneous feedback.",
    replacement: "so your users experience responsive, low-latency streaming feedback."
  },
  {
    target: "Indexing internal documentation, technical manuals, and SOPs into vector databases for instant employee retrieval.",
    replacement: "Indexing internal documentation, technical manuals, and SOPs into vector databases for rapid semantic retrieval."
  },
  {
    target: "Using AI to instantly extract data, categorize, and route invoices, contracts, and applications.",
    replacement: "Using AI models to extract key fields, categorize documents, and route incoming files automatically."
  },
  {
    target: "Allowing employees to search across all internal SharePoint, Google Drive, and Confluence docs instantly via natural language.",
    replacement: "Enabling staff to search unified internal knowledge repositories via natural language queries."
  },
  {
    target: "allowing for instantaneous dynamic pricing adjustments, fraud detection, or personalized recommendations.",
    replacement: "allowing for real-time dynamic pricing adjustments, fraud scoring, and targeted user recommendations."
  }
];

let srvCount = 0;
for (const { target, replacement } of srvFixes) {
  if (srvContent.includes(target)) {
    srvContent = srvContent.replace(target, replacement);
    srvCount++;
  } else {
    console.warn('Srv fix not found:', target.slice(0, 40));
  }
}
fs.writeFileSync(serviceDetailsPath, srvContent, 'utf8');
console.log(`Applied ${srvCount} service fixes`);
