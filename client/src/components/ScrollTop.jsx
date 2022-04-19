import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fade } from "./animation";
import PropTypes from "prop-types";

const ScrollTop = ({ children }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <motion.div variants={fade} className="w-full">
      {children}
    </motion.div>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.node,
};

export default ScrollTop;
