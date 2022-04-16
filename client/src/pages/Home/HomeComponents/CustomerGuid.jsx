import React from "react";
import customer from "../../../assets/customer-bg.png";
import CustomerGuidCard from "./CustomerGuidCard";
import placeholder from "../../../assets/placeholder.png";
import carts from "../../../assets/carts.png";
import shoppingBag from "../../../assets/shopping-bag.png";
import { useScroll } from "../../../hooks/useScrolls";
import { motion } from "framer-motion";
// //Test
// import { useInView } from 'react-intersection-observer'
// import { useAnimation} from 'framer-motion'
//Test
import {
  titleAnim,
  fade,
  photoAnimate,
  customAnimation,
  scrollReveal,
  pageAnimation,
} from "../../../animation";

const CostumerGuid = () => {
  const [element, controls] = useScroll(0.5);
  const customerGuid = [
    {
      logo: placeholder,
      title: "Pass Your Postcode",
      text: "Enter your postcode, or let us determine your location.",
    },
    {
      logo: carts,
      title: "Discover Baskets",
      text: "See all baskets nearby, and filter them by category.",
    },
    {
      logo: shoppingBag,
      title: "Reserve & Pickup",
      text: "Reserve your basket, pickup during givin time, and pay in the shop.",
    },
  ];
  return (
    <motion.section
      variants={pageAnimation}
      id="customer"
      className="flex flex-col items-center justify-center w-full"
    >
      {/* Intro section */}
      <motion.div
        variants={fade}
        className="flex items-center justify-center w-[90%] sm:w-[95%] "
      >
        <div className="flex items-center justify-center h-[450px] relative overflow-hidden max-w-1440 w-[95%] xs:w-full shadow-2xl shadow-darkBg/60 rounded-2xl mt-12">
          <motion.img
            variants={photoAnimate}
            src={customer}
            alt="Grocery bag with piggy bank"
            className="absolute object-cover w-full h-full"
          />
          <motion.div
            variants={fade}
            className="w-full h-full z-10 flex items-center justify-center md:justify-start py-4"
          >
            <motion.div
              variants={customAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-[70%] md2:w-[60%] lg:w-[50%] max-h-full flex flex-col justify-between gap-4 md:ml-[5%] lg:ml-[10%] text-darkBg border border-accent rounded-md bg-lightBg/80 p-4"
            >
              <div className="overflow-hidden">
                <motion.h3
                  variants={titleAnim}
                  className="text-title4 font-bold text-center md:text-left"
                >
                  Fresh food for you, more food for others.
                </motion.h3>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  variants={titleAnim}
                  className="text-bodyRegular text-darkFont/80 font-bold md:w-[90%] md:text-justify text-center md:text-left"
                >
                  Start saving delicious products that your local entrepreneur
                  will have left at the end of the day. Always a surprise at a
                  low price and you immediately do something good for the
                  planet. Start today!
                </motion.p>
              </div>
              <a className="self-center md:self-end md:mr-4">
                <motion.button variants={fade} className="btn btn-dark">
                  Sign In
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Guid section */}
      <motion.div
        variants={scrollReveal}
        ref={element}
        initial="hidden"
        animate={controls}
        className="flex items-center justify-center w-full "
      >
        <div className="flex items-stretch justify-evenly flex-wrap gap-4 max-w-1440 w-full py-12 px-4">
          {customerGuid.map((step, index) => (
            <CustomerGuidCard key={index} props={step} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CostumerGuid;
