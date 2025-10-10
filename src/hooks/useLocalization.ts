import i18n from 'i18next';

export function getLocalization() {

    const savedLang = localStorage.getItem('appLanguage');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }

}

export function setLocalization(language?: string) {

    if (language) {
      i18n.changeLanguage(language);
      localStorage.setItem('appLanguage', language);
    }

}