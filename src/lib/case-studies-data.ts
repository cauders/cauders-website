import { LucideIcon, Building2, Globe, Smartphone, Cpu, Activity, Layers, ShoppingBag, Utensils, Wrench, Radio, Brain } from 'lucide-react';

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export type DeliveryTier = 'tier-1' | 'tier-2' | 'tier-3' | 'tier-4';

export interface DeliveryContext {
  tier: DeliveryTier;
  badge: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  publicLabel: string;
  deliveryContext: DeliveryContext;
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
    publicLabel: "E-Commerce Storefront & Commerce Integrations",
    deliveryContext: {
      "tier": "tier-3",
      "badge": "Prior Team Experience",
      "label": "Prior Team Experience",
      "description": "Architected and engineered by Cauders team members prior to Cauders."
},
    slug: 'nordic-ecommerce-storefront',
    title: 'How We Helped a Nordic Retailer Contribute to a 10% Sales Increase with a Faster Storefront',
    subtitle: 'Headless Next.js storefront overhaul, optimistic Add-to-Cart state management, and containerized microservice integrations connecting payments, dispatch, and CRM.',
    domain: 'Retail & E-Commerce',
    capability: 'Storefront Engineering & Headless Commerce',
    clientName: "Nordic Direct-to-Consumer Retailer",
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
        'The retailer sought to modernize customer-facing interfaces without disrupting active operational workflows. Cart interactions previously blocked user interaction while waiting for server confirmation, creating perceived sluggishness that drove abandonment during checkout.',
      bulletPoints: [
        'Cart friction: Every tap on "Add to Cart" waited for backend confirmation before updating the screen, introducing perceptible delays.',
        'Complex third-party integrations: Payment gateway, parcel dispatchers, and custom CRM services required synchronized connectivity without regressions.',
        'Engineering bottleneck: Undocumented backend APIs and lack of automated regression tests slowed developer velocity and made release cycles risky.',
      ],
    },
    solution: {
      title: 'Decoupled Storefront with Optimistic UI & Containerized Kubernetes Microservices',
      description:
        'Cauders team members architected and modernized the storefront and backend as an integrated architecture prior to Cauders: delivering a high-performance Next.js and React frontend on Vercel paired with a typed Node.js/TypeScript REST API orchestrated via Docker containers on Kubernetes.',
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
    publicLabel: "Post-Merger Enterprise Telecom Platform",
    deliveryContext: {
      "tier": "tier-2",
      "badge": "White Labeled",
      "label": "White Labeled",
      "description": "Delivered as a white-labeled engineering engagement by members of the Cauders technical team."
},
    slug: 'telecom-core-infrastructure-portal',
    title: 'Unifying Digital Customer Services Post-Merger for a National Telecom Leader',
    subtitle: 'High-availability customer portal connected directly to legacy core infrastructure, real-time government eKYC verification, and hardware e-commerce.',
    domain: 'Enterprise Systems & Telecom',
    capability: 'Enterprise Web Engineering & Core System Integration',
    clientName: "Tier-1 Telecommunications Operator",
    isNda: true,
    industry: 'Telecommunications & Infrastructure',
    duration: '8-10 Months',
    deliverables: [
      'Unified High-Traffic Web Portal (Laravel, Livewire, Alpine.js)',
      'Decoupled Node.js Integration Layer to Core Telecom Infrastructure',
      'Real-Time Government eKYC Identity Verification Pipeline',
      'Unified Subscription Management for Legacy & New Mobile Plans',
      'Integrated Hardware E-Commerce (Smartphones & Wi-Fi Routers)',
      'Resilient Asynchronous Data Buffering and Synchronization',
    ],
    metrics: [
      { label: 'Subscriber Base', value: 'Multi-Million' },
      { label: 'Core Onboarding', value: 'SIM & eSIM' },
      { label: 'eKYC Verification', value: 'Real-Time Stream' },
      { label: 'Traffic Resilience', value: 'Buffered Queues' },
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
        'The engagement team engineered an enterprise web portal powered by Laravel, Livewire, and Alpine.js for rapid, enterprise-grade UI delivery, backed by a decoupled Node.js integration layer that buffers and validates requests asynchronously before dispatching to legacy core infrastructure.',
      keyHighlights: [
        'Built real-time API integrations communicating seamlessly with legacy core platforms and government eKYC identity portals.',
        'Created a unified self-service journey allowing subscribers from both merged entities to manage legacy plans, activate new 5G tiers, and purchase hardware.',
        'Implemented asynchronous buffering queues engineered for transaction recovery and state continuity during high-concurrency billing updates.',
      ],
    },
    architecture: {
      title: 'Resilient Cloud-to-Core Telecom Architecture',
      stack: ['Laravel', 'Livewire', 'Alpine.js', 'Node.js', 'MySQL', 'Government eKYC APIs', 'REST APIs', 'Cloud High-Availability Clusters'],
      description:
        'Laravel/Livewire presentation portal communicating via secure API requests with a decoupled Node.js integration layer. The Node.js tier acts as a resilient buffer, validating requests and orchestrating real-time transactions with legacy core systems and external eKYC verification portals.',
    },
    outcome: {
      headline: 'Unified Onboarding for Millions with Verified Regulatory Compliance Workflows',
      description:
        'The portal successfully bridged two national subscriber bases into a single digital destination with resilient transaction synchronization and unified account journeys.',
      impactList: [
        'Successfully deployed high-availability portal handling massive concurrent traffic spikes with low drop-offs and resilient queue-buffered synchronization.',
        'Automated customer identity verification (eKYC), eliminating manual branch visits and accelerating subscriber activations.',
        'Centralized account management across merged subscriber cohorts, drastically lowering operational support overhead.',
      ],
    },
  },
  {
    id: 'smart-building-proptech-platform',
    publicLabel: "Enterprise PropTech & Smart Building IoT Platform",
    deliveryContext: {
      "tier": "tier-2",
      "badge": "White Labeled",
      "label": "White Labeled",
      "description": "Delivered as a white-labeled engineering engagement by members of the Cauders technical team."
},
    slug: 'smart-building-proptech-platform',
    title: 'Optimizing an Enterprise Smart Building & Workplace SaaS Platform Across 36,000+ Devices',
    subtitle: 'White-labeled platform engineering and performance stabilization: S3 cache-first architecture, SAML 2.0 enterprise SSO, frontend bundle reduction, and IoT gateway reliability across 36,000+ IoT devices.',
    domain: 'PropTech & Enterprise IoT',
    capability: 'Platform Engineering & IoT Integration',
    clientName: "Commercial PropTech Provider",
    isNda: true,
    industry: 'Real Estate & PropTech',
    duration: '8-12 Months',
    deliverables: [
      'Multi-Tenant Platform Modernization & IoT Gateway Reliability',
      'Amazon S3 Cache-First Layer Cutting Database Read Load by 80–95%',
      'Frontend Bundle Optimization (-43% stat, -28% gzipped)',
      'Enterprise SAML 2.0 Single Sign-On (SSO) on AWS Lambda',
      'IoT Edge Gateway Telemetry Integration (Hardware Edge Gateways) via MQTT',
      'OWASP ZAP Hardening Remediating 300+ Security Vulnerabilities',
      'SaaS Modules for Permits, Quotes, Jobs, and Reactive Tasks',
    ],
    metrics: [
      { label: 'Database Read Load', value: '80–95% Reduction' },
      { label: 'Vulnerabilities Fixed', value: '300+ Remediated' },
      { label: 'Enterprise Onboarding', value: 'Days → Minutes' },
      { label: 'Managed Devices', value: '36,000+ IoT Devices' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792751019/Gemini_Generated_Image_o89e3to89e3to89e_ivkyvx.jpg',
    overview:
      'A multi-tenant commercial PropTech and workplace SaaS platform operating across 36,000+ IoT devices required targeted modernization and infrastructure stabilization. As part of a white-labeled engineering partnership, members of the Cauders technical team were engaged to resolve database read contention, remediate 300+ security vulnerabilities, streamline enterprise SSO onboarding, and optimize web performance.',
    challenge: {
      title: 'Mission-Critical Continuity, Severe Database Load & Security Deficits',
      description:
        'Commercial facilities depended on the platform continuously for access monitoring, automated building schedules, and facilities workflows, requiring all modernization and caching cutovers to be executed without operational downtime.',
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
        'Engineered an Amazon S3 caching layer as FastAPI microservices: files are served directly from S3, slashing database read load by 80–95% without altering underlying schemas.',
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
        'Reduced operational database read load by 80–95% through the S3 caching layer.',
        'Shrunk frontend bundle size by 43% and resolved memory leaks across 20+ components, boosting heap efficiency by 17.3%.',
        'Cut enterprise customer onboarding from days of manual setup to self-service minutes with SAML 2.0 SSO.',
      ],
    },
  },
  {
    id: 'global-language-exchange-platform',
    publicLabel: "Social Networking & Cultural Exchange Platform",
    deliveryContext: {
      "tier": "tier-2",
      "badge": "White Labeled",
      "label": "White Labeled",
      "description": "Delivered as a white-labeled engineering engagement by members of the Cauders technical team."
},
    slug: 'global-language-exchange-platform',
    title: 'Scaling a Real-Time Cultural Exchange & Language Learning Platform to 1M+ Downloads',
    subtitle: 'Decoupled asynchronous neural translation workers, high-concurrency WebSockets, and privacy-preserving matchmaking powering an Android consumer hit.',
    domain: 'Consumer Mobile & Real-Time Communication',
    capability: 'Mobile Product Engineering & Asynchronous Translation',
    clientName: "Global Consumer Mobile Publisher",
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
    publicLabel: "Fashion Discovery & Social-Commerce Experience",
    deliveryContext: {
      "tier": "tier-3",
      "badge": "Prior Team Experience",
      "label": "Prior Team Experience",
      "description": "Architected and engineered by Cauders team members prior to Cauders."
},
    slug: 'social-commerce-fashion-discovery',
    title: 'Unifying AI-Assisted Virtual Styling, Digital Wardrobes, and Shop the Look Commerce',
    subtitle: 'Cross-platform mobile application combining social outfit discovery, AI Virtual Try-On, computer vision wardrobe tagging, and in-app checkout.',
    domain: 'Fashion-Tech & Social Commerce',
    capability: 'Mobile Engineering & AI Commerce Integration',
    clientName: "Fashion-Tech Social Commerce Venture",
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
      { label: 'Crash-Free Sessions', value: '95.9%' },
      { label: 'Daily Active Retention', value: '40% DAU' },
      { label: 'Checkout Integration', value: 'Instant Cart' },
      { label: 'Wardrobe Tagging', value: 'Automated AI' },
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
        'Cauders team members architected and developed the mobile social commerce platform entirely from scratch using Flutter, supported by Node.js microservices and Firebase real-time data infrastructure. Deep learning pipelines handle automated tagging and styling recommendations in the cloud.',
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
        'Achieved a 95.9% crash-free session rate across diverse iOS and Android hardware configurations.',
        'Achieved a 40% Daily Active User (DAU) retention rate fueled by personalized wardrobe recommendations and social polls.',
        'Established an instant discovery-to-purchase path linking creator outfits directly with partner retailer inventories.',
      ],
    },
  },
  {
    id: 'on-demand-delivery-marketplace',
    publicLabel: "Food Commerce & Multi-Role Delivery Workflows",
    deliveryContext: {
      "tier": "tier-2",
      "badge": "White Labeled",
      "label": "White Labeled",
      "description": "Delivered as a white-labeled engineering engagement by members of the Cauders technical team, consolidating modular role-based commerce and dispatch workflows."
},
    slug: 'on-demand-delivery-marketplace',
    title: 'Consolidating Multi-Role Commerce, Restaurant Discovery, and Live Delivery Dispatch',
    subtitle: 'Unifying customer ordering, restaurant vendor management, and driver dispatch into a single modular, role-based platform with real-time GPS tracking.',
    domain: 'Food Delivery & Multi-Role Logistics',
    capability: 'Modular Role-Based Architecture & Real-Time Logistics',
    clientName: "Regional On-Demand Delivery Network",
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
      { label: 'Driver Tracking', value: 'Real-Time GPS' },
      { label: 'Dispatch Loop', value: 'Live Courier Match' },
      { label: 'Client Architecture', value: 'Modular Flutter' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792261071/iStock-1458045238-scaled_edgfe2.jpg',
    overview:
      'A multi-region on-demand food commerce initiative required unifying fragmented mobile clients and streamlining ordering-to-dispatch operations. Through role-based architecture consolidation (AaharCart) and companion ordering-dispatch workflows (NearTap and MAMA), the engineering team delivered a synchronized logistics and food commerce ecosystem.',
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
        'As part of this delivery ecosystem, the AaharCart engagement consolidated three disparate mobile products (customer, merchant, and courier) into a unified modular role-based Flutter application, while companion delivery and ordering pipelines (NearTap and MAMA) streamlined localized merchant discovery and real-time GPS dispatch loops.',
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
        'Streamlined driver dispatch assignment and courier routing following order kitchen acceptance.',
        'Synchronized ordering, merchant fulfillment, and live courier delivery into a unified operational loop.',
      ],
    },
  },
  {
    id: 'api-marketplace-developer-gateway',
    publicLabel: "Internal API Engineering Capability",
    deliveryContext: {
      "tier": "tier-4",
      "badge": "Internal Capability",
      "label": "Internal Engineering Capability",
      "description": "Built in-house by Cauders engineering as an internal platform capability and developer tool."
},
    slug: 'api-marketplace-developer-gateway',
    title: 'Accelerating Developer Integration with an Interactive API Marketplace & Gateway',
    subtitle: 'Centralized developer portal, interactive endpoint testing playground, sub-millisecond Redis rate-limiting, and automated multi-language SDK generation.',
    domain: 'B2B Developer Tools & API Infrastructure',
    capability: 'API Gateway Engineering & Developer Enablement',
    clientName: "Internal Engineering Capability",
    isNda: false,
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
      { label: 'Stress Uptime', value: '90% (Stress Test)' },
      { label: 'Dev Onboarding', value: 'Weeks → Mins' },
      { label: 'Rate-Limit Checks', value: 'Sub-millisecond' },
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
        'Delivered sub-50ms routing latency and 90% gateway uptime under stress testing.',
        'Accelerated external developer onboarding from several weeks to less than fifteen minutes.',
        'Provided operators with complete visibility over monetization quotas, security telemetry, and API consumption.',
      ],
    },
  },
  {
    id: 'cognitive-fitness-gamified-platform',
    publicLabel: "Cognitive Fitness and Social Networking Application",
    deliveryContext: {
      "tier": "tier-3",
      "badge": "Prior Team Experience",
      "label": "Prior Team Experience",
      "description": "Architected and engineered by Cauders team members prior to Cauders."
},
    slug: 'cognitive-fitness-gamified-platform',
    title: 'Offline-Resilient Cognitive Training & Social Wellness Mobile Application',
    subtitle: 'Gamified brain-training exercises, high-frequency telemetry, local-first SQL offline caching, and global community leaderboards built with Flutter.',
    domain: 'Health-Tech & Gamified Social',
    capability: 'Mobile Engineering & Offline-First State Synchronization',
    clientName: "Cognitive Health & Wellness Startup",
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
      { label: 'Offline Caching', value: 'Local-First SQLite' },
      { label: 'State Sync', value: 'Asynchronous' },
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
        'Cauders team members engineered the cross-platform Flutter mobile client and backend microservices prior to Cauders, backed by Node.js, Redis Pub/Sub, and Firebase. A local-first SQL storage engine records game events on-device and syncs cleanly with cloud infrastructure when connection is restored.',
      keyHighlights: [
        'Implemented local-first SQL caching: cognitive workout metrics and reaction times save locally on device and automatically reconcile with the cloud with automated conflict resolution.',
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
        'Processed over 1,000 daily cognitive workouts supported by offline-first local SQL caching with automatic cloud reconnection synchronization.',
        'Delivered completely seamless offline play, enabling users to train anywhere without connectivity constraints.',
      ],
    },
  },
  {
    id: 'self-hosted-streaming-platform',
    publicLabel: "Self-Hosted Anime Streaming Platform & Video Ingestion Layer",
    deliveryContext: {
      "tier": "tier-3",
      "badge": "Prior Team Experience",
      "label": "Prior Team Experience",
      "description": "Architected and engineered by Cauders team members prior to Cauders."
},
    slug: 'self-hosted-streaming-platform',
    title: 'High-Performance Self-Hosted Streaming Architecture with Edge Reverse Proxy',
    subtitle: 'Decoupled Bun runtime backend on AWS EC2, edge-cached React frontend on Vercel, and reverse-proxy routing to deliver a responsive, low-cost self-hosted streaming architecture without hosting massive video files directly.',
    domain: 'Media & Digital Entertainment',
    capability: 'Edge Infrastructure & Streaming Architecture',
    clientName: "Community-Driven Digital Media Project",
    isNda: true,
    industry: 'Developer Tools & Cloud Platforms',
    duration: '3-4 Months',
    deliverables: [
      'Decoupled Low-Cost Self-Hosted Streaming Architecture with Reverse-Proxy Routing',
      'Ultra-Lean Backend Service Running on Bun Runtime on AWS EC2',
      'Edge-Rendered React Frontend Deployed Globally on Vercel',
      'Custom Edge Reverse Proxy Shielding Requests from Third-Party Blocks',
      'AniList OAuth Sign-In & Integrated Disqus Community Comments',
      'Fully Customizable Multi-Theme User Settings Experience',
    ],
    metrics: [
      { label: 'UX Improvement', value: '+50% Better' },
      { label: 'Hosting Architecture', value: 'Low-Cost Self-Hosted' },
      { label: 'Playback Blocks', value: 'Eliminated via Proxy' },
      { label: 'Video Ingestion', value: 'Edge Shielded' },
    ],
    heroImage: 'https://res.cloudinary.com/cauders/image/upload/v1792912134/custom_ai_x7ljqa.jpg',
    overview:
      'A community-driven digital media streaming project needed an ultra-fast, modern streaming web interface that developers and enthusiasts could easily self-host. Rather than maintaining heavy, cost-prohibitive dedicated video hosting clusters, the platform was engineered to route streaming feeds reliably through an authenticated reverse-proxy architecture on minimal cloud infrastructure.',
    challenge: {
      title: 'High Infrastructure Costs & Third-Party Origin Blocking',
      description:
        'The platform needed to deliver a premium, responsive video experience without the crippling infrastructure expense of storing video files directly or risking viewer playback drops.',
      bulletPoints: [
        'Dedicated video hosting and high CDN egress bandwidth were economically infeasible for a free, community-run initiative.',
        'Third-party streaming servers frequently blocked or throttled requests arriving directly from thousands of individual user browsers.',
        'The existing interface was dated, lacked community sign-in, and offered zero personalization or theme customization.',
      ],
    },
    solution: {
      title: 'Decoupled Bun Metadata Backend with Edge Reverse Proxy Protection',
      description:
        'Cauders team members architected the self-hosted platform into a decoupled Bun backend on AWS EC2 and a responsive React frontend on Vercel. A reverse proxy sits between viewers and upstream streaming providers, masking connections so servers perceive requests from a stable, trusted origin.',
      keyHighlights: [
        'Utilized Bun on AWS EC2 as an ultra-fast, minimal backend service that returns video metadata and stream manifests without requiring local video file storage.',
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
      headline: 'High-Definition Streaming Delivered on a Low-Cost Self-Hosted Architecture',
      description:
        'The open-source self-hosted architecture delivered a 50%+ boost in viewer experience while keeping operating and hosting expenses minimal.',
      impactList: [
        'Achieved a 50%+ improvement in user satisfaction through instantaneous player startup and modern interface design.',
        'Shipped an open-source, easily self-hostable setup that community members can deploy in minutes on minimal, low-cost cloud infrastructure.',
        'Eliminated stream blocking completely via the edge reverse proxy origin masking layer.',
      ],
    },
  },
  {
    id: 'contracting-service-portal',
    publicLabel: "Contracting & Service Portal",
    deliveryContext: {
      "tier": "tier-3",
      "badge": "Prior Team Experience",
      "label": "Prior Team Experience",
      "description": "Architected and engineered by Cauders team members prior to Cauders."
},
    slug: 'contracting-service-portal',
    title: 'High-Conversion Digital Showroom & Local SEO Lead Engine for Specialty Contractors',
    subtitle: 'Performance-engineered WordPress platform, interactive project galleries, local search schema, and automated in-home estimate lead capture funnels.',
    domain: 'Local Services & Digital Marketing',
    capability: 'Web Performance & Local Search Architecture',
    clientName: "Specialized Home Remodeling Contractor",
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
      { label: 'Inbound Lead Flow', value: 'Significant Increase' },
      { label: 'Turnaround Highlight', value: '2–3 Days' },
      { label: 'Digital Showroom', value: 'Interactive Galleries' },
      { label: 'Local Search', value: 'Geo-Targeted Schema' },
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
        'Significantly increased local organic lead flow and consultation estimate bookings.',
        'Engineered high-performance mobile loading with automated WebP photo gallery delivery.',
        'Propelled regional local search presence across targeted municipal service territories.',
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
