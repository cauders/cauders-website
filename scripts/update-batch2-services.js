const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/service-details.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The 32 service points map
const pointsMap = {
  "web-development": [
    { title: "Modern, Scalable Architectures", description: "Designing modular Next.js and React frontend layers decoupled from backends via typed API contracts to support high traffic and maintainable growth." },
    { title: "Responsive & Mobile-First Design", description: "Building fluid layouts and touch-optimized interfaces that function reliably across all screen viewports without visual degradation." },
    { title: "Secure & Compliant Solutions", description: "Implementing OWASP security standards, HTTP security headers, sanitization pipelines, and protected authentication flows." },
    { title: "API-First & Headless Integrations", description: "Connecting headless CMS engines, commerce backends, and third-party SaaS tools through structured REST and GraphQL endpoints." }
  ],
  "mobile-app-development": [
    { title: "Native iOS & Android", description: "Building platform-specific capabilities in Swift and Kotlin for applications requiring deep hardware access, camera integrations, or background services." },
    { title: "Cross-Platform Applications", description: "Delivering unified Flutter and React Native codebases that preserve 60fps responsiveness and reduce duplicate engineering effort." },
    { title: "Enterprise Mobility", description: "Engineering secure role-gated mobile tools for field agents, warehouse staff, and internal teams with centralized MDM support." },
    { title: "App Modernization & Testing", description: "Refactoring legacy mobile codebases, eliminating deprecated SDKs, and automating cross-device regression suites." }
  ],
  "custom-software-development": [
    { title: "Business & Enterprise Software", description: "Engineering bespoke web applications tailored to multi-department workflows, data approval chains, and complex internal operations." },
    { title: "Workflow & Process Automation", description: "Replacing repetitive manual spreadsheets and handoffs with automated backend triggers, task queues, and data pipelines." },
    { title: "Legacy System Modernization", description: "Incrementally refactoring monolithic applications using strangler-fig patterns, modern microservices, and containerized deployments." },
    { title: "API & System Integration", description: "Building high-performance middleware and event-driven connectors to bridge modern web apps with legacy on-premise databases." }
  ],
  "ui-ux-design": [
    { title: "User Research & Analysis", description: "Mapping user journeys, identifying operational friction, and interviewing stakeholders to establish functional design priorities." },
    { title: "Wireframing & Prototyping", description: "Creating interactive clickable prototypes to validate system architecture, hierarchy, and user flows before writing code." },
    { title: "Design Systems & UI Kits", description: "Establishing reusable tokenized component libraries in Figma and code to ensure consistency across web and mobile surfaces." },
    { title: "Usability Testing", description: "Conducting structured task-based usability evaluations to identify navigation bottlenecks and optimize task completion rates." }
  ],
  "automation-custom-applications": [
    { title: "Order & Invoicing Automation", description: "Connecting payment gateways, ERP inventories, and accounting tools to orchestrate invoice creation and status sync without manual entry." },
    { title: "CRM & ERP Connectors", description: "Developing bidirectional data pipelines between customer records and enterprise resource systems with conflict resolution." },
    { title: "Approval Workflows", description: "Building configurable multi-tiered approval chains with automated timeout escalations and audit logging." },
    { title: "AI-Powered Personalization", description: "Applying contextual recommendation algorithms and dynamic content rules based on user behavior and transaction history." }
  ],
  "generative-ai-solutions": [
    { title: "AI Strategy & Roadmap", description: "Evaluating technical feasibility, calculating compute unit economics, and prioritizing high-utility enterprise AI opportunities." },
    { title: "Workflow Transformation", description: "Embedding language models into existing customer support, research, and documentation workflows with strict operational boundaries." },
    { title: "AI Data & Integration", description: "Building vector search embeddings, semantic caching layers, and retrieval-augmented generation (RAG) pipelines over company data." },
    { title: "Generative & Agentic AI", description: "Orchestrating multi-step task agents with approved tool calling, schema validation, and human-in-the-loop review steps." }
  ],
  "saas-development": [
    { title: "Multi-Tenant Architecture", description: "Implementing partitioned database schemas, tenant isolation, and tenant-scoped connection pooling for SaaS platforms." },
    { title: "Subscription & Billing Management", description: "Integrating recurring billing gateways (Stripe), metered usage tracking, proration calculations, and automated dunning workflows." },
    { title: "Role-Based Access Control", description: "Designing granular permission matrices, team organizations, SSO/SAML integrations, and audit trail logs." },
    { title: "Security and Compliance", description: "Enforcing strict row-level security policies, encrypted tenant data isolation, and comprehensive API token controls." }
  ],
  "cloud-transformation": [
    { title: "Cloud Strategy & Architecture", description: "Evaluating infrastructure requirements across AWS, GCP, and Azure to design resilient multi-tier architectures." },
    { title: "Serverless & Containerization", description: "Dockerizing backend services and deploying Kubernetes or serverless containers to streamline scaling and resource usage." },
    { title: "Cloud Migration (AWS, Azure, GCP)", description: "Executing phased database and workload migrations with staged cutovers, automated health checks, and rollback plans." },
    { title: "Infrastructure Optimization & Security", description: "Implementing Terraform infrastructure-as-code, VPC segmentation, least-privilege IAM, and compute rightsizing." }
  ],
  "digital-consulting-strategy": [
    { title: "Digital Maturity Assessment", description: "Evaluating legacy technical debt, software architectures, and team capabilities to define modernization priorities." },
    { title: "Product & Experience Strategy", description: "Aligning product feature roadmaps with measurable business outcomes and operational throughput goals." },
    { title: "Cloud & Data Strategy", description: "Planning centralized data repositories, event architectures, and scalable cloud hosting infrastructure." },
    { title: "Technology Selection", description: "Assessing frameworks, database paradigms, and third-party vendors to prevent vendor lock-in and excessive licensing costs." }
  ],
  "business-applications": [
    { title: "CRM & ERP Solutions", description: "Customizing and integrating core customer and resource planning platforms to support cross-functional operations." },
    { title: "Salesforce & ServiceNow Optimization", description: "Refactoring slow queries, tuning workflow triggers, and cleaning up cluttered custom fields." },
    { title: "Marketing & Sales Platforms", description: "Connecting lead capture, pipeline scoring, and automated communications into a unified operational console." },
    { title: "Workflow Automation", description: "Eliminating manual data transfer across sales, accounting, and delivery teams with reliable background webhooks." }
  ],
  "data-modernization-analytics": [
    { title: "Data Platform Strategy & Architecture", description: "Designing centralized analytics architectures that unify disparate operational transactional stores into clean analytical models." },
    { title: "Data Warehousing & Data Lakehouses", description: "Structuring BigQuery, Snowflake, and Postgres data warehouses with automated ingestion pipelines and schema evolution." },
    { title: "Business Intelligence & Self-Service Analytics", description: "Building interactive dashboards and metric definitions that allow operational teams to query trusted business data." },
    { title: "Data Quality, Governance & Metadata Management", description: "Implementing automated data validation, anomaly detection, metadata documentation, and data access policies." }
  ],
  "cybersecurity-compliance": [
    { title: "Vulnerability Assessments & Remediation", description: "Scanning application code and dependencies for CVEs, insecure dependencies, and OWASP top-10 weaknesses." },
    { title: "Web & Network Security Testing", description: "Simulating adversarial scenarios against public endpoints, authentication systems, and cloud ingress routes." },
    { title: "Identity & Access Management (IAM)", description: "Configuring multi-factor authentication, least-privilege role policies, and secure API key life-cycles." },
    { title: "Application Security & Data Privacy Practices", description: "Implementing robust data sanitization, encrypted communications, and audit trails to support GDPR alignment." }
  ],
  "staff-augmentation-offshoring": [
    { title: "Individual Specialist Placement", description: "Supplying vetted senior engineers, frontend specialists, or cloud architects to fill specific technical gaps." },
    { title: "Dedicated Development Teams", description: "Assembling managed, self-sufficient engineering pods aligned with your sprint rhythms, backlog, and architecture standards." },
    { title: "Project-Based & Offshore Teams", description: "Scoping dedicated delivery teams focused on executing specific product epics, migrations, or platform builds." },
    { title: "Reduced Hiring Complexity", description: "Eliminating months of recruitment lag by matching verified engineers to your exact tech stack and timezone." }
  ],
  "ecommerce-development": [
    { title: "Headless Commerce Architectures", description: "Decoupling Shopify Plus or custom commerce engines from fast Next.js frontends to improve page speeds and user retention." },
    { title: "Custom Online Stores", description: "Building bespoke shopping interfaces with complex product configurators, localized currencies, and tailored checkout flows." },
    { title: "Payment Gateway Integration", description: "Implementing secure multi-currency payment processors with tokenization, fraud checks, and webhook-driven order creation." },
    { title: "Omnichannel Experiences", description: "Connecting storefront inventories with physical POS databases, warehouse ERPs, and shipping fulfillment providers." }
  ],
  "ecommerce-design": [
    { title: "E-Commerce Consulting", description: "Analyzing funnel friction points, checkout drop-offs, and mobile usability to prioritize UX improvements." },
    { title: "Buyer Experience Design", description: "Creating intuitive product discovery, facet filtering, quick-view interactions, and friction-free checkout layouts." },
    { title: "Store Migrations & Redesigns", description: "Upgrading storefront designs while preserving SEO URL structures, historical analytics, and customer account data." },
    { title: "Omnichannel Commerce", description: "Designing clear visual hierarchies, transparent shipping indicators, and accessible UI components to maximize order completions." }
  ],
  "quality-assurance": [
    { title: "Test Strategy & Planning", description: "Establishing comprehensive testing matrices, test environments, and quality gates tailored to project complexity." },
    { title: "Accessibility Testing (WCAG)", description: "Auditing web interfaces against WCAG 2.1 AA standards for keyboard navigation, contrast, and screen-reader support." },
    { title: "Compliance Audits", description: "Verifying that core business logic, permissions, and calculation engines remain stable across releases." },
    { title: "QA Process Consulting", description: "Integrating automated test execution into CI/CD pipelines to catch defects before code reaches staging environments." }
  ],
  "software-testing": [
    { title: "Automated & Manual Testing", description: "Combining Playwright and Cypress end-to-end test suites with exploratory manual validation on critical user paths." },
    { title: "Performance & Load Testing", description: "Simulating concurrent user traffic using k6 and JMeter to discover database deadlocks and server capacity thresholds." },
    { title: "API & Integration Testing", description: "Validating endpoint schemas, authentication boundaries, and payload edge cases across all microservices." },
    { title: "Continuous Quality Assurance", description: "Running automated test suites on every pull request to maintain stable mainline build status." }
  ],
  "application-maintenance-support": [
    { title: "Application Monitoring", description: "Configuring real-time error tracking, server uptime telemetry, and alerting thresholds to catch issues before clients do." },
    { title: "Security Patching", description: "Regularly updating software dependencies, security patches, and database runtime engines to eliminate known vulnerabilities." },
    { title: "Performance Optimization", description: "Profiling slow database queries, tuning server memory consumption, and caching static assets for fast response times." },
    { title: "Continuous Enhancements", description: "Implementing minor feature requests, UI adjustments, and third-party API version upgrades on scheduled intervals." }
  ],
  "ecommerce-maintenance-support": [
    { title: "Product & Inventory Updates", description: "Managing bulk inventory uploads, catalog schema adjustments, and automated sync with warehouse management systems." },
    { title: "Technical Troubleshooting", description: "Diagnosing checkout errors, webhook delivery failures, and payment gateway discrepancies with rapid escalation paths." },
    { title: "Security & Performance", description: "Monitoring Core Web Vitals, app script bloat, and database responsiveness across seasonal sales peaks." },
    { title: "Shopify App Configuration", description: "Auditing third-party plugin conflicts, cleaning up abandoned code injections, and configuring new extensions." }
  ],
  "ai-roadmapping-consulting": [
    { title: "Strategic Alignment with Business Goals", description: "Identifying operational workflows where AI integration delivers quantifiable reduction in manual effort." },
    { title: "Identification of High-ROI Use Cases", description: "Distinguishing high-value automation opportunities from impractical or high-hallucination model tasks." },
    { title: "Technical Feasibility Assessment", description: "Auditing data availability, latency requirements, and integration touchpoints to establish engineering feasibility." },
    { title: "Phased Implementation Planning", description: "Defining milestone-based delivery phases from proof-of-concept validation to monitored production rollout." }
  ],
  "ai-readiness-assessments": [
    { title: "Comprehensive Data Audits", description: "Evaluating structure, completeness, and cleanliness of proprietary data required for model training or vector search." },
    { title: "Security and Compliance Checks", description: "Assessing data sensitivity, privacy requirements, and network isolation policies before deploying AI services." },
    { title: "Infrastructure Evaluation", description: "Reviewing cloud hosting, GPU compute requirements, API rate limits, and latency budgets." },
    { title: "Skills Gap Analysis", description: "Identifying the skills, tools, and operational procedures needed to maintain AI systems over time." }
  ],
  "custom-ai-development": [
    { title: "Tailored AI Architectures", description: "Designing system architectures that combine domain-specific prompt engineering, vector stores, and custom application code." },
    { title: "Seamless System Integration", description: "Connecting AI modules directly into relational databases, customer service CRMs, and internal administrative tooling." },
    { title: "Scalable and Secure Deployment", description: "Deploying model endpoints with rate limiting, load balancing, API key rotation, and strict privacy boundaries." },
    { title: "Performance-Driven Engineering", description: "Optimizing token utilization, caching common query responses, and minimizing end-to-end response latency." }
  ],
  "machine-learning-solutions": [
    { title: "Predictive Analytics & Forecasting", description: "Developing statistical models to forecast inventory requirements, customer churn, and operational capacity." },
    { title: "Anomaly and Fraud Detection", description: "Building classification algorithms that detect aberrant transaction behavior and trigger automated review alerts." },
    { title: "Personalized Recommendation Engines", description: "Implementing collaborative and content-based filtering algorithms to suggest relevant products and actions." },
    { title: "Automated Decision Systems", description: "Combining machine learning outputs with deterministic business rules to automate routine operational categorizations." }
  ],
  "ai-integration-apis": [
    { title: "Rapid Feature Enhancement", description: "Integrating state-of-the-art vision, speech, and language APIs into existing web and mobile applications." },
    { title: "Secure API Connectivity", description: "Implementing server-side proxy layers that protect provider API credentials and sanitize outbound payloads." },
    { title: "Microservices Architecture", description: "Isolating AI model communication into dedicated background worker services to prevent blocking core app traffic." },
    { title: "Real-time Data Processing", description: "Configuring WebSocket and Server-Sent Event (SSE) pipelines to stream model completions smoothly to end users." }
  ],
  "autonomous-ai-agents": [
    { title: "Multi-Step Reasoning and Planning", description: "Designing orchestration graphs that decompose complex user requests into structured, sequential execution steps." },
    { title: "Direct API and Tool Integration", description: "Empowering agents to query databases, call external REST APIs, and format structured responses within predefined permissions." },
    { title: "Human-in-the-Loop Safeguards", description: "Implementing confirmation checkpoints before agents can execute irreversible actions, updates, or financial transactions." },
    { title: "Multi-Agent Orchestration", description: "Coordinating specialized agents that handle research, drafting, verification, and formatting independently." }
  ],
  "rapid-ai-prototyping": [
    { title: "Speed to Market Validation", description: "Building functioning interactive prototypes within weeks to test model accuracy against real enterprise data." },
    { title: "Cost-Effective Proof of Concepts", description: "Validating operational value and user adoption before committing significant capital to production infrastructure." },
    { title: "Functional UI/UX for Testing", description: "Pairing raw model outputs with intuitive Next.js interfaces so stakeholders can test realistic workflows directly." },
    { title: "Stakeholder Buy-In Demonstrations", description: "Collecting real user interactions and output ratings to benchmark prompt performance and error rates." }
  ],
  "corporate-ai-automation": [
    { title: "Internal Knowledge Bases & Search", description: "Indexing internal documentation, technical manuals, and SOPs into vector databases for instant employee retrieval." },
    { title: "Automated Document Processing (OCR & NLP)", description: "Extracting structured data from PDFs, invoices, and contracts using multi-modal models and schema validation." },
    { title: "Department-Specific Copilots", description: "Building specialized internal assistants for customer support, HR intake, and engineering documentation lookup." },
    { title: "Secure ERP/CRM Integrations", description: "Enabling internal agents to query customer records, ticket statuses, and inventory balances safely via internal APIs." }
  ],
  "ai-security-compliance": [
    { title: "Data Privacy and Boundary Controls", description: "Ensuring zero-retention enterprise API configurations and token scrubbing so proprietary data is never leaked." },
    { title: "LLM Vulnerability and Penetration Testing", description: "Testing applications against prompt injection, jailbreaking, insecure output handling, and data exfiltration." },
    { title: "Bias, Fairness, and Hallucination Audits", description: "Implementing strict JSON schema validation, regex filters, and deterministic verification rules on model outputs." },
    { title: "Regulatory Compliance Mapping", description: "Structuring logging, explainability, and user consent patterns to align with emerging AI regulatory requirements." }
  ],
  "intelligent-process-automation": [
    { title: "Integration of RPA and AI", description: "Connecting traditional deterministic rule engines with machine learning models to handle edge-case triage." },
    { title: "Unstructured Data Processing (OCR/NLP)", description: "Converting incoming emails, attachments, and unstructured forms into clean database records automatically." },
    { title: "Cognitive Decision-Making Engines", description: "Classifying incoming requests by urgency and topic, routing them to the correct department queue automatically." },
    { title: "End-to-End Workflow Automation", description: "Managing multi-system data synchronization with automatic retry queues, dead-letter monitoring, and audit trails." }
  ],
  "predictive-analytics": [
    { title: "Demand and Sales Forecasting", description: "Building time-series forecasting models using historical sales data and seasonal indicators to guide procurement." },
    { title: "Customer Churn Prediction", description: "Analyzing user activity patterns to identify accounts exhibiting churn risk before contract renewals." },
    { title: "Dynamic Pricing Optimization", description: "Modeling demand elasticity and inventory velocity to suggest data-backed pricing updates." },
    { title: "Risk and Fraud Modeling", description: "Predicting equipment maintenance requirements or workflow bottlenecks based on sensor and telemetry streams." }
  ],
  "data-engineering": [
    { title: "Scalable ETL/ELT Pipeline Development", description: "Building reliable data extraction and transformation pipelines using Python, SQL, and automated schedulers." },
    { title: "Real-time Data Streaming Architecture", description: "Deploying Kafka, MQTT, and Redis streams to process operational events and telemetry as they happen." },
    { title: "Data Warehouse and Data Lake Design", description: "Organizing analytical data stores with dimensional modeling, partitioned tables, and cost-controlled query policies." },
    { title: "Data Quality and Governance", description: "Automating data schema validation, null-check constraints, and freshness alerts across the data pipeline." }
  ],
  "computer-vision": [
    { title: "Real-time Object Detection and Tracking", description: "Deploying YOLO and custom vision models for counting inventory, tracking package movement, or safety monitoring." },
    { title: "Image Classification and Segmentation", description: "Categorizing visual assets and segmenting regions of interest for quality control and catalog curation." },
    { title: "Facial Recognition and Biometrics", description: "Implementing secure biometric authentication boundaries for controlled physical or mobile access environments." },
    { title: "Automated Visual Inspection", description: "Identifying manufacturing defects, damaged packaging, or visual inconsistencies on automated assembly lines." }
  ]
};

// Now replace points in each service
for (const [slug, points] of Object.entries(pointsMap)) {
  const pointsBlock = JSON.stringify(points, null, 6)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, "'");

  // Regex to match the service and its points: [ ... ]
  // We match from 'slug': { up to the next service
  const serviceRegex = new RegExp(`('${slug}':\\s*\\{[\\s\\S]*?points:\\s*\\[)[\\s\\S]*?(\\][\\s\\S]*?\\n\\s*\\},)`, 'm');
  const match = content.match(serviceRegex);
  if (match) {
    const formattedPoints = points.map(p => 
      `        { title: '${p.title.replace(/'/g, "\\'")}', description: '${p.description.replace(/'/g, "\\'")}' }`
    ).join(',\n');
    
    content = content.replace(
      new RegExp(`('${slug}':\\s*\\{[\\s\\S]*?points:\\s*\\[)[\\s\\S]*?(\\])`),
      `$1\n${formattedPoints}\n      $2`
    );
    console.log(`Updated points for ${slug}`);
  } else {
    console.log(`Could not match points block for ${slug}`);
  }
}

// Clean up fake stats from whyUsCards
content = content.replace(/stat:\s*\{\s*value:\s*'100\+',\s*label:\s*'Projects Completed'\s*\}/g, "stat: { value: 'Production', label: 'Engineered Systems' }");
content = content.replace(/stat:\s*\{\s*value:\s*'50\+',\s*label:\s*'Tech Experts'\s*\}/g, "stat: { value: 'Cross-Functional', label: 'Delivery Pods' }");
content = content.replace(/stat:\s*\{\s*value:\s*'99\.9%',\s*label:\s*'Uptime Guaranteed'\s*\}/g, "stat: { value: 'High Availability', label: 'Target SLAs' }");
content = content.replace(/stat:\s*\{\s*value:\s*'100\+',\s*label:\s*'Stores Launched'\s*\}/g, "stat: { value: 'Headless', label: 'E-Commerce Stores' }");
content = content.replace(/stat:\s*\{\s*value:\s*'\+40%',\s*label:\s*'Avg Conversion Lift'\s*\}/g, "stat: { value: 'Optimized', label: 'Frictionless Funnels' }");
content = content.replace(/stat:\s*\{\s*value:\s*'Zero',\s*label:\s*'Breaches'\s*\}/g, "stat: { value: 'Security First', label: 'OWASP Aligned' }");
content = content.replace(/stat:\s*\{\s*value:\s*'Reliability',\s*label:\s*'Guaranteed'\s*\}/g, "stat: { value: 'Reliability', label: 'Production Monitored' }");
content = content.replace(/to guarantee measurable and objective ROI/g, "to establish measurable and objective benchmarks");
content = content.replace(/Rigorous automated and manual testing is conducted across devices to guarantee performance/g, "Rigorous automated and manual testing is conducted across devices to validate performance");

// Update Cybersecurity & Compliance point title if still showing compliance certification
content = content.replace(/'Compliance \(GDPR, HIPAA, PCI-DSS\)'/g, "'Application Security & Data Privacy Practices'");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated service-details.ts');
