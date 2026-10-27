import { Palette, Brain, Database, Zap, Monitor, Smartphone, Blocks, CloudCog, ShoppingCart, PenTool, Compass, Building2, ShieldCheck, CheckCircle2, Lock, UserPlus, Users, Headphones, Wrench, Store, BarChart3, Rocket, Truck, GraduationCap, Home, Code, Layers, type LucideProps, Bot, AppWindow, TrendingUp, Shield, Server, Bug, type LucideIcon } from 'lucide-react';
import { toSlug } from "./utils";

import type { ComponentType, FC } from "react";
import placeholderImages from './placeholder-images.json';


export type Project = {
 id: number;
 slug: string;
 title: string;
 description: string;
 longDescription: string;
 category: 'Web App' | 'Mobile App' | 'AI/ML';
 imageUrl: string;
 technologies?: string[];
 gallery: string[];
 featured: boolean;
 url: string;
 industry: string;
 status: string;
 year: number;
 implementation: string[];
 mobileScreenshots?: string[];
 testimonial?: {
 author: string;
 text: string;
 } | null;
};

export const jobOpenings = [
 {
 title: 'Senior AI/ML Engineer',
 location: 'Lahore, Pakistan',
 department: 'Engineering',
 level: 'Senior',
 type: 'Full-time',
 description: 'Lead the development of intelligent systems, from predictive models to generative AI integrations, for our enterprise clients.'
 },
 {
 title: 'Backend Developer',
 location: 'Lahore, Pakistan',
 department: 'Engineering',
 level: 'Mid-Level',
 type: 'Full-time',
 description: 'Architect and build scalable APIs, microservices, and server-side logic powering our web and mobile platforms.'
 },
 {
 title: 'Flutter Developer',
 location: 'Lahore, Pakistan',
 department: 'Engineering',
 level: 'Mid-Level',
 type: 'Full-time',
 description: 'Create high-quality, cross-platform mobile applications that deliver seamless experiences for our clients.'
 },
 {
 title: 'Frontend Developer',
 location: 'Lahore, Pakistan',
 department: 'Engineering',
 level: 'Mid-Level',
 type: 'Full-time',
 description: 'Build beautiful and performant user interfaces for our web applications using Next.js and React.'
 },
 {
 title: 'Junior DevOps Engineer',
 location: 'Lahore, Pakistan',
 department: 'DevOps',
 level: 'Junior',
 type: 'Full-time',
 description: 'Support our cloud infrastructure, CI/CD pipelines, and deployment workflows to keep our products running smoothly.'
 },
 {
 title: 'UI/UX Designer',
 location: 'Lahore, Pakistan',
 department: 'Design',
 level: 'Mid-Level',
 type: 'Contract',
 description: 'Craft intuitive and visually appealing interfaces for our web and mobile projects through user-centered design.'
 },
 {
 title: 'Intern - Software Engineering',
 location: 'Lahore, Pakistan',
 department: 'Engineering',
 level: 'Internship',
 type: 'Internship',
 description: 'Kickstart your career by working alongside experienced engineers on real-world projects across our technology stack.'
 }
];

export const projects: Project[] = [
 {
 id: 1,
 slug: 'wokine',
 title: 'Wokine',
 description: 'An award-winning digital creative agency delivering visually stunning and robust web experiences that capture your brand ethos and redefine global digital excellence.',
 longDescription: 'Wokine is a digital and creative agency based in Lille, France, that has been operating since 2004. They specialize in digital strategy, data, e-commerce, and web development, with a focus on combining creativity, technology, and ethical commitment to design digital solutions.',
 category: 'Web App',
 imageUrl: '/images/portfolio/wokine.png',
 technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
 gallery: [
 '/images/projects/wokine/gallery-1.png',
 '/images/projects/wokine/gallery-2.png',
 '/images/projects/wokine/gallery-3.png',
 '/images/projects/wokine/gallery-4.png',
 '/images/projects/wokine/gallery-5.png',
 '/images/projects/wokine/gallery-6.png',
 '/images/projects/wokine/gallery-7.png',
 '/images/projects/wokine/gallery-8.png',
 '/images/projects/wokine/gallery-9.png',
 ],
 featured: true,
 url: 'https://www.wokine.com/',
 industry: 'Digital Agency',
 status: 'Live',
 year: 2023,
 implementation: ['UI/UX', 'Development', 'Strategy'],
 testimonial: {
 author: "J. Dupont, CEO of Wokine",
 text: "Cauders delivered a visually stunning and technically robust website that perfectly captures our brand's ethos. Their attention to detail is unmatched."
 }
 },
 {
 id: 2,
 slug: 'fcinq',
 title: 'FCINQ',
 description: 'An award-winning digital agency delivering breathtaking immersive 3D web platforms that push creative boundaries and redefine digital experiences.',
 longDescription: 'FCINQ is a digital agency with 17 years of experience, specializing in Design & Code, Production & Motion, Social Media, and Branding. The agency has received numerous awards and is known for its creative strength, with a focus on "global experiences."',
 category: 'Web App',
 imageUrl: '/images/portfolio/fcinq.png',
 technologies: ['React', 'GSAP', 'Three.js', 'WebGL', 'Contentful'],
 gallery: [
 '/images/projects/fcinq/gallery-1.png',
 '/images/projects/fcinq/gallery-2.png',
 '/images/projects/fcinq/gallery-3.png',
 '/images/projects/fcinq/gallery-4.png',
 '/images/projects/fcinq/gallery-5.png',
 '/images/projects/fcinq/gallery-6.png',
 '/images/projects/fcinq/gallery-7.png',
 '/images/projects/fcinq/gallery-8.png',
 '/images/projects/fcinq/gallery-9.png',
 '/images/projects/fcinq/gallery-10.png',
 '/images/projects/fcinq/gallery-11.png',
 '/images/projects/fcinq/gallery-12.png', 
 ],
 featured: true,
 url: 'https://www.fcinq.com/',
 industry: 'Creative Agency',
 status: 'Live',
 year: 2022,
 implementation: ['Design', 'Code', 'Motion'],
 testimonial: {
 author: "L. Martin, Creative Director at FCINQ",
 text: "The immersive 3D experience Cauders built for us is breathtaking. They pushed the boundaries of web technology while staying true to our creative vision."
 }
 },
 {
 id: 3,
 slug: 'tasweerkash',
 title: 'Tasweerkash',
 description: 'A media production company led by a National Award winner, offering specialized services in wedding, event, and portrait photography to capture unforgettable moments with unmatched artistic vision.',
 longDescription: 'Tasweerkash is a photography and media production company led by a National Award winner. The company offers services including wedding, event, and portrait photography, as well as photo education. The website features a portfolio and client testimonials.',
 category: 'Web App',
 imageUrl: '/images/portfolio/tasweerkash.jpg',
 technologies: ['Wordpress', 'PHP', 'jQuery', 'MySQL', 'Elementor'],
 gallery: [
 '/images/projects/tasweerkash/gallery-1.png',
 '/images/projects/tasweerkash/gallery-2.png',
 '/images/projects/tasweerkash/gallery-3.png',
 '/images/projects/tasweerkash/gallery-4.png',
 '/images/projects/tasweerkash/gallery-5.png',
 '/images/projects/tasweerkash/gallery-6.png',
 '/images/projects/tasweerkash/gallery-7.png',
 '/images/projects/tasweerkash/gallery-8.png',
 ],
 featured: false,
 url: 'https://www.tasweerkash.com/',
 industry: 'Photography',
 status: 'Live',
 year: 2021,
 implementation: ['Branding', 'Development'],
 testimonial: {
 author: "A. Khan, Tasweerkash",
 text: "The new website is both beautiful and functional, providing a great platform to showcase our work. The team was professional and responsive throughout."
 }
 },
 {
 id: 4,
 slug: 'association-of-learning',
 title: 'Association of Learning',
 description: 'A UK-based online provider of flexible, affordable home learning courses for adults, offering personalized tutor support to drive student engagement.',
 longDescription: 'Association of Learning is a UK-based organization offering affordable and flexible home learning courses for adults. They provide a wide range of courses, including A Levels, GCSEs, and Diplomas, with a focus on personalized tutor support.',
 category: 'Web App',
 imageUrl: '/images/portfolio/association-of-learning.png',
 technologies: ['LMS', 'PHP', 'Moodle', 'MySQL', 'JavaScript'],
 gallery: [
 '/images/projects/association-of-learning/gallery-9.jpeg',
 '/images/projects/association-of-learning/gallery-1.png',
 '/images/projects/association-of-learning/gallery-2.png',
 '/images/projects/association-of-learning/gallery-3.png',
 '/images/projects/association-of-learning/gallery-4.png',
 '/images/projects/association-of-learning/gallery-5.png',
 '/images/projects/association-of-learning/gallery-6.png',
 '/images/projects/association-of-learning/gallery-7.png',
 '/images/projects/association-of-learning/gallery-8.png',
 ],
 featured: false,
 url: 'https://associationoflearning.com/about/',
 industry: 'Education',
 status: 'Live',
 year: 2020,
 implementation: ['LMS Integration', 'Development'],
 testimonial: {
 author: "Dr. Davies, Head of eLearning",
 text: "Integrating our new LMS was a complex task, but Cauders handled it flawlessly. Student engagement has increased significantly since the launch."
 }
 },
 {
 id: 5,
 slug: 'peveril-podiatry',
 title: 'Peveril Podiatry',
 description: 'A local podiatry clinic providing expert foot and ankle care, offering a clean, professional, and user-friendly platform for patients to book services.',
 longDescription: 'Peveril Podiatry is a local podiatry clinic in the UK that provides assessments, diagnoses, and treatments for various foot and ankle issues. Their services include nail care, skin care, orthotics, and pain management, and they have an experienced team including a podiatric surgeon.',
 category: 'Web App',
 imageUrl: '/images/portfolio/peveril-podiatry.jpg',
 gallery: [
 '/images/projects/peveril-podiatry/gallery-1.png',
 '/images/projects/peveril-podiatry/gallery-2.png',
 '/images/projects/peveril-podiatry/gallery-3.png',
 '/images/projects/peveril-podiatry/gallery-4.png',
 ],
 featured: false,
 url: 'https://peverilpodiatry.co.uk/',
 industry: 'Healthcare',
 status: 'Live',
 year: 2022,
 implementation: ['Web Design', 'Development'],
 testimonial: {
 author: "Sarah Evans, Clinic Manager",
 text: "Our new website has made it so much easier for patients to find and book our services. The design is clean, professional, and very user-friendly."
 }
 },
 {
 id: 6,
 slug: 'it-centre-app',
 title: 'IT Centre App',
 description: 'A complete mobile ERP solution for computer training institutes to simplify operations, manage admissions, and seamlessly track daily student attendance.',
 longDescription: 'An app that serves as a complete ERP solution for computer training institutes and digital skills academies. It helps simplify daily operations, manage admissions, track attendance, and provide a dashboard for students and staff.',
 category: 'Mobile App',
 imageUrl: '/images/portfolio/it-centre-app.png',
 technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
 gallery: [
 '/images/projects/it-centre-app/gallery-1.png',
 '/images/projects/it-centre-app/gallery-2.png',
 '/images/projects/it-centre-app/gallery-3.png',
 ],
 featured: true,
 url: 'https://play.google.com/store/apps/details?id=com.itcentre',
 industry: 'Education Technology',
 status: 'Live',
 year: 2023,
 implementation: ['Mobile Dev', 'Backend', 'UI/UX'],
 mobileScreenshots: [
 '/images/projects/it-centre-app/gallery-4.png',
 '/images/projects/it-centre-app/gallery-5.png', 
 '/images/projects/it-centre-app/gallery-6.png', 
 ],
 testimonial: {
 author: "M. Ali, IT Centre",
 text: "The ERP app has transformed how we manage our institute. It's intuitive, efficient, and has saved us countless hours of administrative work."
 }
 },
 {
 id: 7,
 slug: 'fajira-admin',
 title: 'Fajira Admin',
 description: 'An intuitive mobile e-commerce management app enabling grocery store owners to effortlessly manage orders, products, and promotions directly from their phones.',
 longDescription: 'A mobile app solution for small businesses and online e-commerce companies in the grocery sector. It allows store owners to manage orders, products, categories, and promotions directly from their phones.',
 category: 'Mobile App',
 imageUrl: '/images/portfolio/fajira-admin.png',
 technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
 gallery: [
 '/images/portfolio/fajira-admin.png', 
 ],
 featured: false,
 url: 'https://play.google.com/store/apps/details?id=com.grocery.admin',
 industry: 'E-commerce',
 status: 'Live',
 year: 2022,
 implementation: ['Mobile Dev', 'Firebase'],
 mobileScreenshots: [
 '/images/projects/fajira-admin/gallery-1.png',
 '/images/projects/fajira-admin/gallery-2.png',
 '/images/projects/fajira-admin/gallery-3.png',
 ],
 testimonial: {
 author: "Fatima, Grocery Owner",
 text: "Managing my store from my phone has never been easier. The Fajira Admin app is a lifesaver for my small business."
 }
 },
 {
 id: 8,
 slug: 'reachi-kds',
 title: 'Reachi KDS',
 description: 'A digital Kitchen Display System designed to replace paper tickets, helping restaurants manage customer orders rapidly and making peak hours less stressful.',
 longDescription: 'A digital screen app designed for commercial kitchens to replace paper order tickets. It helps restaurants manage, prioritize, and track customer orders, aiming to make operations more efficient.',
 category: 'Mobile App',
 imageUrl: '/images/portfolio/reachi-kds.png',
 technologies: ['Android', 'Kotlin', 'Socket.IO', 'REST APIs'],
 gallery: [
 '/images/projects/reachi-kds/gallery-1.png',
 '/images/projects/reachi-kds/gallery-2.png',
 '/images/projects/reachi-kds/gallery-3.png',
 '/images/projects/reachi-kds/gallery-4.png',
 '/images/projects/reachi-kds/gallery-5.png',
 ],
 featured: true,
 url: 'https://play.google.com/store/apps/details?id=com.reachikds',
 industry: 'Restaurant Tech',
 status: 'Live',
 year: 2023,
 implementation: ['Android Dev', 'API'],
 mobileScreenshots: [ 
 ],
 testimonial: {
 author: "Chef Antoine, The Gourmet Kitchen",
 text: "The Reachi KDS has revolutionized our kitchen workflow. Orders are faster, more accurate, and our staff is less stressed during peak hours. A must-have."
 }
 },
 {
 id: 9,
 slug: 'binof-trainer',
 title: 'BINOF Trainer',
 description: 'A powerful mobile platform for trainers to manage clients, track daily exercise routines, and evaluate performance data for highly personalized training plans.',
 longDescription: 'A demo app for trainers who use the BINOF system. It provides a platform for trainers to manage their clients, with features for communication, exercise tracking, and performance evaluation.',
 category: 'Mobile App',
 imageUrl: '/images/portfolio/binof-trainer.png',
 technologies: ['React Native', 'GraphQL', 'Apollo Client', 'PostgreSQL'],
 gallery: [ 
 '/images/projects/binof-trainer/gallery-8.png',
 ],
 featured: false,
 url: 'https://play.google.com/store/apps/details?id=com.binofapp.trainer',
 industry: 'Fitness',
 status: 'Demo',
 year: 2021,
 implementation: ['Mobile Dev', 'GraphQL'],
 mobileScreenshots: [
 '/images/projects/binof-trainer/gallery-1.png',
 '/images/projects/binof-trainer/gallery-2.png',
 '/images/projects/binof-trainer/gallery-3.png',
 '/images/projects/binof-trainer/gallery-4.png',
 '/images/projects/binof-trainer/gallery-5.png',
 '/images/projects/binof-trainer/gallery-6.png', 
 ],
 testimonial: {
 author: "Lead Athletic Trainer, Fitness Studio",
 text: "This app is an amazing tool for managing my clients. The performance tracking is a game-changer for personalized training plans."
 }
 },
 {
 id: 10,
 slug: 'diamond-gym-trainer',
 title: 'Diamond Gym Trainer',
 description: 'A comprehensive mobile fitness companion providing users with workout routines, exercise demonstrations, progress tracking, and detailed nutritional guidance.',
 longDescription: 'This is a fitness app that serves as a comprehensive companion for individuals aiming for a healthier lifestyle. It includes workout routines, exercise demonstrations, progress tracking, and nutritional guidance.',
 category: 'Mobile App',
 imageUrl: '/images/portfolio/diamond-gym-trainer.png',
 technologies: ['React Native', 'Firebase', 'Chart.js', 'Realm'],
 gallery: [
 '/images/projects/diamond-gym-trainer/gallery-4.png', 
 '/images/projects/diamond-gym-trainer/gallery-5.png', 
 ],
 featured: false,
 url: 'https://play.google.com/store/apps/details?id=com.diamondgymrd.trainer',
 industry: 'Fitness',
 status: 'Live',
 year: 2022,
 implementation: ['Mobile Dev', 'Firebase'],
 mobileScreenshots: [
 '/images/projects/diamond-gym-trainer/gallery-1.png', 
 '/images/projects/diamond-gym-trainer/gallery-2.png', 
 '/images/projects/diamond-gym-trainer/gallery-3.png', 
 ]
 },
 {
 id: 11,
 slug: 'clipinn',
 title: 'Clipinn',
 description: 'A comprehensive HR software solution designed to simplify task management, streamline employee hiring processes, and integrate seamless payroll operations.',
 longDescription: 'An HR software designed to simplify human resources management. It offers a range of features, including attendance tracking, task management, employee and lead management, hiring tools, and a payroll system. The platform also includes collaboration tools and a mobile app.',
 category: 'Web App',
 imageUrl: '/images/portfolio/clipinn.png',
 technologies: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'AWS'],
 gallery: [ 
 '/images/projects/clipinn/gallery-2.png', 
 '/images/projects/clipinn/gallery-3.png', 
 '/images/projects/clipinn/gallery-4.png', 
 '/images/projects/clipinn/gallery-5.png', 
 '/images/projects/clipinn/gallery-6.png', 
 '/images/projects/clipinn/gallery-7.png', 
 '/images/projects/clipinn/gallery-8.png', 
 '/images/projects/clipinn/gallery-9.png', 
 ],
 featured: false,
 url: 'https://clipinn.com/',
 industry: 'HR Tech',
 status: 'Live',
 year: 2021,
 implementation: ['Full-stack Dev', 'SaaS'],
 testimonial: {
 author: "Head of People Operations, Enterprise Client",
 text: 'Clipinn streamlined our HR processes perfectly. The task management and payroll features are incredibly powerful yet easy to use.'
 }
 },
 {
 id: 12,
 slug: 'the-kabul-grill',
 title: 'The Kabul Grill',
 description: 'A beautifully designed website for a high-end restaurant, providing seamless access to their extensive menu, catering services, and location details.',
 longDescription: 'The website for a restaurant, providing information on its menu, catering services, and location.',
 category: 'Web App',
 imageUrl: '/images/portfolio/the-kabul-grill.jpg',
 technologies: ['Wordpress', 'PHP', 'MySQL', 'Elementor', 'Google Maps API'],
 gallery: [
 '/images/projects/the-kabul-grill/gallery-1.png', 
 '/images/projects/the-kabul-grill/gallery-2.png', 
 '/images/projects/the-kabul-grill/gallery-3.png', 
 '/images/projects/the-kabul-grill/gallery-4.png', 
 '/images/projects/the-kabul-grill/gallery-5.png', 
 '/images/projects/the-kabul-grill/gallery-6.png', 
 '/images/projects/the-kabul-grill/gallery-7.png', 
 ],
 featured: false,
 url: 'https://thekabulgrill.com/',
 industry: 'Restaurant',
 status: 'Live',
 year: 2020,
 implementation: ['Web Design', 'Development'],
 testimonial: null
 },
 {
 id: 13,
 slug: 'snipbyte',
 title: 'Snipbyte',
 description: 'A platform for free and premium coding templates.',
 longDescription: 'SnipByte is a dynamic platform offering a rich collection of free and premium coding templates tailored for web developers of all levels—from beginners to seasoned pros. Whether you\'re building with React, Next.js, WordPress, PHP, HTML, Tailwind, or JavaScript, SnipByte provides ready-to-use resources to accelerate your workflow and elevate your projects',
 category: 'Web App',
 imageUrl: '/images/portfolio/snipbyte.png',
 technologies: ['React', 'Next.js', 'Vercel', 'TypeScript'],
 gallery: [
 '/images/projects/snipbyte/gallery-13.png', 
 '/images/projects/snipbyte/gallery-1.png', 
 '/images/projects/snipbyte/gallery-2.png', 
 '/images/projects/snipbyte/gallery-3.png', 
 '/images/projects/snipbyte/gallery-4.png', 
 '/images/projects/snipbyte/gallery-5.png', 
 '/images/projects/snipbyte/gallery-6.png', 
 '/images/projects/snipbyte/gallery-7.png', 
 '/images/projects/snipbyte/gallery-8.png', 
 '/images/projects/snipbyte/gallery-9.png', 
 '/images/projects/snipbyte/gallery-12.png', 
 '/images/projects/snipbyte/gallery-10.png', 
 '/images/projects/snipbyte/gallery-11.png', 
 ],
 featured: false,
 url: 'https://snipbyte.com/',
 industry: 'Technology',
 status: 'Live',
 year: 2023,
 implementation: ['Web Development'],
 testimonial: null
 },
 {
 id: 14,
 slug: 'fajira-ecommerce',
 title: 'Fajira Ecommerce',
 description: 'An ordering solution for businesses, including user, delivery, and admin apps.',
 longDescription: 'A mobile app designed as an ordering solution for businesses, specifically an "Ecommerce order app." It is part of a multi-platform solution that includes a user app, a delivery app, and an admin app to manage the business.',
 category: 'Mobile App',
 imageUrl: '/images/portfolio/fajira-ecommerce.png',
 technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
 gallery: [
 '/images/projects/fajira-ecommerce/gallery-1.png',
 ],
 featured: false,
 url: 'https://play.google.com/store/apps/details?id=com.fajira.ecommerce',
 industry: 'E-commerce',
 status: 'Live',
 year: 2022,
 implementation: ['Mobile Dev', 'Backend'],
 mobileScreenshots: [
 '/images/projects/fajira-ecommerce/gallery-4.png',
 '/images/projects/fajira-ecommerce/gallery-2.png',
 '/images/projects/fajira-ecommerce/gallery-3.png',
 ]
 },
 {
 id: 15,
 slug: 'portia-fabrics',
 title: 'Portia Fabrics',
 description: 'An online store for Pakistani designer brand fabrics.',
 longDescription: 'An online store that provides Pakistani designer brand fabrics, dresses, and outfits. They specialize in a wide range of products including shawls, laces, and bridal couture, with a focus on quality, customer service, and unique selections. The website serves as a worldwide fashion store.',
 category: 'Web App',
 imageUrl: '/images/portfolio/portia-fabrics.png',
 technologies: ['Shopify', 'eCommerce', 'Liquid', 'Payment Gateway Integration'],
 gallery: [
 '/images/projects/portia-fabrics/gallery-1.png',
 '/images/projects/portia-fabrics/gallery-2.png',
 '/images/projects/portia-fabrics/gallery-3.png',
 '/images/projects/portia-fabrics/gallery-4.png',
 '/images/projects/portia-fabrics/gallery-5.png',
 '/images/projects/portia-fabrics/gallery-6.png',
 '/images/projects/portia-fabrics/gallery-7.png',
 '/images/projects/portia-fabrics/gallery-8.png',
 ],
 featured: false,
 url: 'https://www.portia.pk/',
 industry: 'Fashion',
 status: 'Live',
 year: 2019,
 implementation: ['eCommerce Dev', 'Branding'],
 testimonial: {
 author: "S. Ahmed, Portia Fabrics",
 text: "The e-commerce solution provided by Cauders has been instrumental in our online growth. The platform is stable, fast, and easy to manage."
 }
 },
 {
 id: 16,
 slug: 'direct-coops',
 title: 'Direct Co-ops',
 description: 'A group-buying platform for small businesses.',
 longDescription: 'A group-buying platform and marketplace for small and medium-sized businesses and co-ops. It allows local independent businesses to leverage their group buying power to achieve better prices and compete with larger chains and online retailers.',
 category: 'Web App',
 imageUrl: '/images/portfolio/direct-coops.png',
 technologies: ['React', 'Node.js', 'Marketplace', 'E-commerce'],
 gallery: [
 '/images/projects/direct-coops/gallery-1.png',
 '/images/projects/direct-coops/gallery-2.png',
 '/images/projects/direct-coops/gallery-3.png',
 '/images/projects/direct-coops/gallery-4.png',
 ],
 featured: false,
 url: 'https://www.directcoops.com/',
 industry: 'B2B Marketplace',
 status: 'Live',
 year: 2020,
 implementation: ['Platform Dev', 'Strategy'],
 testimonial: null
 },
 {
 id: 17,
 slug: 'domene-no',
 title: 'Domene.no',
 description: 'A domain registration and web hosting service.',
 longDescription: 'Domene.no is a leading provider of domain registration and web hosting services in Norway. It offers a wide range of services for individuals and businesses to establish and maintain their online presence.',
 category: 'Web App',
 imageUrl: '/images/portfolio/domene-no.jpg',
 gallery: [
 '/images/projects/domene-no/gallery-1.png',
 '/images/projects/domene-no/gallery-2.png',
 '/images/projects/domene-no/gallery-3.png',
 '/images/projects/domene-no/gallery-4.png',
 ],
 featured: false,
 url: 'https://www.domene.no/',
 industry: 'Web Services',
 status: 'Live',
 year: 2018,
 implementation: ['Backend', 'Infrastructure'],
 testimonial: null
 }
].map(p => ({...p, slug: toSlug(p.title)} as Project));

const findProjectByTitle = (title: string) => {
 const project = projects.find(p => p.title === title);
 if (!project) {
 throw new Error(`Project with title "${title}" not found.`);
 }
 return project;
};

// ─── SERVICE CATEGORIES & SERVICES ─────────────────────────────────────────────
// Ordered by core expertise: AI, Automation & Software Solutions (tagline)



export type ServiceItem = {
 slug: string;
 title: string;
 description: string;
 capabilities: string[];
 icon: LucideIcon;
 ctaText: string;
};

export type ServiceCategory = {
 slug: string;
 title: string;
 description: string;
 icon: LucideIcon;
 heroDescription: string;
 services: ServiceItem[];
};


export const aiCategories: ServiceCategory[] = [
 {
 slug: 'ai-strategy-advisory',
 title: 'AI Strategy & Advisory',
 description: 'Guiding your AI journey with clear roadmaps and readiness assessments.',
 icon: Compass,
 heroDescription: 'We help leadership teams demystify AI, evaluate organizational readiness, and build actionable roadmaps that align technology investments with business KPIs.',
 services: [
 {
 slug: 'ai-roadmapping-consulting',
 title: 'AI Roadmapping & Consulting',
 description: 'Navigate the complexities of AI adoption. We work with your stakeholders to identify high-impact use cases, evaluate feasibility, and build a phased implementation plan.',
 capabilities: ['Use Case Identification', 'Feasibility Studies', 'ROI Modeling', 'Technology Stack Selection', 'Phased Implementation Planning'],
 icon: Compass,
 ctaText: 'Build Your Roadmap'
 },
 {
 slug: 'ai-readiness-assessments',
 title: 'AI Readiness Assessments',
 description: 'Before deploying AI, you need the right foundation. We evaluate your current data infrastructure, team capabilities, and security posture to ensure you are ready to scale AI safely.',
 capabilities: ['Data Quality Audits', 'Infrastructure Evaluation', 'Security & Compliance Reviews', 'Skills Gap Analysis', 'Governance Frameworks'],
 icon: CheckCircle2,
 ctaText: 'Assess Your Readiness'
 }
 ]
 },
 {
 slug: 'ai-product-engineering',
 title: 'AI Product Engineering',
 description: 'Custom AI applications, predictive models, and intelligent integrations.',
 icon: Code,
 heroDescription: 'Turn AI concepts into production-ready software. Our engineering teams build custom machine learning models, embed AI features into existing applications, and develop end-to-end intelligent platforms.',
 services: [
 {
 slug: 'custom-ai-development',
 title: 'Custom AI Development',
 description: 'We design and develop bespoke AI applications tailored to your specific operational workflows, ensuring seamless integration with your existing digital ecosystem.',
 capabilities: ['End-to-End AI Engineering', 'Algorithm Design', 'Cloud AI Services', 'Performance Tuning', 'Scalable Deployment'],
 icon: Code,
 ctaText: 'Develop Custom AI'
 },
 {
 slug: 'machine-learning-solutions',
 title: 'Machine Learning Solutions',
 description: 'Leverage your historical data to predict trends, automate complex decision-making, and uncover hidden patterns with advanced machine learning models.',
 capabilities: ['Predictive Analytics', 'Classification Models', 'Anomaly Detection', 'Recommendation Engines', 'Time Series Forecasting'],
 icon: TrendingUp,
 ctaText: 'Explore ML Solutions'
 },
 {
 slug: 'ai-integration-apis',
 title: 'AI Integration & APIs',
 description: 'Embed intelligence into your current software stack. We seamlessly integrate leading AI APIs (like OpenAI, Anthropic, or specialized models) into your web and mobile apps.',
 capabilities: ['API Integration', 'Microservices Architecture', 'Legacy System Enhancement', 'Third-Party AI Services', 'Real-time Processing'],
 icon: Blocks,
 ctaText: 'Integrate AI'
 }
 ]
 },
 {
 slug: 'generative-ai-llms',
 title: 'Generative AI & LLMs',
 description: 'Custom language models, autonomous agents, and rapid prototyping.',
 icon: Brain,
 heroDescription: 'Harness the power of foundational models. We specialize in Retrieval-Augmented Generation (RAG), fine-tuning custom language models, and orchestrating autonomous AI agents that act on your behalf.',
 services: [
 {
 slug: 'generative-ai-solutions',
 title: 'Generative AI Solutions',
 description: 'We design and integrate generative AI into your products and workflows. From LLM-powered assistants and retrieval-augmented generation to vector semantic search and AI-driven content generation.',
 capabilities: ['LLM Integration', 'AI Assistants & Chatbots', 'Vector Semantic Search', 'AI-Powered Text Generation', 'Model Fine-Tuning'],
 icon: Brain,
 ctaText: 'Explore Gen AI'
 },
 {
 slug: 'autonomous-ai-agents',
 title: 'Autonomous AI Agents',
 description: 'Design and orchestrate AI agents that do more than just chat. We build systems that can execute multi-step workflows, interact with APIs, and make supervised decisions.',
 capabilities: ['Agentic Workflows', 'Tool Use & API Calling', 'Multi-Agent Systems', 'Human-in-the-loop Controls', 'Task Automation'],
 icon: Bot,
 ctaText: 'Build AI Agents'
 },
 {
 slug: 'rapid-ai-prototyping',
 title: 'Rapid AI Prototyping (MVP)',
 description: 'Test your AI hypothesis in weeks, not months. We rapidly build Minimum Viable Products to validate use cases, measure accuracy, and secure stakeholder buy-in before full-scale development.',
 capabilities: ['Concept Validation', 'Rapid UI/UX', 'Proof of Concept (PoC)', 'MVP Development', 'User Testing'],
 icon: Rocket,
 ctaText: 'Prototype Your Idea'
 }
 ]
 },
 {
 slug: 'enterprise-ai-governance',
 title: 'Enterprise AI & Governance',
 description: 'Scaling AI safely with corporate automation, security, and compliance.',
 icon: Shield,
 heroDescription: 'As AI scales across the enterprise, security and governance become critical. We build robust frameworks to automate corporate workflows securely, ensuring data privacy and regulatory compliance.',
 services: [
 {
 slug: 'corporate-ai-automation',
 title: 'Corporate AI Automation',
 description: 'Streamline enterprise operations by automating complex, data-heavy workflows across HR, finance, legal, and customer support with secure, internal-facing AI tools.',
 capabilities: ['Internal Knowledge Bases', 'Document Processing', 'Workflow Automation', 'Enterprise Search', 'Departmental Copilots'],
 icon: Server,
 ctaText: 'Automate Operations'
 },
 {
 slug: 'ai-security-compliance',
 title: 'AI Security & Compliance',
 description: 'Deploy AI with confidence. We implement strict data boundaries, role-based access controls, and compliance frameworks to protect your proprietary data from leakage and misuse.',
 capabilities: ['Data Privacy Controls', 'LLM Vulnerability Testing', 'Bias & Fairness Audits', 'Compliance Mapping (GDPR/HIPAA)', 'Red Teaming'],
 icon: ShieldCheck,
 ctaText: 'Secure Your AI'
 }
 ]
 },
 {
 slug: 'data-intelligent-automation',
 title: 'Data & Intelligent Automation',
 description: 'Data modernization, analytics, and custom business applications.',
 icon: Database,
 heroDescription: 'AI is only as good as the data powering it. We modernize your data infrastructure, build analytics platforms, and develop the custom applications that connect your business systems.',
 services: [
 {
 slug: 'data-modernization-analytics',
 title: 'Data Modernization & Analytics',
 description: 'We transform fragmented, outdated data environments into reliable, governed, and analytics-ready platforms. From data strategy and integration to warehousing and business intelligence.',
 capabilities: ['Data Platform Strategy', 'Data Integration & Ingestion', 'Data Warehousing', 'Business Intelligence & Reporting', 'Data Lakehouse Architecture'],
 icon: Database,
 ctaText: 'Modernize Your Data'
 },
 {
 slug: 'automation-custom-applications',
 title: 'Automation & Custom Applications',
 description: 'We automate repetitive work, connect business systems, and develop applications that improve efficiency, accuracy, and scalability. From order processing to CRM integrations.',
 capabilities: ['Workflow Automation', 'System Integration', 'Order & Invoicing Automation', 'CRM & ERP Connectors', 'Custom Business Apps'],
 icon: Zap,
 ctaText: 'Automate Your Workflow'
 }
 ]
 }
];

export const serviceCategories: ServiceCategory[] = [

 // ── SOFTWARE DEVELOPMENT ──
// ── 2. SOFTWARE DEVELOPMENT ──
 {
 slug: 'software-solutions',
 title: 'Software Solutions',
 description: 'Custom-built software engineered for performance, scale, and longevity.',
 icon: Monitor,
 heroDescription: 'From responsive websites and native mobile applications to enterprise-grade platforms and SaaS products, we build software that solves real problems. Every solution is planned for usability, maintainability, scalability, and long-term performance.',
 services: [
 {
 slug: 'web-development',
 title: 'Web Development',
 description: 'We design secure, high-performance web applications tailored to your business needs. Our scalable solutions evolve with your company, ensuring long-term success.',
 capabilities: ['Custom Web Applications', 'API Development & Integration', 'Content Management Systems', 'E-Commerce Storefronts', 'Performance Optimization', 'SEO Integration', 'Website Security', 'Ongoing Maintenance'],
 icon: Monitor,
 ctaText: 'Build Your Web Platform',
 },
 {
 slug: 'mobile-app-development',
 title: 'Mobile App Development',
 description: 'We build intuitive mobile applications that deliver reliable performance and real value. From native iOS and Android to scalable cross-platform solutions.',
 capabilities: ['Native iOS & Android', 'Cross-Platform (Flutter, React Native)', 'Enterprise Mobility', 'Real-Time Applications', 'Offline-First Architecture', 'App Modernization', 'Mobile QA & Testing', 'Ongoing Support & Updates'],
 icon: Smartphone,
 ctaText: 'Build Your Mobile App',
 },
 {
 slug: 'custom-software-development',
 title: 'Custom Software Development',
 description: 'We build bespoke software solutions that solve unique operational challenges. We manage the entire lifecycle to improve productivity and connect your systems.',
 capabilities: ['Enterprise Systems', 'SaaS Products', 'Legacy Modernization', 'API & System Integration', 'Workflow Automation', 'Custom Dashboards', 'Data-Driven Applications', 'Continuous Improvement'],
 icon: Blocks,
 ctaText: 'Start Your Custom Build',
 },
 {
 slug: 'saas-development',
 title: 'SaaS Development',
 description: 'We design and build secure, cloud-based SaaS platforms built for scale. From multi-tenant architecture to seamless API integrations, we power your products.',
 capabilities: ['Multi-Tenant Architecture', 'Subscription & Billing Systems', 'Role-Based Access Control', 'API Development', 'Cloud Migration', 'Security & Compliance', 'Scalability Optimization', 'Monitoring & Support'],
 icon: CloudCog,
 ctaText: 'Launch Your SaaS',
 },
 
 ],
 },

 // ── 3. DESIGN & DIGITAL COMMERCE ──
 {
 slug: 'design-digital-commerce',
 title: 'Design',
 description: 'We design intuitive and engaging digital experiences across platforms, products, and commerce storefronts.',
 icon: Palette,
 heroDescription: 'Great software starts with great design. We blend aesthetics with deep user research to create intuitive, accessible, and high-converting interfaces for web applications, mobile apps, SaaS platforms, and e-commerce stores.',
 services: [
 {
 slug: 'ui-ux-design',
 title: 'UI/UX & Product Design',
 description: 'We create user-centric designs that drive engagement and conversions. Whether you are building a SaaS product, a mobile app, or a digital storefront, we ensure every interaction is meaningful.',
 capabilities: ['User Research & Testing', 'Wireframing & Prototyping', 'Visual Interface Design', 'Design Systems', 'Customer Journey Mapping', 'E-Commerce UX Optimization', 'Conversion Rate Optimization (CRO)'],
 icon: Palette,
 ctaText: 'Design Your Product',
 },
 ],
 },

 // ── 4. CLOUD & DIGITAL TRANSFORMATION ──
 {
 slug: 'cloud-digital-transformation',
 title: 'Digital Transformation',
 description: 'Modernize infrastructure, digitize operations, and scale without limits.',
 icon: CloudCog,
 heroDescription: 'We help organizations modernize technology, improve operational agility, connect systems, and create scalable digital foundations. From cloud migration and serverless development to digital strategy and business application optimization, we guide businesses through every stage of transformation.',
 services: [
 {
 slug: 'cloud-transformation',
 title: 'Cloud & Infrastructure',
 description: 'We help organizations migrate to cloud environments, modernize applications, implement serverless architectures, and optimize infrastructure for scalability, security, and cost efficiency. We work across AWS, Microsoft Azure, and Google Cloud Platform.',
 capabilities: ['Cloud Strategy & Migration', 'Application Modernization', 'Serverless Development', 'Kubernetes Orchestration', 'Infrastructure Optimization', 'Cloud Security', 'Disaster Recovery', 'Cost Optimization'],
 icon: CloudCog,
 ctaText: 'Transform Your Infrastructure',
 },
 {
 slug: 'digital-consulting-strategy',
 title: 'Digital Consulting & Strategy',
 description: 'We help businesses move from an initial concept to a practical and scalable digital solution. From digital maturity assessments and technology selection to customer experience strategy, product innovation, and digital commerce planning.',
 capabilities: ['Digital Maturity Assessment', 'Technology & Platform Selection', 'Product Strategy', 'Customer Experience Strategy', 'Digital Commerce Strategy', 'Process Improvement', 'Data & AI Strategy', 'Operating Model Design'],
 icon: Compass,
 ctaText: 'Get Strategic Guidance',
 },
 {
 slug: 'business-applications',
 title: 'Business Applications',
 description: 'We develop and optimize integrated business applications that connect critical functions, centralize information, and support enterprise-wide operations. From CRM and ERP integrations to marketing platforms, customer service systems, and supply-chain solutions.',
 capabilities: ['CRM Solutions', 'ERP Integrations', 'Marketing & Sales Platforms', 'Customer Service Systems', 'Supply-Chain Management', 'Finance Applications', 'Workflow Automation', 'Enterprise Data Integration'],
 icon: Building2,
 ctaText: 'Optimize Your Operations',
 },
 ],
 },

 // ── 5. QUALITY ASSURANCE & CYBERSECURITY ──
 {
 slug: 'quality-assurance-cybersecurity',
 title: 'Quality Assurance & Cybersecurity',
 description: 'Ship with confidence. Protect what matters.',
 icon: ShieldCheck,
 heroDescription: 'We help ensure that software is functional, secure, reliable, scalable, accessible, and ready for real-world use. Our QA services cover the complete software development lifecycle, and our security practices protect applications, data, infrastructure, and user accounts through practical, layered controls.',
 services: [
 {
 slug: 'quality-assurance',
 title: 'Quality Assurance',
 description: 'We define QA strategies, ensure compliance with industry standards, and establish processes that bake quality into your software lifecycle from day one. We focus on risk mitigation, accessibility, and governance.',
 capabilities: ['Test Strategy & Planning', 'Accessibility Testing (WCAG)', 'Compliance Audits', 'QA Process Consulting', 'Risk Mitigation', 'Quality Governance'],
 icon: ShieldCheck,
 ctaText: 'Establish QA Processes',
 },
 {
 slug: 'software-testing',
 title: 'Software Testing',
 description: 'We identify defects and validate that applications meet performance requirements before they reach users. We implement robust automated testing, exploratory manual testing, load testing, and seamless CI/CD pipeline integration.',
 capabilities: ['Automated Testing (Web & Mobile)', 'Manual Exploratory Testing', 'API & Integration Testing', 'Performance & Load Testing', 'CI/CD Pipeline Integration', 'Regression Testing'],
 icon: CheckCircle2,
 ctaText: 'Test Your Software',
 },
 {
 slug: 'cybersecurity-compliance',
 title: 'Cybersecurity & Compliance',
 description: 'We protect applications, data, infrastructure, and user accounts through practical security controls and testing services. From vulnerability assessments and penetration testing to identity management, encryption, and compliance readiness across GDPR, CCPA, HIPAA, and PCI-DSS.',
 capabilities: ['Vulnerability Assessments', 'Web & Network Security Testing', 'Identity & Access Management', 'Data Encryption', 'Firewall & Network Protection', 'Security Audits', 'Compliance Readiness (GDPR, HIPAA, PCI-DSS)', 'Vulnerability Remediation'],
 icon: Lock,
 ctaText: 'Secure Your Business',
 },
 ],
 },

 // ── 6. STAFF AUGMENTATION ──
 {
 slug: 'staff-augmentation',
 title: 'Staff Augmentation',
 description: 'Experienced, pre-vetted professionals ready to join your team.',
 icon: UserPlus,
 heroDescription: 'Cauders provides access to experienced, pre-vetted technology professionals who can work alongside your internal teams or operate as dedicated delivery teams. Whether you need individual specialists, full project teams, or long-term offshore capacity, we match the right talent to your requirements.',
 services: [
 {
 slug: 'staff-augmentation-offshoring',
 title: 'Staff Augmentation & Offshoring',
 description: 'We provide flexible access to skilled developers, designers, data engineers, DevOps specialists, QA engineers, and AI professionals. From short-term capacity expansion to long-term dedicated teams, our engagement models are designed for transparency, speed, and quality.',
 capabilities: ['Individual Specialist Placement', 'Dedicated Development Teams', 'Project-Based Teams', 'Offshore & Nearshore Delivery', 'Web & Mobile Developers', 'Data & AI Professionals', 'DevOps Engineers', 'Business Application Specialists'],
 icon: Users,
 ctaText: 'Scale Your Team',
 },
 ],
 },

 // ── 7. MAINTENANCE & SUPPORT ──
 {
 slug: 'maintenance-support',
 title: 'Maintenance & Support',
 description: 'Ongoing care that keeps your digital products competitive.',
 icon: Headphones,
 heroDescription: 'Our relationship with clients continues after launch. We provide ongoing technical support to protect your investment and ensure your digital products remain secure, functional, and competitive. From application monitoring and security patching to feature enhancements and e-commerce store management.',
 services: [
 {
 slug: 'application-maintenance-support',
 title: 'Application Maintenance & Support',
 description: 'We keep your applications and e-commerce platforms secure, stable, current, and ready for ongoing growth. From monitoring and bug fixes to performance optimization, security patching, infrastructure support, and continuous feature enhancements.',
 capabilities: ['Application Monitoring', 'Security Patching', 'Bug Fixes', 'Performance & Conversion Optimization', 'Infrastructure Support', 'Store & Platform Configuration', 'Feature Enhancements', 'Third-Party Integrations'],
 icon: Wrench,
 ctaText: 'Get Ongoing Support',
 },
 ],
 },
];

// Flat list of all services across all categories
const allServices = serviceCategories.flatMap(cat => cat.services);

// ─── INDUSTRIES ────────────────────────────────────────────────────────────────

export type Industry = {
 slug: string;
 title: string;
 description: string;
 heroDescription: string;
 challenges: string[];
 relevantCategorySlugs: string[];
 icon: LucideIcon;
};

export const industries: Industry[] = [
 {
 slug: 'healthcare',
 title: 'Healthcare',
 description: 'Secure, compliant, and intelligent solutions for modern healthcare.',
 heroDescription: 'Healthcare demands precision, security, and unwavering reliability. We build digital solutions that support patient care workflows, clinical operations, data management, and regulatory compliance while improving accessibility and operational efficiency.',
 challenges: [
 'Patient data privacy and HIPAA compliance',
 'Clinical workflow automation and efficiency',
 'Interoperability between healthcare systems',
 'Patient engagement and digital access',
 'Real-time monitoring and reporting',
 ],
 relevantCategorySlugs: ['software-development', 'artificial-intelligence-data', 'quality-assurance-cybersecurity', 'cloud-digital-transformation'],
 icon: Building2,
 },
 {
 slug: 'banking-financial-services',
 title: 'Finance',
 description: 'Next-generation platforms for banking, payments, and digital finance.',
 heroDescription: 'Financial institutions operate under intense regulatory scrutiny and rising customer expectations. We develop secure, compliant, and intelligent platforms for core banking, digital payments, wealth management, fraud detection, and customer engagement.',
 challenges: [
 'Regulatory compliance and audit readiness',
 'Fraud detection and prevention',
 'Legacy system modernization',
 'Digital-first customer experiences',
 'Real-time transaction processing',
 ],
 relevantCategorySlugs: ['software-development', 'artificial-intelligence-data', 'quality-assurance-cybersecurity', 'cloud-digital-transformation'],
 icon: BarChart3,
 },
 {
 slug: 'retail-ecommerce',
 title: 'Retail',
 description: 'Commerce experiences that convert, retain, and scale.',
 heroDescription: 'The retail landscape is evolving at pace. We help retailers and e-commerce businesses build seamless shopping experiences, optimize supply chains, personalize customer journeys, and create omnichannel strategies that drive revenue and loyalty.',
 challenges: [
 'Omnichannel customer experience',
 'Inventory forecasting and management',
 'Personalization at scale',
 'Cart abandonment and conversion optimization',
 'Supply-chain visibility and coordination',
 ],
 relevantCategorySlugs: ['design-digital-commerce', 'artificial-intelligence-data', 'software-development', 'maintenance-support'],
 icon: ShoppingCart,
 },
 {
 slug: 'technology-software',
 title: 'Technology',
 description: 'Helping tech companies build, scale, and ship faster.',
 heroDescription: 'Technology companies need partners who understand the pace of innovation. We support startups and enterprises in delivering stable, scalable, and reliable software products with accelerated development cycles, robust testing, and flexible team augmentation.',
 challenges: [
 'Rapid product iteration and time-to-market',
 'Scalability under growing user loads',
 'Technical debt and codebase modernization',
 'CI/CD pipeline optimization',
 'Talent acquisition and team scaling',
 ],
 relevantCategorySlugs: ['software-development', 'quality-assurance-cybersecurity', 'staff-augmentation', 'cloud-digital-transformation'],
 icon: Monitor,
 },
 {
 slug: 'startups-high-growth',
 title: 'Startups',
 description: 'From MVP to market leader, built for speed and scale.',
 heroDescription: 'Startups need to move fast without sacrificing quality. We help founders launch MVPs, validate product-market fit, scale architecture, and build engineering teams. Our approach balances speed with the technical foundations needed for sustainable growth.',
 challenges: [
 'MVP development and rapid validation',
 'Scaling architecture with user growth',
 'Limited budgets and lean teams',
 'Investor-ready technical infrastructure',
 'Finding specialized talent quickly',
 ],
 relevantCategorySlugs: ['software-development', 'design-digital-commerce', 'artificial-intelligence-data', 'staff-augmentation'],
 icon: Rocket,
 },
 {
 slug: 'logistics-supply-chain',
 title: 'Logistics',
 description: 'Transforming logistics with visibility, automation, and intelligent tracking.',
 heroDescription: 'In a world where speed and reliability are everything, supply chains must be smarter than ever. We build digital solutions that optimize fleet management, automate warehouse operations, and provide real-time tracking portals for end-to-end visibility.',
 challenges: [
 'Fleet management and route optimization',
 'Real-time inventory and shipment tracking',
 'Warehouse automation and efficiency',
 'Third-party logistics integration',
 'Data-driven supply chain forecasting',
 ],
 relevantCategorySlugs: ['software-development', 'artificial-intelligence-data', 'cloud-digital-transformation'],
 icon: Truck,
 },
 {
 slug: 'education-elearning',
 title: 'Education',
 description: 'Empowering learners with accessible, engaging, and scalable educational platforms.',
 heroDescription: 'The future of education is digital. We design and develop custom Learning Management Systems (LMS), interactive student portals, and virtual classrooms that deliver seamless educational experiences for schools, universities, and corporate training programs.',
 challenges: [
 'Student engagement and retention',
 'Scalable content delivery systems',
 'Remote learning accessibility',
 'Data security for student records',
 'Integration with existing educational tools',
 ],
 relevantCategorySlugs: ['software-development', 'design-digital-commerce', 'cloud-digital-transformation'],
 icon: GraduationCap,
 },
 {
 slug: 'real-estate',
 title: 'Real Estate',
 description: 'Modernizing property management, sales, and tenant experiences.',
 heroDescription: 'Real estate is moving beyond brick and mortar. We develop innovative PropTech solutions including property marketplaces, tenant management portals, and agency dashboards that streamline operations and enhance the buying, selling, and renting experience.',
 challenges: [
 'Streamlining property transactions',
 'Enhancing tenant communication and support',
 'Centralized property portfolio management',
 'Virtual tours and digital viewing experiences',
 'Automated rent collection and invoicing',
 ],
 relevantCategorySlugs: ['software-development', 'design-digital-commerce', 'staff-augmentation'],
 icon: Home,
 },
];


// ─── EXPORTS ───────────────────────────────────────────────────────────────────

export const getProjects = (): Project[] => projects.map(p => ({ ...p }));
export const getProjectBySlug = (slug: string): Project | undefined => projects.find(p => p.slug === slug);

export const getServiceCategories = () => [...serviceCategories].sort((a, b) => {
 const aIsSingle = a.services.length === 1;
 const bIsSingle = b.services.length === 1;
 if (aIsSingle && !bIsSingle) return 1;
 if (!aIsSingle && bIsSingle) return -1;
 return a.title.localeCompare(b.title);
});
export const getServiceCategoryBySlug = (slug: string) => serviceCategories.find(c => c.slug === slug);

export const getAiCategories = () => [...aiCategories].sort((a, b) => {
 const aIsSingle = a.services.length === 1;
 const bIsSingle = b.services.length === 1;
 if (aIsSingle && !bIsSingle) return 1;
 if (!aIsSingle && bIsSingle) return -1;
 return a.title.localeCompare(b.title);
});
export const getAiCategoryBySlug = (slug: string) => aiCategories.find(c => c.slug === slug);

export const getServices = () => allServices;
export const getServiceBySlug = (slug: string) => allServices.find(s => s.slug === slug);

export const getIndustries = () => [...industries].sort((a, b) => a.title.localeCompare(b.title));
export const getIndustryBySlug = (slug: string) => industries.find(i => i.slug === slug);

export const getProjectCategories = (): ProjectCategory[] => {
 const categories = projects.map(p => p.category);
 return [...new Set(categories)];
}

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

type ProjectCategory = 'Web App' | 'Mobile App' | 'AI/ML' | 'All';

