import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import CreateBasketForm from "./Components/CreateBasketForm";
import BasketSummary from "./Components/BasketSummary";
import CoverShop from "./Components/CoverShop";

//- Common classes
function CreateBasket() {
  const { user } = useContext(UserContext);
  const [baskets, setBaskets] = useState();

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
      <section className="max-w-4xl p-6 mx-auto my-10 bg-gray-100 rounded-md shadow-md flex justify-center">
        <h4 className="w-full text-center">Loading...</h4>
      </section>
    );
  }

  if (!baskets) {
    return null;
  }
  return (
    <>
      <CoverShop />
      <section className="max-w-6xl p-6 mx-auto my-10 bg-[rgba(255,255,255,0.5)] rounded-md shadow-md">
        <h1 className="mb-8 text-3xl text-center text-accent">Your Baskets</h1>

        {baskets.length === 0 ? (
          <p className="mb-8  text-center text-black-400">
            You dont have any baskets right now!
          </p>
        ) : (
          <div className="grid grid-flow-col place-content-start auto-cols-max md:auto-cols-min gap-4  overflow-x-auto px-4 bg-gray-50 mb-20 rounded">
            {baskets.map((basket, index) => {
              return <BasketSummary basket={basket} key={index} />;
            })}
          </div>
        )}

        <CreateBasketForm baskets={baskets} />
      </section>
    </>
  );
}
export default CreateBasket;
