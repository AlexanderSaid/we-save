import React from "react";
import PropTypes from "prop-types";

const categoryList = [
  "Meals",
  "Bread & Pastries",
  "Groceries",
  "Vegetarian",
  "Diary & Meat",
  "All",
];

const Categories = ({ baskets, filteredBaskets }) => {
  const handleClick = (e) => {
    if (e.target.innerText === "All") {
      filteredBaskets(null);
    } else {
      filteredBaskets(
        baskets.filter((item) =>
          item.baskets[0].categories.includes(e.target.innerText)
        )
      );
    }
  };

  return (
    <section className="container flex flex-col flex-wrap justify-center px-6 mx-auto my-1 -m-4 md:flex-row">
      {categoryList.map((title, index) => (
        <div className="p-2 md:w-48" key={index}>
          <a
            href="#"
            className="flex flex-col items-center p-1 bg-blue-200 shadow-xs cursor-pointer rounded-2xl hover:bg-blue-500 hover:text-gray-100"
          >
            {/* <MdBakeryDining size={30} /> */}
            <div name={title} onClick={handleClick} className="w-full ">
              <p className="font-medium text-center text-s w-[100%]">{title}</p>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
};
Categories.propTypes = {
  baskets: PropTypes.array,
  filteredBaskets: PropTypes.func,
};

export default Categories;
