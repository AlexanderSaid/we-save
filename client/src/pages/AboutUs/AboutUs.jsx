import React from "react";
import OurVision from "./AboutUsComponents/OurVision";
import Slogan from "./AboutUsComponents/Slogan";
import Thanks from "./AboutUsComponents/Thanks";
import WhoAreWe from "./AboutUsComponents/WhoAreWe";
import WhyOurWebsite from "./AboutUsComponents/WhyOurWebsite";

const AboutUs = () => {
  return (
    <>
      <Slogan />
      <WhyOurWebsite />
      <OurVision />
      <WhoAreWe />
      <Thanks />
    </>
  );
};

export default AboutUs;
