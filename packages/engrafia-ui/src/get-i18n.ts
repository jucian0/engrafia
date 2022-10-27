export type I18nConfig = {
  [k: string]: string;
};

export function getI18nConfig(locale: string): I18nConfig {
  try {
    return require(`root_folder/public/locales/${locale}.json`);
  } catch (err) {
    return {};
  }
}
