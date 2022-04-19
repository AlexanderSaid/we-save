import React from "react";
import PropTypes from "prop-types";

const SuccessMessage = ({ setSuccess }) => {
  return (
    <section className="flex flex-col fixed top-0 bg-lightBg/60 left-0 right-0 w-full h-full z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h3 className="mb-8 text-3xl text-center text-accent">
            Thank you! Your message has been successfully sent!
          </h3>
          <button
            onClick={() => {
              setSuccess(false);
            }}
            className="w-full py-3 my-1 text-center rounded bg-primary text-darkFont hover:bg-green-dark focus:outline-none mt-9"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

SuccessMessage.propTypes = {
  setSuccess: PropTypes.func,
};

export default SuccessMessage;
