import { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from "@mdx-js/react";

const components = {

}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to docs!</title>
      </Head>
      <main className="app">
      <MDXProvider components={components}>
        <Component {...pageProps} />
        </MDXProvider>
      </main>
    </>
  );
}

export default CustomApp;
