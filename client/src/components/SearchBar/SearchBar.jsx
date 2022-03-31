import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import PropTypes from "prop-types";
import AddressContext from "../../context/AddressContext";

const SearchBar = () => {
  const { handleLocation, getCurrentLocation, inputValue } =
    useContext(AddressContext);

  return (
    <>
      <div className="flex flex-col mt-10">
        <h3 className="block mt-2 mb-4 lg:text-3xl font-bold text-white text-xl ">
          Find Shops Near You
        </h3>

        <div className="flex rounded bg-white lg:w-[30rem] sm:w-[20rem] border border-darkBg mb-10 ">
          <div className="p-4">
            <BiCurrentLocation
              size={30}
              onClick={getCurrentLocation}
              className="cursor-pointer "
            />
          </div>

          <input
            type="text"
            name="location"
            value={inputValue}
            className="w-full px-4 py-1 text-gray-900 bg-transparent border-none outline-none focus:outline-none "
            placeholder={"Enter Your Post Code"}
            onChange={(e) => handleLocation(e)}
          />
          <Link to={"/results"}>
            <button className="h-full px-4 py-2 text-center rounded text-bodySmall text-black-400 bg-primary ">
              Search
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
SearchBar.propTypes = {
  inputValue: PropTypes.string,
  handleLocation: PropTypes.func,
};
export default SearchBar;
