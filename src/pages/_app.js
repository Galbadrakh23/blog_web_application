import "@/styles/globals.css";
import Layout from "@/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProvider from "@/components/provider/provider";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </MyProvider>
  );
}
