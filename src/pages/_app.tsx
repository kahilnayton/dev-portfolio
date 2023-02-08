import Link from 'next/link'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../../prismicio'

import ResetStyles from '@/styles/reset'
import GlobalStyle from '@/styles/global'
import TypeStyles from '@/styles/typography'

import '../../public/fonts/fonts.css'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/spring_logo.ico" />
      </Head>
      <ResetStyles />
      <GlobalStyle />
      <TypeStyles />
      {/* @ts-ignore */}
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <PrismicProvider
            internalLinkComponent={(props) => <Link {...props} />}
          >
            <PrismicPreview repositoryName={repositoryName}>
              <Component {...pageProps} />
            </PrismicPreview>
          </PrismicProvider>
        </ThemeProvider>
      </ParallaxProvider>
    </>
  )
}
