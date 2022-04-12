import React, { useState, useContext } from "react";
import ShopRegistration from "../../../components/Forms/ShopRegistration";
import SignInContext from "../../../context/SignInContext";
import { useAuthentication } from "../../../hooks/useAuthentication";
import SignIn from "../../../components/Forms/SignIn";
import introPicture from "../../../assets/3.jpg";

const ShopGuid = () => {
  const [shopIsOpen, setShopIsOpen] = useState(false);
  const [owner, setOwner] = useState(false);
  const { isOpen, setIsOpen } = useContext(SignInContext);
  const { loggedIn } = useAuthentication();

  return (
    <section id="shop-owners" className="bg-white">
      <div className="max-w-5xl px-6 py-16 mx-auto">
        <div className="items-center md:flex md:space-x-6">
          <div className="md:w-1/2">
            <div className="flex items-center justify-center">
              <div className="max-w-md">
                <img
                  className=" w-full rounded-md shadow"
                  src={introPicture}
                  alt="grocery"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Want to be our partner for fighting food waste?
            </h3>
            <p className="max-w-md mt-4 text-gray-600">
              We love to welcome new partners in the fight against food waste.
              We will help you cut costs and reduce your carbon footprint,
              whatever you are selling. Its 100% better for you and the planet.
            </p>
            <a className="block mt-8 text-indigo-700 ">
              <button
                // onClick={() => setShopIsOpen(true)}
                onClick={() => {
                  setOwner(true);
                  loggedIn ? setShopIsOpen(true) : setIsOpen(true);
                }}
                className="flex items-center block px-6 py-4 mr-2 font-bold border border-teal-500 rounded-sm text-darkFont hover:bg-teal-500 hover:text-white"
              >
                Owner Page
              </button>
            </a>
          </div>
        </div>
        <ShopRegistration
          shopRegisterOpen={shopIsOpen}
          setShopRegisterOpen={setShopIsOpen}
          setOwner={setOwner}
        />
        <SignIn
          openSignIn={isOpen}
          setOpenSignIn={setIsOpen}
          setShopIsOpen={setShopIsOpen}
          setOwner={setOwner}
          owner={owner}
        />
      </div>
    </section>
  );
};

export default ShopGuid;
