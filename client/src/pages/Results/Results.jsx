import React, { useState, useEffect, useContext } from "react";
import { getDistance } from "geolib";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "./ResultsComponents/Categories";
import ResultsSection from "./ResultsComponents/ResultsSection";
import AddressContext from "../../context/AddressContext";
import useFetch from "../../hooks/useFetch";

const Results = () => {
  const { coordinates, currentCoordinates } = useContext(AddressContext);
  // All shops in the database
  const [shops, setShops] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState();

  const filteredBaskets = (arr) => {
    setFilteredCategories(arr);
  };
  let nearLocation = [];

  //Get Method
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

  const coord = currentCoordinates.latitude ? currentCoordinates : coordinates;

  if (shops && coord.latitude) {
    for (let i = 0; i < shops.length; i++) {
      const distance = getDistance(coord, {
        latitude: shops[i].address.lat,
        longitude: shops[i].address.lon,
      });
      if (distance < 3000) {
        nearLocation.push(shops[i]);
      }
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <SearchBar />
      </div>
      <Categories baskets={nearLocation} filteredBaskets={filteredBaskets} />
      <div className="h-[100vh]">
        {filteredCategories ? (
          <ResultsSection baskets={filteredCategories} />
        ) : (
          <ResultsSection baskets={nearLocation} />
        )}
      </div>
    </div>
  );
};

export default Results;
