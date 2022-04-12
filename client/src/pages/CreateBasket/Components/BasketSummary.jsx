import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import PropTypes from "prop-types";

const BasketSummary = ({ basket }) => {
  return (
    <div className="w-[260px] bg-white p-4 basket-info flex flex-col justify-between">
      <h5 className="basket-name text-center w-full">Shop Name</h5>
      <div className="w-full flex justify-between">
        <h5 className="shop-name my-auto">{basket.name}</h5>
        <div className="my-auto price inline-block text-bodySmall font-bold md:text-bodyRegular transition-all duration-[400ms] ease-in-out">
          <span className="line-through old text-shade">
            {" "}
            € {"4.99" || basket.price.original}
          </span>
          <span className="new text-accent">
            / € {"1.99" || basket.price.discount}
          </span>
        </div>
      </div>
      <div className="quantity-price flex items-center justify-between pt-3 pr-1 transition-all duration-[400ms] ease-in-out">
        <div className="baskets-left w-fit">
          <span className="quantity">{"2" || basket.quantity}</span>
          <FaShoppingBasket className="inline" />
        </div>
        <span className="basket-category my-auto">Pastries</span>
      </div>
      <p className="description text-center">
        {"Some Description" || basket.description}
      </p>
      <div className="shop-details flex py-2 justify-between">
        <span className="my-auto">Torenvalk 74</span>
        <p className="pickup">
          Pickup: {"17:00" || basket.pickup.from} -{" "}
          {"19:00" || basket.pickup.to}
        </p>
      </div>
      <div className="flex justify-between">
        <button className="bg-transparent h-[36px] w-[100px] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-auto border border-blue-500 hover:border-transparent rounded">
          Edit
        </button>
        <button className="bg-transparent h-[36px] w-[100px] hover:bg-red-500 text-red-700 font-semibold hover:text-white p-auto border border-blue-500 hover:border-transparent rounded">
          Delete
        </button>
      </div>
    </div>
  );
};
BasketSummary.propTypes = {
  basket: PropTypes.object,
};
export default BasketSummary;
