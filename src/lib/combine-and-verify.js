const fs = require('fs');

const existing = JSON.parse(fs.readFileSync('src/lib/existing-unsplash.json', 'utf-8'));
const scraped = JSON.parse(fs.readFileSync('src/lib/verified-unsplash-photos.json', 'utf-8'));

const pool = new Set();
existing.forEach(u => pool.add(u.split('?')[0]));
Object.values(scraped).forEach(arr => {
  arr.forEach(u => pool.add(u.split('?')[0]));
});

console.log('Total unique base photo IDs in combined pool:', pool.size);

async function verifyAll() {
  const urls = [...pool];
  console.log(`Verifying ${urls.length} URLs via HEAD requests...`);
  const valid = [];
  const invalid = [];

  // Batch verify in chunks of 20
  for (let i = 0; i < urls.length; i += 20) {
    const chunk = urls.slice(i, i + 20);
    await Promise.all(chunk.map(async u => {
      try {
        const fullUrl = `${u}?auto=format&fit=crop&q=80&w=1200`;
        const res = await fetch(fullUrl, { method: 'HEAD' });
        if (res.status === 200) {
          valid.push(u);
        } else {
          invalid.push({ url: u, status: res.status });
        }
      } catch (err) {
        invalid.push({ url: u, error: err.message });
      }
    }));
  }

  console.log(`Verification Complete: ${valid.length} VALID, ${invalid.length} INVALID.`);
  fs.writeFileSync('src/lib/all-valid-unsplash.json', JSON.stringify(valid, null, 2));
}

verifyAll();
