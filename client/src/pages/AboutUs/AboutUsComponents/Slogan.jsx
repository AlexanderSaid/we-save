import React from "react";
import { motion } from "framer-motion";
import { fade } from "../../../components/animation";
const Slogan = () => {
  return (
    <section className="flex items-center justify-center bg-darkBg w-screen h-64 ">
      <div className="text-center max-w-1440">
        <motion.h3
          variants={fade}
          className="my-12 sm:text-4xl font-title font-extrabold text-lightFont tracking-wider font-[Fira] "
        >
          TIME TO SAVE <br className="sm:hidden" />
          OUR FOOD
        </motion.h3>
      </div>
    </section>
  );
};
export default Slogan;
