import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Basket from "../../../components/Basket";
import SearchContext from "../../../context/SearchContext";

const ResultsSection = ({ shops }) => {
  const { toShow, setToShow, INCREMENT } = useContext(SearchContext);

  //- Show more button state
  const [isDisabled, setDisabled] = useState(
    shops.length <= INCREMENT ? true : false
  );

  useEffect(() => {
    toShow >= shops.length ? setDisabled(true) : setDisabled(false);
  }, [toShow, shops]);

  const showMoreHandler = () => {
    setToShow((prev) => prev + INCREMENT);
  };

  return (
    <div className="flex flex-col items-center">
      {shops.length ? (
        <>
          <ul className="w-[50%] min-w-[400px] max-w-[700px]">
            {shops.slice(0, toShow).map((shop) => (
              <li
                key={shop._id}
                className="py-3 sm:py-4 bg-lightBg my-4 p-3 border border-darkBg "
              >
                <Basket
                  name={shop.name}
                  category={shop.baskets[0].categories[0]}
                  oldPrice={shop.baskets[0].price.original}
                  newPrice={shop.baskets[0].price.discount}
                  amount={shop.baskets.length}
                  shop_id={shop._id}
                  distance={shop.distance}
                />
              </li>
            ))}
          </ul>
          <button disabled={isDisabled} onClick={showMoreHandler}>
            {!isDisabled ? "Show More" : "No More"}
          </button>
        </>
      ) : (
        <p className=" text-center mt-10 text-error">
          There are no baskets available
        </p>
      )}
    </div>
  );
};
ResultsSection.propTypes = {
  shops: PropTypes.array,
};

export default ResultsSection;
