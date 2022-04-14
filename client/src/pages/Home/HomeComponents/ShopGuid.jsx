import React, { useState, useContext } from "react";
import ShopRegistration from "../../../components/Forms/ShopRegistration";
import SignInContext from "../../../context/SignInContext";
import { useAuthentication } from "../../../hooks/useAuthentication";
import SignIn from "../../../components/Forms/SignIn";
import shop from "../../../assets/shop-bg.png";

const CostumerGuid = () => {
  const [shopIsOpen, setShopIsOpen] = useState(false);
  const [owner, setOwner] = useState(false);
  const { isOpen, setIsOpen } = useContext(SignInContext);
  const { loggedIn } = useAuthentication();

  return (
    <section
      id="customer"
      className="flex flex-col items-center justify-center w-full"
    >
      {/* Intro section */}
      <div className="flex  items-center justify-center w-full">
        <div className="flex items-center justify-center h-[450px] relative overflow-hidden max-w-1440 w-full shadow-2xl shadow-darkBg/60">
          <img
            src={shop}
            alt="Grocery bag with piggy bank"
            className="absolute object-cover w-full h-full"
          />
          <div className="w-full h-full z-10 flex items-center py-4 justify-end">
            <div className="sm:w-[70%] md:w-[60%] lg:w-[40%] max-h-full flex flex-col justify-between gap-4 mr-[10%] text-darkBg border border-accent rounded-md bg-lightBg/80 p-4 ">
              <h3 className="text-title4 font-bold">
                Want to be our partner for fighting food waste?
              </h3>
              <p className="text-bodyRegular font-bold w-[90%] text-justify text-darkFont/80">
                We love to welcome new partners in the fight against food waste.
                We will help you cut costs and reduce your carbon footprint,
                whatever you are selling. Its 100% better for you and the
                planet.
              </p>
              <p className='text-center rounded-md font-semibold tracking-wide p-2 bg-darkBg text-lightFont opacity-90 font-["Roboto"]'>
                Join us following below instructions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guid section */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-4 max-w-1440 w-full py-12 px-12 text-center bg-lightFont">
          <div className="shop-guid self-start ml-12 ">
            <h4 className="text-accent text-bodyLarge font-bold pb-2">
              1. Create Account & Sign In
            </h4>
            <p className="text-darkFont/80 text-bodyRegular font-bold">
              You can easily create an account from&nbsp;
              <a href="#" className="guid-link">
                here
              </a>
              .<br /> If you already did you can&nbsp;
              <a href="#" className="guid-link">
                Sign in
              </a>
              .
            </p>
          </div>
          <div className="shop-guid self-end mr-12">
            <h4 className="text-accent text-bodyLarge font-bold pb-2">
              2. Register Your Shop
            </h4>
            <p className="text-darkFont/80 text-bodyRegular font-bold">
              Add your shop by filling this registration&nbsp;
              <a
                className="guid-link"
                onClick={() => {
                  setOwner(true);
                  loggedIn ? setShopIsOpen(true) : setIsOpen(true);
                }}
              >
                form
              </a>
              .
            </p>
          </div>
          <div className="shop-guid self-start ml-12">
            <h4 className="text-accent text-bodyLarge font-bold pb-2">
              3. Your Shop Page
            </h4>
            <p className="text-darkFont/80 text-bodyRegular font-bold">
              Now you have access to your private page from navbar or&nbsp;
              <a href="createBasket" className="guid-link">
                here
              </a>
              .
            </p>
          </div>
          <div className="shop-guid self-end mr-12">
            <h4 className="text-accent text-bodyLarge font-bold pb-2">
              4. Your Baskets
            </h4>
            <p className="text-darkFont/80 text-bodyRegular font-bold">
              Easily add, edit or even delete you baskets.
            </p>
          </div>
          <div className="shop-guid self-start ml-12">
            <h4 className="text-accent text-bodyLarge font-bold pb-2">
              5. Reservations
            </h4>
            <p className="text-darkFont/80 text-bodyRegular font-bold">
              When a customer reserve a basket you receive an email with deliver
              code.
            </p>
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

export default CostumerGuid;
