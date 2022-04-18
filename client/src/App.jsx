import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./css/index.css";
import Layout from "./components/layout/Layout";
import Results from "./pages/Results/Results";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import MyShop from "./pages/MyShop/MyShop";
import ResetPassword from "./pages/resetpassword/ResetPassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="my-shop" element={<MyShop />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
