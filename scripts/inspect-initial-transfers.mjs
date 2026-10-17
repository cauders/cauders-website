import { chromium } from '@playwright/test';

async function run() {
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const transfers = [];

  page.on('response', async (res) => {
    try {
      const url = res.url();
      const buffer = await res.body();
      transfers.push({ url, size: buffer.length });
    } catch (e) {}
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Sort descending by size
  transfers.sort((a, b) => b.size - a.size);

  console.log('=== TOP TRANSFERS ON INITIAL LOAD (DESKTOP) ===');
  for (const t of transfers.slice(0, 10)) {
    const sizeKB = (t.size / 1024).toFixed(1);
    const sizeMB = (t.size / 1024 / 1024).toFixed(2);
    console.log(`${sizeMB} MB (${sizeKB} KB) -> ${t.url.slice(0, 100)}`);
  }

  await browser.close();
}

run().catch(console.error);
