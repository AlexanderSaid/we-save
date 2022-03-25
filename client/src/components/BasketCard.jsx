import React from "react";
import { getDistance } from "geolib";
import PropTypes from "prop-types";
const address = { latitude: 52.377693806249994, longitude: 4.873019974999999 };
const BasketCard = ({ name, category, lat, lon }) => {
  return (
    <div className="basket-container">
      <div className="basket-card">
        <h4 className="basket-name">{name}</h4>
        <h5 className="basket-category">{category}</h5>
        <span className="shop-distance">
          {getDistance(address, { latitude: lat, longitude: lon })}
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
};
export default BasketCard;
