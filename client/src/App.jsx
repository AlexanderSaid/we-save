import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Baskets from "./pages/Baskets/Baskets";
import "./css/index.css";
import Layout from "./components/layout/Layout";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/baskets" element={<ResultsPage />} />
      </Routes>
    </>
  );
};

export default App;
