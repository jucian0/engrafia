import { MDXProvider } from '@mdx-js/react';
import { Grid } from '@nextui-org/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Config, getConfig } from './get-config';
import { getFolder } from './get-folders';
import { getSidebarTree, SidebarTree } from './get-sidebar';
import { DefaultLayout } from './Layouts/Default';
import { DocsLayout } from './Layouts/Docs';
import { mdxComponents } from './mdxComponents';

export type ChildrenOfContent = {
  title: string;
  slug: string;
  children?: ChildrenOfContent[];
};

export type TableOfContent = {
  children?: ChildrenOfContent[];
  depth: number;
};

type DocsContext = {
  meta: { [key: string]: string };
  tableOfContent: TableOfContent;
  config: Config;
  sidebar: SidebarTree;
  setSiteConfig?: React.Dispatch<React.SetStateAction<DocsContext>>;
  language: string;
  languages?: string[];
  version?: string;
  versions?: string[];
};

const Context = React.createContext({} as DocsContext);

export const useSiteConfig = (): DocsContext => {
  const data = useContext(Context);
  return data;
};

export function Provider({ children }: React.PropsWithChildren<any>) {
  const { route } = useRouter();
  const [metaTags, setMetaTags] = React.useState<any>(null);
  const [title, setTitle] = React.useState('');
  const [siteConfig, setSiteConfig] = React.useState<DocsContext>({
    meta: {},
    tableOfContent: { depth: 1 },
    sidebar: getSidebarTree(),
    config: getConfig(),
    language: 'en_US',
    version: 'latest',
  });

  React.useEffect(() => {
    const meta = children.props?.data;
    if (route !== '/_error' && meta) {
      const title =
        route === `/`
          ? meta.title
          : `${siteConfig.config.title} - ${meta?.title ?? '404'}`;

      const metaTags = Object.entries(children.props.data).map(
        ([key, value]) => {
          return <meta key={key} name={key} content={value as ''} />;
        }
      );
      const tableOfContent = children.props.tableOfContents;
      const versions = getFolder(
        siteConfig.sidebar,

        /^([v])(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-[a-zA-Z\d][-a-zA-Z.\d]*)?(\+[a-zA-Z\d][-a-zA-Z.\d]*)?$/
      );

      const languages = getFolder(siteConfig.sidebar, /([a-z]+_[A-Z])\w/);

      console.log(languages, '<<<<<<<<<<');

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

  if (route.includes(siteConfig.config?.docsPage ?? 'docs')) {
    return (
      <Context.Provider value={{ ...siteConfig, setSiteConfig }}>
        <DocsLayout>
          <Head>
            <>
              <title>{title}</title>
              {metaTags}
            </>
          </Head>
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </DocsLayout>
      </Context.Provider>
    );
  }

  return (
    <Context.Provider value={siteConfig}>
      <Head>
        <>
          <title>{title}</title>
          {metaTags}
        </>
      </Head>
      <DefaultLayout>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </DefaultLayout>
    </Context.Provider>
  );
}
