import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header className="w-full bg-darkBG">
        <NavBar />
      </header>
      <main className="w-full">
        <Outlet />
      </main>
      <footer className="w-full text-gray-600 body-font bg-darkBg">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
