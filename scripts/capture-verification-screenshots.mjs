import path from 'path';
import { chromium } from '@playwright/test';

async function run() {
  const browser = await chromium.launch({ channel: 'msedge' });

  // 1. DESKTOP AUDIT (1440 x 900)
  console.log('=== RUNNING DESKTOP AUDIT (1440x900) ===');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const desktopPage = await desktopContext.newPage();

  let desktopInitialTransfer = 0;
  let desktopInitialRequests = 0;
  let desktopTotalTransfer = 0;
  let desktopTotalRequests = 0;

  desktopPage.on('response', async (res) => {
    try {
      const buffer = await res.body();
      const size = buffer.length;
      desktopTotalTransfer += size;
      desktopTotalRequests++;
    } catch (e) {}
  });

  // Navigate to homepage
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  desktopInitialTransfer = desktopTotalTransfer;
  desktopInitialRequests = desktopTotalRequests;
  console.log(`Desktop Initial Load: ${desktopInitialRequests} requests, ${(desktopInitialTransfer / 1024 / 1024).toFixed(2)} MB transferred`);

  // Measure LCP via browser performance API
  const desktopLCP = await desktopPage.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      setTimeout(() => resolve(null), 3000);
    });
  });
  console.log(`Desktop LCP: ${desktopLCP ? desktopLCP.toFixed(1) + 'ms' : 'N/A'}`);

  // Capture Desktop Screenshots
  const desktopFullScreenshot = path.resolve('public/images/desktop_homepage_1440x900.png');
  await desktopPage.screenshot({ path: desktopFullScreenshot, fullPage: true });
  console.log(`Saved Desktop Full Screenshot: ${desktopFullScreenshot}`);

  // Scroll down to measure total transfer with lazy-loaded sections
  await desktopPage.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
  });
  await desktopPage.waitForTimeout(1000);
  console.log(`Desktop Total Scrolled Load: ${desktopTotalRequests} requests, ${(desktopTotalTransfer / 1024 / 1024).toFixed(2)} MB transferred`);

  await desktopContext.close();

  // 2. MOBILE AUDIT (390 x 844)
  console.log('\n=== RUNNING MOBILE AUDIT (390x844) ===');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();

  let mobileInitialTransfer = 0;
  let mobileInitialRequests = 0;
  let mobileTotalTransfer = 0;
  let mobileTotalRequests = 0;

  mobilePage.on('response', async (res) => {
    try {
      const buffer = await res.body();
      const size = buffer.length;
      mobileTotalTransfer += size;
      mobileTotalRequests++;
    } catch (e) {}
  });

  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  mobileInitialTransfer = mobileTotalTransfer;
  mobileInitialRequests = mobileTotalRequests;
  console.log(`Mobile Initial Load: ${mobileInitialRequests} requests, ${(mobileInitialTransfer / 1024 / 1024).toFixed(2)} MB transferred`);

  const mobileLCP = await mobilePage.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      setTimeout(() => resolve(null), 3000);
    });
  });
  console.log(`Mobile LCP: ${mobileLCP ? mobileLCP.toFixed(1) + 'ms' : 'N/A'}`);

  const mobileFullScreenshot = path.resolve('public/images/mobile_homepage_390x844.png');
  await mobilePage.screenshot({ path: mobileFullScreenshot, fullPage: true });
  console.log(`Saved Mobile Full Screenshot: ${mobileFullScreenshot}`);

  // Scroll down mobile page
  await mobilePage.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
  });
  await mobilePage.waitForTimeout(1000);
  console.log(`Mobile Total Scrolled Load: ${mobileTotalRequests} requests, ${(mobileTotalTransfer / 1024 / 1024).toFixed(2)} MB transferred`);

  await mobileContext.close();
  await browser.close();
  console.log('\nAudit complete.');
}

run().catch(console.error);
