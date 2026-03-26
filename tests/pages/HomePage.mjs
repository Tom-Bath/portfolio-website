import { until } from 'selenium-webdriver';
import { BasePage, TIMEOUT_MS } from './BasePage.mjs';

/**
 * HomePage — represents the site's home page (EN or JA).
 * Knows how to open itself and interact with the navigation links on it.
 */
export class HomePage extends BasePage {
  /** @param {'en'|'ja'} locale */
  async open(locale = 'en') {
    await super.open(locale === 'ja' ? '/ja/' : '/');
  }

  async clickWarehouseFlowLink() {
    const link = await this.waitForElement('a[href*="warehouse-flow"]');
    await link.click();
    await this.driver.wait(until.urlContains('warehouse-flow'), TIMEOUT_MS);
  }

  async clickXrNavigationLink() {
    const link = await this.waitForElement('a[href*="xr-navigation"]');
    await link.click();
    await this.driver.wait(until.urlContains('xr-navigation'), TIMEOUT_MS);
  }

  async clickContactLink() {
    const link = await this.waitForElement('a[href*="/contact"]');
    await link.click();
    await this.driver.wait(until.urlContains('contact'), TIMEOUT_MS);
  }
}
