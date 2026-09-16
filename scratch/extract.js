const fs = require('fs');
const lines = fs.readFileSync('C:/Users/LENOVO/.gemini/antigravity-ide/brain/1a3439f8-d756-42e7-a8bf-842543b5e3eb/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');
const urls = new Set();
for (let i = lines.length - 1; i >= 0; i--) {
  if (!lines[i]) continue;
  try {
    const obj = JSON.parse(lines[i]);
    const str = JSON.stringify(obj);
    const matches = str.match(/https:\/\/res\.cloudinary\.com\/[^\`\"\'\s\\]+/g);
    if (matches) {
      matches.forEach(m => urls.add(m));
    }
  } catch(e) {}
}
console.log(Array.from(urls).join('\n'));
