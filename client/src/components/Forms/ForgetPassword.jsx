import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch.js";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]{2,}(.[a-zA-Z0-9-]{2,})?$/;
const INPUT_CONTAINER = "input-container relative my-7 ";
const VALID_NOTE = "text-error text-button px-3 pt-2";

const FORM_INPUT_CLASSES =
  "peer  relative  text-darkFont  text-bodySmall placeholder-transparent focus:outline-none block border-b-2 border-grey-600 w-full h-10 p-3 bg-transparent ";
const FORM_LABEL_CLASSES =
  " text-gray-600  text-button transition-all peer-placeholder-shown:text-bodySmall peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase ";

function ForgetPassword({ setForgetPassword }) {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [errMessage, setErrorMessage] = useState("");

  const errRef = useRef();

  const { performFetch, cancelFetch, error } = useFetch(
    "/users/forgot-password",
    () => {}
  );

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  useEffect(() => {
    return cancelFetch;
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrorMessage("");
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    performFetch({
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
  };

  return (
    <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
          <h1 className="mb-8 text-3xl text-center text-accent">
            Forget Password
          </h1>
          {errMessage && (
            <div className="flex items-center justify-center w-full">
              <h1
                aria-live="assertive"
                ref={errRef}
                className="w-[50%] mb-4 text-xl text-center text-error border-2 border-error rounded"
              >
                {errMessage}
              </h1>
            </div>
          )}
          <button className="absolute mt-4 w-2 px-3 py-1 text-black-400  left-[10px] top-[5px]">
            <AiOutlineArrowLeft onClick={() => setForgetPassword(false)} />
          </button>

          <form onSubmit={handleSubmit}>
            <div className={INPUT_CONTAINER}>
              <AiOutlineClose
                className={`${
                  validEmail || !email ? "hidden" : "visible"
                } absolute text-error top-4 right-1`}
              />

              <input
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="email-note"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className={FORM_INPUT_CLASSES}
                placeholder="Email *"
              />
              <label
                htmlFor="email"
                className={`${FORM_LABEL_CLASSES} absolute`}
              >
                Insert Your Email
              </label>
              <p
                id="email-note"
                className={`${VALID_NOTE}  ${
                  emailFocus && email && !validEmail ? "block" : "hidden"
                }`}
              >
                Invalid email address.
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-2 py-3 my-1 mt-4 text-center text-white rounded lg:float-right bg-accent cursor-pointe hover:bg-green-dark focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
ForgetPassword.propTypes = {
  setForgetPassword: PropTypes.func,
};

export default ForgetPassword;
