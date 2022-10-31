import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { getFolderName } from './get-folders';
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
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export function Provider({ children }: React.PropsWithChildren<any>) {
  const { route } = useRouter();
  const meta = React.useMemo(
    () => children.props?.data ?? {},
    [children.props?.data]
  );
  const [title, setTitle] = React.useState('');
  const versions = React.useMemo(
    () => getFolderName(sidebar, TEST_VERSION_FOLDER),
    [sidebar]
  );

  const [siteConfig, setSiteConfig] = React.useState<ThemeContextType>({
    meta: {},
    tableOfContent: { depth: 1 },
    version: 'latest',
  });

  React.useEffect(() => {
    const meta = children.props?.data;

    if (route !== '/_error') {
      const title =
        route === `/`
          ? meta?.title
          : `${themeConfig.title} - ${meta?.title ?? '404'}`;
      setTitle(title);

      const tableOfContent = children.props.tableOfContents;

      setSiteConfig((state) => ({
        ...state,
        tableOfContent,
        versions: versions,
        version: versions[versions.length - 1],
      }));
    }
  }, [route, versions]);

  if (route.includes(themeConfig.rootDocs ?? 'docs')) {
    return (
      <ThemeContext.Provider value={{ ...siteConfig, setSiteConfig }}>
        <Head>{themeConfig?.head?.({ title, meta })}</Head>
        <MDXProvider components={mdxComponents as {}}>
          <DocsLayout>{children}</DocsLayout>
        </MDXProvider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={siteConfig}>
      <Head>{themeConfig?.head?.({ title, meta })}</Head>
      <MDXProvider components={mdxComponents as {}}>
        <DefaultLayout>{children}</DefaultLayout>
      </MDXProvider>
    </ThemeContext.Provider>
  );
}
