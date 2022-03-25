import React, { useState, useEffect } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { Link } from "react-router-dom";
import AddressList from "./AddressList";
import PropTypes from "prop-types";

const SearchBar = () => {
  const [addresses, setAddresses] = useState([]);
  const [location, setLocation] = useState("");

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  async function fetchData() {
    if (location) {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`
      );
      const data = await response.json();
      setAddresses(data.features);
    }
  }

  useEffect(() => {
    fetchData();
  }, [location]);
  return (
    <div className="search-bar">
      <h3 className="mt-2 mb-4 text-3xl font-bold text-white md:text-xl">
        Find Shops Near You
      </h3>
      <div className="flex rounded bg-white lg:w-[30rem] sm:w-[20rem]  ">
        <BiCurrentLocation />
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
      <AddressList addresses={addresses} />
    </div>
  );
};
SearchBar.propTypes = {
  location: PropTypes.string,
  handleLocation: PropTypes.func,
};
export default SearchBar;
