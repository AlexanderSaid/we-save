import React, { useContext, useEffect, useState, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import CreateBasketSuccessMessage from "./CreateBasketSuccessMessage";
import UserContext from "../../../context/UserContext";
import UpdateBasketSuccessMessage from "./UpdateBasketSuccessMessage";
import PropTypes from "prop-types";
import validation from "../../../assets/validation";
import Spinner from "../../../components/layout/Spinner";

const CreateBasketForm = ({ basket, setBasket }) => {
  //- Regex validation
  const { DESCRIPTION_REGEX, PRICE_REGEX } = validation;

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
    "Bakery",
    "Groceries",
    "Vegetarian",
    "Diary & Meat",
  ];

  const [basketName, setBasketName] = useState(null);
  const [validName, setValidName] = useState(false);
  const [originalPrice, setOriginalPrice] = useState(1);
  const [validOriginalPrice, setValidOriginalPrice] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(0.5);
  const [validDiscountPrice, setValidDiscountPrice] = useState(false);
  const [priceFocus, setLastPriceFocus] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState([]);
  const [validCategory, setValidCategory] = useState(false);
  const [pickup, setpickup] = useState({
    from: "",
    to: "",
  });

  const [validPickup, setValidPickup] = useState(true);
  const { from, to } = pickup;
  const [description, setDescription] = useState("");
  const [validDescription, setValidDescription] = useState(false);
  const [descriptionFocus, setDescriptionFocus] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successUpdate, setSuccessUpdate] = useState(false);

  const [isDisabled, setDisabled] = useState(true);

  //states for uploading image
  const [previewSource, setPreviewSource] = useState(null);
  const [fileInputState, setFileInputState] = useState("");

  const errRef = useRef();
  //- Fetching data
  const { performFetch, cancelFetch, isLoading } = useFetch(
    `/shops/${user.shop_id}/baskets`,
    () => {
      setSuccess(true);
    }
  );

  // uploading image handler
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
    setFileInputState("");
  };

  //-updating data
  const {
    performFetch: performUpdatingBasket,
    cancelFetch: cancelFetchBasket,
  } = useFetch(
    `/shops/${user.shop_id}/baskets/${basket ? basket._id : ""}`,
    () => {
      setSuccessUpdate(true);
    }
  );

  //-
  useEffect(() => {
    return { cancelFetch, cancelFetchBasket };
  }, []);

  //- useEffect hooks to check validation when inputs changed
  useEffect(() => {
    setValidDescription(DESCRIPTION_REGEX.test(description));
  }, [description]);

  useEffect(() => {
    if (basketName !== null) {
      setValidName(true);
    }
  }, [basketName]);

  useEffect(() => {
    if (category.length >= 1) {
      setValidCategory(true);
    }
    if (category.length > 2) {
      setValidCategory(false);
    }
  }, [category]);

  useEffect(() => {
    if (from !== "" || to !== "") {
      setValidPickup(true);
    }
    if (to < from) {
      setValidPickup(false);
    }
  }, [from, to]);

  useEffect(() => {
    if (originalPrice <= 0) {
      setOriginalPrice(false);
    }
    setValidOriginalPrice(PRICE_REGEX.test(originalPrice));
  }, [originalPrice]);
  useEffect(() => {
    if (discountPrice >= originalPrice) {
      setValidDiscountPrice(false);
    } else {
      setValidDiscountPrice(PRICE_REGEX.test(discountPrice));
    }
  }, [discountPrice]);

  //- Determine button state
  useEffect(() => {
    !validOriginalPrice ||
    !validDiscountPrice ||
    !validDescription ||
    !validName ||
    !validCategory ||
    !validPickup
      ? setDisabled(true)
      : setDisabled(false);
  }, [
    validOriginalPrice,
    validDiscountPrice,
    validDescription,
    validCategory,
    validName,
    from,
    to,
  ]);

  useEffect(() => {
    if (basket) {
      setOriginalPrice(basket.price.original);
      setDiscountPrice(basket.price.discount);
      setDescription(basket.description);
      setQuantity(basket.quantity);
      setpickup({
        from: basket.pickup.from,
        to: basket.pickup.to,
      });
      setBasketName(basket.name);
      setCategory(basket.categories);
    }
  }, [basket]);

  const handleCancel = () => {
    setOriginalPrice(1);
    setDiscountPrice(0);
    setDescription("");
    setQuantity(1);
    setpickup({
      from: "",
      to: "",
    });
    setBasketName("");
    setCategory([]);
    setBasket(null);
  };

  useEffect(() => {
    setValidOriginalPrice(PRICE_REGEX.test(originalPrice));
  }, [originalPrice]);
  useEffect(() => {
    setValidDiscountPrice(PRICE_REGEX.test(discountPrice));
  }, [discountPrice]);

  //- Determine error message

  const handleCategory = (e) => {
    const { value, checked } = e.target;
    if (checked === true) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((e) => e !== value));
    }
  };
  useEffect(() => {
    if (category.length === 3) {
      setCategory([]);
    }
  }, [category]);

  //-Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (basket) {
      performUpdatingBasket({
        method: "PUT",
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
          image: previewSource,
        }),
      });
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
          image: previewSource,
        }),
      });
    }

    // saving string to database
    // if (!previewSource) return;
  };

  if (success) {
    return <CreateBasketSuccessMessage setSuccess={setSuccess} />;
  }
  if (successUpdate) {
    return <UpdateBasketSuccessMessage setSuccess={setSuccessUpdate} />;
  }

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
    <form
      className="p-4 mx-auto bg-white border-2 border-darkBg"
      onSubmit={handleSubmit}
    >
      <section>
        <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
          <div className="px-4 py-6 rounded ">
            <label className="text-black" htmlFor="basketname">
              Basket Name
            </label>
            <div className="grid grid-cols-2">
              {names.map((item, idx) => (
                <div className="mt-4 text-sm " key={idx}>
                  <input
                    type="radio"
                    name="basketName"
                    id={item}
                    value={item}
                    onChange={(e) => {
                      setBasketName(e.target.value);
                    }}
                    checked={basketName === item}
                  />
                  <label className="ml-2 text-gray-500" htmlFor={item}>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-6 rounded">
            <label
              className="flex justify-between text-black "
              htmlFor="emailAddress"
            >
              Choose Category
              <p className="mt-1 text-button">
                ( please choose max of 2 categories )
              </p>
            </label>

            <div className="grid grid-cols-2">
              {categoriesArr.map((item, idx) => (
                <div className="mt-4 text-sm " key={idx}>
                  <input
                    type="checkbox"
                    name={item}
                    id="category"
                    value={item}
                    onChange={(e) => handleCategory(e)}
                    checked={category.includes(item)}
                  />
                  <label className="ml-2 text-gray-500 ">{item}</label>
                </div>
              ))}
              <p
                id="fn-note"
                className={`valid-note ${!validCategory ? "block" : "hidden"}`}
              >
                categories cant be more than 2
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 ">
            <div className="input-container">
              <input
                type="number"
                min="0.00"
                step="0.001"
                id="price"
                autoComplete="off"
                onChange={(e) => setOriginalPrice(parseFloat(e.target.value))}
                required
                aria-invalid={validOriginalPrice ? "false" : "true"}
                aria-describedby="fn-note"
                onFocus={() => setLastPriceFocus(true)}
                onBlur={() => setLastPriceFocus(false)}
                className="form-input peer"
                value={originalPrice}
              />
              <label className="form-label" htmlFor="orgprice">
                Original Price
              </label>
              <p
                id="fn-note"
                className={`valid-note ${
                  !validOriginalPrice ? "block" : "hidden"
                }`}
              >
                Price cannot be 0
              </p>
            </div>

            <div className="input-container">
              <input
                type="number"
                min="0.00"
                step="0.001"
                id="price"
                autoComplete="off"
                onChange={(e) => setDiscountPrice(parseFloat(e.target.value))}
                required
                aria-invalid={validDiscountPrice ? "false" : "true"}
                aria-describedby="fn-note"
                onFocus={() => setLastPriceFocus(true)}
                onBlur={() => setLastPriceFocus(false)}
                value={discountPrice}
                className="form-input peer"
              />
              <label className="form-label" htmlFor="disprice">
                Discounted Price
              </label>
              <p
                id="fn-note"
                className={`valid-note  ${
                  priceFocus && discountPrice && !validDiscountPrice
                    ? "block"
                    : "hidden"
                }`}
              ></p>
              <div>
                <p
                  id="fn-note"
                  className={`valid-note ${
                    originalPrice <= discountPrice ? "block" : "hidden"
                  }`}
                >
                  Discounted price must be less than Original Price
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 ">
            <div className="input-container">
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                autoComplete="off"
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="form-input peer"
              />
              <label className="form-label" htmlFor="quantity">
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
              className="form-input peer"
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
            <p
              id="fn-note"
              className={`valid-note  ${!validPickup ? "block" : "hidden"}`}
            >
              The pickup time is not correct
            </p>
          </div>
          <div>
            <label className="text-black " htmlFor="pickupfrom">
              To:
            </label>
            <input
              required
              className="form-input peer"
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
              className="description-field"
              // placeholder="description"
              value={description}
            />

            <p
              id="fn-note"
              className={`valid-note  ${
                descriptionFocus && description && !validDescription
                  ? "block"
                  : "hidden"
              }`}
            >
              Text is too short, must be at least 20 letters
            </p>
          </div>
          <div>
            <label className="text-black">Image</label>
            <div className="flex justify-center px-4 py-2 mt-2 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {previewSource ? (
                  <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: "100px", margin: "auto" }}
                  />
                ) : (
                  <svg
                    className="w-12 h-12 mx-auto text-black"
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
                )}
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      accept=".jpg,.png,.jpeg"
                      className="sr-only"
                      onChange={handleFileInputChange}
                      value={fileInputState}
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
          <button
            disabled={isDisabled}
            ref={errRef}
            type="submit"
            className={`${isDisabled ? "is-disabled" : "is-valid"} submit-btn`}
          >
            {basket
              ? "Update"
              : isDisabled
              ? "Please fill All fields correctly"
              : "Create"}
          </button>
          {basket && (
            <button onClick={handleCancel} className="cancel-btn">
              {"Cancel"}
            </button>
          )}
        </div>
      </section>
    </form>
  );
};
CreateBasketForm.propTypes = {
  basket: PropTypes.object,
  setBasket: PropTypes.func,
};

export default CreateBasketForm;
