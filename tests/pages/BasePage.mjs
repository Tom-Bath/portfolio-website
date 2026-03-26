import { By, until } from 'selenium-webdriver';

export const BASE_URL = 'http://localhost:4321/portfolio-website';
export const TIMEOUT_MS = 10_000;

/**
 * BasePage — every page object extends this.
 * Holds the driver and provides shared low-level helpers so we never
 * duplicate Selenium boilerplate across page objects.
 */
export class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  /** Navigate to a root-relative path, e.g. '/contact' or '/ja/'. */
  async open(path) {
    await this.driver.get(`${BASE_URL}${path}`);
    await this.driver.wait(until.elementLocated(By.css('body')), TIMEOUT_MS);
  }

  /** Return all visible text on the page. */
  async getBodyText() {
    return this.driver.findElement(By.css('body')).getText();
  }

  /** Wait for an element matching a CSS selector and return it. */
  async waitForElement(cssSelector) {
    return this.driver.wait(
      until.elementLocated(By.css(cssSelector)),
      TIMEOUT_MS
    );
  }
}
