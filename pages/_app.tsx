import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Providers from '@/components/widgets/store/Provider';
import ErrorBoundary from '@/components/shared/UI/ErrorBoundary/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ErrorBoundary>
  );
}
