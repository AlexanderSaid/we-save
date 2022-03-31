import React from "react";
import StaffCard from "./StaffCard";
const WhoAreWe = () => {
  return (
    <section className="flex items-center justify-center bg-lightFont block w-full">
      <div className="flex justify-center max-w-1440">
        <div className="w-full flex flex-col justify-evenly">
          <h4 className="my-12 text-center text-bodyLarge font-extrabold text-accent self-center md:text-title4">
            How Are We ?
          </h4>
          <div className="staff-container flex items-center justify-evenly flex-wrap gap-4 mb-12">
            <StaffCard />
            <StaffCard />
            <StaffCard />
            <StaffCard />
            <StaffCard />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoAreWe;
