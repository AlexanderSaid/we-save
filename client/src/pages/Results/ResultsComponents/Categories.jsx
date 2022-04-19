import React from "react";
import PropTypes from "prop-types";

const categoryList = [
  "Meals",
  "Groceries",
  "Vegetarian",
  "Diary & Meat",
  "Bakery",
  "Other",
];

const Categories = ({ selectedCategory, onClick }) => {
  return (
    <section className="w-full px-4 py-8 grid grid-cols-2 gap-y-4 xs:grid-cols-3 xs:gap-x-2 md:flex md:flex-wrap md:items-center md:justify-center md:max-w-[770px] lg:max-w-1440">
      {categoryList.map((category) => (
        <button
          key={category}
          value={category}
          onClick={(e) => onClick(e)}
          className={`category ${
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
