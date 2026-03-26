import { BasePage } from './BasePage.mjs';

/**
 * ContactPage — represents the contact page (EN or JA).
 */
export class ContactPage extends BasePage {
  /** @param {'en'|'ja'} locale */
  async open(locale = 'en') {
    await super.open(locale === 'ja' ? '/ja/contact' : '/contact');
  }
}
