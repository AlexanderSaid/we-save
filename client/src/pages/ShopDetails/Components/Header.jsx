import React from "react";
import PropTypes from "prop-types";

const Header = ({ shop }) => {
  return (
    <div className="w-full relative mt-0 overflow-hidden">
      <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
        <img
          src={shop.image}
          alt=""
          className="bg w-full h-full object-cover object-center absolute z-0"
        />
      </div>
      <div className="flex  items-center h-full  text-dark py-6 px-[5%]">
        <div className="flex w-full">
          <div className="flex-1 p-2 text-sm font-thin ">
            <h1 className="text-l font-normal">Description</h1>
            <h4 className="py-2">{shop.description}</h4>
          </div>
          <div className="flex-1 pl-4 ">
            <h1 className="text-xl font-normal">{shop.name}</h1>
            <div className="text-sm font-thin py-2">
              <h2 className="font-normal">Phone:</h2>
              <span>{shop.phone}</span>
            </div>
            <div className="text-sm font-thin py-2">
              <h2 className="font-normal">Address:</h2>
              <span>{shop.address.city}</span>
              <span>
                {shop.address.street}/{shop.address.house} -{" "}
                {shop.address.postcode}
              </span>
            </div>
          </div>
          <div className="flex flex-0.5 justify-center px-5  -mt-12 ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/114/693/non_2x/online-shop-logo-template-design-illustration-vector.jpg"
              className=" h-36 w-36 object-cover rounded-full relative top-[-20px] right-0 border-2 border-darkBg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  shop: PropTypes.object,
};
export default Header;
