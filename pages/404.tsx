
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
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
    <SEO title="404: Not found" />
    <Wrapper>
    <CloudComponent variant='notFound' direction='left' distance='10rem'/>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <ButtonLink href="/"><a>Home</a></ButtonLink>
      <CloudComponent variant='notFound' direction='right' distance='2rem'/>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
