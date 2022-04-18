import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UpdateBasketSuccessMessage = ({ setSuccess }) => {
  return (
    <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h3 className="text-3xl font-bold text-center mb-9 text-accent">
            The basket has been updated!
          </h3>
          <div className="flex flex-col items-center w-full re-direct justify-evenly">
            <Link to="/" className="w-[50%]">
              <button
                onClick={() => {
                  setSuccess(false);
                }}
                className="w-full py-2 my-1 font-bold text-center transition duration-150 border rounded-3xl border-accent bg-accent text-lightFont hover:bg-darkBg hover:border-darkBg focus:outline-none hover:ease-in-out"
              >
                Back home
              </button>
            </Link>
            <button
              onClick={() => {
                setSuccess(false);
                location.reload();
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
};

UpdateBasketSuccessMessage.propTypes = {
  setSignUp: PropTypes.func,
  setSuccess: PropTypes.func,
};

export default UpdateBasketSuccessMessage;
