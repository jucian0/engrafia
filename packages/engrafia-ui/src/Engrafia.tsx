import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';
import { DefaultLayout } from './Layouts/Default';
import { DocsLayout } from './Layouts/Docs';
import { mdxComponents } from './mdxComponents';
import { EngrafiaProvider, useEngrafiaConfig } from './EngrafiaProvider';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { lightTheme, darkTheme } from './Styles/theme';

function RootLayout({ children }: React.PropsWithChildren<any>) {
  const { themeConfig, meta } = useEngrafiaConfig();
  const { route } = useRouter();

  if (route.includes(themeConfig.rootDocs ?? 'docs')) {
    return (
      <>
        {themeConfig?.head?.({ meta, title: themeConfig.title ?? '' })}
        <DocsLayout>{children}</DocsLayout>
      </>
    );
  }

  return (
    <>
      {themeConfig?.head?.({ meta, title: themeConfig.title ?? '' })}
      <DefaultLayout>{children}</DefaultLayout>
    </>
  );
}

function useLoaded() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => setLoaded(true), []);
  return loaded;
}

export type EngrafiaProps = {
  themes?: {
    [k: string]: { [k: string]: any };
  };
  mdxComponents?: { [k: string]: any };
};

export function Engrafia({
  children,
  ...rest
}: React.PropsWithChildren<EngrafiaProps>) {
  const loaded = useLoaded();
  const themes = rest.themes ?? {
    light: lightTheme,
    dark: darkTheme,
  };

  if (loaded) {
    return (
      <NextUIProvider>
        <ThemeProvider
          defaultTheme="light"
          attribute="class"
          value={themes as any}
        >
          <MDXProvider
            components={{ ...mdxComponents, ...rest.mdxComponents } as any}
          >
            <EngrafiaProvider>
              <RootLayout>{children}</RootLayout>
            </EngrafiaProvider>
          </MDXProvider>
        </ThemeProvider>
      </NextUIProvider>
    );
  }

  return null;
}
