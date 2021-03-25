import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import ResetStyles from '../styles/reset';
import GlobalStyle from '../styles/global';
import TypeStyles from '../styles/typography';
import Head from 'next/head';

import '../public/fonts/fonts.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
       <Head>
        <link rel="shortcut icon" href="/spring_logo.ico" />
      </Head>
      <ResetStyles />
      <GlobalStyle />
      <TypeStyles />
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}
