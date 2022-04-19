import React from "react";
import { motion } from "framer-motion";
import { fade } from "../../../components/animation";
const WhyOurWebsite = () => {
  return (
    <motion.section
      variants={fade}
      className="flex items-center justify-center bg-lightFont block w-full min-h-[250px] py-4"
    >
      <div className="flex justify-center max-w-1440">
        <div className="w-[80%] md:w-[70%] lg:w-[50%] flex flex-col justify-evenly">
          <h4 className="text-center text-bodyLarge font-extrabold text-accent self-center sm:text-title4 sm:self-start pb-4">
            Why our website?
          </h4>
          <p className="text-bodyMd text-center self-center text-darkFont sm:text-bodyRegular font-bold sm:text-justify">
            Every day, delicious, fresh food goes to waste at cafes,
            restaurants, hotels, shops and manufacturers just because it hasn’t
            sold in time. Our application lets you buy and collect this food at
            a great price so it gets eaten instead of wasted. You won’t know
            exactly what’s in your order until you pick it up it’s all part of
            the surprise
          </p>
        </div>
      </div>
    </motion.section>
  );
};
export default WhyOurWebsite;
