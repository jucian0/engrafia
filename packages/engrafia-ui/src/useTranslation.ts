import { useRouter } from 'next/router';
import { getI18nConfig } from './get-i18n';

const i18nConfig = getI18nConfig();

export function useTranslate() {
  const { locale, defaultLocale } = useRouter();
  const language = locale ?? defaultLocale ?? '';

  return (key: string) => {
    return i18nConfig.translations?.[language]?.[key] ?? key;
  };
}
