import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  const pagesWithNavbar = {
    home: "/",
    blog: "/blog",
    blogId: "/blog/[id]",
    about: "/about",
  };

  const pagesNoFooter = {
    downloadAutocadBlock: "/descarga-bloques-autocad",
  };

  const showNavbarPage = (pathname) => {
    const hasPageNavbar = Object.values(pagesWithNavbar).includes(pathname);
    return hasPageNavbar;
  };

  const showFooterPage = (pathname) => {
    const hasPageFooter = Object.values(pagesNoFooter).includes(pathname);
    return !hasPageFooter;
  };

  console.log("pathname", showNavbarPage(pathname));

  showNavbarPage(pathname);
  showFooterPage(pathname);

  return (
    <div className="bg-bid-light">
      <div className=" max-w-4xl mx-auto px-4 min-h-screen relative ">
        {showNavbarPage(pathname) && <Navbar />}
        {children}
        {showFooterPage(pathname) && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
