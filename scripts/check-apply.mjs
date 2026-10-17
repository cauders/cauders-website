import { execSync } from 'child_process';

const pp = execSync('git show 00278a31e181c81b4c7d42f13106405bd273bc47:src/components/cauders/PartnersPageContent.tsx', { encoding: 'utf-8' });
const lines = pp.split('\n');
const applyIdx = lines.findIndex(l => l.includes("id='apply'") || l.includes('id="apply"'));
console.log(lines.slice(applyIdx - 5, applyIdx + 60).join('\n'));
