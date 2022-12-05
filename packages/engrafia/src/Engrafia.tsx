import React from 'react';
import { useRouter } from 'next/router';
import { DefaultLayout } from './Layouts/Default';
import { DocsLayout } from './Layouts/Docs';
import { mdxComponents } from './mdxComponents';
import { EngrafiaProvider, useEngrafiaConfig } from './EngrafiaProvider';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { lightTheme, darkTheme } from './Styles/theme';
import { MDXProvider } from '@mdx-js/react';

function RootLayout({ children, ...rest }: React.PropsWithChildren<any>) {
  const { themeConfig } = useEngrafiaConfig();
  const { route } = useRouter();
  const meta = children.props.meta

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
  const themes = rest.themes ?? {
    light: lightTheme,
    dark: darkTheme,
  };

    return (
      <NextUIProvider>
        <ThemeProvider
          defaultTheme="light"
          attribute="class"
          value={themes as any}
        >
          <MDXProvider components={{ ...mdxComponents, ...rest.mdxComponents }}>
            <EngrafiaProvider>
              <RootLayout>{children}</RootLayout>
            </EngrafiaProvider>
          </MDXProvider>
        </ThemeProvider>
      </NextUIProvider>
    );

}
