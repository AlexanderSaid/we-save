import React, { useRef, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import { useSearchParams, useNavigate } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
const FORM_INPUT_CLASSES =
  "peer  text-darkFont  text-bodySmall placeholder-transparent focus:outline-none block border-b-2 border-grey-600 w-full h-10 p-3 bg-transparent ";
const FORM_LABEL_CLASSES =
  "absolute left-3 -top-1 text-gray-600  text-button transition-all peer-placeholder-shown:text-bodySmall peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase ";
const INPUT_CONTAINER = "input-container relative my-7 ";
const VALID_NOTE = "text-error text-button px-3 pt-2";
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function ResetPassword() {
  const errRef = useRef();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [errMessage, setErrorMessage] = useState("");

  //- Fetching data
  const { performFetch, cancelFetch, error } = useFetch(
    `/users/reset-password?token=${token}`,
    () => {
      navigate("/");
    }
  );
  //-
  useEffect(() => {
    return cancelFetch;
  }, []);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  //- Connect with backend
  //- Set error message from backend

  useEffect(() => {
    error && setErrorMessage(error);
  }, [error]);

  //- Send the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (matchPassword !== password) {
      setErrorMessage("password doesn't match");
    } else {
      setErrorMessage("");

      performFetch({
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      });
    }
  };

  return (
    <>
      <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
            <h1 className="mb-8 text-3xl text-center text-accent">
              Reset Password
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
            <form onSubmit={handleSubmit}>
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
                  New Password
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
                  Confirm New Password
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
    </>
  );
}

export default ResetPassword;
