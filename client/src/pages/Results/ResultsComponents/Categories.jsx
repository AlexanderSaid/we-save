import React from "react";
// import { GiFruitBowl, GiMilkCarton } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";

const categoryIcon = (icon, title, index) => {
  return (
    <div className="p-2 md:w-48" key={index}>
      <a
        href="#"
        className="flex flex-col items-center p-1 bg-blue-200 shadow-xs cursor-pointer rounded-2xl hover:bg-blue-500 hover:text-gray-100"
      >
        {icon}
        <div>
          <p className="font-medium text-s">{title}</p>
        </div>
      </a>
    </div>
  );
};

const categories = [
  "Meals",
  "Bread & Pastries",
  "Groceries",
  "Vegetarian",
  "Diary & Meat",
];

const Categories = () => {
  return (
    <section className="container flex flex-col flex-wrap justify-center px-6 mx-auto my-1 -m-4 md:flex-row">
      {categories.map((title, index) =>
        categoryIcon(<MdBakeryDining size={30} />, title, index)
      )}
    </section>
  );
};

export default Categories;
