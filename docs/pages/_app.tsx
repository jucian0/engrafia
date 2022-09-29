import { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { darkTheme, lightTheme } from 'docs/styles/theme';
import { DocsLayout } from 'components';

const components = {};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to docs!</title>
      </Head>
      <ThemeProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        <DocsLayout>
          <NextUIProvider>
            <main className="app">
              <MDXProvider components={components}>
                <Component {...pageProps} />
              </MDXProvider>
            </main>
          </NextUIProvider>
        </DocsLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
