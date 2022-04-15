import React from "react";
import SearchBar from "../../../components/Search-Bar/SearchBar";
import { motion } from "framer-motion";
import { fade, titleAnim } from "../../../animation";
const IntroSearch = () => {
  return (
    <motion.section
      variants={fade}
      id="intro-section"
      className="flex items-center justify-center bg-darkBg xs:w-screen h-[320px] z-0 shadow-l shadow-darkBg/60"
    >
      <div className="text-center flex flex-col w-full max-w-[500px] sm:mx-4">
        <div className="overflow-hidden">
          <motion.h3
            variants={titleAnim}
            className="my-8 sm:text-3xl font-title font-extrabold text-lightFont tracking-wider"
          >
            TIME TO SAVE <br className="sm:hidden" />
            OUR FOOD
          </motion.h3>
        </div>
        <SearchBar />
      </div>
    </motion.section>
  );
};

export default IntroSearch;
