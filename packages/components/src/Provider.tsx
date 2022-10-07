import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { getFolder } from './get-folders';
import { getSidebarTree } from './get-sidebar';
import { getThemeConfig } from './get-theme-config';
import { DefaultLayout } from './Layouts/Default';
import { DocsLayout } from './Layouts/Docs';
import { mdxComponents } from './mdxComponents';
import { ThemeContext, ThemeContextType } from './ThemeContext';

export const useSiteConfig = (): ThemeContextType => {
  const data = useContext(ThemeContext);
  return data;
};

const sidebar = getSidebarTree();
const { default: themeConfig } = getThemeConfig();

const TEST_VERSION_FOLDER =
  /^([v])(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-[a-zA-Z\d][-a-zA-Z.\d]*)?(\+[a-zA-Z\d][-a-zA-Z.\d]*)?$/;

const TEST_LANGUAGE_FOLDER = /([a-z]+_[A-Z])\w/;

export function Provider({ children }: React.PropsWithChildren<any>) {
  const { route } = useRouter();
  const [metaTags, setMetaTags] = React.useState<any>(null);
  const [title, setTitle] = React.useState('');
  const [siteConfig, setSiteConfig] = React.useState<ThemeContextType>({
    meta: {},
    tableOfContent: { depth: 1 },
    language: 'en_US',
    version: 'latest',
  });

  React.useEffect(() => {
    const meta = children.props?.data;
    if (route !== '/_error' && meta) {
      const title =
        route === `/`
          ? meta.title
          : `${themeConfig.title} - ${meta?.title ?? '404'}`;

      const metaTags = Object.entries(children.props.data).map(
        ([key, value]) => {
          return <meta key={key} name={key} content={value as ''} />;
        }
      );
      const tableOfContent = children.props.tableOfContents;
      const versions = getFolder(sidebar, TEST_VERSION_FOLDER);
      const languages = getFolder(sidebar, TEST_LANGUAGE_FOLDER);

      setMetaTags(metaTags);
      setTitle(title);
      setSiteConfig((state) => ({
        ...state,
        tableOfContent,
        language: localStorage.getItem('language') ?? 'en_US',
        languages: languages,
        versions: versions,
        version: localStorage.getItem('version') ?? 'lates',
      }));
    }
  }, [route]);

  if (route.includes(themeConfig.rootDocs ?? 'docs')) {
    return (
      <ThemeContext.Provider value={{ ...siteConfig, setSiteConfig }}>
        <DocsLayout>
          <Head>
            <>
              <title>{title}</title>
              {metaTags}
            </>
          </Head>
          <MDXProvider components={mdxComponents as any}>
            {children}
          </MDXProvider>
        </DocsLayout>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={siteConfig}>
      <Head>
        <>
          <title>{title}</title>
          {metaTags}
        </>
      </Head>
      <DefaultLayout>
        <MDXProvider components={mdxComponents as any}>{children}</MDXProvider>
      </DefaultLayout>
    </ThemeContext.Provider>
  );
}
