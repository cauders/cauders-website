import { execSync } from 'child_process';

const filesList = execSync('git diff --name-only 00278a31e181c81b4c7d42f13106405bd273bc47', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
const files = filesList.trim().split('\n').map(f => f.trim()).filter(Boolean);

console.log('Total modified files:', files.length);

for (const file of files) {
  try {
    const diff = execSync(`git diff 00278a31e181c81b4c7d42f13106405bd273bc47 -- "${file}"`, { maxBuffer: 10 * 1024 * 1024, encoding: 'utf-8' });
    const lines = diff.split('\n');
    const classDiffs = lines.filter(l => (l.startsWith('+') || l.startsWith('-')) && !l.startsWith('+++') && !l.startsWith('---') && (l.includes('className') || l.includes('class=') || l.includes('style=')));
    const tagDiffs = lines.filter(l => (l.startsWith('+') || l.startsWith('-')) && !l.startsWith('+++') && !l.startsWith('---') && (l.includes('<') || l.includes('>')));
    console.log(`${file}: class diffs: ${classDiffs.length}, tag diffs: ${tagDiffs.length}`);
  } catch (err) {
    console.error(`Error on ${file}:`, err.message);
  }
}
