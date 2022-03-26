import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "./ResultsComponents/Categories";
import ResultsSection from "./ResultsComponents/ResultsSection";

const Results = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <SearchBar />
      </div>
      <Categories />
      <ResultsSection />
    </div>
  );
};

export default Results;
