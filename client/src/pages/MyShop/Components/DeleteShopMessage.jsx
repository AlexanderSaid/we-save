import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../../../hooks/useFetch";
import UserContext from "../../../context/UserContext";
import Spinner from "../../../components/layout/Spinner";

function DeleteShopMessage({ setDeleteShop }) {
  const { user, logout } = useContext(UserContext);

  const { isLoading, performFetch, cancelFetch } = useFetch(
    `/shops/${user?.shop_id}`,
    () => {
      setDeleteShop(false);
    }
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const deleteShop = () => {
    performFetch({
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  if (isLoading) {
    return (
      <section className="flex flex-col fixed top-0 bg-lightBg/60 left-0 right-0 w-full  h-full  z-[1000]">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <Spinner />
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h3 className="text-3xl font-bold text-center mb-9 text-accent">
            Are you sure you want to delete your shop?
          </h3>
          <p className="p-4 font-bold text-center text-darkFont">
            This is going to permanently remove your shop and all baskets
          </p>
          <div className="flex flex-col items-center w-full re-direct justify-evenly">
            <a
              href="/"
              onClick={() => {
                deleteShop();
                logout();
              }}
              className="w-[50%] py-2 my-1 text-center font-bold text-darkFont hover:text-accent focus:outline-none mt-4 transition duration-300 hover:ease-in-out"
            >
              Confirm
            </a>
            <button
              onClick={() => {
                setDeleteShop(false);
              }}
              className="w-[50%] py-2 my-1 text-center font-bold text-darkFont hover:text-accent focus:outline-none mt-4 transition duration-300 hover:ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

DeleteShopMessage.propTypes = {
  setDeleteShop: PropTypes.func,
};
export default DeleteShopMessage;
