import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

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

  return shop ? <h1>{shop.name}</h1> : <h1> Loading...</h1>;
};

ShopDetails.propTypes = {
  id: PropTypes.string,
};
export default ShopDetails;
