import React from "react";

import TEST_ID from "./Home.testid";
import IntroSearch from "./HomeComponents/IntroSearch";
import CustomerGuid from "./HomeComponents/CustomerGuid";
import ShopGuid from "./HomeComponents/ShopGuid";
import HowItWorks from "./HomeComponents/HowItWorks";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <IntroSearch />
      <CustomerGuid />
      <ShopGuid />
      <HowItWorks />
    </div>
  );
};

export default Home;
