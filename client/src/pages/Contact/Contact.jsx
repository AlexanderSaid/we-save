import React from "react";
import GetInTouch from "./ContactComponents/GetInTouch";
import EnterData from "./ContactComponents/EnterData";
import { motion } from "framer-motion";
import { pageAnimation } from "../../components/animation";

const Contact = () => {
  return (
    <motion.section
      variants={pageAnimation}
      className="flex items-center justify-center bg-gradient-to-bl from-lightFont to-lightBg w-screen min-h-high"
    >
      <div className="max-w-[500px] w-[95%] mx-auto lg:flex lg:items-stretch lg:justify-center lg:max-w-[1024px]  my-12 shadow-2xl shadow-darkBg rounded-xl overflow-hidden">
        <GetInTouch />
        <EnterData />
      </div>
    </motion.section>
  );
};

export default Contact;
