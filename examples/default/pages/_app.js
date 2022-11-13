import { Engrafia } from 'engrafia';

function App({ Component, pageProps }) {
  return (
    <Engrafia>
      <Component {...pageProps} />
    </Engrafia>
  );
}

export default App;
