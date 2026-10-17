import fs from 'fs';
import path from 'path';
import { chromium } from '@playwright/test';

async function run() {
  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge' });
  } catch (e) {
    browser = await chromium.launch({ channel: 'chrome' });
  }
  const page = await browser.newPage();

  const files = [
    { name: 'mb-cd-1', w: 795, h: 749 },
    { name: 'mb-cd-2', w: 796, h: 1178 },
    { name: 'mb-cd-3', w: 795, h: 751 }
  ];

  for (const f of files) {
    const svgPath = path.resolve(`public/images/mobilePortfolio/${f.name}.svg`);
    const svgContent = fs.readFileSync(svgPath, 'utf8');

    // Create an HTML page containing the SVG at exact 2x retina dimensions
    const scale = 2; // 2x density for ultra-crisp display
    const renderW = Math.round(f.w * scale);
    const renderH = Math.round(f.h * scale);

    await page.setViewportSize({ width: renderW, height: renderH });
    await page.setContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * { margin: 0; padding: 0; overflow: hidden; }
          body, html { width: ${renderW}px; height: ${renderH}px; background: transparent; }
          svg { width: ${renderW}px; height: ${renderH}px; display: block; }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
      </html>
    `);

    // Take screenshot as WebP using canvas in browser context
    const webpBase64 = await page.evaluate(async ({ w, h }) => {
      const svg = document.querySelector('svg');
      const xml = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' });
      const URL = window.URL || window.webkitURL || window;
      const blobURL = URL.createObjectURL(svgBlob);

      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = blobURL;
      });

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(blobURL);

      return canvas.toDataURL('image/webp', 0.90);
    }, { w: renderW, h: renderH });

    const base64Data = webpBase64.replace(/^data:image\/webp;base64,/, '');
    const webpBuffer = Buffer.from(base64Data, 'base64');

    const outWebpPath = `public/images/mobilePortfolio/${f.name}.webp`;
    fs.writeFileSync(outWebpPath, webpBuffer);
    console.log(`Generated ${outWebpPath}: ${(webpBuffer.length / 1024).toFixed(1)} KB (down from ${(svgContent.length / 1024 / 1024).toFixed(2)} MB)`);
  }

  await browser.close();
}

run().catch(console.error);
