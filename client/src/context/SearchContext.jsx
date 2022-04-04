import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import axios from "../apis/geoapify";
import useAxios from "../hooks/UseAxios";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getDistance } from "geolib";

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const navigate = useNavigate();
  //- Input Search
  const [inputValue, setInputValue] = useState("");

  //- The postcode to search
  const [postcode, setPostcode] = useState("1006gc");

  //- The search coordinates
  const [searchCoordinates, setSearchCoordinates] = useState({
    latitude: 52.367611,
    longitude: 4.904111,
  });

  //- Set the postcode onClick search
  const onSearch = () => {
    if (!inputValue) return;
    navigate("/results");
    const query = inputValue.split(" ").join("").toLowerCase();
    setPostcode(query);
    setToShow(INCREMENT);
  };

  const [results] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: `search?text=${postcode}&type=postcode&filter=countrycode:nl&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`,
  });

  //- Set the search postcode coordinates
  useEffect(() => {
    if (!results?.features?.length) return;
    function setCoordinates() {
      const coordinates = results.features[0].properties;
      setSearchCoordinates({
        latitude: coordinates.lat,
        longitude: coordinates.lon,
      });
    }
    return setCoordinates();
  }, [results]);

  /** Fetch shops */

  const [shops, setShops] = useState([]);
  const [shopsByDistance, setShopsByDistance] = useState([]);
  const [orderedShops, setOrderedShops] = useState([]);

  const { performFetch: performGet, cancelFetch: cleanUpGet } = useFetch(
    "/shops",
    (response) => {
      setShops(response.result);
    }
  );
  useEffect(() => {
    performGet();

    return cleanUpGet;
  }, []);

  useEffect(() => {
    if (!shops || !searchCoordinates) return;

    function getShopDistance() {
      const addDistance = [];
      shops.map((shop) => {
        const distance = getDistance(searchCoordinates, {
          latitude: shop.address.lat,
          longitude: shop.address.lon,
        });
        shop["distance"] = distance;
        addDistance.push(shop);
      });

      setShopsByDistance(addDistance);
    }

    return getShopDistance();
  }, [shops, searchCoordinates]);

  useEffect(() => {
    if (!shopsByDistance) return;
    function orderByDistance() {
      const ordered = shopsByDistance.sort((a, b) => a.distance - b.distance);
      return setOrderedShops(ordered);
    }

    return orderByDistance();
  }, [shopsByDistance]);

  //! ----------To Delete----------------
  // eslint-disable-next-line no-console
  console.log(orderedShops);
  //! -----------------------------------

  //- Number or baskets to show {in context to reset on search click}
  const INCREMENT = 5;
  const [toShow, setToShow] = useState(INCREMENT);

  const value = {
    setInputValue,
    inputValue,
    onSearch,
    orderedShops,
    INCREMENT,
    toShow,
    setToShow,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};
export default SearchContext;
