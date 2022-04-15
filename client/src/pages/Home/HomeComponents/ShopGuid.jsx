import React, { useState, useContext } from "react";
import ShopRegistration from "../../../components/Forms/ShopRegistration";
import SignInContext from "../../../context/SignInContext";
import { useAuthentication } from "../../../hooks/useAuthentication";
import SignIn from "../../../components/Forms/SignIn";
import shop from "../../../assets/shop-bg.png";
import ShopGuidCard from "./ShopGuidCard";

import one from "../../../assets/1.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";
const CostumerGuid = () => {
  const [shopIsOpen, setShopIsOpen] = useState(false);
  const [owner, setOwner] = useState(false);
  const { isOpen, setIsOpen } = useContext(SignInContext);
  const { loggedIn } = useAuthentication();

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
          onClick: () => {
            setOwner(true);
            loggedIn ? setShopIsOpen(true) : setIsOpen(true);
          },
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
      <div className="flex items-center justify-center w-[90%] sm:w-full ">
        <div className="flex items-center justify-center h-[450px] relative overflow-hidden max-w-1440 w-full shadow-2xl shadow-darkBg/60 rounded-2xl">
          <img
            src={shop}
            alt="Grocery bag with piggy bank"
            className="absolute object-cover w-full h-full"
          />
          <div className="w-full h-full z-10 flex items-center justify-center md:justify-end py-4">
            <div className="w-[70%] md2:w-[60%] lg:w-[50%] max-h-full flex flex-col justify-between gap-4 md:mr-[5%] lg:mr-[10%] text-darkBg border border-accent rounded-md bg-lightBg/80 p-4 ">
              <h3 className="text-title4 font-bold text-center md:text-left">
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
        <div className="flex flex-wrap gap-4 items-stretch justify-evenly max-w-1440 w-full py-12 px-12 text-center">
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
          setOwner={setOwner}
          owner={owner}
        />
      </div>
    </section>
  );
};

export default CostumerGuid;
