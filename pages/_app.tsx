import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import Providers from '@/components/widgets/store/Provider';
import ErrorBoundary from '@/components/shared/UI/ErrorBoundary/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Providers>
        <NextNProgress color="#e0bc09" />
        <Component {...pageProps} />
      </Providers>
    </ErrorBoundary>
  );
}
