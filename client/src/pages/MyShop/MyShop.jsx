import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import CreateBasketForm from "./Components/CreateBasketForm";
import BasketSummary from "./Components/BasketSummary";
import CoverShop from "./Components/CoverShop";

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
      <section className="w-[100%] max-w-[1140px] p-4 mx-auto bg-lightBg ">
        <CoverShop />
        <h1 className="mb-4 text-3xl text-center text-accent">YOUR BASKETS</h1>

        {baskets.length === 0 ? (
          <p className="mb-8 text-center text-black-400">
            You dont have any baskets right now!
          </p>
        ) : (
          <div className=" justify-center grid grid-flow-col overflow-x-auto auto-cols-max  md:auto-cols-min rounded-md shadow-lg mb-[40px]">
            {baskets.map((basket, index) => {
              return (
                <BasketSummary
                  getBasket={getBasket}
                  basket={basket}
                  key={index}
                />
              );
            })}
          </div>
        )}
        <h1 className=" text-3xl text-center text-accent">
          {basket ? "EDIT YOUR BASKET" : "CREATE A BASKET"}
        </h1>
        <div className=" w-[100%] max-w-[1140px] p-4 mx-auto">
          <CreateBasketForm basket={basket} setBasket={setBasket} />
        </div>
      </section>
    </>
  );
}
export default MyShop;
