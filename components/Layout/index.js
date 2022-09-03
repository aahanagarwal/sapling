import Head from "next/head";
import Header from "../Header";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="../logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Sapling</title>
      </Head>
      <div id="popupContainer"></div>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
