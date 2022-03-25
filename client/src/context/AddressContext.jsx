import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
const AddressContext = createContext({});

export const AddressProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [coordinates, setCoordinates] = useState({});

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  async function getAddress() {
    if (!location) return;
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`
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
  }, [location]);

  const value = {
    coordinates,
    handleLocation,
  };

  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  );
};

AddressProvider.propTypes = {
  children: PropTypes.node,
};
export default AddressContext;
