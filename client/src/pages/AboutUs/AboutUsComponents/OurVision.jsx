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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            non nulla ut commodi dicta rerum, maiores velit voluptates amet
            neque vel recusandae adipisci quas animi dolorum fugiat maxime
            consectetur et quae, corrupti veniam? Necessitatibus, consectetur!
          </p>
        </div>
      </div>
    </motion.section>
  );
};
export default OurVision;
