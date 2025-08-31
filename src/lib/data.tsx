
import { toSlug } from "./utils";
import { Code, Layers, PenTool, Rocket, type LucideProps } from 'lucide-react';
import type { ComponentType, FC } from "react";

type ServiceIcon = ComponentType<LucideProps>;
type ProjectCategory = 'Web App' | 'Mobile App' | 'Website' | 'AI/ML' | 'Cloud & DevOps' | 'VR';

export interface Project {
    title: string;
    slug: string;
    type: 'web' | 'mobile';
    category: ProjectCategory;
    description: string;
    tags: string[];
    imageUrl: string;
    aiHint: string;
    details: string;
    testimonial: {
        author: string;
        text: string;
    } | null;
    gallery: {
        type: 'web' | 'mobile';
        url: string;
        alt: string;
        aiHint: string;
    }[];
}


const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    type: 'web',
    category: 'Web App',
    description: 'A scalable online store with a custom CMS and integrated payment gateways.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/ecom/1200/800',
    aiHint: 'ecommerce website',
    details: `<p>We developed a feature-rich e-commerce platform from the ground up, designed for scalability and performance. The system includes a custom-built Content Management System (CMS) that allows for easy product updates, inventory management, and order tracking. We integrated Stripe for secure and seamless payment processing.</p><p>The frontend was built with Next.js for server-side rendering, ensuring fast page loads and excellent SEO. A responsive design was implemented using Tailwind CSS to provide a consistent user experience across all devices.</p>`,
    testimonial: {
        author: 'Jane Doe, CEO of ShopCo',
        text: 'Cauders delivered an exceptional platform that has significantly boosted our online sales. Their attention to detail and technical expertise were evident throughout the project.'
    },
    gallery: [
        { type: 'web', url: 'https://picsum.photos/seed/ecom-gallery1/1200/800', alt: 'Product page view', aiHint: 'product page' },
        { type: 'web', url: 'https://picsum.photos/seed/ecom-gallery2/1200/800', alt: 'Shopping cart interface', aiHint: 'shopping cart' },
    ]
  },
  {
    title: 'SaaS Dashboard',
    type: 'web',
    category: 'Web App',
    description: 'An analytics dashboard for a B2B software-as-a-service product.',
    tags: ['React', 'D3.js', 'Node.js', 'Express'],
    imageUrl: 'https://picsum.photos/seed/saas/1200/800',
    aiHint: 'analytics dashboard',
    details: `<p>This project involved creating a powerful and intuitive analytics dashboard for a B2B SaaS application. We used React for the frontend to build a highly interactive and component-based UI. For data visualization, we integrated D3.js to create custom, dynamic charts and graphs that provide deep insights into user data.</p><p>The backend was powered by Node.js and Express, providing a robust API for data retrieval and processing. The dashboard is fully responsive and offers a seamless experience on both desktop and mobile devices.</p>`,
    testimonial: null,
    gallery: []
  },
  {
    title: 'Corporate Website',
    type: 'web',
    category: 'Website',
    description: 'A modern, professional website for a leading financial services firm.',
    tags: ['Gatsby', 'Contentful', 'Animation', 'GraphQL'],
    imageUrl: 'https://picsum.photos/seed/corp/1200/800',
    aiHint: 'corporate business',
    details: `<p>We designed and developed a sophisticated corporate website for a financial services firm, focusing on professionalism and brand identity. The site was built with Gatsby for blazing-fast performance and security. We used Contentful as a headless CMS, allowing the client's marketing team to easily manage content without technical assistance.</p><p>Subtle animations and micro-interactions were implemented to create an engaging user experience. GraphQL was used to efficiently fetch data from Contentful, contributing to the site's speed and reliability.</p>`,
    testimonial: {
        author: 'John Smith, Marketing Director',
        text: 'The new website has elevated our online presence. Cauders team was professional, creative, and delivered a product that exceeded our expectations.'
    },
    gallery: [
        { type: 'web', url: 'https://picsum.photos/seed/corp-gallery1/1200/800', alt: 'Homepage hero section', aiHint: 'website homepage' },
        { type: 'web', url: 'https://picsum.photos/seed/corp-gallery2/1200/800', alt: 'About us page', aiHint: 'team page' },
    ]
  },
    {
    title: 'Mobile Banking App',
    type: 'mobile',
    category: 'Mobile App',
    description: 'A secure and intuitive mobile application for a new-age digital bank.',
    tags: ['React Native', 'Firebase', 'Biometrics', 'TypeScript'],
    imageUrl: 'https://picsum.photos/seed/mobile-bank/1200/800',
    aiHint: 'mobile banking',
    details: `<p>We built a secure and user-friendly mobile banking application for a modern digital bank. The app was developed using React Native, allowing for a single codebase to target both iOS and Android platforms. This project also included a web-based admin panel for bank employees to manage users and view analytics.</p><p>Security was a top priority, so we integrated biometric authentication (Face ID and Touch ID) for secure login and transactions. Firebase was used for the backend, providing services like Authentication, Firestore database, and Cloud Functions.</p>`,
    testimonial: null,
    gallery: [
        { type: 'mobile', url: 'https://picsum.photos/seed/mobile-gallery1/400/800', alt: 'App login screen', aiHint: 'mobile login' },
        { type: 'web', url: 'https://picsum.photos/seed/bank-admin-panel/1200/800', alt: 'Admin panel dashboard', aiHint: 'admin dashboard' },
        { type: 'mobile', url: 'https://picsum.photos/seed/mobile-gallery2/400/800', alt: 'Account dashboard screen', aiHint: 'mobile dashboard' },
        { type: 'mobile', url: 'https://picsum.photos/seed/mobile-gallery3/400/800', alt: 'Transaction history screen', aiHint: 'mobile transactions' },
    ]
  },
  {
    title: 'AI-Powered Chatbot',
    type: 'web',
    category: 'AI/ML',
    description: 'Customer service chatbot with natural language processing capabilities.',
    tags: ['Genkit', 'Dialogflow', 'TypeScript', 'Next.js'],
    imageUrl: 'https://picsum.photos/seed/chatbot/1200/800',
    aiHint: 'chatbot interface',
    details: `<p>This project involved developing an intelligent, AI-powered chatbot to handle customer service inquiries. We used Google's Genkit and Dialogflow to build the natural language processing (NLP) core, enabling the chatbot to understand and respond to a wide range of user questions.</p><p>The chatbot was integrated into a Next.js application, providing a seamless user experience. TypeScript ensured that the codebase was robust and easy to scale.</p>`,
    testimonial: {
        author: 'Emily White, Head of Support',
        text: 'The chatbot has revolutionized our customer support, reducing response times and freeing up our agents to handle more complex issues. A fantastic job by Cauders.'
    },
    gallery: []
  },
  {
    title: 'VR Training Simulation',
    type: 'web',
    category: 'VR',
    description: 'An immersive VR simulation for training industrial machine operators.',
    tags: ['Unity', 'Oculus SDK', 'C#', '3D Modeling'],
    imageUrl: 'https://picsum.photos/seed/vr/1200/800',
    aiHint: 'virtual reality',
    details: `<p>Developed a highly realistic virtual reality simulation to train operators of complex industrial machinery. Using Unity and the Oculus SDK, we created a safe, controlled environment where trainees can learn procedures and handle emergency scenarios without risk. C# scripting powers the interactive elements and training modules. Our team also handled the complete 3D modeling and texturing of the machinery and environment.</p>`,
    testimonial: {
        author: 'Safety Manager, IndusCorp',
        text: 'This VR training has drastically reduced onboarding time and improved safety compliance. The realism is astounding.'
    },
    gallery: [
        { type: 'web', url: 'https://picsum.photos/seed/vr-gallery1/1200/800', alt: 'User in VR headset', aiHint: 'vr headset' },
        { type: 'web', url: 'https://picsum.photos/seed/vr-gallery2/1200/800', alt: 'Machine interface in VR', aiHint: 'vr interface' },
    ]
  },
  {
    title: 'Cloud Migration & DevOps',
    type: 'web',
    category: 'Cloud & DevOps',
    description: 'Migrated a monolithic legacy system to a microservices architecture on AWS.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    imageUrl: 'https://picsum.photos/seed/cloud/1200/800',
    aiHint: 'cloud infrastructure',
    details: `<p>We led the complete overhaul of a legacy enterprise application, migrating it from an on-premise monolith to a modern, cloud-native microservices architecture on Amazon Web Services. We containerized services using Docker, orchestrated them with Kubernetes (EKS), and built a full CI/CD pipeline with Jenkins to automate testing and deployment. The result was improved scalability, reliability, and development velocity.</p>`,
    testimonial: null,
    gallery: []
  },
  {
    title: 'Healthcare Management',
    type: 'web',
    category: 'Web App',
    description: 'A HIPAA-compliant electronic health record (EHR) system for clinics.',
    tags: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
    imageUrl: 'https://picsum.photos/seed/health/1200/800',
    aiHint: 'healthcare system',
    details: `<p>This project involved the creation of a secure and comprehensive Electronic Health Record (EHR) system for medical clinics. Built with a robust .NET Core backend and an Angular frontend, the platform is fully HIPAA-compliant. Hosted on Microsoft Azure, it ensures data security and availability. Features include patient records management, appointment scheduling, and billing integration.</p>`,
    testimonial: {
      author: 'Dr. Alisha Chen',
      text: 'The EHR system is intuitive and has streamlined our clinic\'s entire workflow. Data security was our biggest concern, and Cauders delivered.'
    },
    gallery: []
  },
  {
    title: 'Logistics Optimization',
    type: 'mobile',
    category: 'Mobile App',
    description: 'An AI-driven mobile app for optimizing delivery routes in real-time.',
    tags: ['Python', 'Flutter', 'Google Maps API', 'AI/ML'],
    imageUrl: 'https://picsum.photos/seed/logistics/1200/800',
    aiHint: 'delivery route map',
    details: `<p>We developed an intelligent mobile application for a logistics company to optimize their delivery routes dynamically. The backend, built in Python, uses a machine learning model to calculate the most efficient routes based on traffic, delivery windows, and vehicle capacity. The cross-platform mobile app was built with Flutter, providing a native experience on both iOS and Android, with live map integration using the Google Maps API.</p>`,
    testimonial: null,
    gallery: [
        { type: 'mobile', url: 'https://picsum.photos/seed/logistics-gallery1/400/800', alt: 'App showing optimized route on a map', aiHint: 'map route app' },
        { type: 'mobile', url: 'https://picsum.photos/seed/logistics-gallery2/400/800', alt: 'Delivery list screen', aiHint: 'delivery list' },
        { type: 'mobile', url: 'https://picsum.photos/seed/logistics-gallery3/400/800', alt: 'Driver dashboard', aiHint: 'driver dashboard' },
    ]
  },
  {
    title: 'Fintech Security Suite',
    type: 'web',
    category: 'Web App',
    description: 'A multi-factor authentication and fraud detection system for financial apps.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Cybersecurity'],
    imageUrl: 'https://picsum.photos/seed/fintech/1200/800',
    aiHint: 'cyber security',
    details: `<p>We engineered a high-performance security suite for a fintech client. Using Java and Spring Boot, we built a scalable system for multi-factor authentication (MFA) and real-time fraud detection. Apache Kafka was implemented to process millions of transactions asynchronously, feeding data into a rules engine that flags suspicious activity instantly. The suite provides a set of APIs that can be easily integrated into any financial application.</p>`,
    testimonial: null,
    gallery: []
  },
  {
    title: 'Data Analytics Platform',
    type: 'web',
    category: 'AI/ML',
    description: 'A big data platform for processing and visualizing marketing campaign data.',
    tags: ['Spark', 'Hadoop', 'Tableau', 'Data Science'],
    imageUrl: 'https://picsum.photos/seed/data-platform/1200/800',
    aiHint: 'data analytics chart',
    details: `<p>We constructed a powerful data platform to help a major marketing firm analyze campaign performance. The backend utilizes Apache Spark and Hadoop to process terabytes of data efficiently. We then integrated Tableau to create rich, interactive visualizations and dashboards, enabling the client to derive actionable insights and measure ROI effectively. Our data science team also developed models to predict campaign success.</p>`,
    testimonial: {
      author: 'Marketing Head, AdWave',
      text: 'This platform gave us the insights we were missing. We can now make data-driven decisions with confidence.'
    },
    gallery: []
  },
  {
    title: 'Real-time Collaboration Tool',
    type: 'web',
    category: 'Web App',
    description: 'A web-based platform for teams to collaborate on documents in real-time, similar to Google Docs.',
    tags: ['WebSockets', 'React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://picsum.photos/seed/collab/1200/800',
    aiHint: 'collaboration software',
    details: `<p>We built a real-time document collaboration platform enabling multiple users to edit the same document simultaneously. The application uses WebSockets for instant communication between clients and a Node.js server. A React frontend provides a responsive and intuitive editing experience, while MongoDB stores document data. The platform supports rich text formatting, comments, and revision history.</p>`,
    testimonial: null,
    gallery: []
  }
].map(p => ({...p, slug: toSlug(p.title)} as Project));

const services: {
  icon: ServiceIcon;
  title: string;
  slug: string;
  description: string;
  details: string;
  included: string[];
  caseStudy: {
    title: string;
    projectSlug: string;
    description: string;
    imageUrl: string;
  } | null;
}[] = [];

export const getProjects = (): Project[] => projects.map(p => ({ ...p }));
export const getProjectBySlug = (slug: string): Project | undefined => projects.find(p => p.slug === slug);

export const getServices = () => services;
export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);

export const getProjectCategories = (): ProjectCategory[] => {
    const categories = projects.map(p => p.category);
    return [...new Set(categories)];
}
