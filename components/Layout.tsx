import styled from 'styled-components';
// import { Global } from '@emotion/core';
// import resetStyles from '../styles/reset';
// import globalStyles from '../styles/global';
// import typeStyles from '../styles/typography';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

const LayoutContainer = styled.div``;

const LayoutContent = styled.main`
  overflow-x: hidden;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Head>
      <meta
        property="og:title"
        content="Kahil Nayton Portfolio"
      />
      <meta
        property="og:description"
        content="Blog and Projects"
      />
      <meta
        property="og:image"
        content="https://miro.medium.com/fit/c/160/160/1*8s-r9WPNGv9o5s_ODQucqQ.jpeg"
      />
    </Head>
    {/* <Global styles={[resetStyles, globalStyles, typeStyles]} /> */}

    <div className="Layout">
      <Header />

      <LayoutContent>{children}</LayoutContent>

      <Footer />
    </div>
  </LayoutContainer>
);

export default Layout;
