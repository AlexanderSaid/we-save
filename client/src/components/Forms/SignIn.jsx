import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import SignUp from "./SignUp";
import UserContext from "../../context/UserContext";

import ForgetPassword from "./ForgetPassword";

import { AiFillEye, AiOutlineArrowLeft } from "react-icons/ai";
function SignIn({ openSignIn, setOpenSignIn, setShopIsOpen, owner }) {
  const { user, login, error, isLoading } = useContext(UserContext);
  const [signinForm, setSigninForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [errMessage, setErrorMessage] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  useEffect(() => {
    error && setErrorMessage(error);
  }, [error]);

  const handleChange = (e) => {
    setSigninForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (user) {
      setOpenSignIn(false);
    }
  }, [user]);

  const { email, password } = signinForm;
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    login(userData);
    if (owner) {
      setShopIsOpen(true);
    }
    setSigninForm({ email: "", password: "" });
  };

  const closeWindow = () => {
    setOpenSignIn(false);
  };

  const handleSignupPage = () => {
    setSignUpOpen(true);
    setOpenSignIn(false);
  };

  if (signUpOpen) {
    return (
      <SignUp
        signUpOpen={signUpOpen}
        setSignUpOpen={setSignUpOpen}
        setSignInOpen={setOpenSignIn}
      />
    );
  }
  if (isLoading) {
    return (
      <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <div className="text-center bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
            <h1>Loading...</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {openSignIn && (
        <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
          <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
            <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
              {errMessage && (
                <div className="flex items-center justify-center w-full">
                  <h1 className="w-[50%] mb-4 text-xl text-center text-error border-2 border-error rounded">
                    {errMessage}
                  </h1>
                </div>
              )}
              <h1 className="mb-8 text-3xl text-center text-accent">Sign In</h1>
              <button
                className="absolute mt-4 w-2 px-3 py-1 text-black-400  left-[10px] top-[5px]"
                onClick={() => setOpenSignIn(false)}
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
                    className="form-input peer"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </div>
                <div className="relative mb-12">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="off"
                    required
                    className="form-input peer"
                    placeholder="password"
                    onChange={handleChange}
                  />
                  <div className="absolute cursor-pointer top-2 right-1">
                    <AiFillEye
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  </div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                </div>

                <div className="flex lg:flex-row lg:justify-between flex-col ">
                  <div className="pl-3 mt-6 text-darkFont text-bodySmall">
                    Create new Account?
                    <span
                      className="px-2 cursor-pointer text-accent"
                      onClick={handleSignupPage}
                    >
                      Sign Up
                    </span>
                  </div>
                  <div
                    className="mt-6 pr-3  text-bodySmall"
                    onClick={() => {
                      setOpenSignIn(false);
                      setForgetPassword(true);
                    }}
                  >
                    <span className="px-2 cursor-pointer text-accent">
                      Forget Password?
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-2 py-3 my-1 mt-4 text-center text-white rounded lg:float-right bg-accent cursor-pointe hover:bg-green-dark focus:outline-none"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
      {forgetPassword && (
        <ForgetPassword
          forgetPassword={forgetPassword}
          setForgetPassword={setForgetPassword}
        />
      )}
    </>
  );
}
SignIn.propTypes = {
  setOpenSignIn: PropTypes.func,
  openSignIn: PropTypes.bool,
  setShopIsOpen: PropTypes.func,
  owner: PropTypes.bool,
};

export default SignIn;
