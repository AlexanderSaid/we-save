import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SkipLinks from "./SkipLinks";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header className="w-full h-[100px] bg-darkBg fixed top-0 flex items-center justify-center block z-10">
        {pathname === "/" && <SkipLinks />}
        <NavBar />
      </header>
      <main className="w-full grow shrink-0 basis-full mt-[100px]">
        <Outlet />
      </main>
      <footer className="w-full text-lightFont body-font bg-darkBg shrink-0">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
