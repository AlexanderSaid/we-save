import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SkipLinks from "./SkipLinks";
//import motion
import { motion } from "framer-motion";
import { pageAnimation, footerAnimation } from "../../animation";
import ScrollTop from "../ScrollTop";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <a id="top"></a>
      <header className="w-full h-[100px] bg-darkFont fixed top-0 flex items-center justify-center z-50">
        {pathname === "/" && <SkipLinks />}
        <NavBar />
      </header>

      <motion.main
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="w-screen grow basis-full mt-[100px] flex items-center justify-start flex-col overflow-x-clip"
      >
        <ScrollTop>
          <Outlet />
        </ScrollTop>
      </motion.main>
      <motion.footer
        variants={footerAnimation}
        initial="hidden"
        animate="show"
        className="w-full text-lightFont body-font bg-darkFont shrink-0 flex items-center justify-center"
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Layout;
