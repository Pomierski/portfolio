import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import aboutTranslations from "./sections/About/translations/index.json";
import contactTranslations from "./sections/ContactCard/translations/index.json";
import contributionsTranslations from "./sections/Contributions/translations/index.json";
import heroTranslations from "./sections/Hero/translations/index.json";
import projectsTranslations from "./sections/Projects/translations/index.json";
import skillsTranslations from "./sections/Skills/translations/index.json";

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
          contributions: contributionsTranslations.pl,
          about: aboutTranslations.pl,
          hero: heroTranslations.pl,
          projects: projectsTranslations.pl,
          skills: skillsTranslations.pl,
        },
      },
      en: {
        translation: {
          contact: contactTranslations.en,
          contributions: contributionsTranslations.en,
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
