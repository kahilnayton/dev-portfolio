import styled from 'styled-components'
import { Footer } from './sections'
import { Header } from './sections'

const LayoutContent = styled.main`
  overflow-x: hidden;
`

const Layout = (props: any) => {
  return (
    <div className="Layout">
      <Header />

      <LayoutContent>{props.children}</LayoutContent>

      <Footer />
    </div>
  )
}

export default Layout
