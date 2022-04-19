import React from "react";
import shopCover from "../../../assets/images/shopCover.png";

function CoverShop() {
  return (
    <div className="w-full relative mb-2">
      <div className="flex justify-center">
        <img src={shopCover} alt="shopCover" />
      </div>
    </div>
  );
}

export default CoverShop;
