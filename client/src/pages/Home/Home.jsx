import React from "react";

import TEST_ID from "./Home.testid";
import IntroSearch from "./HomeComponents/IntroSearch";
import CustomerGuid from "./HomeComponents/CustomerGuid";
import ShopGuid from "./HomeComponents/ShopGuid";

const Home = () => {
  return (
    <div
      data-testid={TEST_ID.container}
      className="bg-gradient-to-bl from-accent/70 to-lightBg"
    >
      <IntroSearch />
      <CustomerGuid />
      <ShopGuid />
    </div>
  );
};

export default Home;
