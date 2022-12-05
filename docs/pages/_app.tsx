import { AppProps } from 'next/app';
import { Engrafia } from 'engrafia';

function App({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  return (
    <Engrafia>
      <Component {...pageProps} />
    </Engrafia>
  );
}

export default App;
