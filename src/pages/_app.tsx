import React from 'react'
import '../../static/globals.css'
import { ContextProvider } from '../store/context'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Jelly } from '@uiball/loaders'

export default function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])
  
  return (
      <ContextProvider>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        {!loading ?
          <Component {...pageProps} /> :
          <div
            className='
            w-[100%]
            h-[100%]
            fixed
            top-[0]
            left-[0]
            bg-[#D9D9D9]
            flex
            flex-col
            justify-center
            items-center'
          >
            <Jelly 
              size={80}
              speed={0.9} 
              color='#5A3BF8'
            />
          </div>}
      </ContextProvider>
    )
}
