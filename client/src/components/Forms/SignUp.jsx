import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  AiOutlineArrowLeft,
  AiOutlineClose,
  AiOutlineCheck,
} from "react-icons/ai";
import useFetch from "../../hooks/useFetch.js";
import SuccessSignUp from "./SuccessSignUp.jsx";
import validation from "../../assets/validation.js";

const SignUp = ({ signUpOpen, setSignUpOpen, setSignInOpen }) => {
  //- Reference to ErrorMessage to focus for screen reader
  const errRef = useRef();
  //- Regex validations
  const { NAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX, POSTCODE_REGEX } =
    validation;
  /**
   * Every input has 3 states:
   * For value, for validation and for focus
   * to determine visibility
   */

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [postcode, setPostcode] = useState("");
  const [validPostcode, setValidPostcode] = useState(false);
  const [postcodeFocus, setPostcodeFocus] = useState(false);

  const [errMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [isDisabled, setDisabled] = useState(true);

  //- Fetching data
  const { performFetch, cancelFetch, error } = useFetch("/users", () => {
    setSuccess(true);
  });

  //-
  useEffect(() => {
    return cancelFetch;
  }, []);

  //- useEffect hooks to check validation when inputs changed
  useEffect(() => {
    setValidFirstName(NAME_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(NAME_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setValidPostcode(POSTCODE_REGEX.test(postcode));
  }, [postcode]);

  //- Determine button state
  useEffect(() => {
    !validFirstName ||
    !validLastName ||
    !validEmail ||
    !validPassword ||
    !validMatch ||
    errMessage
      ? setDisabled(true)
      : setDisabled(false);
  }, [
    validFirstName,
    validLastName,
    validEmail,
    validPassword,
    validMatch,
    errMessage,
  ]);

  //- Clear error message when user start typing
  useEffect(() => {
    setErrorMessage("");
  }, [firstName, lastName, email, password, matchPassword]);

  //- switch to sign in page
  const handleSignInPage = () => {
    setSignInOpen(true);
    setSignUpOpen(false);
  };

  //- Connect with backend
  //- Set error message from backend

  useEffect(() => {
    error && setErrorMessage("This email is already exists.");
  }, [error]);

  //- Send the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    performFetch({
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first: firstName,
        last: lastName,
        email: email,
        postcode: postcode,
        password: password,
      }),
    });
  };

  return (
    signUpOpen &&
    (success ? (
      <>
        <SuccessSignUp setSuccess={setSuccess} setSignUp={setSignUpOpen} />
      </>
    ) : (
      <section className="flex flex-col fixed top-0 bg-lightBg/60 left-0 right-0 w-full  h-full overflow-auto  z-[1000]">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <div className="bg-lightFont px-6 py-8 rounded shadow-md max-w-[600px] w-[90%]  relative">
            <button
              className="absolute mt-4 w-2 px-3 py-1 text-black-400  left-[10px] top-[5px]"
              onClick={() => setSignUpOpen(false)}
            >
              <AiOutlineArrowLeft />
            </button>
            <h1 className="mb-8 text-3xl text-center text-accent">
              CREATE ACCOUNT
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                {firstName && !firstNameFocus ? (
                  validFirstName ? (
                    <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                  ) : (
                    <AiOutlineClose className="absolute text-error top-4 right-1" />
                  )
                ) : (
                  ""
                )}
                <input
                  type="text"
                  id="first-name"
                  autoComplete="off"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  aria-invalid={validFirstName ? "false" : "true"}
                  aria-describedby="fn-note"
                  onFocus={() => setFirstNameFocus(true)}
                  onBlur={() => setFirstNameFocus(false)}
                  className="form-input peer"
                  placeholder="First Name *"
                />
                <label htmlFor="first-name" className="form-label">
                  First Name *
                </label>
                <p
                  id="fn-note"
                  className={`valid-note  ${
                    firstNameFocus && firstName && !validFirstName
                      ? "block"
                      : "hidden"
                  }`}
                >
                  At least 3 letters / No numbers.
                </p>
              </div>
              <div className="input-container">
                {lastName && !lastNameFocus ? (
                  validLastName ? (
                    <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                  ) : (
                    <AiOutlineClose className="absolute text-error top-4 right-1" />
                  )
                ) : (
                  ""
                )}
                <input
                  type="text"
                  id="last-name"
                  autoComplete="off"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  aria-invalid={validLastName ? "false" : "true"}
                  aria-describedby="ln-note"
                  onFocus={() => setLastNameFocus(true)}
                  onBlur={() => setLastNameFocus(false)}
                  className="form-input peer"
                  placeholder="Last Name *"
                />
                <label htmlFor="last-name" className="form-label">
                  Last Name *
                </label>
                <p
                  id="ln-note"
                  className={`valid-note  ${
                    lastNameFocus && lastName && !validLastName
                      ? "block"
                      : "hidden"
                  }`}
                >
                  At least 3 letters / No numbers.
                </p>
              </div>
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
                  Email *
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
              <div className="input-container">
                {password && !passwordFocus ? (
                  validPassword ? (
                    <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                  ) : (
                    <AiOutlineClose className="absolute text-error top-4 right-1" />
                  )
                ) : (
                  ""
                )}
                <input
                  type="password"
                  id="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="pwd-note"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  className="form-input peer"
                  placeholder="Password *"
                />
                <label htmlFor="password" className="form-label">
                  Password *
                </label>
                <p
                  id="pwd-note"
                  className={`valid-note  ${
                    passwordFocus && password && !validPassword
                      ? "block"
                      : "hidden"
                  }`}
                >
                  8 to 24 characters contains at least:
                  <br /> 1 uppercase letter, 1 lowercase letter
                  <br /> 1 digit and 1 special character from:&nbsp;
                  <span aria-label="exclamation mark">!</span>
                  &nbsp;
                  <span aria-label="at symbol">@</span>
                  &nbsp;
                  <span aria-label="hashtag">#</span>&nbsp;
                  <span aria-label="dollar">$</span>&nbsp;
                  <span aria-label="percent">%</span>
                </p>
              </div>
              <div className="input-container">
                {matchPassword && !matchFocus ? (
                  validMatch ? (
                    <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                  ) : (
                    <AiOutlineClose className="absolute text-error top-4 right-1" />
                  )
                ) : (
                  ""
                )}
                <input
                  type="password"
                  id="confirm-password"
                  autoComplete="off"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirm-note"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="form-input peer"
                  placeholder="confirm Password *"
                />
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password *
                </label>
                <p
                  id="confirm-note"
                  className={`valid-note  ${
                    matchFocus && !validMatch ? "block" : "hidden"
                  }`}
                >
                  The confirmation does not match the password.
                </p>
              </div>
              <div className="relative input-container">
                {postcode && !postcodeFocus ? (
                  validPostcode ? (
                    <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                  ) : (
                    <AiOutlineClose className="absolute text-error top-4 right-1" />
                  )
                ) : (
                  ""
                )}
                <input
                  type="text"
                  id="postcode"
                  autoComplete="off"
                  onChange={(e) => setPostcode(e.target.value)}
                  aria-invalid={validPostcode ? "false" : "true"}
                  aria-describedby="pc-note"
                  onFocus={() => setPostcodeFocus(true)}
                  onBlur={() => setPostcodeFocus(false)}
                  className="form-input peer"
                  placeholder="Postcode *"
                />
                <label htmlFor="postcode" className="form-label">
                  Postcode
                </label>
                <p
                  id="pc-note"
                  className={`valid-note  ${
                    postcodeFocus && postcode && !validPostcode
                      ? "block"
                      : "hidden"
                  }`}
                >
                  Invalid postcode.
                </p>
              </div>

              <div className="pl-3 mt-6 text-darkFont text-bodySmall ">
                <p className="text-darkFont/80 text-button mb-2 lg:mb-0 lg:float-right ">
                  Field with * is required
                </p>
                <p>
                  Already have an account?
                  <span
                    className="px-2 cursor-pointer text-accent"
                    onClick={handleSignInPage}
                  >
                    Sign in
                  </span>
                </p>
              </div>

              <button
                //- Disable SignUp button till all validation passed
                type="submit"
                disabled={isDisabled}
                aria-live="assertive"
                ref={errRef}
                className={`${
                  isDisabled && !errMessage
                    ? "is-disabled"
                    : errMessage
                    ? "is-error"
                    : "is-valid"
                } submit-btn`}
              >
                {isDisabled && !errMessage
                  ? "Please fill required fields correctly"
                  : errMessage
                  ? errMessage
                  : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    ))
  );
};

SignUp.propTypes = {
  signUpOpen: PropTypes.bool,
  setSignUpOpen: PropTypes.func,
  setSignInOpen: PropTypes.func,
};

export default SignUp;
