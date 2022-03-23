import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import useFetchAPI from "../../hooks/useFetchAPI";
import { Link } from "react-router-dom";
// import { getDistance } from "geolib";
import AddressList from "./AddressList";

const SearchBar = ({ location, handleLocation }) => {
  let url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`;
  const { data } = useFetchAPI(url);
  let addresses = data.features;

  return (
    <>
      <h3>Find Shops Near You</h3>
      <form action="">
        <BiCurrentLocation />
        <input
          type="text"
          name="location"
          value={location}
          placeholder="Enter Your Post Code"
          onChange={(e) => handleLocation(e)}
        />
        <Link to="/products">Search</Link>
      </form>
      <AddressList addresses={addresses} />
    </>
  );
};

export default SearchBar;
