//- import axios from "axios";
import React, { useRef, useState, useEffect } from "react";

//- Declare regex validations
const NAME_REGEX = /^[a-zA-Z]{3,}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]{2,}(.[a-zA-Z0-9-]{2,})?$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const POSTCODE_REGEX = /^[1-9][0-9]{3} ?[a-z]{2}$/i;

const SignUp = () => {
  //- Reference to FirstName input to focus on first load
  const firstNameRef = useRef();
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

  //- FirstName input focus
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  //- useEffect hooks to check validation when inputs changed
  useEffect(() => {
    const result = NAME_REGEX.test(firstName);
    // console.log(result);
    // console.log(lastName);
    setValidFirstName(result);
  }, [firstName]);

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    // console.log(result);
    // console.log(lastName);
    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(result);
    // console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    // console.log(result);
    // console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    const result = POSTCODE_REGEX.test(postcode);
    // console.log(result);
    // console.log(postcode);
    setValidPostcode(result);
  }, [postcode]);

  //- Clear error message when user start typing
  useEffect(() => {
    setErrorMessage("");
  }, [firstName, lastName, email, password, matchPassword]);

  //- Connect with backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log({ firstName, lastName, email, password, postcode });
    try {
      // const response = await axios.post(
      //   url,
      //   JSON.stringify({ firstName, lastName, email, password, postcode }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //     withCredentials: true,
      //   }
      // );
      setSuccess(true);
      // clear input fields
    } catch (error) {
      if (!error?.response) {
        setErrorMessage("No Server Response");
      }
      if (errMessage.response?.state === 409) {
        setErrorMessage(
          `There is already an account using the email: ${email}`
        );
      }
      setErrorMessage("Signing Up Failed");
      //- Focus on error message when error
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <section>
          <p
            ref={errRef}
            className={`h-10 w-60 text-error ${
              errMessage ? "visible" : "invisible"
            }`}
            aria-live="assertive"
          >
            {errMessage}
          </p>
          <h3>You are signed up successfully!</h3>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <h1>CREATE ACCOUNT</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container relative my-6">
              <input
                type="text"
                id="first-name"
                ref={firstNameRef}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                required
                aria-invalid={validFirstName ? "false" : "true"}
                aria-describedby="fn-note"
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)}
                className="peer h-10 w-60 border-b-2 border-gray-900 text-darkFont placeholder-transparent focus:outline-none"
                placeholder="First Name *"
              />
              <label
                htmlFor="first-name"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                First Name *
              </label>
              <p
                id="fn-note"
                className={`text-error text-sm ${
                  firstNameFocus && firstName && !validFirstName
                    ? "visible"
                    : "invisible"
                }`}
              >
                At least 3 letters / No numbers.
              </p>
            </div>
            <div className="input-container relative my-6">
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
                className="peer h-10 w-60 border-b-2 border-gray-900 text-darkFont placeholder-transparent focus:outline-none"
                placeholder="Last Name *"
              />
              <label
                htmlFor="last-name"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Last Name *
              </label>
              <p
                id="ln-note"
                className={`text-error text-sm ${
                  lastNameFocus && lastName && !validLastName
                    ? "visible"
                    : "invisible"
                }`}
              >
                At least 3 letters / No numbers.
              </p>
            </div>
            <div className="input-container relative my-6">
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
                className="peer h-10 w-60 border-b-2 border-gray-900 text-darkFont placeholder-transparent focus:outline-none"
                placeholder="Email *"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Email *
              </label>
              <p
                id="email-note"
                className={`text-error text-sm ${
                  emailFocus && email && !validEmail ? "visible" : "invisible"
                }`}
              >
                Invalid email address.
              </p>
            </div>
            <div className="input-container relative my-6">
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
                className="peer h-10 w-60 border-b-2 border-gray-900 text-darkFont placeholder-transparent focus:outline-none"
                placeholder="Password *"
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Password *
              </label>
              <p
                id="pwd-note"
                className={`text-error text-sm ${
                  passwordFocus && password && !validPassword
                    ? "visible"
                    : "invisible"
                }`}
              >
                8 to 24 characters contains at least / 1 uppercase letter, 1
                lowercase letter, a number and a special character from:{" "}
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar">$</span>
                <span aria-label="percent">%</span>
              </p>
            </div>
            <div className="input-container relative my-6">
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
                className="peer h-10 w-60 border-b-2 border-gray-900 text-darkFont placeholder-transparent focus:outline-none"
                placeholder="confirm Password *"
              />
              <label
                htmlFor="confirm-password"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Confirm Password *
              </label>
              <p
                id="confirm-note"
                className={`text-error text-sm ${
                  matchFocus && !validMatch ? "visible" : "invisible"
                }`}
              >
                The confirmation does not match the password.
              </p>
            </div>
            <div className="input-container relative my-6">
              <input
                type="text"
                id="postcode"
                autoComplete="off"
                onChange={(e) => setPostcode(e.target.value)}
                aria-invalid={validPostcode ? "false" : "true"}
                aria-describedby="pc-note"
                onFocus={() => setPostcodeFocus(true)}
                onBlur={() => setPostcodeFocus(false)}
                className="peer h-10 w-60 border-b-2 border-gray-900 text-darkFont placeholder-transparent focus:outline-none"
                placeholder="Postcode *"
              />
              <label
                htmlFor="postcode"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Postcode
              </label>
              <p
                id="pc-note"
                className={`text-error text-sm ${
                  postcodeFocus && postcode && !validPostcode
                    ? "visible"
                    : "invisible"
                }`}
              >
                Invalid postcode.
              </p>
            </div>
            <button
              //- Disable SignUp button till all validation passed
              disabled={
                !validFirstName ||
                !validLastName ||
                !validEmail ||
                !validPassword ||
                !validMatch
                  ? true
                  : false
              }
            >
              SIGN UP
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default SignUp;
