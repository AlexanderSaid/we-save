import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import PropTypes from "prop-types";
import AddressContext from "../../context/AddressContext";

const SearchBar = () => {
  const { handleLocation, getLocation, postcode, location, notification } =
    useContext(AddressContext);

  return (
    <>
      <div className="search-bar flex flex-col">
        <h3 className="mt-2 mb-4 text-3xl font-bold text-white md:text-xl block ">
          Find Shops Near You
        </h3>

        <div className="flex rounded bg-white lg:w-[30rem] sm:w-[20rem] border border-darkBg mb-10 ">
          <div className="p-4">
            <BiCurrentLocation
              size={30}
              onClick={getLocation}
              className="cursor-pointer	"
            />
          </div>

          <input
            type="text"
            name="location"
            value={location}
            className="w-full px-4 py-1 text-gray-900 bg-transparent border-none outline-none focus:outline-none "
            placeholder={
              postcode ? `Your Postcode ${postcode}` : "Enter Your Post Code"
            }
            onChange={(e) => handleLocation(e)}
          />
          <Link to={"/results"}>
            <button
              className="px-4 py-2  text-bodySmall rounded text-black-400 text-center bg-primary
            h-full "
            >
              Search
            </button>
          </Link>
        </div>
        <div className="lg:w-[30rem] sm:w-[20rem]">{notification}</div>
      </div>
    </>
  );
};
SearchBar.propTypes = {
  location: PropTypes.string,
  handleLocation: PropTypes.func,
};
export default SearchBar;
