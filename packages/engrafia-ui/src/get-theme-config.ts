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
      textLogo: string;
      links?: { title: string; url: string; external?: boolean }[];
      search_bar?: string;
    };
    footer?: {
      text: string;
      logo: string | any;
      textLogo: string;
    };
    head?: ({
      title,
      meta,
    }: {
      title: string;
      meta: {
        author: string;
        tags: string;
        description: string;
        title: string;
        socialImage: string;
      };
    }) => JSX.Element;
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
