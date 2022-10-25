import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { darkTheme, lightTheme, Provider } from '@engrafia/ui';

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ThemeProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
