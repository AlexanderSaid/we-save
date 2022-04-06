import React, { useState, useRef, useEffect } from "react";
import CreateBasketSuccessMessage from "./CreateBasket component/CreateBasketSuccessMessage";
//import useFetch from "../hooks/useFetch.js";
const names = [
  "Breakfast basket",
  "Lunch basket",
  "Dinner basket",
  "Surprise basket",
  "Pastries basket",
];
const categories = [
  " Magic box",
  "vegetarian",
  "Groceries",
  " Bread & Pastries",
  "Meals",
  "Drinks",
];

//- Declare regex validations
const DESCRIPTION_REGEX = /^[a-zA-Z]{10,}$/;
const QUANTITY_REGEX = /^[1-9][0-9]{1,}$/;
const PRICE_REGEX = /^[1-9][0-9]{1,}$/;

//- Common classes
const FORM_INPUT_CLASSES =
  "peer  text-darkFont  text-bodySmall placeholder-transparent focus:outline-none block border-b-2 border-grey-600 w-full h-10 p-3 bg-transparent ";
const FORM_LABEL_CLASSES =
  "absolute left-3 -top-1 text-gray-600  text-button transition-all peer-placeholder-shown:text-bodySmall peer-placeholder-shown:uppercase peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase ";
const INPUT_CONTAINER = "input-container relative my-7 ";
const VALID_NOTE = "text-error text-button px-3 pt-2";
const OTHER_INPUTSTYLE =
  "  text-darkFont  text-bodySmall focus:outline-none block border-b-2 border-grey-600 w-full h-10 p-3 bg-transparent focus:border-b-2 focus:border-accent focus:border-transparent";

function CreateBasket() {
  const errRef = useRef();

  const [basketName, setBasketName] = useState("");

  const [price, setPrice] = useState({ original: 1, discount: 0 });
  const [validPrice, setValidPrice] = useState(false);
  const [priceFocus, setLastPriceFocus] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [validQuantity, setValidQuantity] = useState(false);
  const [quantityFocus, setQuantityFocus] = useState(false);

  const [category, setCategory] = useState([]);

  const [pickup, setpickup] = useState({
    from: new Date(),
    to: new Date(),
  });
  const { from, to } = pickup;

  const [description, setDescription] = useState("");
  const [validDescription, setValidDescription] = useState(false);
  const [descriptionFocus, setDescriptionFocus] = useState(false);

  const [errMessage, setErrorMessage] = useState("please include all fields");
  const [success, setSuccess] = useState(false);

  const [isDisabled, setDisabled] = useState(true);

  //- Fetching data
  // const { performFetch, cancelFetch, error } = useFetch("/basket", () => {
  //   setSuccess(true);
  // });

  //-
  // useEffect(() => {
  //   return cancelFetch;
  // }, []);

  //- useEffect hooks to check validation when inputs changed
  useEffect(() => {
    setValidDescription(DESCRIPTION_REGEX.test(description));
  }, [description]);
  useEffect(() => {
    setValidQuantity(QUANTITY_REGEX.test(quantity));
  }, [quantity]);

  useEffect(() => {
    setValidPrice(PRICE_REGEX.test(price.original));
  }, [price]);
  useEffect(() => {
    setValidPrice(PRICE_REGEX.test(price.discount));
  }, [price]);
  //- Determine button state
  useEffect(() => {
    !validDescription || !validPrice || !validQuantity
      ? setDisabled(true)
      : setDisabled(false);
  }, [validDescription, validPrice, validQuantity]);

  //- Determine error message
  useEffect(() => {
    setErrorMessage("");
  }, [description, price, quantity]);

  //-handle category function

  const handleCategory = (e) => {
    setCategory([...category, e.target.value]);
  };

  //-Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBasket = {
      name: basketName,
      price,
      quantity,
      category,
      pickup,
      description,
    };
    if (
      !category ||
      !pickup ||
      !basketName ||
      !price ||
      !description ||
      !quantity
    ) {
      setErrorMessage("please include all fields");
    } else if (price.discount >= price.original) {
      setErrorMessage(
        "the original price should be less than the discount price"
      );
    } else if (pickup.from >= pickup.to) {
      setErrorMessage("pick up time not correct");
    } else if (quantity <= 0) {
      setErrorMessage("quantity should be 1 at least");
    } else if (description.length <= 10) {
      setErrorMessage("description field should have at least 10 characters");
    } else {
      setSuccess(true);
      alert(newBasket);
      // performFetch({
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     first: firstName,
      //     last: lastName,
      //     email: email,
      //     postcode: postcode,
      //     password: password,
      //   }),
      // });
    }
  };

  return (
    <>
      {success && (
        <>
          <CreateBasketSuccessMessage setSuccess={setSuccess} />
        </>
      )}
      {errMessage && (
        <div className="flex items-center justify-center w-full">
          <h1
            aria-live="assertive"
            ref={errRef}
            className="w-[50%] mb-4 text-xl text-center bg-black text-error border-2 border-error rounded"
          >
            {errMessage}
          </h1>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center mt-20 mb-10 relative  ">
          <div className="grid bg-white  shadow-xl  md:w-9/12 lg:w-[60%] ">
            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-gray-600 font-bold md:text-2xl text-xl mt-10">
                  Create Basket
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1  mx-7 mt-8">
              <p className="uppercase text-gray-500 md:text-sm text-xs  text-light font-semibold">
                Basket Name
              </p>

              {names.map((item, idx) => (
                <div className="mt-4" key={idx}>
                  <input
                    type="radio"
                    name="basketName"
                    id="basketName"
                    value={item}
                    onChange={(e) => setBasketName(e.target.value)}
                  />
                  <label className="ml-2" htmlFor="name">
                    {item}
                  </label>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div className={INPUT_CONTAINER}>
                <input
                  type="number"
                  id="price"
                  autoComplete="off"
                  onChange={(e) =>
                    setPrice({ ...price, original: e.target.value })
                  }
                  required
                  aria-invalid={validPrice ? "false" : "true"}
                  aria-describedby="fn-note"
                  onFocus={() => setLastPriceFocus(true)}
                  onBlur={() => setLastPriceFocus(false)}
                  className={FORM_INPUT_CLASSES}
                  placeholder="price"
                />
                <label htmlFor="price" className={FORM_LABEL_CLASSES}>
                  Regular Price
                </label>
                <p
                  id="fn-note"
                  className={`${VALID_NOTE}  ${
                    priceFocus && price && !validPrice ? "block" : "hidden"
                  }`}
                >
                  Price cant be 0
                </p>
              </div>
              <div className={INPUT_CONTAINER}>
                <input
                  type="number"
                  id="price"
                  autoComplete="off"
                  onChange={(e) =>
                    setPrice({ ...price, discount: e.target.value })
                  }
                  required
                  aria-invalid={validPrice ? "false" : "true"}
                  aria-describedby="fn-note"
                  onFocus={() => setLastPriceFocus(true)}
                  onBlur={() => setLastPriceFocus(false)}
                  className={FORM_INPUT_CLASSES}
                  placeholder="price"
                />
                <label htmlFor="price" className={FORM_LABEL_CLASSES}>
                  Discount Price
                </label>
                <p
                  id="fn-note"
                  className={`${VALID_NOTE}  ${
                    priceFocus && price && !validPrice ? "block" : "hidden"
                  }`}
                >
                  Price cant be 0
                </p>
              </div>
              <div className="text-center flex-col items-center">
                <p
                  id="fn-note"
                  className={`${VALID_NOTE}  ${
                    price.original <= price.discount ? "block" : "hidden"
                  }`}
                >
                  price cant be less than discount price
                </p>
              </div>

              <div className={INPUT_CONTAINER}>
                <input
                  type="number"
                  id="quantity"
                  autoComplete="off"
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  aria-invalid={validQuantity ? "false" : "true"}
                  aria-describedby="fn-note"
                  onFocus={() => setQuantityFocus(true)}
                  onBlur={() => setQuantityFocus(false)}
                  className={FORM_INPUT_CLASSES}
                  placeholder="quantity"
                />
                <label htmlFor="quantity" className={FORM_LABEL_CLASSES}>
                  quantity
                </label>
                <p
                  id="fn-note"
                  className={`${VALID_NOTE}  ${
                    quantityFocus && quantity && !validQuantity
                      ? "block"
                      : "hidden"
                  }`}
                >
                  At least one Basket
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mt-12 mb-10">
                Categories
              </label>

              <div className="flex lg:justify-evenly mt-4 flex-wrap  mb-12">
                {categories.map((item, idx) => (
                  <div className="ml-4" key={idx}>
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      name="categories"
                      id="category"
                      value={item}
                      onChange={handleCategory}
                    />
                    <label className="form-check-label inline-block text-gray-800 ">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mt-12 ml-7">
              pickup Time
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-12 mb-12 mx-7 ">
              <div className="grid grid-cols-1 mt-8">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold ">
                  From
                </label>

                <input
                  required
                  className={OTHER_INPUTSTYLE}
                  value={from}
                  type="datetime-local"
                  id="pickup"
                  onChange={(e) =>
                    setpickup({
                      ...pickup,
                      from: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-1 mt-8">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  To
                </label>
                <input
                  required
                  className={OTHER_INPUTSTYLE}
                  value={to}
                  onChange={(e) =>
                    setpickup({
                      ...pickup,

                      to: e.target.value,
                    })
                  }
                  type="datetime-local"
                  placeholder="quantity"
                  id="pickup"
                />
              </div>
            </div>

            <div className={INPUT_CONTAINER}>
              <input
                type="text"
                id="description"
                autoComplete="off"
                onChange={(e) => setDescription(e.target.value)}
                required
                aria-invalid={validDescription ? "false" : "true"}
                aria-describedby="fn-note"
                onFocus={() => setDescriptionFocus(true)}
                onBlur={() => setDescriptionFocus(false)}
                className={FORM_INPUT_CLASSES}
                placeholder="description"
              />
              <label htmlFor="description" className={FORM_LABEL_CLASSES}>
                Description
              </label>
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

            <button
              //- Disable SignUp button till all validation passed
              disabled={isDisabled}
              className="w-full py-3 my-1 text-center rounded bg-accent text-lightFont hover:bg-green-dark focus:outline-none mt-9"
            >
              create basket
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateBasket;
