import React, { useContext } from "react";
import PropTypes from "prop-types";
import BasketCard from "../../../components/BasketCard";
import AddressContext from "../../../context/AddressContext";

const ResultsSection = ({ baskets }) => {
  const { coordinates } = useContext(AddressContext);

  return (
    <div className="flex flex-col items-center ">
      <ul className="w-[50%] min-w-[400px] max-w-[700px] overflow-auto">
        {baskets &&
          baskets.sort((a, b) => a - b) &&
          baskets.map((shop) => (
            <li
              key={shop._id}
              className="py-3 sm:py-4 bg-lightBg my-4 p-3 border border-darkBg "
            >
              <BasketCard
                name={shop.name}
                category={shop.baskets[0].categories[0]}
                oldPrice={shop.baskets[0].price.original}
                newPrice={shop.baskets[0].price.discount}
                lat={shop.address.lat}
                lon={shop.address.lon}
                coordinates={coordinates}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
ResultsSection.propTypes = {
  baskets: PropTypes.array,
};

export default ResultsSection;
