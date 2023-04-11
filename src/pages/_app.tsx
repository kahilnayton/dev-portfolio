import Head from 'next/head'
// import localFont from 'next/font/local'
import CustomFont from 'next/font/local'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/lib/prismic'
import ResetStyles from '@/styles/reset'
import GlobalStyle from '@/styles/global'
import TypeStyles from '@/styles/typography'

import '../../public/fonts/fonts.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/spring_logo.ico" />
      </Head>
      <ResetStyles />
      <GlobalStyle />
      <TypeStyles />
      <ParallaxProvider>
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </ParallaxProvider>
    </>
  )
}

export default MyApp
