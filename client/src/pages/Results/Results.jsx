import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { getDistance } from "geolib";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "./ResultsComponents/Categories";
import ResultsSection from "./ResultsComponents/ResultsSection";
import AddressContext from "../../context/AddressContext";

const Results = () => {
  const { coordinates } = useContext(AddressContext);
  const [shops, setShops] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState();

  const filteredBaskets = (arr) => {
    setFilteredCategories(arr);
  };
  let nearLocation = [];

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:5001/api/shops");
      setShops(data);
    })();
  }, []);

  if (shops && coordinates.latitude) {
    for (let i = 0; i < shops.length; i++) {
      const distance = getDistance(coordinates, {
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
