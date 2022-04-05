import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import SuccessShopRegister from "./SuccessShopRegister";

import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
// import useFetch from "../hooks/useFetch.js";

//- Declare regex validations
const SHOP_NAME_REGEX = /^[a-zA-Z]{2,}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]{2,}(.[a-zA-Z0-9-]{2,})?$/;
// (123) 456-7890
// (123)456-7890
// 123-456-7890
// 123.456.7890
// 1234567890
// +31636363634
// 075-63546725
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
const POSTCODE_REGEX = /^[1-9][0-9]{3} ?[a-z]{2}$/i;
const KVK_REGEX = /^[0-9a-zA-Z]{8,8}/;

//- Common classes
const FORM_INPUT_CLASSES =
  "peer  text-darkFont  text-bodySmall placeholder-transparent focus:outline-none block border-b-2 border-grey-600 w-full h-10 p-3 bg-transparent ";
const FORM_LABEL_CLASSES =
  "absolute left-3 -top-1 text-gray-600  text-button transition-all peer-placeholder-shown:text-bodySmall peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase ";
const INPUT_CONTAINER = "input-container relative my-7 ";
const VALID_NOTE = "text-error text-button px-3 pt-2";

const ShopRegistration = ({ shopRegisterOpen, setShopRegisterOpen }) => {
  //- Reference to ErrorMessage to focus for screen reader
  const errRef = useRef();

  /**
   * Every input has 3 states:
   * For value, for validation and for focus
   * to determine visibility
   */

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

  const [kvkNumber, setKvkNumber] = useState("");
  const [validKvkNumber, setValidKvkNumber] = useState(false);
  const [kvkNumberFocus, setKvkNumberFocus] = useState(false);

  const [errMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [isDisabled, setDisabled] = useState(true);

  //- Fetching data
  // const { performFetch, cancelFetch, error } = useFetch("/users", () => {
  //   setSuccess(true);
  // });

  // -
  // useEffect(() => {
  //   return cancelFetch;
  // }, []);

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
    !validShopName || !validPostcode || !validKvkNumber || !validPhone
      ? setDisabled(true)
      : setDisabled(false);
  }, [validShopName, validPostcode, validKvkNumber, validPhone]);

  //- Clear error message when user start typing
  useEffect(() => {
    setErrorMessage("");
  }, [shopName, postcode, phone, email, kvkNumber, streetName, houseNumber]);

  //- Connect with backend
  // - Set error message from backend
  // useEffect(() => {
  //   error && setErrorMessage(error);
  // }, [error]);

  //- Send the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // performFetch({
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: shopName,
    //     address: {
    //       street: streetName,
    //       house: houseNumber,
    //       postcode: postcode,
    //     },
    //     email: email,
    //     phone: phone,
    //     kvk: kvkNumber,
    //   }),
    // });
  };

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
              Register You Shop
            </h1>
            <button
              className="absolute mt-4 w-2 px-3 py-1 text-black-400  left-[10px] top-[5px]"
              onClick={() => setShopRegisterOpen(false)}
            >
              <AiOutlineArrowLeft />
            </button>
            <form onSubmit={handleSubmit}>
              <div className={INPUT_CONTAINER}>
                <AiOutlineClose
                  className={`${
                    validShopName || !shopName ? "hidden" : "visible"
                  } absolute text-error top-4 right-1`}
                />
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
                  className={FORM_INPUT_CLASSES}
                  placeholder="Shop Name *"
                />
                <label htmlFor="shop-name" className={FORM_LABEL_CLASSES}>
                  Shop Name *
                </label>
                <p
                  id="sn-note"
                  className={`${VALID_NOTE}  ${
                    shopNameFocus && shopName && !validShopName
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
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="email-note"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className={FORM_INPUT_CLASSES}
                  placeholder="Email *"
                />
                <label htmlFor="email" className={FORM_LABEL_CLASSES}>
                  Email
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
                    validPhone || !phone ? "hidden" : "visible"
                  } absolute text-error top-4 right-1`}
                />
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
                  className={FORM_INPUT_CLASSES}
                  placeholder="Phone *"
                />
                <label htmlFor="phone" className={FORM_LABEL_CLASSES}>
                  Phone *
                </label>
                <p
                  id="ph-note"
                  className={`${VALID_NOTE}  ${
                    phoneFocus && phone && !validPhone ? "block" : "hidden"
                  }`}
                >
                  Phone Number should contain at least 10 number
                </p>
              </div>
              <div className={INPUT_CONTAINER}>
                <AiOutlineClose
                  className={`${
                    validKvkNumber || !kvkNumber ? "hidden" : "visible"
                  } absolute text-error top-4 right-1`}
                />
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
                  className={FORM_INPUT_CLASSES}
                  placeholder="KVK Number *"
                />
                <label htmlFor="kvk-number" className={FORM_LABEL_CLASSES}>
                  KVK Number *
                </label>
                <p
                  id="kvk-note"
                  className={`${VALID_NOTE}  ${
                    kvkNumberFocus && kvkNumber && !validKvkNumber
                      ? "block"
                      : "hidden"
                  }`}
                >
                  Invalid KVK Number .
                </p>
              </div>

              <div className={INPUT_CONTAINER}>
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
                  required
                  aria-invalid={validPostcode ? "false" : "true"}
                  aria-describedby="pc-note"
                  onFocus={() => setPostcodeFocus(true)}
                  onBlur={() => setPostcodeFocus(false)}
                  className={FORM_INPUT_CLASSES}
                  placeholder="Postcode *"
                />
                <label htmlFor="postcode" className={FORM_LABEL_CLASSES}>
                  Postcode *
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

              <div className="relative input-container">
                <div className="flex justify-between ">
                  <div className="flex">
                    <input
                      type="text"
                      id="street-name"
                      autoComplete="off"
                      onChange={(e) => setStreetName(e.target.value)}
                      className={FORM_INPUT_CLASSES}
                      placeholder="Street Name *"
                    />
                    <label htmlFor="street-name" className={FORM_LABEL_CLASSES}>
                      Street Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="house-num"
                      autoComplete="off"
                      onChange={(e) => setHouseNumber(e.target.value)}
                      className={FORM_INPUT_CLASSES}
                      placeholder="House Number *"
                    />
                    <label
                      htmlFor="house-num"
                      className="absolute text-gray-600 transition-all -top-1 text-button peer-placeholder-shown:text-bodySmall peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase"
                    >
                      House Number
                    </label>
                  </div>
                </div>
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

ShopRegistration.propTypes = {
  shopRegisterOpen: PropTypes.bool,
  setShopRegisterOpen: PropTypes.func,
};

export default ShopRegistration;
