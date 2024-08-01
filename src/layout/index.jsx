import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
