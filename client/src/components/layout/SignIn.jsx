import React, { useState } from "react";
import PropTypes from "prop-types";

import { AiFillEye, AiOutlineArrowLeft } from "react-icons/ai";
const FORM_INPUT_CLASSES =
  "peer  relative  text-darkFont  text-bodySmall placeholder-transparent focus:outline-none block border-b-2 border-grey-600 w-full h-10 p-3 bg-transparent ";
const FORM_LABEL_CLASSES =
  " text-gray-600  text-button transition-all peer-placeholder-shown:text-bodySmall peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase ";

function SignIn({ setSigninPage, setSignUp }) {
  const [signinForm, setSigninForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = signinForm;
  const handleChange = (e) => {
    setSigninForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signin = { email, password };
    alert(signin);
  };
  const closeWindow = () => {
    setSigninPage(false);
    setSignUp(false);
  };
  const handleSignupPage = () => {
    setSigninPage(false);
    setSignUp(true);
  };

  return (
    <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2  mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h1 className="mb-8 text-3xl text-accent text-center">Sign In</h1>
          <button
            className="absolute mt-4 w-2 px-3 py-1 text-black-400  left-[10px] top-[5px]"
            onClick={() => setSignUp(false)}
          >
            <AiOutlineArrowLeft onClick={closeWindow} />
          </button>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-12">
              <input
                type="email"
                id="email"
                autoComplete="off"
                required
                className={FORM_INPUT_CLASSES}
                placeholder="Email"
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className={`${FORM_LABEL_CLASSES} absolute`}
              >
                Email
              </label>
            </div>
            <div className="relative mb-12">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="off"
                required
                className={FORM_INPUT_CLASSES}
                placeholder="password"
                onChange={handleChange}
              />
              <div className="absolute top-2 right-1 cursor-pointer">
                <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
              </div>
              <label
                htmlFor="password"
                className={`${FORM_LABEL_CLASSES} absolute`}
              >
                Password
              </label>
            </div>

            <div className=" text-darkFont mt-6 text-bodySmall pl-3">
              Create new Account?
              <span
                className="text-accent px-2 cursor-pointer"
                onClick={handleSignupPage}
              >
                Sign Up
              </span>
            </div>
            <button
              type="submit"
              className="  text-white lg:float-right w-full text-center py-3 rounded bg-accent px-2 cursor-pointe hover:bg-green-dark focus:outline-none my-1 mt-4"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
SignIn.propTypes = {
  setSigninPage: PropTypes.func,
  setSignUp: PropTypes.func,
};

export default SignIn;
