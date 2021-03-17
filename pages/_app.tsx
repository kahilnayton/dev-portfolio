import { ThemeProvider } from 'styled-components'
import ResetStyles from '../styles/reset';
import GlobalStyle from '../styles/global'
import TypeStyles from '../styles/typography';

import '../public/fonts/fonts.css'


const theme = {
  colors: {
    primary: '#0070f3',
  },

}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResetStyles />
      <GlobalStyle />
      <TypeStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}