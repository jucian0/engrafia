export type I18nConfig = {
  [k: string]: string;
};

export async function getI18nConfig(locale: string): Promise<I18nConfig> {
  try {
    const { default: translations } = await import(
      `root_folder/public/locales/${locale}.json`
    );

    return translations;
  } catch (err) {
    throw new Error(
      `Could not found translation file: ${locale}.json in 'public/locales/'`
    );
  }
}
