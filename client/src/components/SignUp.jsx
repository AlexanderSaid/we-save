import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import useFetch from "../hooks/useFetch.js";
import SuccessSignUp from "./SuccessSignUp.jsx";

//- Declare regex validations
const NAME_REGEX = /^[a-zA-Z]{3,}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]{2,}(.[a-zA-Z0-9-]{2,})?$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const POSTCODE_REGEX = /^[1-9][0-9]{3} ?[a-z]{2}$/i;

//- Common classes
const FORM_INPUT_CLASSES =
  "peer  text-darkFont  text-bodySmall placeholder-transparent focus:outline-none block border-b-2 border-grey-600 w-full h-10 p-3 bg-transparent ";
const FORM_LABEL_CLASSES =
  "absolute left-3 -top-1 text-gray-600  text-button transition-all peer-placeholder-shown:text-bodySmall peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase ";
const INPUT_CONTAINER = "input-container relative my-7 ";
const VALID_NOTE = "text-error text-button px-3 pt-2";

const SignUp = ({ openSignUp, setSignUp }) => {
  //- Reference to ErrorMessage to focus for screen reader
  const errRef = useRef();

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
    !validMatch
      ? setDisabled(true)
      : setDisabled(false);
  }, [validFirstName, validLastName, validEmail, validPassword, validMatch]);

  //- Clear error message when user start typing
  useEffect(() => {
    setErrorMessage("");
  }, [firstName, lastName, email, password, matchPassword]);

  //- Set error message from backend
  useEffect(() => {
    error && setErrorMessage(error);
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
    openSignUp &&
    (success ? (
      <>
        <SuccessSignUp setSuccess={setSuccess} setSignUp={setSignUp} />
      </>
    ) : (
      <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <div className="bg-lightFont px-6 py-8 rounded shadow-md max-w-[600px] w-[90%]  relative">
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
            <h1 className="mb-8 text-3xl text-center text-accent">
              CREATE ACCOUNT
            </h1>
            <button
              className="absolute mt-4 w-2 px-3 py-1 text-black-400  left-[10px] top-[5px]"
              onClick={() => setSignUp(false)}
            >
              <AiOutlineArrowLeft />
            </button>
            <form onSubmit={handleSubmit}>
              <div className={INPUT_CONTAINER}>
                <AiOutlineClose
                  className={`${
                    validFirstName || !firstName ? "hidden" : "visible"
                  } absolute text-error top-4 right-1`}
                />
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
                  className={FORM_INPUT_CLASSES}
                  placeholder="First Name *"
                />
                <label htmlFor="first-name" className={FORM_LABEL_CLASSES}>
                  First Name *
                </label>
                <p
                  id="fn-note"
                  className={`${VALID_NOTE}  ${
                    firstNameFocus && firstName && !validFirstName
                      ? "block"
                      : "hidden"
                  }`}
                >
                  At least 3 letters / No numbers.
                </p>
              </div>
              <div className={INPUT_CONTAINER}>
                <AiOutlineClose
                  className={`${
                    validLastName || !lastName ? "hidden" : "visible"
                  } absolute text-error top-4 right-1`}
                />
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
                  className={FORM_INPUT_CLASSES}
                  placeholder="Last Name *"
                />
                <label htmlFor="last-name" className={FORM_LABEL_CLASSES}>
                  Last Name *
                </label>
                <p
                  id="ln-note"
                  className={`${VALID_NOTE}  ${
                    lastNameFocus && lastName && !validLastName
                      ? "block"
                      : "hidden"
                  }`}
                >
                  At least 3 letters / No numbers.
                </p>
              </div>
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
                <label htmlFor="email" className={FORM_LABEL_CLASSES}>
                  Email *
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
              <div className={INPUT_CONTAINER}>
                <AiOutlineClose
                  className={`${
                    validPassword || !password ? "hidden" : "visible"
                  } absolute text-error top-4 right-1`}
                />
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
                  className={FORM_INPUT_CLASSES}
                  placeholder="Password *"
                />
                <label htmlFor="password" className={FORM_LABEL_CLASSES}>
                  Password *
                </label>
                <p
                  id="pwd-note"
                  className={`${VALID_NOTE}  ${
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
              <div className={INPUT_CONTAINER}>
                <AiOutlineClose
                  className={`${
                    validMatch || !matchPassword ? "hidden" : "visible"
                  } absolute text-error top-4 right-1`}
                />
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
                  className={FORM_INPUT_CLASSES}
                  placeholder="confirm Password *"
                />
                <label
                  htmlFor="confirm-password"
                  className={FORM_LABEL_CLASSES}
                >
                  Confirm Password *
                </label>
                <p
                  id="confirm-note"
                  className={`${VALID_NOTE}  ${
                    matchFocus && !validMatch ? "block" : "hidden"
                  }`}
                >
                  The confirmation does not match the password.
                </p>
              </div>
              <div className="relative input-container">
                <AiOutlineClose
                  className={`${
                    validPostcode || !postcode ? "hidden" : "visible"
                  } absolute text-error top-4 right-1`}
                />
                <input
                  type="text"
                  id="postcode"
                  autoComplete="off"
                  onChange={(e) => setPostcode(e.target.value)}
                  aria-invalid={validPostcode ? "false" : "true"}
                  aria-describedby="pc-note"
                  onFocus={() => setPostcodeFocus(true)}
                  onBlur={() => setPostcodeFocus(false)}
                  className={FORM_INPUT_CLASSES}
                  placeholder="Postcode *"
                />
                <label htmlFor="postcode" className={FORM_LABEL_CLASSES}>
                  Postcode
                </label>
                <p
                  id="pc-note"
                  className={`${VALID_NOTE}  ${
                    postcodeFocus && postcode && !validPostcode
                      ? "block"
                      : "hidden"
                  }`}
                >
                  Invalid postcode.
                </p>
              </div>

              <div className="pl-3 mt-6 text-darkFont text-bodySmall ">
                <span className="text-gray-400 text-button lg:float-right ">
                  Field with * is required
                </span>
                <br />
                Already have an account?
                <span className="px-2 text-accent">Sign in</span>
              </div>
              <button
                //- Disable SignUp button till all validation passed
                disabled={isDisabled}
                className="w-full py-3 my-1 text-center rounded bg-accent text-lightFont hover:bg-green-dark focus:outline-none mt-9"
              >
                {isDisabled
                  ? "Please fill required fields correctly"
                  : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      </section>
    ))
  );
};

SignUp.propTypes = {
  openSignUp: PropTypes.bool,
  setSignUp: PropTypes.func,
};

export default SignUp;
