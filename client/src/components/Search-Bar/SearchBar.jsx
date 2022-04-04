import React, { useContext } from "react";

// import PropTypes from "prop-types";
import { BiCurrentLocation } from "react-icons/bi";

import SearchContext from "../../context/SearchContext";
const SearchBar = () => {
  const { inputValue, setInputValue, onSearch } = useContext(SearchContext);

  return (
    <>
      <div className="flex flex-col search-bar">
        <h3 className="block mt-2 mb-4 text-3xl font-bold text-lightFont md:text-xl text-center">
          Find Shops Near You in Amsterdam
        </h3>

        <div className="flex rounded bg-lightFont lg:w-[30rem] sm:w-[20rem] border border-darkBg mb-10 ">
          <div className="p-4">
            <BiCurrentLocation
              size={30}
              // onClick={}
              className="cursor-pointer "
            />
          </div>

          <input
            type="text"
            name="location"
            aria-label="search, Enter your postcode."
            value={inputValue}
            className="w-full px-4 py-1 text-gray-900 bg-transparent border-none outline-none focus:outline-none "
            placeholder={"Enter Your Post Code"}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={onSearch}
            type="submit"
            className='className="h-full px-4 py-2 text-center rounded text-bodySmall text-black-400 bg-primary " '
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
SearchBar.propTypes = {};
export default SearchBar;
