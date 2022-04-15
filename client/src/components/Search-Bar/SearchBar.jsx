import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import CurrentLocation from "./CurrentLocation";
import { motion } from "framer-motion";
import { inputAnim, fade, titleAnim } from "../../animation";

const SearchBar = () => {
  const {
    inputValue,
    setInputValue,
    onSearch,
    searchLoading,
    searchError,
    isExist,
  } = useContext(SearchContext);

  return (
    <>
      <motion.div
        variants={fade}
        className={`${
          searchLoading && "cursor-wait"
        } flex flex-col search-bar items-center justify-center w-full px-4 `}
      >
        <div className="overflow-hidden">
          <motion.h5
            variants={titleAnim}
            className="my-6 text-bodyRegular tracking-wide text-lightFont sm:bodyLarge text-center"
          >
            Find Shops Near You in Amsterdam
          </motion.h5>
        </div>
        <motion.form
          variants={inputAnim}
          className="flex rounded bg-lightFont w-[80%] xs:w-full border border-darkBg mb-2 max-w-[500px]"
          onSubmit={(e) => onSearch(e)}
        >
          <CurrentLocation />
          <motion.input
            variants={inputAnim}
            id="search-bar-input"
            type="text"
            name="location"
            aria-label="search, Enter your postcode."
            value={inputValue}
            className="w-full px-4 py-1 sm:py-4 text-darkFont bg-transparent border-none outline-none focus:outline-none placeholder:text-center placeholder:text-bodyMd sm:placeholder:text-bodyRegular"
            placeholder={"Enter Your Post Code"}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <motion.button
            variants={fade}
            type="submit"
            value={"Search"}
            disabled={searchLoading ? true : false}
            className='className="h-full px-4 py-1 sm:py-4 text-center rounded text-bodySmall text-darkFont bg-primary font-semibold cursor-pointer disabled:opacity-75 disabled:cursor-wait'
          >
            Search
          </motion.button>
        </motion.form>
        <p className="search-message mb-4 text-primary text-bodySmall sm:text-bodyRegular h-5">
          {searchError ? (
            <span>
              Something went wrong. <br className="sm:hidden" />
              Please try again later
            </span>
          ) : searchLoading ? (
            "Loading ..."
          ) : !isExist && inputValue ? (
            <span>
              This postcode is not exist. <br className="sm:hidden" />
              Please add an exist one.
            </span>
          ) : (
            ""
          )}
        </p>
      </motion.div>
    </>
  );
};

export default SearchBar;
