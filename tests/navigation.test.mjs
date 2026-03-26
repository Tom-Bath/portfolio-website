/**
 * Navigation tests — verifies that all site links load real pages
 * and land on the expected content.
 *
 * Prerequisites:
 *   1. Run `pnpm dev` in a separate terminal first.
 *   2. Chrome must be installed. Selenium will auto-download ChromeDriver.
 *
 * Run tests:
 *   pnpm test
 */

import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';

// The base URL where `pnpm dev` serves the site.
const BASE_URL = 'http://localhost:4321/portfolio-website';

// How long (ms) to wait for an element or URL change before failing.
const TIMEOUT_MS = 10_000;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Navigate to a URL and return the full visible body text once loaded. */
async function navigateTo(driver, url) {
  await driver.get(url);
  await driver.wait(until.elementLocated(By.css('body')), TIMEOUT_MS);
  return driver.findElement(By.css('body')).getText();
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Site navigation', () => {
  /** `driver` is the browser instance shared across all tests in this file. */
  let driver;

  // Runs once before all tests — opens a headless Chrome window.
  before(async () => {
    const options = new chrome.Options();
    options.addArguments('--headless=new'); // run silently, no visible window
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  // Runs once after all tests — closes the browser.
  after(async () => {
    await driver.quit();
  });

  // -------------------------------------------------------------------------
  // 1. Every page URL should load without a 404 / error page
  // -------------------------------------------------------------------------
  describe('All pages load without errors', () => {
    const pages = [
      { name: 'Home (EN)',              url: `${BASE_URL}/` },
      { name: 'Contact (EN)',           url: `${BASE_URL}/contact` },
      { name: 'Warehouse Flow (EN)',    url: `${BASE_URL}/warehouse-flow` },
      { name: 'XR Navigation (EN)',     url: `${BASE_URL}/xr-navigation` },
      { name: 'Home (JA)',              url: `${BASE_URL}/ja/` },
      { name: 'Contact (JA)',           url: `${BASE_URL}/ja/contact` },
      { name: 'Warehouse Flow (JA)',    url: `${BASE_URL}/ja/warehouse-flow` },
      { name: 'XR Navigation (JA)',     url: `${BASE_URL}/ja/xr-navigation` },
    ];

    for (const { name, url } of pages) {
      test(`${name} loads`, async () => {
        const bodyText = await navigateTo(driver, url);
        const lower = bodyText.toLowerCase();

        assert.ok(
          !lower.includes('404') && !lower.includes('page not found'),
          `"${name}" at ${url} appears to be a 404 / not-found page`
        );
      });
    }
  });

  // -------------------------------------------------------------------------
  // 2. Each page shows the content we actually expect
  // -------------------------------------------------------------------------
  describe('Pages show the correct content', () => {
    test('Warehouse Flow page has the correct heading', async () => {
      await navigateTo(driver, `${BASE_URL}/warehouse-flow`);

      const heading = await driver.wait(
        until.elementLocated(By.css('h1')),
        TIMEOUT_MS,
        'Timed out waiting for <h1> on Warehouse Flow page'
      );
      const text = await heading.getText();

      assert.ok(
        text.includes('Warehouse Flow'),
        `Expected h1 to include "Warehouse Flow", got: "${text}"`
      );
    });

    test('XR Navigation page has the correct heading', async () => {
      await navigateTo(driver, `${BASE_URL}/xr-navigation`);

      const heading = await driver.wait(
        until.elementLocated(By.css('h1')),
        TIMEOUT_MS,
        'Timed out waiting for <h1> on XR Navigation page'
      );
      const text = await heading.getText();

      assert.ok(
        text.includes('XR Navigation'),
        `Expected h1 to include "XR Navigation", got: "${text}"`
      );
    });

    test('Contact page shows contact details', async () => {
      const bodyText = await navigateTo(driver, `${BASE_URL}/contact`);

      assert.ok(
        bodyText.includes('Email') || bodyText.includes('LinkedIn'),
        'Contact page should display contact information'
      );
    });
  });

  // -------------------------------------------------------------------------
  // 3. Clicking links on the homepage navigates to the right destination
  // -------------------------------------------------------------------------
  describe('Homepage links navigate to the right pages', () => {
    test('Warehouse Flow link goes to the Warehouse Flow case study', async () => {
      await navigateTo(driver, `${BASE_URL}/`);

      // Find the link using a partial href match — more robust than relying on link text.
      const link = await driver.wait(
        until.elementLocated(By.css('a[href*="warehouse-flow"]')),
        TIMEOUT_MS,
        'Could not find a Warehouse Flow link on the homepage'
      );
      await link.click();

      await driver.wait(until.urlContains('warehouse-flow'), TIMEOUT_MS);

      const currentUrl = await driver.getCurrentUrl();
      assert.ok(
        currentUrl.includes('warehouse-flow'),
        `Expected URL to contain "warehouse-flow" after clicking the link, got: ${currentUrl}`
      );
    });

    test('XR Navigation link goes to the XR Navigation case study', async () => {
      await navigateTo(driver, `${BASE_URL}/`);

      const link = await driver.wait(
        until.elementLocated(By.css('a[href*="xr-navigation"]')),
        TIMEOUT_MS,
        'Could not find an XR Navigation link on the homepage'
      );
      await link.click();

      await driver.wait(until.urlContains('xr-navigation'), TIMEOUT_MS);

      const currentUrl = await driver.getCurrentUrl();
      assert.ok(
        currentUrl.includes('xr-navigation'),
        `Expected URL to contain "xr-navigation" after clicking the link, got: ${currentUrl}`
      );
    });

    test('Contact link goes to the contact page', async () => {
      await navigateTo(driver, `${BASE_URL}/`);

      const link = await driver.wait(
        until.elementLocated(By.css('a[href*="/contact"]')),
        TIMEOUT_MS,
        'Could not find a Contact link on the homepage'
      );
      await link.click();

      await driver.wait(until.urlContains('contact'), TIMEOUT_MS);

      const currentUrl = await driver.getCurrentUrl();
      assert.ok(
        currentUrl.includes('contact'),
        `Expected URL to contain "contact" after clicking the link, got: ${currentUrl}`
      );
    });
  });
});
