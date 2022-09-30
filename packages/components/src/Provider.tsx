import { Grid } from '@nextui-org/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Config, getConfig } from './get-config';
import { getSidebarTree, SidebarTree } from './get-sidebar';
import { DocsLayout } from './Layouts/Docs';

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
    if (route !== '/_error') {
      const meta = children.props.data;
      const title =
        route === `/`
          ? meta.title
          : `${siteConfig.config.title} - ${meta?.title ?? '404'}`;

      console.log(children.props);

      const metaTags = Object.entries(children.props.data).map(
        ([key, value]) => {
          return <meta key={key} name={key} content={value as ''} />;
        }
      );
      const tableOfContent = children.props.tableOfContents;
      const versions = siteConfig.sidebar.children
        .filter((child) =>
          new RegExp(
            /^([v])(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-[a-zA-Z\d][-a-zA-Z.\d]*)?(\+[a-zA-Z\d][-a-zA-Z.\d]*)?$/
          ).test(child.name)
        )
        .map((child) => child.name);

      setMetaTags(metaTags);
      setTitle(title);
      setSiteConfig((state) => ({
        ...state,
        tableOfContent,
        language: localStorage.getItem('language') ?? 'en_US',
        versions: versions,
        version: localStorage.getItem('version') ?? 'lates',
      }));
    }
  }, [route]);

  // if (route.includes(siteConfig.config?.docsPage ?? 'docs')) {
  return (
    <Context.Provider value={{ ...siteConfig, setSiteConfig }}>
      <DocsLayout>
        <Head>
          <>
            <title>{title}</title>
            {metaTags}
          </>
        </Head>
        {children}
      </DocsLayout>
    </Context.Provider>
  );
  //}

  // return (
  //   <Context.Provider value={siteConfig}>
  //     <Head>
  //       <>
  //         <title>{title}</title>
  //         {metaTags}
  //       </>
  //     </Head>
  //     <Grid>{children}</Grid>
  //   </Context.Provider>
  // );
}
