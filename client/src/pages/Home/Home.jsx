import React from "react";

import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div className="homePage" data-testid={TEST_ID.container}>
      <div className="searchSection">
        <h1>Search Here</h1>
        <input></input>
      </div>
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
