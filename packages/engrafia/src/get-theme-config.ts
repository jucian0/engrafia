export type ThemeConfig = {
  title?: string;
  description?: string;
  rootDocs?: string;
  loadSidebarIcons?: boolean;
  repository?: {
    url: string;
    branch: string;
    author: string;
  };
  nav?: {
    logo?: string | any;
    textLogo: string;
    links?: { title: string; href: string; external?: boolean }[];
    iconsLinks?: { icon: JSX.Element; href: string; external?: boolean }[];
    search_bar?: string;
  };
  footer?: {
    text: string;
    logo: string | any;
    textLogo: string;
  };
  head?: (data: { meta: Meta; title: string }) => JSX.Element;
};

export type Meta = {
  author: string;
  tags: string;
  description: string;
  title: string;
  socialImage: string;
  position?: number;
};

export async function getThemeConfigModule(): Promise<ThemeConfig> {
  try {
    const { default: themeConfig } = await import(
      'root_folder/theme.config.js' as any
    );
    return themeConfig;
  } catch (err) {
    return Promise.resolve({});
  }
}
