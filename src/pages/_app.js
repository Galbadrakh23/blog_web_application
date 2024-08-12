import "@/styles/globals.css";
import Layout from "@/layout";
import SearchProvider from "@/components/provider/search-provider";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}
