import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`DevLa - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="h-screen flex flex-col space-between">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
