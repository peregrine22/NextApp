import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import apolloClient from "../apollo-client"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>

  );
}

export default MyApp
