import React, { useContext, useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import SearchContext from "../../context/SearchContext";
import axios from "axios";

const CurrentLocation = () => {
  const { setInputValue, setSearchLoading, setSearchError, searchLoading } =
    useContext(SearchContext);
  const [currentCoordinates, setCurrentCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  const handleCurrentLocation = () => {
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
          `https://api.geoapify.com/v1/geocode/reverse?lat=${currentCoordinates.latitude}&lon=${currentCoordinates.longitude}&type=postcode&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`
        );
        const postcode = await res.data.features[0].properties.postcode;

        setInputValue(postcode);
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
    <div className="p-1 sm:p-4">
      <BiCurrentLocation
        size={30}
        onClick={handleCurrentLocation}
        className={`${
          searchLoading ? "cursor-wait opacity-75" : "cursor-pointer"
        }`}
      />
    </div>
  );
};
export default CurrentLocation;
