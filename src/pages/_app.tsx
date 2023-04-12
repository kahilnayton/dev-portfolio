import Head from 'next/head'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/lib/prismic'
import { ResetStyles, GlobalStyles, TypographyStyles } from '@/styles'

import '../../public/fonts/fonts.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/spring_logo.ico" />
      </Head>
      <ResetStyles />
      <GlobalStyles />
      <TypographyStyles />
      <ParallaxProvider>
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </ParallaxProvider>
    </>
  )
}

export default MyApp
