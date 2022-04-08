import React from "react";
import PropTypes from "prop-types";
//- Import icons
import { FaShoppingBasket } from "react-icons/fa";
import * as gi from "react-icons/gi";
import * as io from "react-icons/io5";
//- Import images
import bread from "../assets/bread.png";
import breakfast from "../assets/breakfast.jpg";
import lunch from "../assets/lunch.jpg";
import pizza from "../assets/pizza.jpg";
import surprise from "../assets/surprise.jpg";
import grocery from "../assets/grocery.jpg";
import diary from "../assets/organic-foods-5.jpg";

const Basket = ({
  name,
  category,
  oldPrice,
  newPrice,
  quantity,
  description,
  shop,
  distance,
  address,
}) => {
  const { street, house, addition, postcode, city } = address;

  const link = `${street}+${house}${addition},+${postcode.slice(
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
        : name === "Surprise basket" && category.length
        ? surprise
        : name === "Surprise basket" && category.contains("Vegetarian")
        ? grocery
        : name === "Surprise basket" && category.contains("Diary & Meat")
        ? diary
        : pizza;
    return img;
  };

  return (
    <div className="basket-card grid grid-cols-2 grid-rows-2 transition-all duration-[400ms] ease-in-out md:flex md:items-center md:justify-between md:h-[150px] ">
      <div className="image-container md:basis-36 md:h-[150px] md:shrink-0 md:grow-0 transition-all duration-[400ms] ease-in-out">
        <img
          src={getImage()}
          alt={name}
          className="w-full max-h-[150px] object-cover xs:max-h-[120px]  md:max-w-[150px] md:min-h-[150px] md:m-0"
        />
      </div>

      <div className="basket-info flex flex-col justify-between row-span-2 p-2 md:flex-row md:h-[150px] md:grow md:px-0 transition-all duration-[400ms] ease-in-out">
        <div className="w-full h-full flex flex-col justify-start md:justify-between md:basis-36 md:shrink-0 md:grow-0 transition-all duration-[400ms] ease-in-out">
          <h5 className="basket-name">{name}</h5>
          {category.length &&
            category.map((cat) => (
              <span key={cat} className="basket-category">
                {cat}
              </span>
            ))}
          <div className="quantity-price flex items-center justify-between pt-3 pr-1 transition-all duration-[400ms] ease-in-out">
            <div className="baskets-left">
              <span className="quantity">{quantity > 5 ? "+5" : quantity}</span>
              <FaShoppingBasket className="inline" />
            </div>

            <div className="price inline-block text-bodySmall font-bold md:text-bodyRegular md:pr-4 transition-all duration-[400ms] ease-in-out">
              <span className="old line-through text-shade">{`€ ${oldPrice}`}</span>
              <span className="new text-accent">{` / € ${newPrice}`}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-between md:grow">
          <div className="w-full h-full flex items-center justify-center">
            <p className="description">{description}</p>
          </div>

          {/* <Link> */}
          <button disabled={quantity === 0 && true} className="reserve ">
            Reserve
          </button>
          {/* </Link> */}
        </div>
      </div>

      <div className="shop-details flex flex-col py-2 justify-between items-center md:h-full md:basis-40 md:shrink-0 md:grow-0 transition-all duration-[400ms] ease-in-out">
        <h5 className="shop-name">{shop}</h5>

        <div className="location flex flex-col items-center justify-between gap-x-2 md:gap-y-2 md:items-end md:w-full md:pr-4">
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
              {`${street} ${house}${addition}`}
            </a>
          </div>
        </div>
        <p className="pickup">Pickup between --:-- & --:-- </p>
      </div>
    </div>
  );
};
Basket.propTypes = {
  name: PropTypes.string,
  category: PropTypes.array,
  oldPrice: PropTypes.number,
  newPrice: PropTypes.number,
  quantity: PropTypes.number,
  shop_id: PropTypes.string,
  distance: PropTypes.number,
  shop: PropTypes.string,
  address: PropTypes.object,
  description: PropTypes.string,
};
export default Basket;
