import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;