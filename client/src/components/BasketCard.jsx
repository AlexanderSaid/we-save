import React from "react";
import { getDistance } from "geolib";
import PropTypes from "prop-types";
import { FaShoppingBasket } from "react-icons/fa";

const BasketCard = ({
  name,
  category,
  oldPrice,
  newPrice,
  coordinates,
  lat,
  lon,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <FaShoppingBasket size={40} />
      </div>
      <div className="flex-1 min-w-0">
        <h4>{name}</h4>
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {category}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {getDistance(coordinates, { latitude: lat, longitude: lon }) / 1000}{" "}
          km away
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <p>
          {" "}
          <span className="line-through text-gray-300">
            `${oldPrice} €`
          </span>{" "}
          <span> ` ${newPrice} €`</span>{" "}
        </p>
      </div>
    </div>
  );
};
BasketCard.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  lat: PropTypes.string,
  lon: PropTypes.string,
  coordinates: PropTypes.object,
  oldPrice: PropTypes.number,
  newPrice: PropTypes.number,
};
export default BasketCard;
