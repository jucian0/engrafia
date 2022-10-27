import { useRouter } from 'next/router';
import { getI18nConfig } from './get-i18n';

export function useTranslate() {
  const { locale, defaultLocale } = useRouter();

  const language = locale ?? defaultLocale ?? '';
  const i18nConfig = getI18nConfig(language);

  return (key: string) => {
    return i18nConfig?.[key] ?? key;
  };
}
