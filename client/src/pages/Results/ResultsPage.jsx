import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "./ResultsComponents/Categories";
import BasketInfo from "./ResultsComponents/BasketInfo";
const ResultsPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-darkBg">
        <SearchBar />
      </div>
      <Categories />
      <BasketInfo />
    </div>
  );
};

export default ResultsPage;
