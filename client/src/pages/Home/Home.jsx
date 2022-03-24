import React from "react";
import HomepageSection from "../../components/HomepageSection";
import TEST_ID from "./Home.testid";
import SloganContainer from "./component/SloganContainer";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <SloganContainer />
      <HomepageSection />
      <div className="howItGoes">
        <h1>How It Goes</h1>
      </div>
    </div>
  );
};

export default Home;
