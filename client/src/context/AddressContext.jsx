import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
const AddressContext = createContext({});

export const AddressProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [postcode, setPostcode] = useState(null);
  const [notification, setNotification] = useState("");
  const [currentLocation, setCurrentLocation] = useState(false);
  let addressFormatted = [];

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

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
  }, [currentLocation]);

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
      address.features.forEach((item) => {
        addressFormatted.push(item.properties.formatted);
      });

      if (location.length >= 6) {
        if (address.features[0].properties.city != "Amsterdam") {
          setNotification(
            "We are now available in the city of Amsterdam We hope to expand our services to your city soon."
          );
        } else {
          setNotification("");
        }
      } else {
        setNotification("");
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error();
    }
  }

  useEffect(() => {
    getAddress();
  }, [location]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
      setLocation("");
      setCurrentLocation(true);
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
    getLocation,
    postcode,
    location,
    addressFormatted,
    notification,
  };

  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  );
};

AddressProvider.propTypes = {
  children: PropTypes.node,
};
export default AddressContext;
