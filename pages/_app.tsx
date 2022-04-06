import React from 'react';
import '../styles/globals.css'

import { ReactQueryDevtools } from 'react-query/devtools'

import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </Hydrate>

    </QueryClientProvider>

  );
}

export default MyApp
