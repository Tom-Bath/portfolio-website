/**
 * Navigation tests — verifies that all site links load real pages
 * and land on the expected content.
 *
 * Uses the Page Object Model (POM): each page of the site has its own class
 * in tests/pages/. Tests import those classes and call readable methods
 * rather than writing Selenium selectors inline.
 *
 * Prerequisites:
 *   1. Run `pnpm dev` in a separate terminal first.
 *   2. Chrome must be installed. Selenium will auto-manage ChromeDriver.
 *
 * Run tests:
 *   pnpm test
 */

import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';

import { HomePage } from './pages/HomePage.mjs';
import { CaseStudyPage } from './pages/CaseStudyPage.mjs';
import { ContactPage } from './pages/ContactPage.mjs';

describe('Site navigation', () => {
  let driver;

  // Opens a headless Chrome window once before all tests.
  before(async () => {
    const options = new chrome.Options();
    options.addArguments('--headless=new');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  // Closes the browser once after all tests.
  after(async () => {
    await driver.quit();
  });

  // -------------------------------------------------------------------------
  // 1. Every page URL should load without a 404 / error page
  // -------------------------------------------------------------------------
  describe('All pages load without errors', () => {
    // Each entry describes which page object to use and how to open it.
    const pages = [
      { name: 'Home (EN)',           Page: HomePage,      args: [] },
      { name: 'Home (JA)',           Page: HomePage,      args: ['ja'] },
      { name: 'Contact (EN)',        Page: ContactPage,   args: [] },
      { name: 'Contact (JA)',        Page: ContactPage,   args: ['ja'] },
      { name: 'Warehouse Flow (EN)', Page: CaseStudyPage, args: ['warehouse-flow'] },
      { name: 'Warehouse Flow (JA)', Page: CaseStudyPage, args: ['warehouse-flow', 'ja'] },
      { name: 'XR Navigation (EN)',  Page: CaseStudyPage, args: ['xr-navigation'] },
      { name: 'XR Navigation (JA)',  Page: CaseStudyPage, args: ['xr-navigation', 'ja'] },
    ];

    for (const { name, Page, args } of pages) {
      test(`${name} loads`, async () => {
        const page = new Page(driver);
        await page.open(...args);
        const bodyText = (await page.getBodyText()).toLowerCase();

        assert.ok(
          !bodyText.includes('404') && !bodyText.includes('page not found'),
          `"${name}" appears to be a 404 / not-found page`
        );
      });
    }
  });

  // -------------------------------------------------------------------------
  // 2. Each page shows the content we actually expect
  // -------------------------------------------------------------------------
  describe('Pages show the correct content', () => {
    test('Warehouse Flow page has the correct heading', async () => {
      const page = new CaseStudyPage(driver);
      await page.open('warehouse-flow');
      const heading = await page.getHeading();

      assert.ok(
        heading.includes('Warehouse Flow'),
        `Expected h1 to include "Warehouse Flow", got: "${heading}"`
      );
    });

    test('XR Navigation page has the correct heading', async () => {
      const page = new CaseStudyPage(driver);
      await page.open('xr-navigation');
      const heading = await page.getHeading();

      assert.ok(
        heading.includes('XR Navigation'),
        `Expected h1 to include "XR Navigation", got: "${heading}"`
      );
    });

    test('Contact page shows contact details', async () => {
      const page = new ContactPage(driver);
      await page.open();
      const bodyText = await page.getBodyText();

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
      const home = new HomePage(driver);
      await home.open();
      await home.clickWarehouseFlowLink();

      assert.ok(
        (await driver.getCurrentUrl()).includes('warehouse-flow'),
        'URL should contain "warehouse-flow" after clicking the link'
      );
    });

    test('XR Navigation link goes to the XR Navigation case study', async () => {
      const home = new HomePage(driver);
      await home.open();
      await home.clickXrNavigationLink();

      assert.ok(
        (await driver.getCurrentUrl()).includes('xr-navigation'),
        'URL should contain "xr-navigation" after clicking the link'
      );
    });

    test('Contact link goes to the contact page', async () => {
      const home = new HomePage(driver);
      await home.open();
      await home.clickContactLink();

      assert.ok(
        (await driver.getCurrentUrl()).includes('contact'),
        'URL should contain "contact" after clicking the link'
      );
    });
  });
});
