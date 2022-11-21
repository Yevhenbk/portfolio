import '../../static/globals.css'
import { ContextProvider } from '../store/context'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ContextProvider>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </ContextProvider>
    )
}
