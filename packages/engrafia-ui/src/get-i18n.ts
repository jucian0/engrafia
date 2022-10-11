export type I18nConfig = {
  default?: string;
  translations?: {
    [k: string]: { [l: string]: string };
  };
};

export function getI18nConfig(): I18nConfig {
  try {
    return require('root_folder/i18n.config.json');
  } catch (err) {
    return {};
  }
}
