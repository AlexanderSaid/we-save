import React from "react";
import SetLocationSection from "../../components/SetLocationSection/SetLocationSection";

import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <SetLocationSection />
      <div className="customerInfo">
        <h1>CustomerInfo</h1>
      </div>
      <div className="shopOwnerInfo">
        <h1>ShowOwnerInfo</h1>
      </div>
      <div className="howItGoes">
        <h1>How It Goes</h1>
      </div>
    </div>
  );
};

export default Home;
