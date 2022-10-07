export type Config = {
  default: {
    title?: string;
    description?: string;
    rootDocs?: string;
    repository?: {
      url: string;
      branch: string;
      author: string;
    };
    nav?: {
      logo?: string | any;
      links?: { title: string; url: string }[];
      search_bar?: string;
    };
    footer?: {
      text: string;
      logo: string | any;
    };
  };
};

export function getThemeConfig(): Config {
  try {
    return require('root_folder/theme.config.js');
  } catch (err) {
    return {
      default: {},
    };
  }
}
