import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDistance } from "geolib";
import BasketCard from "../../../components/BasketCard";

const ResultsSection = () => {
  const [shops, setShops] = useState(null);
  let nearLocation = [];

  const myAddress = {
    latitude: 52.377693806249994,
    longitude: 4.873019974999999,
  }; //post code : 1052tw
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:5000/api/shops");
      setShops(data);
    })();
  }, []);

  if (shops) {
    for (let i = 0; i < shops.length; i++) {
      const distance = getDistance(myAddress, {
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
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ResultsSection;
