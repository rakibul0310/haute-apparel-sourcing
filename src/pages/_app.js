import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Herder";
import "@/styles/globals.css";
// import NProgress from "nprogress";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Router.events.on('routeChangeStart', () => {
//   NProgress.start()
// })
// Router.events.on('routeChangeError', () => {
//   NProgress.done()
// })
// Router.events.on('routeChangeComplete', () => {
//   NProgress.done()
// })

export default function App({ Component, pageProps }) {
  const [showNav, setShowNav] = useState(false);
  const [showDrop1, setShowDrop1] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);
  const [showDrop3, setShowDrop3] = useState(false);
  const handleBoth = () => {
    setShowNav(false);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
  };
  return (
    <>
      <NextNProgress
        color="#57C3A6"
        startPosition={5}
        stopDelayMs={100}
        height={4}
        showOnShallow={true}
      />
      <Header
        showDrop1={showDrop1}
        showNav={showNav}
        setShowDrop1={setShowDrop1}
        showDrop3={showDrop3}
        showDrop2={showDrop2}
        setShowNav={setShowNav}
        setShowDrop2={setShowDrop2}
        setShowDrop3={setShowDrop3}
      />
      <div
        onClick={handleBoth}
        className={`${showNav ? "nav-overlay absolute block" : "static"}`}
      ></div>
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
