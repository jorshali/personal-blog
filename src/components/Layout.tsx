import { TemplateFooter } from "./TemplateFooter"
import Meta from "./Meta"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <TemplateFooter />
    </>
  )
}

export default Layout
