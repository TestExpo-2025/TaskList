import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import se from './locales/se.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      se: { translation: se }
    },
    lng: 'se', // manually set language
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;