import React from "react";
import SetLocationSection from "../../components/SetLocationSection/SetLocationSection";

import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <SetLocationSection />
    </div>
  );
};

export default Home;
