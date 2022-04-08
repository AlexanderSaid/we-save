import React from "react";
import PropTypes from "prop-types";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as gi from "react-icons/gi";
import * as io from "react-icons/io5";
const Basket = ({
  name,
  category,
  oldPrice,
  newPrice,
  quantity,
  shop_id,
  distance,
  address,
}) => {
  const { street, house, addition, postcode, city } = address;
  const link = `${street}+${house}${addition},+${postcode.slice(
    0,
    4
  )}+${postcode.slice(4)}+${city}`;

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <FaShoppingBasket size={40} />
        <span className="text-gray-600 "> {quantity} left</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4>{name}</h4>
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {category}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {distance < 1000
            ? `${distance.toFixed(0)} m`
            : `${(distance / 1000).toFixed(1)} km`}
        </p>
        <gi.GiWalk />
        <div className="address">
          <a
            href={`https://www.google.com/maps/place/${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <io.IoLocationSharp />
            {`${street} ${house}${addition}`}
          </a>
        </div>
      </div>
      <div className="inline-flex flex-col items-center text-base font-semibold text-gray-900 dark:text-white">
        <p>
          {" "}
          <span className="line-through text-error">{oldPrice} €</span>{" "}
          <span className="text-green-600"> {newPrice} €</span>{" "}
        </p>
        <Link to={`shop-details/${shop_id}`}>
          <button className="bg-darkBg text-lime-100">Reserve</button>
        </Link>
      </div>
    </div>
  );
};
Basket.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  oldPrice: PropTypes.number,
  newPrice: PropTypes.number,
  quantity: PropTypes.number,
  shop_id: PropTypes.string,
  distance: PropTypes.number,
  address: PropTypes.object,
};
export default Basket;
