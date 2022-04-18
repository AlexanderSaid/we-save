import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import useFetch from "../../../hooks/useFetch";
import { FaShoppingBasket } from "react-icons/fa";
import PropTypes from "prop-types";
import DeleteSuccessMessage from "./DeleteSuccessMessage";
import breakfast1 from "../../../assets/images/baskets/breakfast1.jpeg";
import dairy from "../../../assets/images/baskets/dairy.png";
import lunchbox from "../../../assets/images/baskets/lunchbox.jpeg";
import dinnerbox from "../../../assets/images/baskets/dinnerbox.jpeg";
import grocery2 from "../../../assets/images/baskets/grocery2.jpg";
import pestries from "../../../assets/images/baskets/pestries.jpeg";

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

      <div className="flex flex-col justify-between w-[280px] rounded border-2 border-secondary bg-white m-4">
        <img
          className="w-full rounded-t h-[164px] object-cover"
          src={getImage()}
        />

        <div className="px-4 py-4">
          <div className="text-xl font-bold text-center ">{basket.name}</div>
          <div className="flex flex-1 flex-row  justify-center ">
            <div className="flex flex-row my-2">
              {basket.categories.map((category, idx) => (
                <div
                  className="mx-1 my-auto text-bodySmall basket-category"
                  key={idx}
                >
                  {category}
                </div>
              ))}
              <div className="mx-1 my-auto baskets-left  text-bodySmall">
                <span className="quantity">{basket.quantity}</span>
                <FaShoppingBasket className="inline" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center shop-details m-auto">
            <p className="pickup text-bodySmall text-center">
              Pickup: {basket.pickup.from} - {basket.pickup.to}
            </p>
            <div className="price inline-block text-bodySmall font-bold xs:text-bodySmall transition-all duration-[400ms] ease-in-out">
              <span className="line-through old text-shade">{`€ ${basket.price.original}`}</span>
              <span className="new text-accent">{` / € ${basket.price.discount}`}</span>
            </div>
          </div>
        </div>
        <div className=" m-2  bg-gray-50 rounded px-4 py-4 overflow-y-auto h-[100px] break-words">
          <p className=" text-left text-gray-700 text-button w-[80%] ">
            {basket.description}
          </p>
        </div>

        <div className="mx-4 mt-1 mb-4 flex justify-evenly">
          <button
            value={basket._id}
            onClick={handleDelete}
            className="min-w-[64px] inline-block p-2 mr-2 text-red-700 uppercase bg-red-100 rounded text-bodyMd hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
          <button
            onClick={() => getBasket(basket)}
            className="min-w-[64px] inline-block p-2 text-blue-500 uppercase bg-blue-100 rounded text-bodyMd hover:bg-blue-500 hover:text-white"
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
