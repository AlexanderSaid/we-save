import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { BiCurrentLocation } from "react-icons/bi";

import AddressList from "./AddressList";
import PropTypes from "prop-types";
import AddressContext from "../../context/AddressContext";

const SearchBar = () => {
  const { handleLocation } = useContext(AddressContext);
  const [setCurrentLocation] = useState({
    lat: null,
    long: null,
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by the browser");
    }
  };

  const getCoordinates = (position) => {
    setCurrentLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };
  return (
    <div className="search-bar">
      <h3 className="mt-2 mb-4 text-3xl font-bold text-white md:text-xl ">
        Find Shops Near You
      </h3>

      <div className="flex rounded bg-white lg:w-[30rem] sm:w-[20rem] border border-darkBg mb-10">
        <BiCurrentLocation size={60} onClick={getLocation} />

        <input
          type="text"
          name="location"
          className="w-full px-4 py-1 text-gray-900 bg-transparent border-none outline-none focus:outline-none "
          placeholder="Enter Your Post Code"
          onChange={(e) => handleLocation(e)}
        />
        <Link to="/results">
          <button className="px-4 py-2 m-2 font-semibold rounded text-black-400">
            Search
          </button>
        </Link>
      </div>
      {currentLocation}
      <AddressList />
      {currentLocation.lat}
    </div>
  );
};
SearchBar.propTypes = {
  location: PropTypes.string,
  handleLocation: PropTypes.func,
};
export default SearchBar;
