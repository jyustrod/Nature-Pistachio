import esTranslations from '@/locales/es.json';
import enTranslations from '@/locales/en.json';

type Language = 'es' | 'en';

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}

export function getTranslations(lang: Language) {
  return translations[lang];
}

export const languages: { code: Language; name: string }[] = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
];

export const defaultLanguage: Language = 'es';
