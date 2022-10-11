import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout({ children }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
