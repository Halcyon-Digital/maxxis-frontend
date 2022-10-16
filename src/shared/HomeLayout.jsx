import React, { useEffect } from "react";
import Footer from "../components/Footer";
import HomeNavigation from "../components/HomeNavigation";

export default function HomeLayout({ children }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <HomeNavigation />
      {children}
      <Footer />
    </>
  );
}
