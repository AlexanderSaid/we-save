import React from "react";
import TEST_ID from "./Home.testid";
import IntroSearch from "./HomeComponents/IntroSearch";
import CustomerGuid from "./HomeComponents/CustomerGuid";
import ShopGuid from "./HomeComponents/ShopGuid";
//import motion
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      data-testid={TEST_ID.container}
      className="bg-gradient-to-bl from-lightFont to-lightBg"
    >
      <IntroSearch />
      <CustomerGuid />
      <ShopGuid />
    </motion.div>
  );
};

export default Home;
