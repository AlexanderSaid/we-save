import React from "react";
import introPicture from "../../../assets/2.jpg";

const CostumerGuid = () => {
  return (
    <section id="customer" className="bg-lightBg">
      <div className="max-w-5xl px-6 py-16 mx-auto ">
        <div className="items-center  lg:flex md:space-x-6 ">
          <div className="md:w-1/2 ">
            <h3 className="text-2xl font-semibold text-gray-800">
              Start save planet from waste food give the food second chance!
            </h3>
            <p className="max-w-md mt-4 text-gray-600">
              start saving delicious products that your local entrepreneur will
              have left at the end of the day. Always a surprise at a low price
              and you immediately do something good for the planet. Start today!
            </p>
            <a className="block mt-8 text-darkFont ">
              <button className="btn-blank">Customer Page</button>
            </a>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2">
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
        </div>
      </div>
    </section>
  );
};

export default CostumerGuid;
