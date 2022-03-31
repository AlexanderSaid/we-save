import React from "react";
import PropTypes from "prop-types";
function SignIn({ close, setClose }) {
  const closeWindow = () => {
    close(false);
    setClose(false);
  };
  return (
    <div className="  flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[70%]  relative">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>
          <button
            className="absolute border-2 border-primary rounded-full px-3 py-1 text-black-400 bg-primary right-[-10px] top-[-15px]"
            onClick={closeWindow}
          >
            X
          </button>
          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            id="email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            id="password"
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-primary text-black hover:bg-green-dark focus:outline-none my-1"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
SignIn.propTypes = {
  close: PropTypes.bool,
  setClose: PropTypes.func,
};

export default SignIn;
