import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import CreateBasketForm from "./Components/CreateBasketForm";
import BasketSummary from "./Components/BasketSummary";

//- Common classes
function CreateBasket() {
  const { user } = useContext(UserContext);
  const [baskets, setBaskets] = useState();

  const {
    performFetch: getBaskets,
    cancelFetch: cancelGet,
    isLoading,
    error: basketsError,
  } = useFetch(`/shops/${user.shop_id}/baskets`, (response) => {
    setBaskets(response.result);
  });
  useEffect(() => {
    getBaskets({
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return cancelGet;
  }, []);
  if (basketsError) {
    return <h2>{basketsError}</h2>;
  }
  if (isLoading) {
    return <h2 className="w-full text-center">Loading...</h2>;
  }
  if (!baskets) {
    return null;
  }
  return (
    <>
      <section className="max-w-4xl p-6 mx-auto my-10 bg-gray-100 rounded-md shadow-md">
        <div className="flex ">
          {baskets.map((basket, index) => {
            return <BasketSummary basket={basket} key={index} />;
          })}
        </div>
        <CreateBasketForm />
      </section>
    </>
  );
}
export default CreateBasket;
