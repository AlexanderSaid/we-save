import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Header from "./Components/Header";
import BasketCard from "./Components/BasketCard";
import Map from "./Components/Map";

const ShopDetails = () => {
  const { id } = useParams();
  const [shop, setShop] = useState(null);
  //Get Method
  const { performFetch: performGet, cancelFetch: cleanUpGet } = useFetch(
    "/shops",
    (response) => {
      response.result.map((shop) => {
        if (shop._id == id) {
          setShop(shop);
        }
      });
    }
  );

  useEffect(() => {
    performGet();

    return cleanUpGet;
  }, []);
  return shop ? (
    <div>
      <Header shop={shop} />
      <div className="my-4 bg-darkBg">
        <h1 className="w-full text-center font-bold text-2xl my-10 text-white">
          {" "}
          AVAILABLE BASKETS
        </h1>
        {shop.baskets.map((basket, index) => {
          return <BasketCard key={index} data={basket} />;
        })}
        <div className="w-full flex justify-center ">
          <a
            href="#"
            className="flex w-[200px] my-10 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 justify-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            More
          </a>
        </div>
      </div>

      <div className="w-full  mt-10 p-10 flex justify-center">
        <Map address={shop.address} />
      </div>
    </div>
  ) : (
    <h1> Loading...</h1>
  );
};

ShopDetails.propTypes = {
  id: PropTypes.string,
};
export default ShopDetails;
