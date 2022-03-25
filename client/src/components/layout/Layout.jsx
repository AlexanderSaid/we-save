import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header className="max-w-[1440px]">
        <NavBar />
      </header>
      <main className="The main width is 100%">
        <Outlet />
      </main>
      <footer className="text-gray-600 body-font bg-darkBg">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
