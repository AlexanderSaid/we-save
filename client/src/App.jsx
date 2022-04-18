import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./css/index.css";
import Layout from "./components/layout/Layout";
import Results from "./pages/Results/Results";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import MyShop from "./pages/MyShop/MyShop";

//For the motion
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  let location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="results" element={<Results />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="my-shop" element={<MyShop />} />
            <Route path="resetpassword" element={<ResetPassword />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
