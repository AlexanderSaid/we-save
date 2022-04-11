import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
//- Import icons
import { FaShoppingBasket } from "react-icons/fa";
import * as gi from "react-icons/gi";
import * as io from "react-icons/io5";
//- Import images

import bread from "../../../assets/bread.png";
import breakfast from "../../../assets/breakfast.jpg";
import lunch from "../../../assets/lunch.jpg";
import pizza from "../../../assets/pizza.jpg";
import surprise from "../../../assets/surprise.jpg";
import grocery from "../../../assets/grocery.jpg";
import diary from "../../../assets/organic-foods-5.jpg";
import ReservePopUp from "../../../components/ReservePopUp";
import SuccessReserve from "../../../components/SuccessReserve";
import { useAuthentication } from "../../../hooks/useAuthentication";
import SignIn from "../../../components/Forms/SignIn";
import SignInContext from "../../../context/SignInContext";
import SearchContext from "../../../context/SearchContext";
import UserContext from "../../../context/UserContext";

const Basket = ({ basket }) => {
  const {
    _id,
    name,
    categories,
    price,
    quantity,
    description,
    shop_id,
    distance,
    pickup,
  } = basket;
  const { original, discount } = price;
  const shop = shop_id.name;
  const { street, house, addition, postcode, city } = shop_id.address;
  const [isReserved, setIsReserved] = useState(false);
  const { loggedIn } = useAuthentication();
  const { isOpen, setIsOpen } = useContext(SignInContext);
  const { confirmRsv, setConfirmRsv } = useContext(SearchContext);
  const { user } = useContext(UserContext);

  const link = `${street}+${house}${addition ? addition : ""},+${postcode.slice(
    0,
    4
  )}+${postcode.slice(4)}+${city}`;

  const getImage = () => {
    const img =
      name === "Breakfast basket"
        ? breakfast
        : name === "Lunch basket"
        ? lunch
        : name === "Pastries basket"
        ? bread
        : name === "Surprise basket" && categories.length
        ? surprise
        : name === "Surprise basket" && categories.contains("Vegetarian")
        ? grocery
        : name === "Surprise basket" && categories.contains("Diary & Meat")
        ? diary
        : pizza;
    return img;
  };

  const confirmationCode = () => {
    const result = user._id.slice(17);
    return result;
  };
  const code = confirmationCode();

  return (
    <>
      {<SignIn setOpenSignIn={setIsOpen} openSignIn={isOpen} />}
      {confirmRsv && (
        <SuccessReserve
          confirmRsv={confirmRsv}
          setConfirmRsv={setConfirmRsv}
          code={code}
        />
      )}
      {isReserved && (
        <ReservePopUp
          isReserved={isReserved}
          setIsReserved={setIsReserved}
          confirmRsv={confirmRsv}
          setConfirmRsv={setConfirmRsv}
          basket_id={_id}
          code={code}
        />
      )}
      <div className="basket-card grid grid-cols-2 grid-rows-2 transition-all duration-[400ms] ease-in-out md:flex md:items-center md:justify-between md:gap-2 md:h-[150px] ">
        <div className="image-container md:basis-36 md:h-[150px] md:shrink-0 md:grow-0 transition-all duration-[400ms] ease-in-out">
          <img
            src={getImage()}
            alt={name}
            className="w-full max-h-[150px] object-cover xs:max-h-[120px]  md:max-w-[150px] md:min-h-[150px] md:m-0"
          />
        </div>

        <div className="basket-info flex flex-col justify-between row-span-2 p-2 md:gap-2 md:flex-row md:h-[150px] md:grow transition-all duration-[400ms] ease-in-out">
          <div className="w-full h-full flex flex-col justify-start md:justify-between md:basis-36 md:shrink-0 md:grow-0 transition-all duration-[400ms] ease-in-out">
            <h5 className="basket-name">{name}</h5>
            {categories.length &&
              categories.map((cat) => (
                <span key={cat} className="basket-category">
                  {cat}
                </span>
              ))}
            <div className="quantity-price flex items-center justify-between pt-3 pr-1 transition-all duration-[400ms] ease-in-out">
              <div className="baskets-left">
                <span className="quantity">
                  {quantity > 5 ? "+5" : quantity}
                </span>
                <FaShoppingBasket className="inline" />
              </div>

              <div className="price inline-block text-bodySmall font-bold md:text-bodyRegular transition-all duration-[400ms] ease-in-out">
                <span className="line-through old text-shade">{`€ ${original}`}</span>
                <span className="new text-accent">{` / € ${discount}`}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-full md:grow">
            <div className="flex items-center justify-center w-full h-full">
              <p className="description">{description}</p>
            </div>

            {loggedIn ? (
              <button
                disabled={!quantity && true}
                className="reserve "
                onClick={() => {
                  setIsReserved(true);
                }}
              >
                Reserve
              </button>
            ) : (
              <button
                disabled={!quantity && true}
                className="reserve "
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Log in to Reserve
              </button>
            )}
          </div>
        </div>

        <div className="shop-details flex flex-col py-2 justify-between items-center md:h-full md:basis-44 md:shrink-0 md:grow-0 transition-all duration-[400ms] ease-in-out">
          <h5 className="shop-name">{shop}</h5>

          <div className="flex flex-col items-center justify-between location gap-x-2 md:gap-y-2 md:items-end md:w-full md:pr-4">
            <div className="distance-container">
              <span className="distance">
                {distance < 1000
                  ? `${distance.toFixed(0)} m`
                  : `${(distance / 1000).toFixed(1)} km`}
              </span>
              <gi.GiWalk className="inline-block " />
            </div>
            <div className="address hover:text-darkFont ">
              <a
                href={`https://www.google.com/maps/place/${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <io.IoLocationSharp className="inline-block" />
                {`${street} ${house}${addition ? addition : ""}`}
              </a>
            </div>
          </div>
          <p className="pickup">{`Pickup: ${pickup?.from} & ${pickup?.to}`}</p>
        </div>
      </div>
    </>
  );
};
Basket.propTypes = {
  basket: PropTypes.object,
};
export default Basket;
