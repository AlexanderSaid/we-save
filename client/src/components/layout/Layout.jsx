import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SkipLinks from "./SkipLinks";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <a id="top"></a>
      <header className="w-screen h-[100px] bg-darkBg fixed top-0 flex items-center justify-center block z-50">
        {pathname === "/" && <SkipLinks />}
        <NavBar />
      </header>
      <main className=" grow shrink-0 basis-full mt-[100px] flex items-center justify-start flex-col">
        <Outlet />
      </main>
      <footer className="w-screen text-lightFont body-font bg-darkBg shrink-0 flex items-center justify-center">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
