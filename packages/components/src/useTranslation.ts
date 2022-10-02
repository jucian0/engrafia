import { useSiteConfig } from './Provider';

export function useTranslate() {
  const { config, language } = useSiteConfig();

  return (key: string) => {
    return config.i18n?.[language]?.[key] ?? key;
  };
}
