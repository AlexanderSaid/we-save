import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SuccessSignUp = ({ setShopRegister, setSuccess }) => {
  return (
    <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h3 className="text-3xl font-bold text-center mb-9 text-accent">
            You Store Has Been Register
          </h3>
          <div className="flex flex-col items-center w-full re-direct justify-evenly">
            <Link to="/" className="w-[50%]">
              <button
                onClick={() => {
                  setSuccess(false);
                  setShopRegister(false);
                }}
                className="w-full py-2 my-1 mt-4 font-bold text-center transition duration-300 text-darkFont hover:text-accent focus:outline-none hover:ease-in-out"
              >
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

SuccessSignUp.propTypes = {
  setShopRegister: PropTypes.func,
  setSuccess: PropTypes.func,
};
export default SuccessSignUp;
