import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SkipLinks from "./SkipLinks";
//import motion
import { motion } from "framer-motion";
import { pageAnimation, footerAnimation } from "../../animation";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <a id="top"></a>
      <header className="w-screen h-[100px] bg-darkFont fixed top-0 flex items-center justify-center block z-50">
        {pathname === "/" && <SkipLinks />}
        <NavBar />
      </header>
      <motion.main
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className=" grow shrink-0 basis-full mt-[100px] flex items-center justify-start flex-col"
      >
        <Outlet />
      </motion.main>
      <motion.footer
        variants={footerAnimation}
        initial="hidden"
        animate="show"
        className="w-screen text-lightFont body-font bg-darkFont shrink-0 flex items-center justify-center"
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Layout;
