import React from "react";
import SearchBar from "../../../components/Search-Bar/SearchBar";
const IntroSearch = () => {
  return (
    <section
      id="intro-section"
      className="flex items-center justify-center bg-darkBg block w-screen h-[450px] z-0"
    >
      <div className="text-center flex flex-col w-full max-w-[500px] mx-4">
        <h3 className="my-12 sm:text-3xl font-title font-extrabold text-lightFont tracking-wider">
          TIME TO SAVE <br className="sm:hidden" />
          OUR FOOD
        </h3>
        <SearchBar />
      </div>
    </section>
  );
};

export default IntroSearch;
