import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header className="w-full bg-darkBG fixed ">
        <NavBar />
      </header>
      <main className="w-full grow shrink-0 basis-full">
        <Outlet />
      </main>
      <footer className="w-full text-gray-600 body-font bg-darkBg shrink-0">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
