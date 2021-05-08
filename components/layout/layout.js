import Head from "next/head";
import Footer from "../footer/footer";
import Header from "../header/header";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
