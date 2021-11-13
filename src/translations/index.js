//archivo de configuracion de i18next

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translation_en } from "./en/translations";
import { translation_es } from './es/translations';

const resources = {
  en: {
    ...translation_en
  },
  es: {
    ...translation_es
  }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
