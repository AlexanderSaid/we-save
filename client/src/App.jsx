import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
