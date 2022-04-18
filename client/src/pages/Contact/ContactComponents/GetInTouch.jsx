import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { fade } from "../../../animation";

const GetInTouch = () => {
  return (
    <div className="py-16 bg-darkBg text-lightFont">
      <motion.div variants={fade} className="px-8 mx-auto lg:py-16">
        <h1 className="pb-4 text-title3 font-bold ">Get in touch</h1>
        <p className="pb-8 text-xl font-normal leading-relaxed">
          Got a question about us? Are you interested in partnering with us?
          Have some suggestions or just want to say Hi? Just contact us. We are
          here to assist you.
        </p>
        <div className="flex items-center pb-4">
          <div>
            <FiPhoneCall className="" />
          </div>
          <p className="pl-4 text-base ">+31 6 98765432</p>
        </div>
        <a
          href="mailto:main-wesave@outlook.com"
          className="flex items-center hover:text-primary"
        >
          <div>
            <AiOutlineMail className="" />
          </div>
          <p className="pl-4 text-base ">main-wesave@outlook.com</p>
        </a>
        <a
          href="https://www.google.com/maps/place/Overhoeksplein+2,+1031+KS+Amsterdam"
          target="_blank"
          className="block mt-8 text-lg tracking-wide hover:text-primary"
          rel="noreferrer"
        >
          Overhoeksplein 2<br />
          1031 KS, Amsterdam
        </a>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
