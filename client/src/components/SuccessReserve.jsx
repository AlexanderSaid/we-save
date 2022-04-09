import React from "react";
import PropTypes from "prop-types";

const SuccessReserve = ({ setConfirmRsv }) => {
  function createVerificationCode(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h3 className="mb-9 text-3xl text-center text-accent font-bold">
            You have reserved the basket successfully!
          </h3>
          <p className="mb-9 text-2xl text-center text-accent font-bold">
            Your verification code is:{" "}
          </p>
          <p className="mb-9 text-4xl text-center text-darkBg font-bold">
            {createVerificationCode(8).toUpperCase()}
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
