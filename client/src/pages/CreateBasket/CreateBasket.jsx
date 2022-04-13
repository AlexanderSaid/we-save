import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import CreateBasketForm from "./Components/CreateBasketForm";
import BasketSummary from "./Components/BasketSummary";

//- Common classes
function CreateBasket() {
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
      <section className="max-w-4xl p-6 mx-auto my-10 bg-gray-100 rounded-md shadow-md">
        <h1 className="mt-10 text-xl font-bold text-center text-gray-600 md:text-2xl">
          YOUR BASKETS
        </h1>
        <div className="flex max-w-4xl p-6 overflow-x-auto ">
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
        <CreateBasketForm basket={basket} setBasket={setBasket} />
      </section>
    </>
  );
}
export default CreateBasket;
