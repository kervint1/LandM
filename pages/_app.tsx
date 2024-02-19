import { AppProps } from 'next/app';
import '../src/app/globals.css';
import RootLayout from '../src/app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
