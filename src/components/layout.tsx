import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "@components/Header"
import Footer from "@components/Footer"
import BottomMenu from "@components/Menu/Bottom"

const Layout = ({ children, location }: any) => {
  const data = useStaticQuery(graphql`
    query MenusQuery {
      site {
        siteMetadata {
          menus {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        menus={data.site.siteMetadata.menus}
      />
      <main className="container mx-auto w-full px-4 md:px-0">
        {children}
      </main>
      <BottomMenu menus={data.site.siteMetadata.menus} />
      <Footer />
    </>
  )
}

export default Layout
