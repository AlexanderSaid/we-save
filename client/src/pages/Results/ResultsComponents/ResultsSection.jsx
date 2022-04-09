import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Basket from "../../../components/Basket";
import SearchContext from "../../../context/SearchContext";

const ResultsSection = ({ baskets }) => {
  const { toShow, setToShow, INCREMENT, isAmsterdam, inputValue } =
    useContext(SearchContext);

  //- Show more button state
  const [isDisabled, setDisabled] = useState(
    baskets.length <= INCREMENT ? true : false
  );
  useEffect(() => {
    toShow >= baskets.length ? setDisabled(true) : setDisabled(false);
  }, [toShow, baskets]);

  const showMoreHandler = () => {
    setToShow((prev) => prev + INCREMENT);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 w-full">
      {!isAmsterdam ? (
        <p className="text-center mt-20 text-accent font-bold leading-8">
          We are only available in Amsterdam. <br />
          We are planing to expand to other cities soon.
          <br /> If you have any questions, do not hesitate reaching us from
          <a href="/contact" className="text-darkFont">
            &nbsp;contact us
          </a>
          &nbsp;page.
        </p>
      ) : baskets.length ? (
        <>
          <ul className="min-w-[350px] w-full flex flex-col items-center justify-center mb-8">
            {baskets.slice(0, toShow).map(
              (basket) =>
                basket.quantity && (
                  <li
                    key={basket._id}
                    className="w-full h-fit border border-shade rounded-xl overflow-hidden my-4 md:max-w-[1000px]"
                  >
                    <Basket
                      name={basket.name}
                      category={basket.categories}
                      oldPrice={basket.price.original}
                      newPrice={basket.price.discount}
                      quantity={basket.quantity}
                      description={basket.description}
                      shop={basket.shop_id.name}
                      distance={basket.distance}
                      address={basket.shop_id.address}
                      basket_id={basket._id}
                    />
                  </li>
                )
            )}
          </ul>
          <button
            className="btn-blank mb-8"
            disabled={isDisabled}
            onClick={showMoreHandler}
          >
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
  baskets: PropTypes.array,
};

export default ResultsSection;
