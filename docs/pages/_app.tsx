import { AppProps } from 'next/app';
import { Engrafia } from 'engrafia';

function App({ Component, pageProps }: AppProps) {
  return (
    <Engrafia>
      <Component {...pageProps} />
    </Engrafia>
  );
}

export default App;
