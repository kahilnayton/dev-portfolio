
import styled from 'styled-components';
import { Global } from '@emotion/core';
import resetStyles from '../styles/reset';
import globalStyles from '../styles/global';
import typeStyles from '../styles/typography';
import Footer from './Footer';
import Header from './Header';

const LayoutContainer = styled.div``;

const LayoutContent = styled.main`
  overflow-x: hidden;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Global styles={[resetStyles, globalStyles, typeStyles]} />

    <div className="Layout">
      <Header />

      <LayoutContent>{children}</LayoutContent>

      <Footer />
    </div>
  </LayoutContainer>
);

export default Layout;
