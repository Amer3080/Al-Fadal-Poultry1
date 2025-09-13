// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // 1) load translations via HTTP (served from public/)
  .use(HttpApi)
  // 2) detect user language (cookie, localStorage, navigator, etc.)
  .use(LanguageDetector)
  // 3) pass the i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // if the detected lng is not in supportedLngs
    supportedLngs: ["en", "ar"], // only these two—anything else will fallback to "en"
    nonExplicitSupportedLngs: true, // map "en-US" → "en", "ar-EG" → "ar", etc.

    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"], // where to store the detected language
    },

    backend: {
      // Vite copies public/ → build root
      // so public/locales/en/translation.json → /locales/en/translation.json
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    react: {
      useSuspense: false, // turn off suspense if you don’t want loading fallback
    },
  });

export default i18n;
