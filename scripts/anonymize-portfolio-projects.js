const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'data.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const projectUpdates = {
  1: {
    title: 'Creative Agency Web Platform',
    description: 'Interactive web platform engineered with modular component architecture, responsive animations, and multi-region deployment.',
    longDescription: 'High-performance interactive agency website built with modular component architecture, fluid animations, and localized internationalization.',
  },
  2: {
    title: 'Interactive 3D Web Application',
    description: 'Interactive web application leveraging WebGL and hardware-accelerated animations for digital brand experiences.',
    longDescription: 'Immersive WebGL experience leveraging hardware-accelerated shaders and canvas rendering for interactive digital brand storytelling.',
  },
  3: {
    title: 'Media Production Showcase Platform',
    description: 'Digital media showcase platform featuring responsive high-resolution galleries, media caching, and client inquiry workflows.',
    longDescription: 'High-throughput digital asset portfolio featuring lazy-loaded high-resolution galleries, media caching, and inquiry management.',
  },
  4: {
    title: 'Distance Learning Management System',
    description: 'Online learning platform featuring modular course delivery, student progress tracking, and tutor communication workflows.',
    longDescription: 'Online learning platform featuring role-based course delivery, progress tracking, modular quiz evaluation, and student-tutor messaging.',
  },
  5: {
    title: 'Clinical Scheduling & Patient Portal',
    description: 'Healthcare booking application with real-time practitioner availability, appointment validation, and patient intake workflows.',
    longDescription: 'Healthcare clinic booking application with practitioner availability schedules, treatment catalog, and patient inquiry workflows.',
  },
  6: {
    title: 'Vocational Academy Operations ERP',
    description: 'Mobile ERP application managing student enrollment, attendance tracking, faculty scheduling, and administrative reporting.',
    longDescription: 'Mobile ERP solution for training institutes to simplify daily administrative operations, admissions management, and attendance records.',
  },
  7: {
    title: 'Retail Inventory & Order Management App',
    description: 'Mobile e-commerce administrative portal enabling order processing, catalog stock management, and promotional updates.',
    longDescription: 'Mobile administrative application for retail and grocery operations to manage daily customer orders, product catalogs, and pricing.',
  },
  8: {
    title: 'Kitchen Display & Order Dispatch System',
    description: 'Real-time commercial kitchen display application built with WebSocket communication for low-latency kitchen order ticket synchronization.',
    longDescription: 'Digital kitchen screen application designed for commercial kitchens to prioritize, route, and track preparation statuses in real time.',
  },
  9: {
    title: 'Personalized Fitness Coaching Platform',
    description: 'Mobile athletic training application providing custom workout schedule builder, telemetry tracking, and coach-client messaging.',
    longDescription: 'Mobile platform for fitness coaches and trainers to manage client rosters, track workout adherence, and monitor physical performance metrics.',
  },
  10: {
    title: 'Club Member Workout & Routine Companion',
    description: 'Fitness member companion app with interactive exercise routines, video demonstrations, progress logging, and nutritional tracking.',
    longDescription: 'Mobile fitness companion application providing structured exercise routines, exercise demonstrations, progress logging, and dietary tracking.',
  },
  11: {
    title: 'Enterprise Workforce & Payroll SaaS',
    description: 'Cloud-native HR platform integrating employee onboarding workflows, automated timesheet tracking, and compliance payroll processing.',
    longDescription: 'Human resources management system offering attendance tracking, task assignments, employee records, and payroll processing workflows.',
  },
  12: {
    title: 'Hospitality Menu & Catering Portal',
    description: 'Multi-location hospitality website featuring dynamic menu filtering, high-volume event catering requests, and location mapping.',
    longDescription: 'Hospitality website providing structured menu details, event catering request workflows, and location mapping information.',
  }
};

// Replace each project block for id: 1 through 12
for (let id = 1; id <= 12; id++) {
  const update = projectUpdates[id];
  // Match the project block with id: X
  const projectRegex = new RegExp(`(\\s*id:\\s*${id},[\\s\\S]*?slug:\\s*'[^']+',[\\s\\S]*?title:\\s*')[^']+('[\\s\\S]*?description:\\s*')[^']+('[\\s\\S]*?longDescription:\\s*')[^']+('[\\s\\S]*?)(testimonial:\\s*(?:{[\\s\\S]*?}|null))`, 'm');

  const match = content.match(projectRegex);
  if (match) {
    content = content.replace(projectRegex, `$1${update.title}$2${update.description}$3${update.longDescription}$4testimonial: null`);
    console.log(`Successfully updated project id: ${id}`);
  } else {
    console.error(`Could not match project id: ${id}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating data.tsx');
