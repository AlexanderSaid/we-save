import React from "react";
import { getDistance } from "geolib";
import PropTypes from "prop-types";

const BasketCard = ({ name, category, coordinates, lat, lon }) => {
  return (
    <div className="basket-container">
      <div className="basket-card">
        <h4 className="basket-name">{name}</h4>
        <h5 className="basket-category">{category}</h5>
        <span className="shop-distance">
          {getDistance(coordinates, { latitude: lat, longitude: lon })}
        </span>
      </div>
    </div>
  );
};
BasketCard.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  lat: PropTypes.number,
  lon: PropTypes.number,
  coordinates: PropTypes.object,
};
export default BasketCard;
