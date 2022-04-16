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
      <header className="w-full h-[100px] bg-darkFont fixed top-0 flex items-center justify-center block z-50">
        {pathname === "/" && <SkipLinks />}
        <NavBar />
      </header>
      <main className=" grow basis-full mt-[100px] flex items-center justify-start flex-col overflow-x-clip">
        <Outlet />
      </main>
      <footer className="w-full text-lightFont body-font bg-darkFont shrink-0 flex items-center justify-center">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
