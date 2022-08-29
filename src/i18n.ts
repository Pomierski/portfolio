import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import contactTranslations from "./sections/ContactCard/translations";

i18n
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
        },
      },
      en: {
        translation: {
          contact: contactTranslations.en,
        },
      },
    },
    react: { useSuspense: false },
    lng: "en",
  });

export default i18n;
