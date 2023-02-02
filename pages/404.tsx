import styled from 'styled-components'
import Head from 'next/head'

import Layout from '../components/Layout'
import { colors } from '../styles/colors'
import CloudComponent from '../components/_ui/CloudComponent'
import { ButtonLink } from '../components/_ui'

const NotFoundPage = () => (
  <Layout>
    <Head>
      <title>Kahil Dev 404</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta
        name="description"
        content="Nothing is on this page"
        key="description"
      />
    </Head>
    <Wrapper>
      <CloudComponent variant="notFound" direction="left" distance="10rem" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <ButtonLink title="Home" href="/" />
      <CloudComponent variant="notFound" direction="right" distance="2rem" />
    </Wrapper>
  </Layout>
)

export default NotFoundPage

const Wrapper = styled.div`
  background: ${colors.blue};
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  height: calc(100vh - 12rem);
  z-index: -1;
`
