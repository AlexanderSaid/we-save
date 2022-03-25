import React from "react";
import BasketInfo from "./components/BasketInfo";
import ResultsHeader from "./components/ResultsHeader";
import Categories from "./components/Categories";

const ResultsPage = () => {
  return (
    <div>
      <Categories />
      <ResultsHeader />
      <BasketInfo />
    </div>
  );
};

export default ResultsPage;
