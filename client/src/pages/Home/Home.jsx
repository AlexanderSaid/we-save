import React from "react";

import IntroSearch from "./HomeComponents/IntroSearch";
import CustomerGuid from "./HomeComponents/CustomerGuid";
import ShopGuid from "./HomeComponents/ShopGuid";

const Home = () => {
  return (
    <div className="bg-gradient-to-bl from-lightFont to-lightBg">
      <IntroSearch />
      <CustomerGuid />
      <ShopGuid />
    </div>
  );
};

export default Home;
