import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
const AddressContext = createContext({});

export const AddressProvider = ({ children }) => {
  // input field value (postcode or address )
  const [inputValue, setInputValue] = useState("");
  // coordinates for inputValue
  const [currentCoordinates, setCurrentCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  // the result of API to transfer from coordinates
  const [postcode, setPostcode] = useState("");
  // const [current, setCurrent] = useState(false);
  const handleLocation = (e) => {
    setInputValue(e.target.value);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setInputValue("loading ...");
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
    setCoordinates({
      latitude: 0,
      longitude: 0,
    });
  };

  // API to transfer the coordinates to postcode.
  async function getPostCode() {
    if (!currentCoordinates.latitude) return;
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${currentCoordinates.latitude}&lon=${currentCoordinates.longitude}&type=postcode&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`
      );
      const address = await response.json();
      setPostcode(address.features[0].properties.postcode);
      setInputValue(address.features[0].properties.postcode);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error();
    }
  }

  useEffect(() => {
    getPostCode();
  }, [currentCoordinates]);

  // API to get the information about the address or postcode.
  async function getAddress() {
    if (!inputValue) return;
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`
      );

      const address = await response.json();

      setCoordinates({
        latitude: address.features[0].properties.lat,
        longitude: address.features[0].properties.lon,
      });
      setCurrentCoordinates({
        latitude: 0,
        longitude: 0,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error();
    }
  }

  useEffect(() => {
    getAddress();
  }, [inputValue]);

  const value = {
    coordinates,
    currentCoordinates,
    getCurrentLocation,
    handleLocation,
    postcode,
    inputValue,
  };

  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  );
};

AddressProvider.propTypes = {
  children: PropTypes.node,
};
export default AddressContext;
