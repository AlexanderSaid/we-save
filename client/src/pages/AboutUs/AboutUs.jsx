import React from "react";
import StaffCard from "./StaffCard";
const AboutUs = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-darkBg block w-full h-64 ">
        <div className="text-center max-w-1440">
          <h2
            className="text-title3 font-bold text-accent md:text-title2"
            style={{ textShadow: "2px 1px 3px #F6FFE6" }}
          >
            TIME TO SAVE YOUR FOOD
          </h2>
        </div>
      </section>
      <section className="flex items-center justify-center bg-lightFont block w-full h-64 ">
        <div className="flex justify-center max-w-1440 h-full">
          <div className="w-[50%] flex flex-col justify-evenly">
            <h4 className="text-center text-bodyLarge font-extrabold text-accent self-center md:text-title4 md:self-start">
              Why our website?
            </h4>
            <p className="text-center self-center text-darkFont text-bodyRegular font-bold md:text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              non nulla ut commodi dicta rerum, maiores velit voluptates amet
              neque vel recusandae adipisci quas animi dolorum fugiat maxime
              consectetur et quae, corrupti veniam? Necessitatibus, consectetur!
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-lightBg block w-full h-64 ">
        <div className="flex justify-center max-w-1440 h-full">
          <div className="w-[50%] flex flex-col justify-evenly">
            <h4 className="text-center text-bodyLarge font-extrabold text-accent self-center md:text-title4 md:self-end">
              Our Vision ...
            </h4>
            <p className="text-center self-center text-darkFont text-bodyRegular font-bold md:text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              non nulla ut commodi dicta rerum, maiores velit voluptates amet
              neque vel recusandae adipisci quas animi dolorum fugiat maxime
              consectetur et quae, corrupti veniam? Necessitatibus, consectetur!
            </p>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default AboutUs;
