import { execSync } from 'child_process';
import fs from 'fs';

const filesList = execSync('git diff --name-only 00278a31e181c81b4c7d42f13106405bd273bc47', { encoding: 'utf-8' });
const files = filesList.trim().split('\n').map(f => f.trim()).filter(Boolean);

console.log('Modified files count:', files.length);

for (const file of files) {
  const diff = execSync(`git diff 00278a31e181c81b4c7d42f13106405bd273bc47 -- "${file}"`, { maxBuffer: 10 * 1024 * 1024, encoding: 'utf-8' });
  const lines = diff.split('\n');
  const plusLines = lines.filter(l => l.startsWith('+') && !l.startsWith('+++'));
  const minusLines = lines.filter(l => l.startsWith('-') && !l.startsWith('---'));
  console.log(`\nFILE: ${file} (+${plusLines.length}, -${minusLines.length})`);
}
