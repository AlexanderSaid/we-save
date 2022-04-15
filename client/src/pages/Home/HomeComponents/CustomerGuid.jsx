import React from "react";
import customer from "../../../assets/customer-bg.png";
import CustomerGuidCard from "./CustomerGuidCard";
import placeholder from "../../../assets/placeholder.png";
import carts from "../../../assets/carts.png";
import shoppingBag from "../../../assets/shopping-bag.png";

const CostumerGuid = () => {
  const customerGuid = [
    {
      logo: placeholder,
      title: "Pass Your Postcode",
      text: "Enter your postcode, or let us determine your location.",
    },
    {
      logo: carts,
      title: "Discover Baskets",
      text: "See all baskets nearby, and filter them by category.",
    },
    {
      logo: shoppingBag,
      title: "Reserve & Pickup",
      text: "Reserve your basket, pickup during givin time, and pay in the shop.",
    },
  ];
  return (
    <section
      id="customer"
      className="flex flex-col items-center justify-center w-full "
    >
      {/* Intro section */}
      <div className="flex items-center justify-center w-[90%] sm:w-full ">
        <div className="flex items-center justify-center h-[450px] relative overflow-hidden max-w-1440 w-full shadow-2xl shadow-darkBg/60 rounded-2xl mt-12">
          <img
            src={customer}
            alt="Grocery bag with piggy bank"
            className="absolute object-cover w-full h-full"
          />
          <div className="w-full h-full z-10 flex items-center justify-center md:justify-start py-4">
            <div className="w-[70%] md2:w-[60%] lg:w-[50%] max-h-full flex flex-col justify-between gap-4 md:ml-[5%] lg:ml-[10%] text-darkBg border border-accent rounded-md bg-lightBg/80 p-4">
              <h3 className="text-title4 font-bold text-center md:text-left">
                Fresh food for you, more food for others.
              </h3>
              <p className="text-bodyRegular text-darkFont/80 font-bold md:w-[90%] md:text-justify text-center md:text-left">
                Start saving delicious products that your local entrepreneur
                will have left at the end of the day. Always a surprise at a low
                price and you immediately do something good for the planet.
                Start today!
              </p>
              <a className="self-center md:self-end md:mr-4">
                <button className="btn btn-dark">Sign In</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Guid section */}
      <div className="flex items-center justify-center w-full ">
        <div className="flex items-stretch justify-evenly flex-wrap gap-4 max-w-1440 w-full py-12 px-4">
          {customerGuid.map((step, index) => (
            <CustomerGuidCard key={index} props={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostumerGuid;
