import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import i18n from 'i18next';

import uaTranslation from './locales/ua/translation.json';
import ruTranslation from './locales/ru/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: {
      default: ['ua', 'ru', 'en'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ua: {
        translation: uaTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
  });

export default i18n;
