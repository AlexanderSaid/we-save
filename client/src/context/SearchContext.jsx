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
    latitude: null,
    longitude: null,
  });

  //- Selected category state to reset when search click
  const [selectedCategory, setSelectedCategory] = useState("");

  //- Set the postcode onClick search
  const onSearch = () => {
    if (!inputValue) return;
    navigate("/results");
    const query = inputValue.split(" ").join("").toLowerCase();
    setPostcode(query);
    setToShow(INCREMENT);
    setSelectedCategory("");
  };

  //- City state for checking
  const [isAmsterdam, setIsAmsterdam] = useState(true);
  //- Postcode existence
  const [isExist, setIsExist] = useState(true);

  const [searchedPostcode, searchError, searchLoading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: `search?text=${postcode}&type=postcode&filter=countrycode:nl&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`,
  });

  //- Set the search postcode coordinates
  useEffect(() => {
    !searchedPostcode.features?.length
      ? setIsExist(false)
      : (() => {
          setIsExist(true);
          const coordinates = searchedPostcode.features[0].properties;
          setSearchCoordinates({
            latitude: coordinates.lat,
            longitude: coordinates.lon,
          });
          const city = searchedPostcode.features[0].properties.city;
          setIsAmsterdam(city === "Amsterdam" ? true : false);
        })();
  }, [searchedPostcode.features]);

  /** Fetch baskets */

  const [baskets, setBaskets] = useState([]);
  const [basketsByDistance, setBasketsByDistance] = useState([]);
  const [orderedBaskets, setOrderedBaskets] = useState([]);
  const [confirmRsv, setConfirmRsv] = useState(false);

  const { performFetch: performGet, cancelFetch: cleanUpGet } = useFetch(
    "/baskets",
    (response) => {
      setBaskets(response.result);
    }
  );
  useEffect(() => {
    performGet();

    return cleanUpGet;
  }, [confirmRsv]);

  useEffect(() => {
    if (!baskets || !searchCoordinates.latitude) return;

    function getBasketsDistance() {
      const addDistance = [];
      baskets.map((basket) => {
        const distance = getDistance(searchCoordinates, {
          latitude: basket.shop_id.address.lat,
          longitude: basket.shop_id.address.lon,
        });
        basket["distance"] = distance;
        addDistance.push(basket);
      });

      setBasketsByDistance(addDistance);
    }

    return getBasketsDistance();
  }, [baskets, searchCoordinates]);

  useEffect(() => {
    if (!basketsByDistance) return;
    function orderByDistance() {
      const ordered = basketsByDistance
        .filter((basket) => basket.quantity > 0)
        .sort((a, b) => a.distance - b.distance);
      return setOrderedBaskets(ordered);
    }

    return orderByDistance();
  }, [basketsByDistance]);

  //- Number or baskets to show {in context to reset on search click}
  const INCREMENT = 5;
  const [toShow, setToShow] = useState(INCREMENT);

  const value = {
    setInputValue,
    inputValue,
    onSearch,
    orderedBaskets,
    INCREMENT,
    toShow,
    setToShow,
    setPostcode,
    searchLoading,
    searchError,
    selectedCategory,
    setSelectedCategory,
    isAmsterdam,
    isExist,
    confirmRsv,
    setConfirmRsv,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};
export default SearchContext;
