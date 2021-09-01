import "../styles/tailwind.css";

import Navbar from "../components/Navbar";

import { Toaster } from "react-hot-toast";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <DefaultSeo {...SEO} />
      <div className="bg-gray-900 overflow-hidden">
        <Toaster />
        <Navbar />
        <main className="mx-auto min-h-screen">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}
