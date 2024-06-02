import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layouts/Layout";
import "@/styles/sass/app.scss";

export default function App({ Component, pageProps }) {
  return (
   
      <SessionProvider session={pageProps.session}>
        <Layout>
          
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
   
  );
}
