'use client';

import { getTranslation, getTranslations } from '@/lib/translations';

export function useI18n(lang: 'es' | 'en') {
  const t = (key: string): string => {
    return getTranslation(lang, key);
  };

  const translations = getTranslations(lang);

  return {
    t,
    translations,
    lang,
  };
}
