import React from "react";
import PropTypes from "prop-types";

const categoryList = [
  "Meals",
  "Bread & Pastries",
  "Groceries",
  "Vegetarian",
  "Diary & Meat",
  "Surprise basket",
];

const Categories = ({ selectedCategory, onClick }) => {
  return (
    <section className="container flex flex-col flex-wrap justify-center items-center gap-4 px-6 mx-auto my-4 -m-4 md:flex-row md:max-w-1440 md:justify-center md:py-8">
      {categoryList.map((category) => (
        <button
          key={category}
          value={category}
          onClick={(e) => onClick(e)}
          className={`px-6 py-2 w-full max-w-[50%] text-bodyRegular font-semibold rounded-3xl border  hover:border-accent hover:bg-accent hover:text-lightFont ease-in-out duration-300 md:w-fit ${
            selectedCategory === category
              ? "text-lightFont bg-accent border-accent"
              : "text-darkFont bg-primary border-darkFont"
          } `}
        >
          {category}
        </button>
      ))}
    </section>
  );
};
Categories.propTypes = {
  onClick: PropTypes.func,
  selectedCategory: PropTypes.string,
};
export default Categories;
