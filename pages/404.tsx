
import styled from 'styled-components';

import Layout from '../components/Layout';
import colors from '../styles/colors';
import CloudComponent from '../components/CloudComponent'
import ButtonLink from '../components/_ui/ButtonLink';

const Wrapper = styled.div`
  background: ${colors.blue};
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  height: calc(100vh - 12rem);
  z-index: -1;
`;

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
    <CloudComponent variant='notFound' direction='left' distance='10rem'/>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <ButtonLink title="Home" href="/"/>
      <CloudComponent variant='notFound' direction='right' distance='2rem'/>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
