import React from "react";
import carts from "../../../../public/assets/carts.png";
import placeholder from "../../../../public/assets/placeholder.png";
import shoppingBag from "../../../../public/assets/shopping-bag.png";
// import { ImLocation2 } from "react-icons/im";
function HowItWorks() {
  return (
    <div className="container max-w-5xl px-6 py-16 mx-auto">
      <h2 className="mt-6 text-2xl font-bold text-center md:text-4xl">
        HOW IT WORKS
      </h2>
      <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3  ">
        <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md flex flex-col items-center  justify-center ">
          <div>
            <img src={placeholder} className=" w-[90px] lg:m-10 " />
          </div>
          <div>
            <p className="mt-4 ">Enter your Location</p>
          </div>
          <div>
            <p className="max-w-md mt-4 text-gray-400 text-center">
              Enter your address, or let us determine your position
            </p>
          </div>
        </div>

        <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md flex flex-col items-center  justify-center">
          <img src={carts} className=" w-[90px] lg:m-10 " />
          <p className="mt-4 ">Chose the market ad the basket</p>
          <p className="max-w-md mt-4 text-gray-400 text-center">
            What do you fancy? Scroll through countless menus and reviews
          </p>
        </div>

        <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md flex flex-col items-center  justify-center">
          <img src={shoppingBag} className="w-[90px] lg:m-10 " />
          <p className="mt-4 ">Pay and bring the basket</p>
          <p className="max-w-md mt-4 text-gray-400 text-center">
            pay cash or inline with IDEAL, Credit card, or PayPal
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
