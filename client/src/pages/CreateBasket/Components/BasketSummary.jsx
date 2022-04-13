import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import useFetch from "../../../hooks/useFetch";
import { FaShoppingBasket } from "react-icons/fa";
import PropTypes from "prop-types";
import DeleteSuccessMessage from "./DeleteSuccessMessage";
import breakfast1 from "../../../assets/breakfast1.jpeg";
import dairy from "../../../assets/dairy.png";
import lunchbox from "../../../assets/lunchbox.jpeg";
import dinnerbox from "../../../assets/dinnerbox.jpeg";
import grocery2 from "../../../assets/grocery2.jpg";
import pestries from "../../../assets/pestries.jpeg";

const BasketSummary = ({ basket }) => {
  const { user } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  // /api/shops/:shopId/baskets/:basketId
  const { performFetch, cancelFetch } = useFetch(
    `/shops/${user.shop_id}/baskets/${basket._id}`,
    () => {
      setIsDeleted(true);
    }
  );

  const handleDelete = () => {
    performFetch({
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    return cancelFetch;
  }, []);

  const getImage = () => {
    const img =
      basket.name === "Breakfast basket" &&
      basket.categories.includes("Bread & Pastries")
        ? pestries
        : basket.name === "Breakfast basket"
        ? breakfast1
        : basket.name === "Lunch basket"
        ? lunchbox
        : basket.name === "Pastries basket"
        ? pestries
        : basket.name === "Surprise basket"
        ? grocery2
        : basket.name === "Surprise basket" &&
          basket.categories.contains("Vegetarian")
        ? dairy
        : basket.name === "Surprise basket" &&
          basket.categories.contains("Diary & Meat")
        ? dairy
        : dinnerbox;
    return img;
  };

  return (
    <>
      {isDeleted && <DeleteSuccessMessage setIsDeleted={setIsDeleted} />}

      <div className="  min-w-[300px] rounded border border-primary bg-primary m-4">
        <img className="w-full rounded-t h-[180px]" src={getImage()} />
        <div className="px-4 py-4">
          <div className="font-bold text-xl ">{basket.name}</div>
          <div className=" flex flex-row ">
            {basket.categories.map((category, idx) => (
              <div
                className=" text-button mb-3 basket-category my-auto mx-1 mt-2"
                key={idx}
              >
                {category}
              </div>
            ))}
            <div className="baskets-left w-fit text-button mb-3 mt-2">
              <span className="quantity">{basket.quantity}</span>
              <FaShoppingBasket className="inline" />
            </div>
          </div>

          <p className="text-gray-700 text-base text-button text-left">
            {basket.description}
          </p>
          <div className=" my-6 shop-details flex py-2 justify-between">
            <p className="pickup">
              Pickup: {basket.pickup.from} - {basket.pickup.to}
            </p>
          </div>
        </div>

        <div className="mx-4 mb-4 mt-1">
          <button
            value={basket._id}
            onClick={handleDelete}
            className=" text-bodyMd bg-red-100 uppercase  hover:bg-red-500 text-red-700 hover:text-white rounded p-2 inline-block mr-2"
          >
            Delete
          </button>
          <button className="text-bodyMd bg-yellow-100 uppercase  hover:bg-yellow-500 text-yellow-500 hover:text-white rounded p-2 inline-block">
            Edit
          </button>
        </div>
      </div>
    </>
  );
};
BasketSummary.propTypes = {
  basket: PropTypes.object,
};
export default BasketSummary;
