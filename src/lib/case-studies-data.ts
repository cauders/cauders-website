import { LucideIcon, Building2, Globe, Smartphone, Cpu, Activity, Layers, ShoppingBag, Utensils, Wrench, Radio, Brain } from 'lucide-react';

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: string;
  capability: string;
  clientName: string;
  isNda: boolean;
  industry: string;
  duration: string;
  deliverables: string[];
  metrics: CaseStudyMetric[];
  heroImage: string;
  overview: string;
  challenge: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    keyHighlights: string[];
  };
  architecture: {
    title: string;
    stack: string[];
    description: string;
  };
  outcome: {
    headline: string;
    description: string;
    impactList: string[];
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'nordic-ecommerce-storefront',
    slug: 'nordic-ecommerce-storefront',
    title: 'How We Helped a Nordic Retailer Contribute to a 10% Sales Increase with a Faster Storefront',
    subtitle: 'Headless Next.js storefront overhaul, optimistic Add-to-Cart state management, and containerized microservice integrations connecting payments, dispatch, and CRM.',
    domain: 'Retail & E-Commerce',
    capability: 'Storefront Engineering & Headless Commerce',
    clientName: 'Nordic Direct-to-Consumer Retailer',
    isNda: true,
    industry: 'Retail & E-Commerce',
    duration: '6 Months',
    deliverables: [
      'Next.js & React Modernized Storefront on Vercel',
      'Optimistic Add-to-Cart with Automatic Cache Rollback',
      'Containerized Node.js/TypeScript REST API on Kubernetes',
      'Living Swagger API Documentation for 10+ Endpoints',
      'Automated Playwright E2E and Jest Test Suites',
      'Payment Gateway, Parcel Dispatcher & Custom CRM Integrations',
    ],
    metrics: [
      { label: 'Sales Contribution', value: '+10%' },
      { label: 'Cart Wait Time', value: '-200ms' },
      { label: 'Dev Onboarding Time', value: '-25%' },
      { label: 'Documented APIs', value: '10+ Endpoints' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751014/Gemini_Generated_Image_95u9yw95u9yw95u9_nbhogb.jpg',
    overview:
      'A leading Norwegian direct-to-consumer e-commerce retailer serving the Nordic market needed a comprehensive storefront revamp. Their revenue depended on multiple moving parts operating harmoniously: responsive mobile shopping, custom checkout flows, regional payment gateways, automated parcel dispatchers, and post-sale CRM support.',
    challenge: {
      title: 'Storefront Friction, Server-Bound Cart Latency & Undocumented APIs',
      description:
        'The retailer wanted to modernize what customers saw without interrupting active operations. Cart interactions previously blocked user interaction while waiting for server confirmation, creating perceived sluggishness that drove abandonment during checkout.',
      bulletPoints: [
        'Cart friction: Every tap on "Add to Cart" waited for backend confirmation before updating the screen, introducing perceptible delays.',
        'Complex third-party integrations: Payment gateway, parcel dispatchers, and custom CRM services required synchronized connectivity without regressions.',
        'Engineering bottleneck: Undocumented backend APIs and lack of automated regression tests slowed developer velocity and made release cycles risky.',
      ],
    },
    solution: {
      title: 'Decoupled Storefront with Optimistic UI & Containerized Kubernetes Microservices',
      description:
        'Cauders rebuilt the storefront and backend as an integrated system. We engineered a fast Next.js and React frontend deployed to Vercel, paired with a typed Node.js/TypeScript REST API orchestrated via Docker containers on Kubernetes.',
      keyHighlights: [
        'Implemented React Query optimistic updates: the cart UI updates immediately on tap while server synchronization executes asynchronously in the background, with automatic rollback if requests fail.',
        'Structured shared TypeScript schemas between frontend and backend to eliminate boundary data bugs and simplify API contract maintenance.',
        'Established living OpenAPI/Swagger documentation for 10+ endpoints and configured Playwright E2E and Jest regression suites covering critical checkout funnels.',
      ],
    },
    architecture: {
      title: 'High-Speed Headless E-Commerce Topology',
      stack: ['Next.js', 'React', 'React Query', 'Node.js', 'TypeScript', 'Docker', 'Kubernetes', 'Vercel', 'Swagger', 'Playwright', 'Jest', 'Sanity CMS'],
      description:
        'Next.js edge presentation tier deployed on Vercel communicating with containerized Node.js REST services orchestrated on Kubernetes. The backend coordinates regional payment gateways, automated parcel dispatch APIs, and CRM queries behind an OpenAPI specification.',
    },
    outcome: {
      headline: 'Measurable Top-Line Growth and Instantaneous Shopping Feedback',
      description:
        'The modernized storefront delivered immediate commercial and operational returns, eliminating cart hesitation and accelerating engineering delivery cycles.',
      impactList: [
        'Contributed to a 10% increase in sales following storefront revamp and cart checkout optimization.',
        'Cut perceived Add to Cart wait time by 200ms through optimistic React Query cache updates.',
        'Reduced frontend developer onboarding time by 25% through standardized Swagger API documentation and shared TypeScript types.',
      ],
    },
  },
  {
    id: 'telecom-core-infrastructure-portal',
    slug: 'telecom-core-infrastructure-portal',
    title: 'Unifying Digital Customer Services Post-Merger for a National Telecom Leader',
    subtitle: 'High-availability customer portal connected directly to legacy core infrastructure, real-time government eKYC verification, and hardware e-commerce.',
    domain: 'Enterprise Systems & Telecom',
    capability: 'Enterprise Web Engineering & Core System Integration',
    clientName: 'Tier-1 Telecommunications Operator',
    isNda: true,
    industry: 'Telecommunications & Infrastructure',
    duration: '8-10 Months',
    deliverables: [
      'Unified High-Traffic Web Portal (Laravel, Livewire, Alpine.js)',
      'Decoupled Node.js Integration Layer to Core Telecom Infrastructure',
      'Real-Time Government eKYC Identity Verification Pipeline',
      'Unified Subscription Management for Legacy & New Mobile Plans',
      'Integrated Hardware E-Commerce (Smartphones & Wi-Fi Routers)',
      'Zero-Downtime Data Buffering and Resilient Synchronization',
    ],
    metrics: [
      { label: 'Subscriber Base', value: 'Multi-Million' },
      { label: 'Migration Downtime', value: '0 Minutes' },
      { label: 'eKYC Verification', value: 'Real-Time' },
      { label: 'Sync Drop-Offs', value: '0%' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751012/Gemini_Generated_Image_hd74yghd74yghd74_dmhz1q.jpg',
    overview:
      'Following a major corporate merger between two national telecom giants, the combined entity required a unified, enterprise-grade digital portal to serve their combined multi-million customer base. The platform needed to consolidate fragmented customer touchpoints, manage disparate mobile plans, and support digital verification without disrupting legacy billing operations.',
    challenge: {
      title: 'Post-Merger Fragmentation and Secure Legacy Core Interfacing',
      description:
        'Two massive legacy organizations had merged, leaving behind siloed user accounts, separate product workflows, and legacy core systems. A disjointed onboarding journey risked customer churn during a critical post-merger transition window.',
      bulletPoints: [
        'Connecting a modern customer-facing web tier securely to deep legacy backend core systems without introducing latency or security vulnerabilities.',
        'Strict compliance with government digital identity verification (eKYC) mandates before mobile plan activations.',
        'Handling massive concurrent traffic spikes while synchronizing multi-million subscriber records with zero downtime.',
      ],
    },
    solution: {
      title: 'Decoupled Integration Architecture with Real-Time Asynchronous Buffering',
      description:
        'We engineered a secure cloud web application powered by Laravel, Livewire, and Alpine.js for rapid, enterprise-grade UI delivery, backed by a decoupled Node.js integration layer that buffers and validates requests asynchronously before dispatching to legacy core infrastructure.',
      keyHighlights: [
        'Built real-time API integrations communicating seamlessly with legacy core platforms and government eKYC identity portals.',
        'Created a unified self-service journey allowing subscribers from both merged entities to manage legacy plans, activate new 5G tiers, and purchase hardware.',
        'Implemented asynchronous buffering queues ensuring zero data loss and resilient transaction recovery during high-concurrency billing updates.',
      ],
    },
    architecture: {
      title: 'Resilient Cloud-to-Core Telecom Architecture',
      stack: ['Laravel', 'Livewire', 'Alpine.js', 'Node.js', 'MySQL', 'Government eKYC APIs', 'REST APIs', 'Cloud High-Availability Clusters'],
      description:
        'Laravel/Livewire presentation portal communicating via secure API requests with a decoupled Node.js integration layer. The Node.js tier acts as a resilient buffer, validating requests and orchestrating real-time transactions with legacy core systems and external eKYC verification portals.',
    },
    outcome: {
      headline: 'Unified Onboarding for Millions with Absolute Regulatory Compliance',
      description:
        'The portal successfully bridged two national subscriber bases into a single digital destination with zero service disruption or data leakage.',
      impactList: [
        'Successfully deployed high-availability portal handling massive concurrent traffic spikes with zero data leakage or synchronization drop-offs.',
        'Automated customer identity verification (eKYC), eliminating manual branch visits and accelerating subscriber activations.',
        'Centralized account management across merged subscriber cohorts, drastically lowering operational support overhead.',
      ],
    },
  },
  {
    id: 'smart-building-proptech-platform',
    slug: 'smart-building-proptech-platform',
    title: 'Scaling an Enterprise Smart Building & Workplace SaaS Platform Across 30,000+ Devices',
    subtitle: 'Taking over full technical ownership of a live PropTech platform: S3 file caching, SAML 2.0 enterprise SSO, bundle optimization, and IoT gateway stabilization.',
    domain: 'PropTech & Enterprise IoT',
    capability: 'Platform Engineering & IoT Integration',
    clientName: 'Commercial PropTech Provider',
    isNda: true,
    industry: 'Real Estate & PropTech',
    duration: '8-12 Months',
    deliverables: [
      'Platform Takeover & Stabilization across 1,000+ Buildings',
      'Amazon S3 Cache-First Layer Cutting Database Read Load by 80-95%',
      'Frontend Bundle Optimization (-43% stat, -28% gzipped)',
      'Enterprise SAML 2.0 Single Sign-On (SSO) on AWS Lambda',
      'IoT Edge Gateway Telemetry Integration (OMNI Boxes) via MQTT',
      'OWASP ZAP Hardening Remediating 300+ Security Vulnerabilities',
      'SaaS Modules for Permits, Quotes, Jobs, and Reactive Tasks',
    ],
    metrics: [
      { label: 'Database Read Load', value: '-80% to -95%' },
      { label: 'Vulnerabilities Fixed', value: '300+ Remediated' },
      { label: 'Enterprise Onboarding', value: 'Days → Minutes' },
      { label: 'Managed Devices', value: '30,000+ Active' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751019/Gemini_Generated_Image_o89e3to89e3to89e_ivkyvx.jpg',
    overview:
      'A leading digital building management and workplace SaaS platform used across 1,000+ commercial buildings, 30,000+ connected IoT devices, and 500+ enterprise users faced continuity risks when its original engineering team was discontinued. Cauders stepped in and assumed full technical ownership across frontend, backend, IoT edge integrations, infrastructure, and compliance.',
    challenge: {
      title: 'Mission-Critical Continuity, Severe Database Load & Security Deficits',
      description:
        'Thousands of commercial facilities depended on the platform daily for access control, automated building schedules, and facilities workflows. We had to stabilize and modernize a live product without a second of service disruption.',
      bulletPoints: [
        'Database contention: Repeated file reads hit the operational database directly on every request, creating severe scaling bottlenecks as building count grew.',
        'Enterprise onboarding friction: Large corporate tenants required Single Sign-On with their own identity providers (Okta, Azure AD), but manual configuration took days.',
        'Security posture: A lack of recent penetration testing left more than 300 unmanaged vulnerabilities in a platform governing physical building access.',
      ],
    },
    solution: {
      title: 'Architectural Overhaul: S3 Caching Layer, Serverless SSO & IoT Gateway Mesh',
      description:
        'A dedicated team of four engineers and a tech lead executed incremental modernizations: environment stabilization, frontend bundle optimization, S3 caching, vulnerability remediation, and automated SAML 2.0 single sign-on.',
      keyHighlights: [
        'Engineered an Amazon S3 caching layer as FastAPI microservices: files are served directly from S3, slashing database read load by 80-95% without altering underlying schemas.',
        'Built an IdP-agnostic SAML 2.0 SSO service on AWS Lambda with CloudWatch telemetry, enabling enterprise tenants to configure identity providers in minutes.',
        'Remediated 300+ vulnerabilities identified via OWASP ZAP penetration testing, eliminating 100% of high-risk and 90% of medium-risk findings.',
      ],
    },
    architecture: {
      title: 'Hybrid Cloud-Edge Multi-Tenant SaaS Topology',
      stack: ['React', 'Next.js', 'FastAPI (Python)', 'AWS Lambda', 'Amazon S3', 'PostgreSQL', 'Redis', 'MQTT', 'Docker', 'OWASP ZAP', 'SAML 2.0', 'Vercel'],
      description:
        'Physical building devices stream telemetry to localized edge gateways (hardware boxes) using MQTT. Gateways forward data to containerized FastAPI microservices and PostgreSQL with an Amazon S3 cache layer. The Next.js frontend on Vercel delivers real-time controls, permits, and reactive task management.',
    },
    outcome: {
      headline: 'Uncompromising Platform Stability, Hardened Security, and Scaled Operations',
      description:
        'A platform at risk of stagnation was transformed into an enterprise-ready, compliant, and performant SaaS product that easily passes corporate procurement reviews.',
      impactList: [
        'Reduced operational database read load by 80-95% through the S3 caching layer.',
        'Shrunk frontend bundle size by 43% and resolved memory leaks across 20+ components, boosting heap efficiency by 17.3%.',
        'Cut enterprise customer onboarding from days of manual setup to self-service minutes with SAML 2.0 SSO.',
      ],
    },
  },
  {
    id: 'global-language-exchange-platform',
    slug: 'global-language-exchange-platform',
    title: 'Scaling a Real-Time Cultural Exchange & Language Learning Platform to 1M+ Downloads',
    subtitle: 'Decoupled asynchronous neural translation workers, high-concurrency WebSockets, and privacy-preserving matchmaking powering an Android consumer hit.',
    domain: 'Consumer Mobile & Real-Time Communication',
    capability: 'Mobile Product Engineering & Asynchronous Translation',
    clientName: 'Global Consumer Mobile Publisher',
    isNda: true,
    industry: 'Social Media & Mobile Apps',
    duration: '8-12 Months',
    deliverables: [
      'Production Flutter Android Application (1M+ Downloads)',
      'Decoupled Asynchronous Translation Queue (Google Cloud Translation)',
      'Zero-Latency WebSocket Messaging & Voice Audio Transmission',
      'Interest-Based Cultural Matchmaking Engine',
      'Privacy-Preserving Geospatial Recommendation Service',
      'Comprehensive Moderation, Reporting & Trust & Safety System',
    ],
    metrics: [
      { label: 'Google Play Downloads', value: '1,000,000+' },
      { label: 'Store Rating', value: '4.6 / 5.0 (379K+)' },
      { label: 'Matches Facilitated', value: '100,000+ / Q1' },
      { label: 'Translation Delay', value: '0ms (Async Stream)' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751018/Gemini_Generated_Image_d7wwsdd7wwsdd7ww_bpcfni.jpg',
    overview:
      'A global consumer mobile application connecting international enthusiasts of Korean culture with native speakers worldwide needed to scale its high-concurrency mobile social experience. The product unites friend discovery, interest-based cultural matchmaking, one-to-one and group messaging, automated translation, and community discussion boards.',
    challenge: {
      title: 'Translation Latency Bottlenecks & High-Concurrency Chat Delivery',
      description:
        'Enabling fluid conversations between users who speak different languages required real-time translation without introducing conversational lag or degrading WebSocket responsiveness across spotty mobile connections.',
      bulletPoints: [
        'Synchronous translation API calls caused message delivery threads to stutter, interrupting conversational rhythm.',
        'Handling high-frequency media uploads (voice notes, profile images) and concurrent WebSocket connections across global time zones.',
        'Providing location-aware friend recommendations while safeguarding privacy by never exposing exact user coordinates.',
      ],
    },
    solution: {
      title: 'Asynchronous Translation Worker Pipeline with Local-First Mobile State',
      description:
        'Cauders engineered a scalable mobile architecture connecting the Flutter client to a high-performance Node.js core backend and Firebase real-time infrastructure, decoupling translation API requests from the primary message delivery pipeline.',
      keyHighlights: [
        'Architected asynchronous background worker queues for Google Cloud Translation: chat messages deliver instantly in native text while translations stream asynchronously milliseconds later.',
        'Integrated WebSocket audio messaging and image delivery with client-side compression to ensure snappy media exchange on limited mobile networks.',
        'Implemented privacy-preserving geospatial matching based on regional radius centroids and mutual cultural interests (K-culture, language study, travel).',
      ],
    },
    architecture: {
      title: 'Decoupled Real-Time Messaging & Translation Topology',
      stack: ['Flutter', 'Android', 'Node.js', 'Express.js', 'Firebase Realtime Database', 'WebSockets (WSS)', 'Google Cloud Translation API', 'In-App Purchase SDKs'],
      description:
        'Flutter mobile application communicating with a Node.js API layer and Firebase real-time transport. Message pipelines branch into an asynchronous worker queue that interfaces with Google Cloud Translation, updating message caches without blocking real-time chat sockets.',
    },
    outcome: {
      headline: 'Viral International Adoption with Outstanding App Store Recognition',
      description:
        'The mobile application smoothly crossed major scale milestones, maintaining exceptional user ratings and high retention across diverse global markets.',
      impactList: [
        'Reached 1M+ downloads on Google Play with a 4.6-star rating sustained across more than 379,000 public reviews.',
        'Facilitated over 100,000 cross-cultural user matches within the first operational quarter.',
        'Eliminated chat delivery pauses by isolating heavy translation routines into background worker microservices.',
      ],
    },
  },
  {
    id: 'social-commerce-fashion-discovery',
    slug: 'social-commerce-fashion-discovery',
    title: 'Unifying AI-Assisted Virtual Styling, Digital Wardrobes, and Shop the Look Commerce',
    subtitle: 'Cross-platform mobile application combining social outfit discovery, AI Virtual Try-On, computer vision wardrobe tagging, and in-app checkout.',
    domain: 'Fashion-Tech & Social Commerce',
    capability: 'Mobile Engineering & AI Commerce Integration',
    clientName: 'Fashion-Tech Social Commerce Venture',
    isNda: true,
    industry: 'Retail & E-Commerce',
    duration: '4-5 Months',
    deliverables: [
      'Cross-Platform Flutter Mobile Application (iOS & Android)',
      'AI-Assisted Styling Suite: Virtual Try-On & Look Generator',
      'Smart Closet Wardrobe Manager with Automated Clothing Tagging',
      'Shop the Look Direct E-Commerce Checkout Integration',
      'Curated Creator Discovery Feeds & Community Outfit Polls',
      'Personalized Recommendations Driven by Weather & Occasion',
    ],
    metrics: [
      { label: 'Crash-Free Sessions', value: '99.9%' },
      { label: 'Daily Active Retention', value: '40% DAU' },
      { label: 'Checkout Integration', value: 'Instant Cart' },
      { label: 'Styling Engine Speed', value: '< 800ms' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792813715/Customer-Facing_Applications_unghui.jpg',
    overview:
      'A digital fashion venture required a dedicated mobile social commerce application where users could discover trending styles, connect with fashion creators, share multimedia outfit posts, and receive personalized AI styling suggestions directly connected to e-commerce checkout.',
    challenge: {
      title: 'Bridging Social Engagement with High-Fidelity AI Styling & Commerce',
      description:
        'The platform needed to combine interactive social networking with advanced AI styling tools, digital closet organization, and frictionless shopping without overburdening mobile device resources.',
      bulletPoints: [
        'Integrating computationally heavy AI features (Virtual Try-On, Look Generator, Selfie Enhancement) while preserving a responsive 60 FPS mobile UI.',
        'Simplifying the journey from discovering an outfit on a social feed to purchasing items via e-commerce merchant checkout.',
        'Automating wardrobe cataloging so users could upload garments without tedious manual data entry.',
      ],
    },
    solution: {
      title: 'Modular Flutter Architecture with Asynchronous Computer Vision & Commerce APIs',
      description:
        'We engineered an end-to-end mobile social platform built on Flutter, supported by Node.js microservices and Firebase real-time data infrastructure. Deep learning pipelines handle automated tagging and styling recommendations in the cloud.',
      keyHighlights: [
        'Built "Shop the Look" functionality that maps tagged garment coordinates in photos directly to catalog SKU items for one-tap checkout.',
        'Implemented the Smart Closet engine utilizing computer vision models to automatically categorize uploaded clothing items by color, pattern, and garment type.',
        'Architected personalized stylist algorithms factoring in local weather conditions, user occasion preferences, and community voting feedback.',
      ],
    },
    architecture: {
      title: 'Social Commerce & AI Inference Architecture',
      stack: ['Flutter', 'Node.js', 'Firebase Cloud Services', 'Computer Vision API', 'Redis', 'Stripe & Regional Payment SDKs', 'Cloud Functions'],
      description:
        'Flutter cross-platform client communicating with Node.js microservices hosted on cloud serverless infrastructure. Image uploads trigger automated computer vision tagging and vector matching against retail catalog databases.',
    },
    outcome: {
      headline: 'Exceptional User Retention and Seamless Social-to-Checkout Conversion',
      description:
        'The platform achieved industry-leading retention and engagement metrics, transforming fashion browsing into an interactive styling experience.',
      impactList: [
        'Maintained a 99.9% crash-free session rate across diverse iOS and Android hardware configurations.',
        'Achieved a 40% Daily Active User (DAU) retention rate fueled by personalized wardrobe recommendations and social polls.',
        'Established an instant discovery-to-purchase path linking creator outfits directly with partner retailer inventories.',
      ],
    },
  },
  {
    id: 'on-demand-delivery-marketplace',
    slug: 'on-demand-delivery-marketplace',
    title: 'Consolidating Multi-Role Commerce, Restaurant Discovery, and Live Delivery Dispatch',
    subtitle: 'Unifying customer ordering, restaurant vendor management, and driver dispatch into a single modular, role-based platform with real-time GPS tracking.',
    domain: 'Food Delivery & Multi-Role Logistics',
    capability: 'Modular Role-Based Architecture & Real-Time Logistics',
    clientName: 'Regional On-Demand Delivery Network',
    isNda: true,
    industry: 'Logistics & Food Delivery',
    duration: '4-6 Months',
    deliverables: [
      'Modular Role-Based Flutter Mobile App (Customer, Merchant, Driver)',
      'Real-Time Restaurant Discovery & Dynamic Menu Customizer',
      'Multi-Vendor Cart & Secure Payment Processing Integration',
      'Live GPS Order Tracking with WebSocket Dispatch Pipeline',
      'Merchant Order Management & Inventory Availability Portal',
      'Consolidated Fleet Dispatch Routing Engine',
    ],
    metrics: [
      { label: 'Architecture Consolidation', value: '3 Apps → 1 Core' },
      { label: 'Dispatch Latency', value: '< 1.2s' },
      { label: 'Order Fulfillment', value: '99.8%' },
      { label: 'App Performance', value: '60 FPS Native' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792261071/iStock-1458045238-scaled_edgfe2.jpg',
    overview:
      'An on-demand food commerce enterprise was struggling to maintain three disparate, independently developed mobile apps for customers, restaurants, and delivery drivers. They needed to consolidate their operating software into a unified, modular role-based architecture capable of supporting real-time ordering and dynamic delivery logistics.',
    challenge: {
      title: 'Triplicated Codebases, Fragmented Dispatch & Synchronization Delays',
      description:
        'Managing three separate codebases caused feature drift, conflicting order statuses, and high maintenance overhead. The business needed a streamlined ordering journey with dependable real-time tracking.',
      bulletPoints: [
        'Disparate mobile apps caused frequent order desynchronization between restaurants, drivers, and hungry customers.',
        'Peak mealtime surges created connection timeouts and delayed driver dispatch matching.',
        'Lack of real-time GPS driver tracking led to high customer support inquiry volume.',
      ],
    },
    solution: {
      title: 'Unified Modular Flutter Platform with Real-Time Event Dispatch Engine',
      description:
        'Cauders re-engineered the three disparate mobile products into a single modular, role-based Flutter application supported by a robust Node.js/Express backend, cloud databases, and WebSocket telemetry streams.',
      keyHighlights: [
        'Consolidated customer ordering, vendor fulfillment, and driver logistics into a unified codebase with dynamic role permissions and conditional UI workflows.',
        'Engineered real-time GPS tracking supported by WebSocket communication and Firebase Cloud Messaging push notifications.',
        'Integrated multi-provider payment processing and automated merchant settlement reconciliation with detailed item-level pricing.',
      ],
    },
    architecture: {
      title: 'Real-Time Multi-Role Commerce Topology',
      stack: ['Flutter', 'Node.js', 'Express.js', 'Cloud Database', 'WebSockets', 'Google Maps Platform', 'Firebase Cloud Messaging (FCM)', 'Stripe'],
      description:
        'A single Flutter cross-platform codebase compiling role-based interfaces for consumer ordering, merchant kitchen display, and courier navigation. The Node.js backend manages real-time dispatch matching and spatial indexing over WebSockets.',
    },
    outcome: {
      headline: 'Seamless Logistics Coordination and Dramatic Maintenance Reductions',
      description:
        'The consolidated platform eliminated multi-app maintenance headaches while significantly improving on-time deliveries and customer satisfaction.',
      impactList: [
        'Successfully consolidated three legacy codebases into one modular application, cutting ongoing engineering maintenance overhead in half.',
        'Reduced driver dispatch assignment latency to under 1.2 seconds following order kitchen acceptance.',
        'Maintained a 99.8% order lifecycle fulfillment rate throughout peak weekend order surges.',
      ],
    },
  },
  {
    id: 'api-marketplace-developer-gateway',
    slug: 'api-marketplace-developer-gateway',
    title: 'Accelerating Developer Integration with an Interactive API Marketplace & Gateway',
    subtitle: 'Centralized developer portal, interactive endpoint testing playground, sub-millisecond Redis rate-limiting, and automated multi-language SDK generation.',
    domain: 'B2B Developer Tools & API Infrastructure',
    capability: 'API Gateway Engineering & Developer Enablement',
    clientName: 'B2B Developer Infrastructure Platform',
    isNda: true,
    industry: 'Developer Tools & Cloud Platforms',
    duration: '3-4 Months',
    deliverables: [
      'Next.js High-Performance API Marketplace & Catalog Tier',
      'In-Browser Interactive API Playground for Live Endpoint Testing',
      'Distributed API Gateway with Redis Token-Bucket Rate Limiting',
      'API Key Management & JWT Authentication Architecture',
      'Automated Code Snippet Generator (cURL, Python, JS, Go)',
      'Asynchronous Background Worker Queues for Telemetry & Quotas',
    ],
    metrics: [
      { label: 'Routing Latency', value: '< 50ms' },
      { label: 'Gateway Uptime', value: '99.99%' },
      { label: 'Dev Onboarding', value: 'Weeks → Mins' },
      { label: 'Rate-Limit Checks', value: '< 1ms (Redis)' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751015/Gemini_Generated_Image_ur1ee2ur1ee2ur1e_tdolpy.jpg',
    overview:
      'Growing software ecosystems frequently struggle with fragmented API documentation, manual endpoint testing, and scattered authentication keys. This project engineered a centralized API marketplace and developer portal enabling teams to discover, test, authenticate, and integrate multiple backend APIs under strict governance and rate-limiting controls.',
    challenge: {
      title: 'Decentralized Documentation, Manual Testing & Concurrency Risks',
      description:
        'External developers faced weeks of friction attempting to integrate proprietary APIs due to outdated documentation, lack of testing sandboxes, and manual API key provisioning.',
      bulletPoints: [
        'High developer onboarding friction resulting in slow API adoption and high developer support ticket volume.',
        'Need to enforce strict tiered rate-limiting quotas across high-concurrency request bursts without slowing down gateway routing.',
        'Preventing heavy asynchronous jobs (like analytics and telemetry calculations) from blocking the primary API gateway thread.',
      ],
    },
    solution: {
      title: 'Three-Tier Architecture: Next.js Presentation, Node.js Gateway & Redis Caching',
      description:
        'Cauders architected an integrated platform consisting of a Next.js server-rendered presentation tier, an asynchronous Node.js API Gateway, PostgreSQL for catalog data, and an in-memory Redis cluster for high-speed rate-limiting.',
      keyHighlights: [
        'Built an interactive in-browser API playground allowing developers to execute live requests, inspect payloads, and copy auto-generated client SDK snippets.',
        'Implemented distributed Redis token-bucket rate limiting executing in under one millisecond per request to protect downstream services.',
        'Offloaded usage telemetry and billing calculations to background worker pools, keeping the primary API gateway non-blocking.',
      ],
    },
    architecture: {
      title: 'High-Concurrency API Gateway & Marketplace Topology',
      stack: ['Next.js', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Redis Pub/Sub', 'JWT / API Key Auth', 'Docker', 'Serverless'],
      description:
        'Next.js presentation tier communicating with a secure Node.js API Gateway. PostgreSQL stores catalog schema and user permissions, while Redis handles sub-millisecond quota checks and pub/sub worker dispatch for background jobs.',
    },
    outcome: {
      headline: 'Lightning-Fast Developer Adoption and Robust Platform Governance',
      description:
        'The centralized gateway transformed API integration from an arduous multi-week effort into an instant, self-service developer workflow.',
      impactList: [
        'Delivered sub-50ms API routing response latency and 99.99% gateway availability under extreme stress testing.',
        'Accelerated external developer onboarding from several weeks to less than fifteen minutes.',
        'Provided operators with complete visibility over monetization quotas, security telemetry, and API consumption.',
      ],
    },
  },
  {
    id: 'cognitive-fitness-gamified-platform',
    slug: 'cognitive-fitness-gamified-platform',
    title: 'Offline-Resilient Cognitive Training & Social Wellness Mobile Application',
    subtitle: 'Gamified brain-training exercises, high-frequency telemetry, local-first SQL offline caching, and global community leaderboards built with Flutter.',
    domain: 'Health-Tech & Gamified Social',
    capability: 'Mobile Engineering & Offline-First State Synchronization',
    clientName: 'Cognitive Health & Wellness Startup',
    isNda: true,
    industry: 'Social Media & Mobile Apps',
    duration: '5-7 Months',
    deliverables: [
      'Cross-Platform Flutter Mobile Application (iOS & Android)',
      'Gamified Cognitive-Training Exercise Engine with Telemetry',
      'Personalized User Performance & Progress Analytics Dashboards',
      'Offline-First Local SQL Caching with Auto-Reconnection Sync',
      'Social Networking Hub with Global Leaderboards & Friend Challenges',
      'Microservice Backend Powered by Node.js, Redis Pub/Sub & Firebase',
    ],
    metrics: [
      { label: '30-Day Retention', value: '+40% Lift' },
      { label: 'Daily Workouts', value: '1,000+ Completed' },
      { label: 'Data Sync Failures', value: '0 Incidents' },
      { label: 'Offline Execution', value: '100% Functional' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792906816/Gemini_Generated_Image_ma12k1ma12k1ma12_ftm70g.jpg',
    overview:
      'A digital health startup required a mobile platform combining scientifically designed cognitive fitness exercises with social networking. The objective was to create an engaging experience that encouraged daily brain training, visualized user progress, and fostered community interaction across global leaderboards.',
    challenge: {
      title: 'High-Frequency Interaction Telemetry & Offline Performance Drift',
      description:
        'Users frequently trained during daily commutes (subways, flights) where internet connectivity dropped intermittently. The app had to record millisecond-accurate reaction telemetry without losing data or stalling gameplay.',
      bulletPoints: [
        'Intermittent network dropouts caused lost workout progress and broken streak counters in competing apps.',
        'High-frequency touch telemetry required real-time scoring calculations without degrading 60 FPS mobile animations.',
        'Balancing personal cognitive health tracking with competitive social gamification features.',
      ],
    },
    solution: {
      title: 'Local-First SQLite Cache with Asynchronous Redis Sync & Gamified Microservices',
      description:
        'We engineered a cross-platform Flutter application backed by Node.js microservices, Redis Pub/Sub, and Firebase. A local-first SQL storage engine records game events on-device and syncs cleanly with cloud infrastructure when connection is restored.',
      keyHighlights: [
        'Implemented local-first SQL caching: cognitive workout metrics and reaction times save locally on device and automatically reconcile with the cloud with zero sync conflicts.',
        'Engineered gamified social networking modules featuring head-to-head brain challenges, community achievement badges, and real-time leaderboards.',
        'Built personalized visual dashboards charting memory, reaction speed, and cognitive agility over rolling multi-week cohorts.',
      ],
    },
    architecture: {
      title: 'Offline-First Cognitive Gaming Architecture',
      stack: ['Flutter', 'Node.js', 'Redis Pub/Sub', 'SQLite (Local Mobile)', 'Firebase', 'REST APIs', 'Cloud Microservices'],
      description:
        'Flutter mobile client paired with an embedded SQLite engine for zero-latency offline gameplay and telemetry collection. Asynchronous sync handlers interface with Node.js microservices and Redis Pub/Sub for leaderboard updates.',
    },
    outcome: {
      headline: 'Sustained User Engagement and Flawless Offline Telemetry Reliability',
      description:
        'The application established an accessible approach to daily cognitive wellness, combining reliable offline play with addictive community engagement.',
      impactList: [
        'Drove a 40% increase in 30-day user retention through the combination of gamified streak mechanics and leaderboards.',
        'Processed over 1,000 daily cognitive workouts with zero recorded data synchronization failures.',
        'Delivered completely seamless offline play, enabling users to train anywhere without connectivity constraints.',
      ],
    },
  },
  {
    id: 'self-hosted-streaming-platform',
    slug: 'self-hosted-streaming-platform',
    title: 'High-Performance Self-Hosted Streaming Architecture with Edge Reverse Proxy',
    subtitle: 'Decoupled Bun runtime backend, edge-cached React frontend on Vercel, and reverse proxy masking to enable high-definition playback with zero video storage overhead.',
    domain: 'Media & Digital Entertainment',
    capability: 'Edge Infrastructure & Streaming Architecture',
    clientName: 'Community-Driven Digital Media Project',
    isNda: true,
    industry: 'Developer Tools & Cloud Platforms',
    duration: '3-4 Months',
    deliverables: [
      'Decoupled Streaming Architecture with Zero Video Storage Overhead',
      'Ultra-Lean Backend Service Running on Bun Runtime on AWS EC2',
      'Edge-Rendered React Frontend Deployed Globally on Vercel',
      'Custom Edge Reverse Proxy Shielding Requests from Third-Party Blocks',
      'AniList OAuth Sign-In & Integrated Disqus Community Comments',
      'Fully Customizable Multi-Theme User Settings Experience',
    ],
    metrics: [
      { label: 'UX Improvement', value: '+50% Better' },
      { label: 'Hosting Storage Cost', value: '$0 Direct Video' },
      { label: 'Playback Blocks', value: '0 Incidents' },
      { label: 'Player Startup Time', value: '< 350ms' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792912134/custom_ai_x7ljqa.jpg',
    overview:
      'A community-driven digital media streaming project needed an ultra-fast, modern streaming web interface that developers and enthusiasts could easily self-host. Storing and serving gigabytes of video directly would introduce prohibitive hosting costs, while third-party streaming origins frequently rate-blocked direct browser connections.',
    challenge: {
      title: 'Prohibitive Video Hosting Costs & Third-Party Origin Blocking',
      description:
        'The platform needed to deliver a premium, responsive video experience without the crippling infrastructure expense of storing video files directly or risking viewer playback drops.',
      bulletPoints: [
        'Direct video hosting and CDN egress bandwidth costs were economically infeasible for a free, community-run initiative.',
        'Third-party streaming servers frequently blocked or throttled requests arriving directly from thousands of individual user browsers.',
        'The existing interface was dated, lacked community sign-in, and offered zero personalization or theme customization.',
      ],
    },
    solution: {
      title: 'Decoupled Bun Metadata Backend with Edge Reverse Proxy Protection',
      description:
        'We separated the platform into a lean Bun backend on AWS EC2 and a responsive React frontend on Vercel. A reverse proxy sits between viewers and upstream streaming providers, masking connections so servers perceive requests from a stable, trusted origin.',
      keyHighlights: [
        'Utilized Bun on AWS EC2 as an ultra-fast, minimal backend service that returns video metadata and stream manifests without storing heavy video files.',
        'Configured an edge reverse proxy to consolidate and authenticate streaming requests, eliminating origin blocking and keeping video playback dependable.',
        'Integrated AniList OAuth for seamless anime fan sign-ins and Disqus for discussion threads, eliminating custom auth maintenance.',
      ],
    },
    architecture: {
      title: 'Decoupled Edge Streaming Topology',
      stack: ['React.js', 'Bun Runtime', 'AWS EC2', 'Nginx Reverse Proxy', 'Vercel', 'AniList OAuth', 'Disqus', 'Tailwind CSS'],
      description:
        'React frontend deployed globally across Vercel edge points. The client queries a lightweight Bun service on AWS EC2 for video manifests. Stream segments flow through an edge reverse proxy to ensure third-party origin servers recognize verified origin requests.',
    },
    outcome: {
      headline: 'Seamless High-Definition Streaming with Near-Zero Infrastructure Overhead',
      description:
        'The open-source self-hosted architecture delivered a 50%+ boost in viewer experience while keeping operating and hosting expenses minimal.',
      impactList: [
        'Achieved a 50%+ improvement in user satisfaction through instantaneous player startup and modern interface design.',
        'Shipped an open-source, easily self-hostable setup that anyone can deploy in minutes at virtually zero monthly cost.',
        'Eliminated stream blocking completely via the edge reverse proxy origin masking layer.',
      ],
    },
  },
  {
    id: 'contracting-service-portal',
    slug: 'contracting-service-portal',
    title: 'High-Conversion Digital Showroom & Local SEO Lead Engine for Specialty Contractors',
    subtitle: 'Performance-engineered WordPress platform, interactive project galleries, local search schema, and automated in-home estimate lead capture funnels.',
    domain: 'Local Services & Digital Marketing',
    capability: 'Web Performance & Local Search Architecture',
    clientName: 'Specialized Home Remodeling Contractor',
    isNda: true,
    industry: 'Construction & Home Services',
    duration: '2-3 Months',
    deliverables: [
      'High-Performance WordPress Platform with Custom Lightweight Theme',
      'Interactive Project Showcase & Before/After Renovation Gallery',
      'High-Intent In-Home Estimate Booking & Consultation Funnel',
      'Local SEO Content Hierarchy & Geo-Targeted Schema Markup',
      'Integrated Content Marketing Blog Driving Organic Search Traffic',
      'Hardened CMS Security Architecture with Automated Image WebP Pipelines',
    ],
    metrics: [
      { label: 'Organic Inbound Leads', value: '+180%' },
      { label: 'Google PageSpeed', value: '96/100 Mobile' },
      { label: 'Estimate Conversions', value: '+45%' },
      { label: 'Turnaround Highlight', value: '2-3 Days' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792770102/Build_Integrate_egvjcw.jpg',
    overview:
      'A full-service regional remodeling contractor specializing in high-end bathroom renovations and rapid 2-3 day acrylic wall transformations required a modern digital presence. The goal was to replace an outdated site with an automated digital showroom that builds credibility, showcases renovation craftsmanship, and captures qualified homeowner estimate requests.',
    challenge: {
      title: 'Low Local Search Visibility, Slow Mobile Speeds & Lost Inbound Inquiries',
      description:
        'Homeowners researching remodeling investments demand visual proof of craftsmanship and transparent turnaround times. The contractor’s prior website failed to convert visitors and was invisible on local search engines.',
      bulletPoints: [
        'Inability to rank for high-intent local contractor keywords across primary suburban service territories.',
        'Slow mobile image loading caused homeowners to bounce before viewing project galleries or contacting the team.',
        'Friction-heavy contact forms resulted in high abandonment and missed estimate booking opportunities.',
      ],
    },
    solution: {
      title: 'SEO-Structured Content Engine with Interactive Project Galleries & Streamlined Funnels',
      description:
        'We engineered a tailored, performance-optimized WordPress platform structured around local search intent, interactive before/after renovation galleries, and streamlined quote booking funnels.',
      keyHighlights: [
        'Designed an interactive project gallery showcasing completed bathroom transformations with before-and-after sliders and material specifications.',
        'Implemented comprehensive local SEO schema markup and service-area content silos that propelled the contractor into Google Local 3-Pack rankings.',
        'Engineered an intuitive multi-step consultation booking funnel highlighting the contractor’s signature 2-3 day turnaround guarantee.',
      ],
    },
    architecture: {
      title: 'Fast CMS & Local Search Architecture',
      stack: ['WordPress', 'PHP', 'MySQL', 'Local SEO Schema', 'Responsive Theme Framework', 'Cloud CDN', 'WebP Optimization'],
      description:
        'Custom lightweight PHP WordPress theme with asset minification and automated WebP image delivery. Structured with local geo-coordinate schema and fast-loading consultation forms integrated with regional CRM notifications.',
    },
    outcome: {
      headline: 'Surging High-Value Inbound Estimate Requests and Dominant Local Visibility',
      description:
        'The new digital showroom turned the contractor’s online presence into their primary customer acquisition channel, driving record monthly renovation bookings.',
      impactList: [
        'Drove a 180% increase in qualified inbound remodeling estimate requests within 90 days of launch.',
        'Achieved a 96/100 mobile Google PageSpeed performance score with sub-second photo gallery loads.',
        'Captured top-3 Google local search positions across all targeted regional municipal service territories.',
      ],
    },
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudiesData;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((cs) => cs.slug === slug || cs.id === slug);
}
