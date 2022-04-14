import React from "react";
import PropTypes from "prop-types";

const GuidCard = ({ props }) => {
  const { logo, title, text } = props;
  return (
    <div className="w-52 flex items-center justify-center p-2 h-[90%] rounded border border-darkBg/60 shadow-2xl shadow-darkBg/60 bg-lightBg">
      <div className="h-full w-full flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center w-[90%] h-[40%] overflow-hidden">
          <img
            src={logo}
            alt="{name}"
            className="object-cover h-[60px] w-[60px] rounded"
          />
        </div>
        <div className="w-full h-[25%] text-center flex items-center justify-center ">
          <p className="w-fit text-bodyLarge font-extrabold text-accent">
            {title}
          </p>
        </div>
        <div className="w-full h-[35%] flex items-center justify-center">
          <p className="text-center text-bodyMd font-semibold py-2">{text}</p>
        </div>
      </div>
    </div>
  );
};
GuidCard.propTypes = {
  props: PropTypes.object,
  logo: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
export default GuidCard;
