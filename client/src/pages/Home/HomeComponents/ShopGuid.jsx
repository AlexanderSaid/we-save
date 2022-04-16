import React from "react";
import ShopGuidCard from "./ShopGuidCard";
import shopCover from "../../../assets/shop-bg.png";
//- Steps Logos
// import one from "../../../assets/1.png";
// import two from "../../../assets/2.png";
// import three from "../../../assets/3.png";
import user from "../../../assets/guid/user.png";
import shop from "../../../assets/guid/shop.png";
import basket from "../../../assets/guid/basket.png";

const CostumerGuid = () => {
  const shopGuid = [
    {
      logo: user,
      title: "Create Account & Sign In",
      text: "You can easily create an account, then sign in.  ",
    },
    {
      logo: shop,
      title: "Shop Registration & Page",
      text: "Create your shop by filling the registration form and discover you shop page.",
    },
    {
      logo: basket,
      title: "Baskets & Reservations",

      text: "Easily add, edit or even delete you baskets. Now you get reservations emails with deliver code.",
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
            src={shopCover}
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
      </div>
    </section>
  );
};

export default CostumerGuid;
