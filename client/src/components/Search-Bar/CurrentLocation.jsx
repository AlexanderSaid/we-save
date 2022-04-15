import React, { useContext, useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import SearchContext from "../../context/SearchContext";
import axios from "axios";
import { motion } from "framer-motion";
import { fade } from "../../animation";
const CurrentLocation = () => {
  const {
    setInputValue,
    setSearchLoading,
    setSearchError,
    searchLoading,
    setPostcode,
    setToShow,
    setSelectedCategory,
    INCREMENT,
  } = useContext(SearchContext);
  const [currentCoordinates, setCurrentCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  const handleCurrentLocation = () => {
    setCurrentCoordinates({
      latitude: null,
      longitude: null,
    });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => alert("Geolocation is not supported by the browser")
    );
  };

  useEffect(() => {
    const controller = new AbortController();
    if (currentCoordinates.latitude == null) return;
    const fetchData = async () => {
      try {
        setSearchLoading(true);
        const res = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${currentCoordinates.latitude}&lon=${currentCoordinates.longitude}&type=postcode&apiKey=${process.env.GEO_API_KEY}`
        );
        const postcode = await res.data.features[0].properties.postcode;

        setInputValue(postcode);
        setPostcode(postcode);
        setToShow(INCREMENT);
        setSelectedCategory("");
      } catch (error) {
        setSearchError(error.message);
      } finally {
        setSearchLoading(false);
      }
    };
    fetchData();

    // useEffect cleanup
    return () => controller.abort();
  }, [currentCoordinates.latitude]);

  return (
    <motion.div variants={fade} className="p-1 sm:p-4">
      <BiCurrentLocation
        size={30}
        onClick={handleCurrentLocation}
        className={`${
          searchLoading ? "cursor-wait opacity-75" : "cursor-pointer"
        }`}
      />
    </motion.div>
  );
};
export default CurrentLocation;
