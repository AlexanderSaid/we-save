import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../../components/Search-Bar/SearchBar";
import SearchContext from "../../context/SearchContext";
import ResultsSection from "./ResultsComponents/ResultsSection";
import Categories from "./ResultsComponents/Categories";

const Results = () => {
  const { orderedShops, inputValue, selectedCategory, setSelectedCategory } =
    useContext(SearchContext);
  const [shopsToPass, setShopsToPass] = useState([]);

  const clickSelectedCategory = (e) => {
    e.target.value === selectedCategory
      ? setSelectedCategory("")
      : setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (!selectedCategory && !orderedShops.length) return;
    if (!selectedCategory) setShopsToPass(orderedShops);
    if (selectedCategory && orderedShops.length) {
      const filtered = orderedShops.filter(
        (shop) => shop.baskets[0].categories[0] === selectedCategory
      );
      //! ----------To Delete----------------
      // eslint-disable-next-line no-console
      console.log(filtered);
      //! -----------------------------------

      return setShopsToPass(filtered);
    }
  }, [selectedCategory, orderedShops]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full bg-darkBg flex justify-center items-center py-8">
          <SearchBar />
        </div>
        <Categories
          selectedCategory={selectedCategory}
          onClick={clickSelectedCategory}
        />
        <ResultsSection shops={shopsToPass} input={inputValue} />
      </div>
    </>
  );
};
export default Results;
