import React from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import BasketInfo from "./components/BasketInfo";
import ResultsHeader from "./components/ResultsHeader";
import Categories from "./components/Categories";

const ResultsPage = () => {
  return (
    <div>
      <NavBar />
      <Categories />
      <ResultsHeader />
      <BasketInfo />
      <Footer />
    </div>
  );
};

export default ResultsPage;
