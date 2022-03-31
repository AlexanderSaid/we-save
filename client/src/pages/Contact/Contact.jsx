import React from "react";
import GetInTouch from "./ContactComponents/GetInTouch";
import EnterData from "./ContactComponents/EnterData";

const Contact = () => {
  return (
    <div className="container pt-8 mx-auto mb-8">
      <div className="lg:flex">
        <GetInTouch />
        <EnterData />
      </div>
    </div>
  );
};

export default Contact;
