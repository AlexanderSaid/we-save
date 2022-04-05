import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import useFetchAPI from "../hooks/useFetchAPI";
const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  // Coordinates for current location
  const [currentCoordinates, setCurrentCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  // Coordinates for search input
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  // post code for current location
  const [postcode, setPostcode] = useState("");

  /*Get Current Location*/
  // Get location by geolocation laibrary
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by the browser");
    }
  };

  const getCoordinates = (position) => {
    setCurrentCoordinates({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  //Fetch API
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${currentCoordinates.latitude}&lon=${currentCoordinates.longitude}&type=postcode&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`;

  const {
    performFetch: performCurrentLocation,
    loading: loadingCurrentLocation,
  } = useFetchAPI(url, (response) => {
    setInputValue(response.features[0].properties.postcode);
    setPostcode(response.features[0].properties.postcode);
  });

  useEffect(() => {
    if (currentCoordinates.latitude) {
      performCurrentLocation();
    }
  }, [currentCoordinates]);

  // Fire when click current location button
  const handleCurrentLocation = () => {
    getCurrentLocation();
    if (loadingCurrentLocation) {
      setInputValue("Loading...");
    }
  };

  /*Get address by input field*/
  //handle location by input value into field

  const addressUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`;

  const { performFetch: performInputAddress } = useFetchAPI(
    addressUrl,
    (response) => {
      setCoordinates({
        latitude: response.features[0].properties.lat,
        longitude: response.features[0].properties.lon,
      });
      setCurrentCoordinates({
        latitude: null,
        longitude: null,
      });
    }
  );

  const clickSearchButton = () => {
    performInputAddress();
  };

  const value = {
    handleCurrentLocation,
    inputValue,
    setInputValue,
    coordinates,
    currentCoordinates,
    postcode,
    clickSearchButton,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};
export default SearchContext;
