import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
const IntroSearch = () => {
  const [location, setLocation] = useState("");

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <section
      className="flex items-center justify-center bg-darkBg block "
      style={{ height: "500px" }}
    >
      <div className="text-center">
        <h2 className="mt-20 lg:text-3xl font-title font-bold text-white  text-2xl">
          TIME TO SAVE YOUR FOOD
        </h2>

        <div className="flex justify-center mt-8">
          <SearchBar location={location} handleLocation={handleLocation} />
        </div>
      </div>
    </section>
  );
};

export default IntroSearch;
