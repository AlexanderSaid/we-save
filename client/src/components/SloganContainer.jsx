import React from "react";
import SetLocationSection from "./SetLocationSection/SetLocationSection";
function SloganContainer() {
  return (
    <section
      className="flex items-center justify-center bg-darkBg"
      style={{ height: "500px" }}
    >
      <div className="text-center">
        <p className="text-xl font-medium tracking-wider text-gray-300">
          Lorem ipsum dolor
        </p>
        <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
          TIME TO SAVE YOUR FOOD
        </h2>

        <div className="flex justify-center mt-8">
          <SetLocationSection />
        </div>
      </div>
    </section>
  );
}

export default SloganContainer;
