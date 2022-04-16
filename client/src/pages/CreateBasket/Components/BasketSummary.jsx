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
import { Image } from "cloudinary-react";

const BasketSummary = ({ basket, getBasket }) => {
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
        {basket.image ? (
          <Image
            src={basket.image}
            cloudName={name}
            className="w-full max-h-[150px] object-cover xs:max-h-[120px]  md:max-w-[150px] md:min-h-[150px] md:m-0"
          ></Image>
        ) : (
          <img
            className="w-full rounded-t h-[180px] object-cover"
            src={getImage()}
          />
        )}

        <div className="px-4 py-4">
          <div className="text-xl font-bold ">{basket.name}</div>
          <div className="flex flex-row ">
            {basket.categories.map((category, idx) => (
              <div
                className="mx-1 my-auto mt-2 mb-3 text-button basket-category"
                key={idx}
              >
                {category}
              </div>
            ))}
            <div className="mt-2 mb-3 baskets-left w-fit text-button">
              <span className="quantity">{basket.quantity}</span>
              <FaShoppingBasket className="inline" />
            </div>
          </div>

          <p className="text-base text-left text-gray-700 text-button">
            {basket.description}
          </p>
          <div className="flex justify-between py-2 my-6 shop-details">
            <p className="pickup">
              Pickup: {basket.pickup.from} - {basket.pickup.to}
            </p>
          </div>
        </div>

        <div className="mx-4 mt-1 mb-4">
          <button
            value={basket._id}
            onClick={handleDelete}
            className="inline-block p-2 mr-2 text-red-700 uppercase bg-red-100 rounded text-bodyMd hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
          <button
            onClick={() => getBasket(basket)}
            className="inline-block p-2 text-yellow-500 uppercase bg-yellow-100 rounded text-bodyMd hover:bg-yellow-500 hover:text-white"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};
BasketSummary.propTypes = {
  basket: PropTypes.object,
  getBasket: PropTypes.func,
};
export default BasketSummary;
