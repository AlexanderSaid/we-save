import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Basket from "./Basket";
import SearchContext from "../../../context/SearchContext";
import { motion } from "framer-motion";
import { fade } from "../../../components/animation";

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
          <motion.ul
            variants={fade}
            className="min-w-[350px] w-full flex flex-col items-center justify-center mb-12"
          >
            {baskets.slice(0, toShow).map(
              (basket) =>
                basket.quantity && (
                  <motion.li
                    key={basket._id}
                    variants={fade}
                    className="w-full h-fit border border-shade rounded-xl overflow-hidden my-4 md:max-w-[1000px]"
                  >
                    <Basket basket={basket} />
                  </motion.li>
                )
            )}
          </motion.ul>
          {!isDisabled ? (
            <button className="btn btn-dark mb-8" onClick={showMoreHandler}>
              Show More
            </button>
          ) : (
            <p className=" text-center text-accent font-bold text-bodyLarge px-4 py-8">
              No more baskets to show.
              <br />
              Come tomorrow to discover more.
            </p>
          )}
        </>
      ) : inputValue ? (
        <p className=" text-center mt-10 text-accent font-bold text-bodyLarge">
          There are no baskets available
        </p>
      ) : (
        <p className=" text-center mt-10 text-accent font-bold text-bodyLarge">
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
