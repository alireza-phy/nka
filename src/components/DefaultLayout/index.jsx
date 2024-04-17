import Header from "./components/Header";
import Footer from "./components/Footer";

const DefaultLayout = ({ children, meta }) => {
  return (
    <>
      {meta}
      <Header />
      <main className={"siteContent"}>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
