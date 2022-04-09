import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../../components/Search-Bar/SearchBar";
import SearchContext from "../../context/SearchContext";
import ResultsSection from "./ResultsComponents/ResultsSection";
import Categories from "./ResultsComponents/Categories";

const Results = () => {
  const { orderedBaskets, inputValue, selectedCategory, setSelectedCategory } =
    useContext(SearchContext);
  const [basketsToPass, setBasketsToPass] = useState([]);

  const clickSelectedCategory = (e) => {
    e.target.value === selectedCategory
      ? setSelectedCategory("")
      : setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (!selectedCategory && !orderedBaskets.length) return;
    if (!selectedCategory) setBasketsToPass(orderedBaskets);
    if (selectedCategory && orderedBaskets.length) {
      const filtered = orderedBaskets.filter((basket) =>
        basket.categories.includes(selectedCategory)
      );
      // eslint-disable-next-line no-console
      console.log(filtered);

      setBasketsToPass(filtered);
    }
  }, [selectedCategory, orderedBaskets]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full py-8 bg-darkBg">
          <SearchBar />
        </div>
        <Categories
          selectedCategory={selectedCategory}
          onClick={clickSelectedCategory}
        />
        <ResultsSection baskets={basketsToPass} input={inputValue} />
      </div>
    </>
  );
};
export default Results;
