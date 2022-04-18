import React, { useState, useEffect } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineClose,
  AiOutlineCheck,
} from "react-icons/ai";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch.js";
import validation from "../../assets/validation";

function ForgetPassword({ setForgetPassword }) {
  const { EMAIL_REGEX } = validation;
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const { performFetch, cancelFetch } = useFetch(
    "/users/forgot-password",
    () => {}
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    !validEmail ? setDisabled(true) : setDisabled(false);
  }, [validEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForgetPassword(false);
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
    <section className="flex flex-col fixed top-0 bg-lightBg/60 left-0 right-0 w-full  h-full  z-[1000]">
      <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
        <div className="bg-lightFont px-6 py-8 rounded shadow-md text-darkFont max-w-[600px] w-[90%]  relative">
          <button className="absolute mt-4 w-2 px-3 py-1 text-darkFont/80 left-[10px] top-[5px]">
            <AiOutlineArrowLeft onClick={() => setForgetPassword(false)} />
          </button>
          <h1 className="mb-8 text-3xl text-center text-accent">
            Forget Password
          </h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-container">
              {email && !emailFocus ? (
                validEmail ? (
                  <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                ) : (
                  <AiOutlineClose className="absolute text-error top-4 right-1" />
                )
              ) : (
                ""
              )}

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
                className="form-input peer"
                placeholder="Email *"
              />
              <label htmlFor="email" className="form-label">
                Insert Your Email *
              </label>
              <p
                id="email-note"
                className={`valid-note  ${
                  emailFocus && email && !validEmail ? "block" : "hidden"
                }`}
              >
                Invalid email address.
              </p>
            </div>

            <button
              //- Disable SignUp button till all validation passed
              type="submit"
              disabled={isDisabled}
              aria-live="assertive"
              className={`${
                isDisabled ? "is-disabled" : "is-valid"
              } submit-btn mt-4`}
            >
              {isDisabled ? "Please fill required fields correctly" : "Submit"}
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
