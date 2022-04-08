import React, { useContext } from "react";

import SearchContext from "../../context/SearchContext";
import CurrentLocation from "./CurrentLocation";

const SearchBar = () => {
  const { inputValue, setInputValue, onSearch } = useContext(SearchContext);

  return (
    <>
      <div className="flex flex-col search-bar items-center justify-center w-full px-4">
        <h5 className="block my-4 mb-4 text-bodyRegular tracking-wide text-lightFont sm:bodyLarge text-center">
          Find Shops Near You in Amsterdam
        </h5>

        <div className="flex rounded bg-lightFont w-full border border-darkBg mb-2 max-w-[500px]">
          <CurrentLocation />
          <input
            type="text"
            name="location"
            aria-label="search, Enter your postcode."
            value={inputValue}
            className="w-full px-4 py-1 sm:py-4 text-darkFont bg-transparent border-none outline-none focus:outline-none placeholder:text-center placeholder:text-bodyMd sm:placeholder:text-bodyRegular"
            placeholder={"Enter Your Post Code"}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={onSearch}
            type="submit"
            className='className="h-full px-4 py-1 sm:py-4 text-center rounded text-bodySmall text-darkFont bg-primary font-semibold'
          >
            Search
          </button>
        </div>
        <p className="search-message mb-4 text-primary text-bodySmall sm:text-bodyRegular">
          message
        </p>
      </div>
    </>
  );
};

export default SearchBar;
