import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
const AddressContext = createContext({});

export const AddressProvider = ({ children }) => {
  // input field value (postcode or address )
  const [inputValue, setInputValue] = useState("");
  // coordinates for inputValue
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  // the result of API to transfer from coordinates
  const [postcode, setPostcode] = useState("");
  const [current, setCurrent] = useState(false);
  const handleLocation = (e) => {
    setInputValue(e.target.value);
  };

  // API to transfer the coordinates to postcode.
  async function getPostCode() {
    if (!coordinates.latitude) return;
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&type=postcode&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`
      );
      const address = await response.json();
      setPostcode(address.features[0].properties.postcode);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error();
    }
  }

  useEffect(() => {
    getPostCode();
  }, [current]);

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
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error();
    }
  }

  useEffect(() => {
    getAddress();
  }, [inputValue]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
      setInputValue(postcode);
      setCurrent(!current);
    } else {
      alert("Geolocation is not supported by the browser");
    }
  };

  const getCoordinates = (position) => {
    setCoordinates({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const value = {
    coordinates,
    handleLocation,
    getCurrentLocation,
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
