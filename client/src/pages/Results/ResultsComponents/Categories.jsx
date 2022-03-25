import React from "react";
import { GiFruitBowl, GiMilkCarton } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";

const Categories = () => {
  return (
    <section className="container mx-auto px-6 my-1 flex flex-wrap -m-4 justify-center mt-4">
      <div className="p-2 md:w-40 ">
        <a
          href="#"
          className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
        >
          <GiFruitBowl size={30} />
          <div>
            <p className=" text-xs font-medium ml-2 ">Grocery</p>
          </div>
        </a>
      </div>

      <div className="p-2 md:w-40 ">
        <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
          <MdBakeryDining size={30} />
          <div>
            <p className="text-xs font-medium ml-2 ">Bakery</p>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-40 ">
        <div className="flex items-center p-4 bg-orange-200 rounded-lg shadow-xs cursor-pointer hover:bg-orange-500 hover:text-gray-100">
          <GiMilkCarton size={30} />
          <div>
            <p className=" text-xs font-medium ml-2 ">Dairy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
