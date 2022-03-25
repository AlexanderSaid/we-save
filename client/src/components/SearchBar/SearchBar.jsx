import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import useFetchAPI from "../../hooks/useFetchAPI";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { getDistance } from "geolib";
import AddressList from "./AddressList";
import PropTypes from "prop-types";
const SearchBar = ({ location, handleLocation }) => {
  let addresses;
  if (location) {
    let url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`;
    const { data } = useFetchAPI(url);
    addresses = data.features;
  }
  const [currentLocation, setCurrentLocation] = useState({
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
    console.log(position);
  };

  return (
    <div className="search-bar">
      <h3 className="mt-2 mb-4 text-3xl font-bold text-white md:text-xl">
        Find Shops Near You
      </h3>
      <div className="flex rounded bg-white lg:w-[30rem] sm:w-[20rem]  ">
        <BiCurrentLocation size={60} onClick={getLocation} />
        <input
          type="text"
          name="location"
          className="w-full  border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none "
          placeholder="Enter Your Post Code"
          onChange={(e) => handleLocation(e)}
        />
        <Link to="/results">
          <button className="m-2 rounded px-4 px-4 py-2 font-semibold text-black-400">
            Search
          </button>
        </Link>
      </div>
      <div style={{ color: "white" }}>
        <h4>Coordinates</h4>
        <p>Latitude: {currentLocation.lat}</p>
        <p>Longtitude: {currentLocation.long}</p>
      </div>
      <AddressList addresses={addresses} />
    </div>
  );
};
SearchBar.propTypes = {
  location: PropTypes.string,
  handleLocation: PropTypes.func,
};
export default SearchBar;
