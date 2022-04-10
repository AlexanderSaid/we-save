import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../context/UserContext";

const SuccessReserve = ({ setConfirmRsv }) => {
  const { user } = useContext(UserContext);
  return (
    <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h3 className="mb-9 text-3xl text-center text-accent font-bold">
            You have reserved the basket successfully!
          </h3>
          <p className="mb-9 text-xl text-center text-darkBg font-light">
            There is an information email sent to your registered email address.
            Please use this code ito pick up your order:
          </p>
          <p className="mb-9 text-4xl text-center text-darkBg font-bold">
            {user._id.slice(0, 5)}
          </p>
          <div className="w-full re-direct flex flex-col justify-evenly items-center">
            <button
              onClick={() => {
                setConfirmRsv(false);
              }}
              className="w-full py-2 my-1 text-center font-bold text-darkFont hover:text-accent focus:outline-none mt-4 transition duration-300 hover:ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

SuccessReserve.propTypes = {
  confirmRsv: PropTypes.bool,
  setConfirmRsv: PropTypes.func,
};
export default SuccessReserve;
