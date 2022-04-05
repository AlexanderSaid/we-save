import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Basket from "../../../components/Basket";
import SearchContext from "../../../context/SearchContext";
import { Link } from "react-router-dom";

const ResultsSection = ({ shops }) => {
  const {
    toShow,
    setToShow,
    INCREMENT,
    searchLoading,
    searchError,
    isAmsterdam,
    isExist,
    inputValue,
  } = useContext(SearchContext);

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
      {searchError ? (
        <p>
          Something went wrong <br /> Please try again later
        </p>
      ) : !searchError && searchLoading ? (
        <p>Loading ...</p>
      ) : !searchError && !searchLoading && !isExist && inputValue ? (
        <p>This postcode is not exist, please add an exist one.</p>
      ) : !searchError && !searchLoading && isExist && !isAmsterdam ? (
        <p>
          We are only available in Amsterdam. <br />
          We are planing to expand to other cities soon.
          <br /> If you have any questions, do not hesitate reaching us throw
          <Link to="#">contact us</Link> page.
        </p>
      ) : !searchError && !searchLoading && shops.length ? (
        <>
          <ul className="w-[50%] min-w-[400px] max-w-[700px]">
            {shops.slice(0, toShow).map((shop) => (
              <li
                key={shop._id}
                className="py-3 sm:py-4 bg-lightBg my-4 p-3 border border-darkBg transition-all ease-in delay-200"
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
      ) : inputValue ? (
        <p className=" text-center mt-10 text-error">
          There are no baskets available
        </p>
      ) : (
        <p className=" text-center mt-10 text-error">
          Please enter your postcode to see nearby baskets.
        </p>
      )}
    </div>
  );
};
ResultsSection.propTypes = {
  shops: PropTypes.array,
};

export default ResultsSection;
