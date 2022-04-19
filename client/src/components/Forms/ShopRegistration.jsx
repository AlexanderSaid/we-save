import React, { useRef, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import SuccessShopRegister from "./SuccessShopRegister";
import UserContext from "../../context/UserContext";
import {
  AiOutlineArrowLeft,
  AiOutlineClose,
  AiOutlineCheck,
} from "react-icons/ai";
import useFetch from "../../hooks/useFetch.js";

import validation from "../../assets/validation";
import Spinner from "../layout/Spinner";

const ShopRegistration = ({ shopRegisterOpen, setShopRegisterOpen }) => {
  //- Reference to ErrorMessage to focus for screen reader
  const errRef = useRef();
  //- Regex validations
  const {
    SHOP_NAME_REGEX,
    EMAIL_REGEX,
    PHONE_REGEX,
    POSTCODE_REGEX,
    KVK_REGEX,
  } = validation;

  /**
   * Every input has 3 states:
   * For value, for validation and for focus
   * to determine visibility
   */

  const { user, logout } = useContext(UserContext);

  const [shopName, setShopName] = useState("");
  const [validShopName, setValidShopName] = useState(false);
  const [shopNameFocus, setShopNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [postcode, setPostcode] = useState("");
  const [validPostcode, setValidPostcode] = useState(false);
  const [postcodeFocus, setPostcodeFocus] = useState(false);

  const [streetName, setStreetName] = useState("");

  const [houseNumber, setHouseNumber] = useState("");
  const [addition, setAddition] = useState("");

  const [kvkNumber, setKvkNumber] = useState("");
  const [validKvkNumber, setValidKvkNumber] = useState(false);
  const [kvkNumberFocus, setKvkNumberFocus] = useState(false);

  const [errMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [isDisabled, setDisabled] = useState(true);

  //- Fetching data
  const { performFetch, cancelFetch, isLoading, error } = useFetch(
    "/shops",
    () => {
      setSuccess(true);
    }
  );

  // -
  useEffect(() => {
    return cancelFetch;
  }, []);

  //- useEffect hooks to check validation when inputs changed
  useEffect(() => {
    setValidShopName(SHOP_NAME_REGEX.test(shopName));
  }, [shopName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidPostcode(POSTCODE_REGEX.test(postcode));
  }, [postcode]);

  useEffect(() => {
    setValidKvkNumber(KVK_REGEX.test(kvkNumber));
  }, [kvkNumber]);

  //- Determine button state
  useEffect(() => {
    !validShopName ||
    !validPostcode ||
    !validKvkNumber ||
    !validPhone ||
    !streetName ||
    !houseNumber ||
    errMessage
      ? setDisabled(true)
      : setDisabled(false);
  }, [
    validShopName,
    validPostcode,
    validKvkNumber,
    validPhone,
    streetName,
    houseNumber,
    errMessage,
  ]);

  //- Clear error message when user start typing
  useEffect(() => {
    setErrorMessage("");
  }, [
    shopName,
    postcode,
    phone,
    email,
    kvkNumber,
    streetName,
    houseNumber,
    addition,
  ]);

  //- Connect with backend
  // - Set error message from backend
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
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        name: shopName,
        street: streetName,
        house: houseNumber,
        addition: addition,
        postcode: postcode,
        email: email,
        phone: phone,
        kvk: kvkNumber,
      }),
    });
  };

  useEffect(() => {
    if (success) {
      logout();
    }
  }, [success]);

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
    shopRegisterOpen &&
    (success ? (
      <>
        <SuccessShopRegister
          setSuccess={setSuccess}
          setShopRegister={setShopRegisterOpen}
        />
      </>
    ) : (
      <section className="flex flex-col fixed top-0 bg-lightBg/60 left-0 right-0 w-full  h-full  z-[1000] overflow-auto">
        <div className="container flex flex-col items-center justify-center flex-1 px-2 mx-auto mb-6">
          <div className="bg-lightFont px-6 py-8 rounded shadow-md max-w-[600px] w-[90%]  relative">
            <h1 className="mb-8 text-3xl text-center text-accent">
              Register You Shop
            </h1>
            <button
              className="absolute mt-4 w-2 px-3 py-1 text-black-400  left-[10px] top-[5px]"
              onClick={() => {
                setShopRegisterOpen(false);
              }}
            >
              <AiOutlineArrowLeft />
            </button>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="input-container">
                {shopName && !shopNameFocus ? (
                  validShopName ? (
                    <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                  ) : (
                    <AiOutlineClose className="absolute text-error top-4 right-1" />
                  )
                ) : (
                  ""
                )}
                <input
                  type="text"
                  id="shop-name"
                  autoComplete="off"
                  onChange={(e) => setShopName(e.target.value)}
                  required
                  aria-invalid={validShopName ? "false" : "true"}
                  aria-describedby="sn-note"
                  onFocus={() => setShopNameFocus(true)}
                  onBlur={() => setShopNameFocus(false)}
                  className="form-input peer"
                  placeholder="Shop Name *"
                />
                <label htmlFor="shop-name" className="form-label">
                  Shop Name *
                </label>
                <p
                  id="sn-note"
                  className={`valid-note  ${
                    shopNameFocus && shopName && !validShopName
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
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="email-note"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className="form-input peer"
                  placeholder="Email *"
                />
                <label htmlFor="email" className="form-label">
                  Email
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
                {phone && !phoneFocus ? (
                  validPhone ? (
                    <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                  ) : (
                    <AiOutlineClose className="absolute text-error top-4 right-1" />
                  )
                ) : (
                  ""
                )}
                <input
                  type="text"
                  id="phone"
                  autoComplete="off"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  aria-invalid={validPhone ? "false" : "true"}
                  aria-describedby="ph-note"
                  onFocus={() => setPhoneFocus(true)}
                  onBlur={() => setPhoneFocus(false)}
                  className="form-input peer"
                  placeholder="Phone *"
                />
                <label htmlFor="phone" className="form-label">
                  Phone *
                </label>
                <p
                  id="ph-note"
                  className={`valid-note  ${
                    phoneFocus && phone && !validPhone ? "block" : "hidden"
                  }`}
                >
                  Phone Number should contain at least 10 number
                </p>
              </div>
              <div className="input-container">
                {kvkNumber && !kvkNumberFocus ? (
                  validKvkNumber ? (
                    <AiOutlineCheck className="absolute text-accent top-4 right-1" />
                  ) : (
                    <AiOutlineClose className="absolute text-error top-4 right-1" />
                  )
                ) : (
                  ""
                )}
                <input
                  type="text"
                  id="kvk-number"
                  autoComplete="off"
                  onChange={(e) => setKvkNumber(e.target.value)}
                  required
                  aria-invalid={validKvkNumber ? "false" : "true"}
                  aria-describedby="kvk-note"
                  onFocus={() => setKvkNumberFocus(true)}
                  onBlur={() => setKvkNumberFocus(false)}
                  className="form-input peer"
                  placeholder="KVK Number *"
                />
                <label htmlFor="kvk-number" className="form-label">
                  KVK Number *
                </label>
                <p
                  id="kvk-note"
                  className={`valid-note  ${
                    kvkNumberFocus && kvkNumber && !validKvkNumber
                      ? "block"
                      : "hidden"
                  }`}
                >
                  Invalid KVK Number .
                </p>
              </div>

              <div className="input-container">
                <input
                  type="text"
                  id="street-name"
                  autoComplete="off"
                  required
                  onChange={(e) => setStreetName(e.target.value)}
                  className="form-input peer"
                  placeholder="Street Name *"
                />
                <label htmlFor="street-name" className="form-label">
                  Street Name *
                </label>
              </div>

              <div className="flex justify-between -my-7">
                <div className="input-container">
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
                    required
                    aria-invalid={validPostcode ? "false" : "true"}
                    aria-describedby="pc-note"
                    onFocus={() => setPostcodeFocus(true)}
                    onBlur={() => setPostcodeFocus(false)}
                    className="form-input peer"
                    placeholder="Postcode *"
                  />
                  <label htmlFor="postcode" className="form-label">
                    Postcode *
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
                <div className="mx-2 input-container">
                  <input
                    type="text"
                    id="house-num"
                    autoComplete="off"
                    required
                    onChange={(e) => setHouseNumber(e.target.value)}
                    className="form-input peer"
                    placeholder="House Number *"
                  />
                  <label htmlFor="house-num" className="form-label">
                    House Number *
                  </label>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    id="addition"
                    autoComplete="off"
                    onChange={(e) => setAddition(e.target.value)}
                    className="form-input peer"
                    placeholder="Addition "
                  />
                  <label htmlFor="addition" className="form-label">
                    Addition
                  </label>
                </div>
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

ShopRegistration.propTypes = {
  shopRegisterOpen: PropTypes.bool,
  setShopRegisterOpen: PropTypes.func,
};

export default ShopRegistration;
