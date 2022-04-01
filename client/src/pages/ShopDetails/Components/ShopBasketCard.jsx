import React from "react";
import PropTypes from "prop-types";

const ShopBasketCard = ({ data }) => {
  return (
    <div className="w-[320px]  mx-10">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-[320px] h-[160px]"
            src={data.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <div className="flex justify-between">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {data.name}
            </h5>
            <p>
              <span className="line-through text-red-700">
                {data.price.original}€
              </span>
              -{" "}
              <span className="font-semibold text-green-700">
                {data.price.discount}€
              </span>
            </p>
          </div>
          {data.categories.map((category, index) => {
            return (
              <span key={index} className=" font-thin">
                {category}
              </span>
            );
          })}

          <div className="flex justify-between my-4">
            <div className="flex flex-1 flex-col">
              <span className="font-semibold">Pick-up Time:</span>
              <p className="font-thin">
                <span className="text-green-700 font-semibold">
                  {data.pickup.from.slice(14, 19)}
                </span>{" "}
                to{" "}
                <span className="text-green-700 font-semibold">
                  {data.pickup.to.slice(14, 19)}
                </span>
              </p>
            </div>
            <div className="flex flex-1 flex-col">
              <span className="font-semibold">Available amount:</span>
              <span className="text-red-900 font-semibold text-center ">
                {data.quantity}
              </span>
            </div>
          </div>
          <div className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            <p className="font-semibold">Basket Description:</p>
            {data.description}
          </div>
          <a
            href="#"
            className="flex w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Reserve
          </a>
        </div>
      </div>
    </div>
  );
};
ShopBasketCard.propTypes = {
  data: PropTypes.object,
};
export default ShopBasketCard;
