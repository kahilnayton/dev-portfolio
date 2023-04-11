import Footer from './footer'
import Meta from './meta'

type LayoutProps = {
  preview: boolean
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
