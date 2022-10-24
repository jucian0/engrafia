import { getI18nConfig } from './get-i18n';
import { useSiteConfig } from './Provider';

const i18nConfig = getI18nConfig();

export function useTranslate() {
  const { language } = useSiteConfig();

  return (key: string) => {
    return i18nConfig.translations?.[language]?.[key] ?? key;
  };
}
