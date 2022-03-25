import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { getDistance } from "geolib";
import BasketCard from "../../../components/BasketCard";
import AddressContext from "../../../context/AddressContext";

const ResultsSection = () => {
  const { coordinates } = useContext(AddressContext);
  const [shops, setShops] = useState(null);
  let nearLocation = [];

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:5000/api/shops");
      setShops(data);
    })();
  }, []);

  if (shops) {
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
      <ul>
        {nearLocation &&
          nearLocation.sort((a, b) => a - b) &&
          nearLocation.map((shop) => (
            <li key={shop._id}>
              <BasketCard
                name={shop.name}
                category={"Breakfast basket"}
                lat={shop.address.lat}
                lon={shop.address.lon}
                coordinates={coordinates}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ResultsSection;
