import React, { useContext, useEffect, useState, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import CreateBasketSuccessMessage from "./CreateBasketSuccessMessage";
import UserContext from "../../../context/UserContext";

//- Declare regex validations
const DESCRIPTION_REGEX = /^[a-zA-Z0-20\s]{20,}$/;
// const QUANTITY_REGEX = /^[1-9][0-9]{1,}$/;
const ORIGINAL_PRICE_REGEX = /^[1-9][0-9]$/;
const DISCOUNT_PRICE_REGEX = /^[1-9][0-9]$/;
const FORM_INPUT_CLASSES =
  "peer  text-darkFont  text-bodySmall placeholder-transparent focus:outline-none block border-b-2 border-grey-600 w-full h-10 p-3 bg-transparent ";
const FORM_LABEL_CLASSES =
  "absolute left-3 -top-1 text-gray-600  text-button transition-all peer-placeholder-shown:text-bodySmall peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase ";
const INPUT_CONTAINER = "input-container relative my-7 ";
const VALID_NOTE = "text-error text-button px-3 pt-2";

const DESCRIPTION_INPUT_CLASSES =
  "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring";

const CreateBasketForm = () => {
  const { user } = useContext(UserContext);
  const names = [
    "Breakfast basket",
    "Lunch basket",
    "Dinner basket",
    "Surprise basket",
    "Pastries basket",
  ];
  const categoriesArr = [
    "Meals",
    "Bread & Pastries",
    "Groceries",
    "Vegetarian",
    "Diary & Meat",
  ];
  const [basketName, setBasketName] = useState("");
  const [originalPrice, setOriginalPrice] = useState(1);
  const [validOriginalPrice, setValidOriginalPrice] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [validDiscountPrice, setValidDiscountPrice] = useState(false);
  const [priceFocus, setLastPriceFocus] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState([]);
  const [pickup, setpickup] = useState({
    from: "",
    to: "",
  });
  const { from, to } = pickup;
  const [description, setDescription] = useState("");
  const [validDescription, setValidDescription] = useState(false);
  const [descriptionFocus, setDescriptionFocus] = useState(false);
  const [errMessage, setErrorMessage] = useState("please include all fields");
  const [success, setSuccess] = useState(false);
  const errRef = useRef();
  //- Fetching data
  const { performFetch, cancelFetch, error } = useFetch(
    `/shops/${user.shop_id}/baskets`,
    () => {
      setSuccess(true);
    }
  );
  //-
  useEffect(() => {
    return { cancelFetch };
  }, []);
  useEffect(() => {
    error && setErrorMessage(error);
  }, [error]);
  //- useEffect hooks to check validation when inputs changed
  useEffect(() => {
    setValidDescription(DESCRIPTION_REGEX.test(description));
  }, [description]);
  // useEffect(() => {
  //   setValidQuantity(QUANTITY_REGEX.test(quantity));
  // }, [quantity]);
  useEffect(() => {
    setValidOriginalPrice(ORIGINAL_PRICE_REGEX.test(originalPrice));
  }, [originalPrice]);
  useEffect(() => {
    setValidDiscountPrice(DISCOUNT_PRICE_REGEX.test(discountPrice));
  }, [discountPrice]);
  //- Determine error message
  useEffect(() => {
    setErrorMessage("");
  }, [description, originalPrice, discountPrice, quantity]);

  const handleCategory = (e) => {
    const { value, checked } = e.target;
    if (checked === true) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((e) => e !== value));
    }
  };
  //-Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !category ||
      !pickup ||
      !basketName ||
      !originalPrice ||
      !discountPrice ||
      !description ||
      !quantity
    ) {
      setErrorMessage("please include all fields");
    } else if (discountPrice >= originalPrice) {
      setErrorMessage(
        "the original price should be less than the discount price"
      );
    } else if (pickup.from >= pickup.to) {
      setErrorMessage("pick up time not correct");
    } else if (quantity <= 0) {
      setErrorMessage("quantity should be 1 at least");
    } else if (description.length <= 10) {
      setErrorMessage("description field should have at least 10 characters");
    } else if (category.length === 0) {
      setErrorMessage("please include one category at least");
    } else if (error) {
      setErrorMessage(error);
    } else {
      setSuccess(true);
      performFetch({
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: basketName,
          original: originalPrice,
          discount: discountPrice,
          quantity,
          categories: category,
          from,
          to,
          description,
        }),
      });
    }
  };

  if (success) {
    return <CreateBasketSuccessMessage setSuccess={setSuccess} />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <div className="flex">
          <h1 className="mb-8 text-3xl text-center text-accent">
            CREATE A BASKET
          </h1>
        </div>
      </div>
      {errMessage && (
        <div className="flex items-center justify-center w-full index-0">
          <h1
            aria-live="assertive"
            ref={errRef}
            className="w-[50%] mb-4 text-xl text-center  text-error border-2 border-error rounded"
          >
            {errMessage}
          </h1>
        </div>
      )}
      <section>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
          <div className="bg-gray-50 py-6 px-4 rounded">
            <label className="text-black " htmlFor="basketname">
              Basket Name
            </label>
            <div className="grid grid-cols-2">
              {names.map((item, idx) => (
                <div className="mt-4 text-sm " key={idx}>
                  <input
                    type="radio"
                    name="basketName"
                    id="basketName"
                    value={item}
                    onChange={(e) => setBasketName(e.target.value)}
                  />
                  <label className="ml-2 text-gray-500" htmlFor="name">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 py-6 px-4 rounded">
            <label className="text-black " htmlFor="emailAddress">
              Choose Category
            </label>

            <div className="grid grid-cols-2">
              {categoriesArr.map((item, idx) => (
                <div className="mt-4 text-sm " key={idx}>
                  <input
                    type="checkbox"
                    name={item}
                    id="category"
                    value={item}
                    onChange={handleCategory}
                  />
                  <label className="ml-2 text-gray-500 ">{item}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 ">
            <div className={INPUT_CONTAINER}>
              <input
                type="number"
                min="0"
                id="price"
                autoComplete="off"
                onChange={(e) => setOriginalPrice(parseInt(e.target.value))}
                required
                aria-invalid={validOriginalPrice ? "false" : "true"}
                aria-describedby="fn-note"
                onFocus={() => setLastPriceFocus(true)}
                onBlur={() => setLastPriceFocus(false)}
                className={FORM_INPUT_CLASSES}
              />
              <label className={FORM_LABEL_CLASSES} htmlFor="orgprice">
                Original Price
              </label>
              <p
                id="fn-note"
                className={`${VALID_NOTE}  ${
                  priceFocus && originalPrice && !validOriginalPrice
                    ? "block"
                    : "hidden"
                }`}
              >
                Price cannot be 0
              </p>
            </div>

            <div className={INPUT_CONTAINER}>
              <input
                type="number"
                min="0"
                id="price"
                autoComplete="off"
                onChange={(e) => setDiscountPrice(parseInt(e.target.value))}
                required
                aria-invalid={validDiscountPrice ? "false" : "true"}
                aria-describedby="fn-note"
                onFocus={() => setLastPriceFocus(true)}
                onBlur={() => setLastPriceFocus(false)}
                className={FORM_INPUT_CLASSES}
              />
              <label className={FORM_LABEL_CLASSES} htmlFor="disprice">
                Discounted Price
              </label>
              <p
                id="fn-note"
                className={`${VALID_NOTE}  ${
                  priceFocus && discountPrice && !validDiscountPrice
                    ? "block"
                    : "hidden"
                }`}
              >
                Price cant be 0
              </p>
              <div>
                <p
                  id="fn-note"
                  className={`${VALID_NOTE}  ${
                    originalPrice <= discountPrice ? "block" : "hidden"
                  }`}
                >
                  Discounted price must be less than Original Price
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1   ">
            <div className={INPUT_CONTAINER}>
              <input
                type="number"
                id="quantity"
                min="1"
                defaultValue="1"
                autoComplete="off"
                onChange={(e) => setQuantity(e.target.value)}
                required
                className={FORM_INPUT_CLASSES}
              />
              <label className={FORM_LABEL_CLASSES} htmlFor="quantity">
                Quantity of the basket
              </label>
            </div>
          </div>

          <div>
            <label className="text-black " htmlFor="pickupfrom">
              Pick up from:
            </label>

            <input
              required
              className={FORM_INPUT_CLASSES}
              value={from}
              type="time"
              id="pickup"
              onChange={(e) =>
                setpickup({
                  ...pickup,
                  from: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label className="text-black " htmlFor="pickupfrom">
              To:
            </label>
            <input
              required
              className={FORM_INPUT_CLASSES}
              value={to}
              onChange={(e) =>
                setpickup({
                  ...pickup,

                  to: e.target.value,
                })
              }
              type="time"
              placeholder="quantity"
              id="pickup"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-black">
              Description
            </label>
            <textarea
              type="textarea"
              id="description"
              rows="4"
              autoComplete="off"
              onChange={(e) => setDescription(e.target.value)}
              required
              aria-invalid={validDescription ? "false" : "true"}
              aria-describedby="fn-note"
              onFocus={() => setDescriptionFocus(true)}
              onBlur={() => setDescriptionFocus(false)}
              className={DESCRIPTION_INPUT_CLASSES}
              // placeholder="description"
            />

            <p
              id="fn-note"
              className={`${VALID_NOTE}  ${
                descriptionFocus && description && !validDescription
                  ? "block"
                  : "hidden"
              }`}
            >
              Text is too short
            </p>
          </div>
          <div>
            <label className="text-black">Image</label>
            <div className="px-4 py-2 mt-2 flex justify-center border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-black"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      accept=".jpg,.png,.jpeg"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 text-black">or drag and drop</p>
                </div>
                <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="w-full px-2 py-3 my-1 mt-4 text-center text-white rounded lg:float-right bg-accent cursor-pointe hover:bg-green-dark focus:outline-none">
            Save
          </button>
        </div>
      </section>
    </form>
  );
};

export default CreateBasketForm;
