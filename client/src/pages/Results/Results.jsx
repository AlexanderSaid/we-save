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
      <div className="h-[100vh]">
        <ResultsSection />
      </div>
    </div>
  );
};

export default Results;
