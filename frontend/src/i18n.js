import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/es.json";
import hiTranslation from "./locales/hi.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  hi: {
    translation: hiTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
