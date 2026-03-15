export type Locale = "en" | "ja"

export const translations = {
  en: {
    home: "Home",
    contact: "Contact",
    about: "About",
    caseStudies: "Case Studies",
    switchLang: "日本語",
    warehouseFlow: "Warehouse Flow",
    xrNav: "XR Nav",
    mapsRoute: "Maps Route",
    contactSubtitle: "Feel free to reach out.",
  },
  ja: {
    home: "ホーム",
    contact: "お問い合わせ",
    about: "About",
    caseStudies: "ケーススタディ",
    switchLang: "English",
    warehouseFlow: "倉庫フロー",
    xrNav: "XRナビ",
    mapsRoute: "マップルート",
    contactSubtitle: "お気軽にご連絡ください。",
  },
}

export function t(locale: Locale, key: keyof (typeof translations)["en"]) {
  return translations[locale][key]
}
