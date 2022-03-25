import React from "react";
import SearchBar from "../../components/SetLocationSection/SearchBar";
import BasketInfo from "./components/BasketInfo";
import Categories from "./components/Categories";

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
