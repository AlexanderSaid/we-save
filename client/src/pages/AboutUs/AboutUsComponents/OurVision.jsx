import React from "react";
import { motion } from "framer-motion";
import { fade } from "../../../animation";
const OurVision = () => {
  return (
    <motion.section
      variants={fade}
      className="flex items-center justify-center bg-lightBg block w-full min-h-[250px] py-4"
    >
      <div className="flex justify-center max-w-1440">
        <div className="w-[80%] md:w-[70%] lg:w-[50%] flex flex-col justify-evenly">
          <h4 className="text-center text-bodyLarge font-extrabold text-accent self-center sm:text-title4 sm:self-end pb-4">
            Our Vision ...
          </h4>
          <p className="text-bodyMd text-center self-center text-darkFont sm:text-bodyRegular font-bold sm:text-justify">
            Our mission is to inspire and empower everyone to take action
            against food waste. We know that to live and breathe this every day,
            we need to turn our words into actions. With this in mind we have
            set out a new ambition - to contribute in every way we can to
            building the global food waste movement. Its only when we all come
            together to fight food waste, that we will be able to generate a
            positive change in society.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
export default OurVision;
