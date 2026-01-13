// tests/example.spec.js
import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
  // Go to Playwright's homepage
  await page.goto('https://playwright.dev/');

  // Expect the title to contain "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});