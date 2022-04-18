import React from "react";
import StaffCard from "./StaffCard";
//- Import the staff photos
import Abd from "../../../assets/images/staff-photos/Abd.jpg";
import Alex from "../../../assets/images/staff-photos/Alex.jpg";
import Bachar from "../../../assets/images/staff-photos/Bachar.jpg";
import George from "../../../assets/images/staff-photos/George.jpg";
import Said from "../../../assets/images/staff-photos/Said.jpg";
import { useScroll } from "../../../hooks/useScrolls";
import { motion } from "framer-motion";
import { titleAnimAbove } from "../../../animation";

const WhoAreWe = () => {
  const [element, controls] = useScroll(0.3);
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
    <motion.section
      ref={element}
      className="flex items-center justify-center bg-lightFont block w-full"
    >
      <div className="flex justify-center max-w-1440 px-4">
        <div className="w-full flex flex-col justify-evenly">
          <div className="overflow-hidden">
            <motion.h3
              variants={titleAnimAbove}
              initial="hidden"
              animate={controls}
              className="my-12 text-center text-bodyLarge font-extrabold text-accent self-center md:text-title3"
            >
              Who Are We ?
            </motion.h3>
          </div>
          <div className="staff-container flex items-center justify-evenly flex-wrap gap-4 mb-12">
            {staff.map((member, index) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2,
                      ease: "easeOut",
                    },
                  },
                }}
                initial="hidden"
                animate={controls}
              >
                <StaffCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default WhoAreWe;
