import React from "react";
import SetLocationSection from "../../components/SetLocationSection/SetLocationSection";
import HomepageSection from "../../components/HomepageSection";
import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <SetLocationSection />
      <HomepageSection />
      <div className="howItGoes">
        <h1>How It Goes</h1>
      </div>
    </div>
  );
};

export default Home;
