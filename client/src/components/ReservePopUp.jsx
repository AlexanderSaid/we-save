import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/UserContext";

const ReservePopUp = ({ setIsReserved, setConfirmRsv, basket_id }) => {
  const { user } = useContext(UserContext);
  const [errMessage, setErrorMessage] = useState("");

  //- Fetching data
  const { performFetch, cancelFetch, error } = useFetch(
    `/baskets/${basket_id}/decrease`,
    () => {
      setConfirmRsv(true);
    }
  );

  useEffect(() => {
    error && setErrorMessage(error);
  }, [error]);

  useEffect(() => {
    return cancelFetch;
  }, []);

  const handleConfirm = () => {
    performFetch({
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  return (
    <>
      <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
            {errMessage && <h2>{errMessage}</h2>}
            <h3 className="text-3xl font-bold text-center mb-9 text-accent">
              Please confirm reservation
            </h3>
            <div className="flex flex-row items-center w-full re-direct justify-evenly">
              <button
                className="w-[50%] py-2 my-1 mt-4 font-bold text-center transition duration-300 text-darkFont hover:text-accent focus:outline-none hover:ease-in-out"
                onClick={() => setIsReserved(false)}
              >
                Cancel
              </button>
              <button
                className="w-[50%] py-2 my-1 mt-4 font-bold text-center transition duration-300 text-darkFont hover:text-accent focus:outline-none hover:ease-in-out"
                onClick={() => {
                  setIsReserved(false);
                  handleConfirm();
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ReservePopUp.propTypes = {
  isReserved: PropTypes.bool,
  setIsReserved: PropTypes.func,
  confirmRsv: PropTypes.bool,
  setConfirmRsv: PropTypes.func,
  basket_id: PropTypes.string,
};
export default ReservePopUp;
