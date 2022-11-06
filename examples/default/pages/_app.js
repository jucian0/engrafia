import { Engrafia } from '@engrafia/ui';

function App({ Component, pageProps }) {
  return (
    <Engrafia>
      <Component {...pageProps} />
    </Engrafia>
  );
}

export default App;
