import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [searchText, setSearchText] = useState("LP-24-1C");
  return (
    <div>
      <Header searchText={searchText} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
