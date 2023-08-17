import Head from "next/head";
import Header from "../comps/header";
import Footer from "../comps/footer";
import Enq from "../comps/Enquiries";
import CTABanner from "../comps/CTABanner";
import Link from "next/link";
import { useRef, useState } from "react";
import "../styles/globals.css";



function MyApp({ Component, pageProps }) {

  const checkRef = useRef(null);
  // const [FormSet, setFormSet] = useState();
  // const [FormEmail, setFormEmail] = useState();
  
  return (
    <div className="transition-colors duration-300 bg-gradient-to-t from-zinc-900 to-zinc-800 dark:from-slate-900 dark:to-slate-800 h-full">

      <Header />
      <Component {...pageProps} />
      {/* <CTABanner />
      <Enq emailAddress={"sophia.jelaca@hodgkinson.uk.com"} /> */}
      <Footer />
    </div>
  );
}

export default MyApp;
