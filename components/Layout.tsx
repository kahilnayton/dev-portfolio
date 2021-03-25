import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LayoutContainer = styled.div``;

const LayoutContent = styled.main`
  overflow-x: hidden;
`;

const Layout = props => {
  return (
    <LayoutContainer>

      <div className="Layout">
        <Header />

        <LayoutContent>{props.children}</LayoutContent>

        <Footer />
      </div>
    </LayoutContainer>
  );
};

export default Layout;
