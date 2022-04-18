import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import CreateBasketForm from "./Components/CreateBasketForm";
import BasketSummary from "./Components/BasketSummary";
import CoverShop from "./Components/CoverShop";
import { motion } from "framer-motion";
import { pageAnimation, fade } from "../../animation";

//- Common classes
function MyShop() {
  const { user } = useContext(UserContext);
  const [baskets, setBaskets] = useState();
  const [basket, setBasket] = useState(null);
  const getBasket = (obj) => {
    setBasket(obj);
  };

  const { performFetch, cancelFetch, isLoading, error } = useFetch(
    `/shops/${user.shop_id}/baskets`,
    (response) => {
      setBaskets(response.result);
    }
  );
  useEffect(() => {
    performFetch({
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return cancelFetch;
  }, []);
  if (error) {
    return <h2>{error}</h2>;
  }
  if (isLoading) {
    return (
      <section className="flex justify-center max-w-4xl p-6 mx-auto my-10 bg-gray-100 rounded-md shadow-md">
        <h4 className="w-full text-center">Loading...</h4>
      </section>
    );
  }

  if (!baskets) {
    return null;
  }
  return (
    <>
      <motion.section
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="w-[100%] max-w-[1140px] p-4 mx-auto bg-lightBg "
      >
        <motion.div variants={fade}>
          <CoverShop />
        </motion.div>
        <div className="overflow-hidden">
          <motion.h1
            variants={fade}
            className="mb-4 text-3xl text-center text-accent"
          >
            YOUR BASKETS
          </motion.h1>
        </div>
        {baskets.length === 0 ? (
          <p className="mb-8 text-center text-black-400">
            You dont have any baskets right now!
          </p>
        ) : (
          <div className=" justify-center grid grid-flow-col overflow-x-auto auto-cols-max  md:auto-cols-min rounded-md shadow-lg mb-[40px]">
            {baskets.map((basket, index) => {
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -50,
                      x: -50,
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: "easeOut",
                      },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                >
                  <BasketSummary getBasket={getBasket} basket={basket} />
                </motion.div>
              );
            })}
          </div>
        )}
        <motion.h1
          variants={fade}
          className=" text-3xl text-center text-accent"
        >
          {basket ? "EDIT YOUR BASKET" : "CREATE A BASKET"}
        </motion.h1>
        <motion.div
          variants={fade}
          className=" w-[100%] max-w-[1140px] p-4 mx-auto"
        >
          <CreateBasketForm basket={basket} setBasket={setBasket} />
        </motion.div>
      </motion.section>
    </>
  );
}
export default MyShop;
