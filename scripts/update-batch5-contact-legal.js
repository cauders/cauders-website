const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Update ContactPageContent.tsx
const contactPath = path.join(root, 'src/components/cauders/ContactPageContent.tsx');
let contactContent = fs.readFileSync(contactPath, 'utf8');

// Replace hero copy
contactContent = contactContent.replace(
  '<StandardizedHeading lines={["Let\'s Build Something Great Together"]} />\n          <p className="mt-4 text-body-base text- max-w-xl mx-auto">\n            Have a project in mind, a question to ask, or just want to say hello? We\'re here and ready to listen. Let\'s start a conversation that could lead to the next big thing.\n          </p>',
  '<StandardizedHeading lines={["Start a Technical Discussion"]} />\n          <p className="mt-4 text-body-base text-muted-foreground max-w-xl mx-auto leading-relaxed">\n            Share your application requirements, workflow automation needs, or technical constraints. Our engineering leadership will review your submission and coordinate a focused technical discussion.\n          </p>'
);

contactContent = contactContent.replace(
  'Get In Touch',
  'Provide Project Details'
);

// Replace left column copy
contactContent = contactContent.replace(
  'Connect with our specialists to explore custom digital solutions. Share your vision with us, and we\'ll help map out the perfect strategy to accelerate your growth.',
  'Connect directly with our engineering team to review architectural options, technical feasibility, and delivery requirements. Share your scope to begin an initial evaluation.'
);

contactContent = contactContent.replace(
  '<h4 className="font-bold text-foreground">Strategic Consultation</h4>\n                </div>\n                <p className="text-sm text-foreground/80 pl-5 max-w-md">\n                  Share your goals and constraints — we\'ll map out the perfect technical architecture for your needs.\n                </p>',
  '<h4 className="font-bold text-foreground">Technical Feasibility</h4>\n                </div>\n                <p className="text-sm text-muted-foreground pl-5 max-w-md">\n                  Review system architecture, database constraints, integration touchpoints, and expected performance.\n                </p>'
);

contactContent = contactContent.replace(
  '<h4 className="font-bold text-foreground">Custom Solutions</h4>\n                </div>\n                <p className="text-sm text-foreground/80 pl-5 max-w-md">\n                  Discover how our capabilities and services align perfectly with your team\'s specific priorities.\n                </p>',
  '<h4 className="font-bold text-foreground">Clear Scope & Milestones</h4>\n                </div>\n                <p className="text-sm text-muted-foreground pl-5 max-w-md">\n                  Establish phased deliverables, core dependencies, acceptance criteria, and realistic execution timelines.\n                </p>'
);

contactContent = contactContent.replace(
  '<h4 className="font-bold text-foreground">Enterprise Readiness</h4>\n                </div>\n                <p className="text-sm text-foreground/80 pl-5 max-w-md">\n                  Discuss security, performance, and seamless scalability directly with our expert engineers.\n                </p>',
  '<h4 className="font-bold text-foreground">Architecture & Security</h4>\n                </div>\n                <p className="text-sm text-muted-foreground pl-5 max-w-md">\n                  Discuss API contracts, role-based access controls, data boundaries, and environment requirements.\n                </p>'
);

contactContent = contactContent.replace(
  '<h4 className="font-bold text-foreground">Proof Of Value</h4>\n                </div>\n                <p className="text-sm text-foreground/80 pl-5 max-w-md">\n                  Leave with clear project timelines, transparent pricing context, and a practical rollout path.\n                </p>',
  '<h4 className="font-bold text-foreground">Transparent Commercials</h4>\n                </div>\n                <p className="text-sm text-muted-foreground pl-5 max-w-md">\n                  Receive transparent milestone estimates or dedicated pod structures with zero hidden overhead.\n                </p>'
);

fs.writeFileSync(contactPath, contactContent, 'utf8');
console.log('Updated ContactPageContent.tsx');

// 2. Update Privacy Policy
const privacyPath = path.join(root, 'src/app/privacy-policy/page.tsx');
let privacyContent = fs.readFileSync(privacyPath, 'utf8');

privacyContent = privacyContent.replace(
  'subscribe to a newsletter, ',
  ''
);

privacyContent = privacyContent.replace(
  ', and payment processing',
  ''
);

fs.writeFileSync(privacyPath, privacyContent, 'utf8');
console.log('Updated Privacy Policy page');
