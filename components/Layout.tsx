import styled from 'styled-components';
// import { Global } from '@emotion/core';
// import resetStyles from '../styles/reset';
// import globalStyles from '../styles/global';
// import typeStyles from '../styles/typography';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LayoutContainer = styled.div``;

const LayoutContent = styled.main`
  overflow-x: hidden;
`;

const Layout = props => {
  console.log(props);
  return (
    <LayoutContainer>
      {/* <Global styles={[resetStyles, globalStyles, typeStyles]} /> */}

      <div className="Layout">
        <Header />

        <LayoutContent>{props.children}</LayoutContent>

        <Footer />
      </div>
    </LayoutContainer>
  );
};

export default Layout;
