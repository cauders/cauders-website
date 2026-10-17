const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'cauders', 'Services.tsx');
let c = fs.readFileSync(file, 'utf8');

c = c.replace(
  'Trusted by Industry Innovators',
  'Engineering for Diverse Operational Environments'
);

c = c.replace(
  'Our commitment to excellence has earned the trust of forward-thinking companies who rely on us for transformative digital solutions.',
  'Delivering scalable software systems, intelligent automations, and resilient cloud architectures across key operational sectors.'
);

c = c.replace(
  'ariaLabel="Technology partners"',
  'ariaLabel="Industry sectors"'
);

fs.writeFileSync(file, c, 'utf8');
console.log('Successfully updated Services.tsx');
