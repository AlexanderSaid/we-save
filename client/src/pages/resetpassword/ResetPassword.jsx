import React, { useRef, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import validation from "../../assets/validation.js";
import Spinner from "../../components/layout/Spinner.jsx";

function ResetPassword() {
  const { PASSWORD_REGEX } = validation;
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

  const [isDisabled, setDisabled] = useState(true);

  //- Fetching data
  const { performFetch, cancelFetch, isLoading, error } = useFetch(
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

  //- Determine button state
  useEffect(() => {
    !validPassword || !validMatch ? setDisabled(true) : setDisabled(false);
  }, [validPassword, validMatch]);

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
  if (isLoading) {
    return (
      <section className="flex flex-col fixed top-0 bg-lightBg/60 left-0 right-0 w-full  h-full  z-[1000]">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <Spinner />
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <div className="bg-lightFont px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[90%]  relative">
            <h1 className="mb-8 text-3xl text-center text-accent">
              Reset Password
            </h1>

            <form onSubmit={handleSubmit}>
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
                  className="form-input"
                  placeholder="Password *"
                />
                <label htmlFor="password" className="form-label">
                  New Password
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
                  className="form-input"
                  placeholder="confirm Password *"
                />
                <label htmlFor="confirm-password" className="form-label">
                  Confirm New Password
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

              <button
                //- Disable SignUp button till all validation passed
                type="submit"
                disabled={isDisabled}
                aria-live="assertive"
                ref={errRef}
                className={`${
                  isDisabled
                    ? "is-disabled"
                    : errMessage
                    ? "is-error"
                    : "is-valid"
                } submit-btn`}
              >
                {isDisabled
                  ? "Please fill required fields correctly"
                  : errMessage
                  ? errMessage
                  : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
