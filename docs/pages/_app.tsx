import { AppProps } from 'next/app';
import { Engrafia } from 'engrafia';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  const {data:meta} = pageProps
  console.log(meta)
  return (
    <Engrafia>
     <Head>
      <meta charSet="utf-8"/>
      <meta name="robots" content="index,follow"/>
      <title>{`Engrafia | ${meta?.title??'Engrafia Docs'}`}</title>
      <meta name="description" content={meta?.description??'Docs generator'}/>
      <meta name="og:description" content={meta?.description ?? 'Docs generator'}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content="https://engrafia.vercel.app/imgs/engrafia.jpg"/>
      <meta name="twitter:site:domain" content="engrafia.vercel.app"/>
      <meta name="twitter:url" content="https://engrafia.vercel.app"/>
      <meta name="og:title" content="Engrafia"/>
      <meta name="og:image" content="https://engrafia.vercel.app/imgs/engrafia.jpg"/>
      <meta name="apple-mobile-web-app-title" content="Engrafia"/>
      <meta property="og:title" content={`Engrafia | ${meta?.title?? 'Docs generator'}`}/>
      <meta name="apple-mobile-web-app-title" content="Engrafia"/>

        <link rel="sitemap" href="/sitemap.xml" />
        <meta name="keywords" content={meta?.tags??'engrafia react docs'} />
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
