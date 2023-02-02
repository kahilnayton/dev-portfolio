import styled from 'styled-components'
import { Footer } from './sections'
import { Header } from './sections'

const LayoutContainer = styled.div``

const LayoutContent = styled.main`
  overflow-x: hidden;
`

const Layout = (props: any) => {
  return (
    <LayoutContainer>
      <div className="Layout">
        <Header />

        <LayoutContent>{props.children}</LayoutContent>

        <Footer />
      </div>
    </LayoutContainer>
  )
}

export default Layout
