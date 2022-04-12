import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./css/index.css";
import Layout from "./components/layout/Layout";
import Results from "./pages/Results/Results";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import SignUp from "./components/Forms/SignUp";
import CreateBasket from "./pages/CreateBasket/CreateBasket";
import Test from "./pages/Test";
import Test1 from "./pages/Test1";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="createBasket" element={<CreateBasket />} />
          {/* <Route path="results/shop-details/:id" element={<ShopDetails />} /> */}
          <Route path="reset-password" element={<Test />} />
          <Route path="forget-password" element={<Test1 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
