import React from "react";
// import { GiFruitBowl, GiMilkCarton } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";

const categoryIcon = (icon, title) => {
  return (
    <div className="p-2  md:w-32">
      <a
        href="#"
        className="flex flex-col items-center p-4 bg-blue-200 rounded-2xl shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
      >
        {/* {icon} */}
        <div>
          <p className=" text-s font-medium ">{title}</p>
        </div>
      </a>
    </div>
  );
};

const categoryTitles = [
  "Bakery",
  "Dairy",
  "Veggie",
  "Drink",
  "Meat",
  "Grocery",
  "Snack",
];

const Categories = () => {
  return (
    <section className="container mx-auto px-6 my-1 flex flex-col flex-wrap -m-4 justify-center md:flex-row">
      {categoryTitles.map((title) =>
        categoryIcon(<MdBakeryDining size={30} />, title)
      )}
    </section>
  );
};

export default Categories;
