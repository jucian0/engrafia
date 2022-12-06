import { AppProps } from 'next/app';
import { Engrafia } from 'engrafia';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  const meta = pageProps.meta;

  return (
    <Engrafia>
      <Head>
        <title>{`Engrafia | ${meta?.title}`}</title>
        <meta name="description" content={meta?.description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://engrafia.vercel.app" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://engrafia.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Engrafia | ${meta?.title}`} />
        <meta property="og:description" content={meta?.description} />
        <meta
          name="og:image"
          content="https://engrafia.vercel.app/imgs/engrafia.jpg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="engrafia.vercel.app" />
        <meta property="twitter:url" content="https://engrafia.vercel.app/" />
        <meta name="twitter:title" content={`Engrafia | ${meta?.title}`} />
        <meta name="twitter:description" content={meta?.description} />
        <meta
          name="twitter:image"
          content="https://engrafia.vercel.app/imgs/engrafia.jpg"
        />

        <link rel="sitemap" href="/sitemap.xml" />
        <meta name="keywords" content={meta?.tags} />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </Engrafia>
  );
}

export default App;
