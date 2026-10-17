const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'components', 'cauders', 'Services.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Hero heading and paragraph
content = content.replace(
  /<StandardizedHeading lines=\{.*?"Powering Sustainable Business Growth with Digital Solutions".*?\} \/>\s*<p className="mt-4 text-body-base font-normal text-foreground max-w-xl mx-auto">[\s\S]*?<\/p>/,
  `<StandardizedHeading lines={["AI, Automation & Custom Software Engineering"]} />
            <p className="mt-4 text-body-base font-normal text-foreground max-w-xl mx-auto">
              We build AI-enabled software, automate operational workflows, and engineer custom web, mobile, and cloud platforms built for production reliability.
            </p>`
);

// 2. Core Capabilities heading and description
content = content.replace(
  /<StandardizedHeading lines=\{.*?"Our Core Capabilities".*?\} \/>\s*<ScrollFadeIn delay=\{100\}>\s*<p className="mt-4 text-body-base font-normal text-foreground max-w-2xl mx-auto">[\s\S]*?<\/p>\s*<\/ScrollFadeIn>/,
  `<StandardizedHeading lines={["Engineering Disciplines & Capabilities"]} />
          <ScrollFadeIn delay={100}>
            <p className="mt-4 text-body-base font-normal text-foreground max-w-2xl mx-auto">
              From production LLM integration and workflow automation to scalable cloud architectures and cross-platform applications, we engineer solutions built for reliability and operational impact.
            </p>
          </ScrollFadeIn>`
);

// 3. Remove picsum fallback
content = content.replace(
  /`https:\/\/picsum\.photos\/seed\/\$\{service\.slug\}\/800\/600`/,
  `'/images/services/web-dev-2.png'`
);

// 4. Fix incomplete classNames (text-)
content = content.replace(/text-heading-card font-normal text-"/g, 'text-heading-card font-normal text-muted-foreground"');
content = content.replace(/text-sm text- space-y-4/g, 'text-sm text-muted-foreground space-y-4');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Services.tsx');
