import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Baskets from "./pages/Baskets/Baskets";
import "./index.css";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baskets" element={<Baskets />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
