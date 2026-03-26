import { BasePage } from './BasePage.mjs';

/**
 * CaseStudyPage — represents any case study page.
 * Reused for both "warehouse-flow" and "xr-navigation" (they share the same layout).
 */
export class CaseStudyPage extends BasePage {
  /**
   * @param {string} slug  e.g. 'warehouse-flow' or 'xr-navigation'
   * @param {'en'|'ja'} locale
   */
  async open(slug, locale = 'en') {
    await super.open(locale === 'ja' ? `/ja/${slug}` : `/${slug}`);
  }

  /** Returns the visible text of the page's main <h1> heading. */
  async getHeading() {
    const h1 = await this.waitForElement('h1');
    return h1.getText();
  }
}
