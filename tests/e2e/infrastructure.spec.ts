import { test, expect } from '@playwright/test';

test.describe('Core Infrastructure & Stability Tests', () => {
  
  test('The Light Theme Dictatorship: Ensures application defaults to light mode', async ({ page }) => {
    await page.goto('/');

    // Check that the HTML tag does not have the 'dark' class
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);
    
    // Optionally check the body tag as well, just in case
    const body = page.locator('body');
    await expect(body).not.toHaveClass(/dark/);
  });

  test('Premium Metadata Verification: Checks for the correct favicon', async ({ page }) => {
    await page.goto('/');

    // Check for standard icon or apple-touch-icon
    const iconLink = page.locator('link[rel="icon"], link[rel="apple-touch-icon"]').first();
    
    // Assert the link exists and points to an icon (e.g., icon.png or favicon.ico)
    // Next.js app router automatically handles icon.png, so we check if the href contains "icon"
    await expect(iconLink).toBeAttached();
    
    const href = await iconLink.getAttribute('href');
    expect(href).toMatch(/icon/i);
  });

  test('API Route Sanity Check: Contact form endpoint validation', async ({ request }) => {
    // Note: If you are using Next.js Server Actions (actions.ts), they don't function as standard REST endpoints.
    // This test assumes you have created a standard Route Handler at /api/contact for REST consumers.
    
    // Send an invalid payload to trigger a validation error (400) without sending an actual email
    const response = await request.post('/api/contact', {
      data: {
        name: 'A', // Too short, should fail validation
        email: 'invalid-email',
        message: 'short',
      }
    });

    // The endpoint should be reachable but return a 400 Bad Request due to validation failure
    // If this returns 404, the API route does not exist.
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody.success).toBe(false);
  });
});
