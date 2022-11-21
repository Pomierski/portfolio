import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import * as aboutTranslations from "./sections/About/translations/index.json";
import * as contactTranslations from "./sections/ContactCard/translations/index.json";
import * as heroTranslations from "./sections/Hero/translations/index.json";
import * as projectsTranslations from "./sections/Projects/translations/index.json";
import * as skillsTranslations from "./sections/Skills/translations/index.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en", // use en if detected lng is not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      pl: {
        translation: {
          contact: contactTranslations.pl,
          about: aboutTranslations.pl,
          hero: heroTranslations.pl,
          projects: projectsTranslations.pl,
          skills: skillsTranslations.pl,
        },
      },
      en: {
        translation: {
          contact: contactTranslations.en,
          about: aboutTranslations.en,
          hero: heroTranslations.en,
          projects: projectsTranslations.en,
          skills: skillsTranslations.en,
        },
      },
    },
    react: { useSuspense: false },
  });

export default i18n;
