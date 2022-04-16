import React, { useState, useContext } from "react";
import ShopRegistration from "../../../components/Forms/ShopRegistration";
import SignInContext from "../../../context/SignInContext";
import { useAuthentication } from "../../../hooks/useAuthentication";
import SignIn from "../../../components/Forms/SignIn";
import OwnerHasShop from "../../../components/Forms/OwnerHasShop";
import shop from "../../../assets/shop-bg.png";
import ShopGuidCard from "./ShopGuidCard";
import UserContext from "../../../context/UserContext";

import one from "../../../assets/1.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";
const CostumerGuid = () => {
  const [shopIsOpen, setShopIsOpen] = useState(false);
  const [owner, setOwner] = useState(false);
  const [hasShop, setHasShop] = useState(false);
  const { isOpen, setIsOpen } = useContext(SignInContext);
  const { loggedIn } = useAuthentication();
  const { user } = useContext(UserContext);

  const checkUser = () => {
    setOwner(true);
    if (loggedIn) {
      if (user.shop_id) {
        setHasShop(true);
      } else {
        setShopIsOpen(true);
      }
    } else {
      setIsOpen(true);
    }
  };

  const shopGuid = [
    {
      logo: one,
      title: "Create Account & Sign In",
      contents: [
        {
          text: "You can easily create an account from ",
          onClick: "1",
          linkText: "here",
        },
        {
          text: "If you already did you can ",
          onClick: "1",
          linkText: "Sign-In",
        },
      ],
    },
    {
      logo: two,
      title: "Shop Registration & Page",
      contents: [
        {
          text: " Add your shop by filling this registration ",
          onClick: checkUser,
          linkText: "form",
        },
        {
          text: " Now you have access to your private page from navbar or ",
          link: "createBasket",
          linkText: "here",
        },
      ],
    },
    {
      logo: three,
      title: "Baskets & Reservations",
      contents: [
        { text: "Easily add, edit or even delete you baskets." },
        {
          text: "When a customer reserve a basket you receive an email with deliver code.",
        },
      ],
    },
  ];

  return (
    <section
      id="shop-owners"
      className="flex flex-col items-center justify-center w-full"
    >
      {/* Intro section */}
      <div className="flex items-center justify-center w-[90%] sm:w-[95%] ">
        <div className="flex items-center justify-center h-[450px] relative overflow-hidden max-w-1440 w-[95%] xs:w-full shadow-2xl shadow-darkBg/60 rounded-2xl">
          <img
            src={shop}
            alt="Grocery bag with piggy bank"
            className="absolute object-cover w-full h-full"
          />
          <div className="z-10 flex items-center justify-center w-full h-full py-4 md:justify-end">
            <div className="w-[80%] md2:w-[60%] lg:w-[50%] max-h-full flex flex-col justify-between gap-4 md:mr-[5%] lg:mr-[10%] text-darkBg border border-accent rounded-md bg-lightBg/80 p-4 ">
              <h3 className="font-bold text-center text-title4 md:text-left">
                Want to be our partner for fighting food waste?
              </h3>
              <p className="text-bodyRegular font-bold text-darkFont/80 md:w-[90%] md:text-justify text-center md:text-left">
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
      <div className="flex items-center justify-center w-full ">
        <div className="flex flex-wrap items-stretch w-full gap-4 px-12 py-12 text-center justify-evenly max-w-1440">
          {shopGuid.map((guid, i) => (
            <ShopGuidCard key={i} props={guid} />
          ))}
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
          owner={owner}
          setOwner={setOwner}
          hasShop={hasShop}
          setHasShop={setHasShop}
        />

        <OwnerHasShop
          setHasShop={setHasShop}
          setOwner={setOwner}
          hasShop={hasShop}
        />
      </div>
    </section>
  );
};

export default CostumerGuid;
