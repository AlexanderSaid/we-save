import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import CreateBasketForm from "./Components/CreateBasketForm";
import BasketSummary from "./Components/BasketSummary";
import CoverShop from "./Components/CoverShop";
import DeleteShopMessage from "./Components/DeleteShopMessage";
import { motion } from "framer-motion";
import { pageAnimation, fade } from "../../components/animation";

//- Common classes
function MyShop() {
  const { user } = useContext(UserContext);
  const [baskets, setBaskets] = useState();
  const [basket, setBasket] = useState(null);
  const [deletePopup, setDeletePopup] = useState(false);
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
      {deletePopup && <DeleteShopMessage setDeleteShop={setDeletePopup} />}
      <motion.section
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="w-[100%] max-w-[1140px] p-4 mx-auto bg-lightBg "
      >
        <motion.div variants={fade}>
          <CoverShop />
        </motion.div>
        <motion.h1
          variants={fade}
          className="mb-4 text-3xl text-center text-accent"
        >
          YOUR BASKETS
        </motion.h1>

        {baskets.length === 0 ? (
          <motion.p variants={fade} className="mb-8 text-center text-black-400">
            You dont have any baskets right now!
          </motion.p>
        ) : (
          <div className=" justify-center grid grid-flow-col overflow-x-auto auto-cols-max  md:auto-cols-min rounded-md shadow-lg mb-[40px]">
            {baskets.map((basket, index) => {
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                      y: -50,
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
                  <BasketSummary
                    getBasket={getBasket}
                    basket={basket}
                    key={index}
                  />
                </motion.div>
              );
            })}
          </div>
        )}
        <motion.h1 variants={fade} className="text-3xl text-center text-accent">
          {basket ? "EDIT YOUR BASKET" : "CREATE A BASKET"}
        </motion.h1>
        <div className=" w-[100%] max-w-[1140px] p-4 mx-auto">
          <motion.div variants={fade}>
            <CreateBasketForm basket={basket} setBasket={setBasket} />
          </motion.div>

        </div>
        <motion.button
          variants={fade}
          onClick={() => setDeletePopup(true)}
          className="delete-btn submit-btn"
        >
          Delete Shop
        </motion.button>
      </motion.section>
    </>
  );
}
export default MyShop;
