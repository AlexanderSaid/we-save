import React from "react";
import StaffCard from "./StaffCard";
//- Import the staff photos
import Abd from "../../../assets/staff-photos/Abd.jpg";
import Alex from "../../../assets/staff-photos/Alex.jpg";
import Bachar from "../../../assets/staff-photos/Bachar.jpg";
import George from "../../../assets/staff-photos/George.jpg";
import Said from "../../../assets/staff-photos/Said.jpg";
const WhoAreWe = () => {
  const staff = [
    {
      photo: Abd,
      name: "Abdulrahman Sadek",
      github: "https://github.com/Abdulrahmansadek",
      linkedIn: "https://www.linkedin.com/in/abdulrahman-sadek-b814951a0",
    },
    {
      photo: Alex,
      name: "Alexander Said",
      github: "https://bit.ly/AlexGitHub",
      linkedIn: "https://bit.ly/AlexSaidLinkedin",
    },
    {
      photo: Bachar,
      name: "Bachar Daowd",
      github: "https://github.com/bachar78",
      linkedIn: "https://www.linkedin.com/in/bachar-daowd/",
    },
    {
      photo: George,
      name: "George Roumieh",
      github: "https://github.com/george2621",
      linkedIn: "https://www.linkedin.com/in/george-roumieh-6606901bb/",
    },
    {
      photo: Said,
      name: "Said Yeginoglu",
      github: "https://github.com/SaidYein",
      linkedIn: "https://www.linkedin.com/in/said-yein-263207b0/",
    },
  ];
  return (
    <section className="flex items-center justify-center bg-lightFont block w-full">
      <div className="flex justify-center max-w-1440 px-4">
        <div className="w-full flex flex-col justify-evenly">
          <h3 className="my-12 text-center text-bodyLarge font-extrabold text-accent self-center md:text-title3">
            Who Are We ?
          </h3>
          <div className="staff-container flex items-center justify-evenly flex-wrap gap-4 mb-12">
            {staff.map((member) => (
              <StaffCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoAreWe;
