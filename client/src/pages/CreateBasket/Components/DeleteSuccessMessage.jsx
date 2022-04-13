import React from "react";
import PropTypes from "prop-types";

function DeleteSuccessMessage({ setIsDeleted }) {
  return (
    <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h3 className="mb-9 text-3xl text-center text-accent font-bold">
            The basket is deleted successfully
          </h3>
          <div className="w-full re-direct flex flex-col justify-evenly items-center">
            <button
              onClick={() => {
                setIsDeleted(false);
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
}

DeleteSuccessMessage.propTypes = {
  setIsDeleted: PropTypes.func,
};
export default DeleteSuccessMessage;
