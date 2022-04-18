import React from "react";
import { motion } from "framer-motion";
import { fade } from "../../../animation";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Thanks = () => {
  const [element, view] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const mentors = [
    {
      name: "Kim Kruger",
      role: "Product owner",
      linkedIn: "https://www.linkedin.com/in/kimgreylingcapetown/",
    },
    {
      name: "Nicole Belilos",
      role: "Scrum master",
      linkedIn: "https://www.linkedin.com/in/nicolebelilos/",
    },
    {
      name: "Josja Heerema",
      role: "Tech Lead",
      linkedIn: "https://www.linkedin.com/in/josja-heerema/",
    },
    {
      name: "Sam Krouwer",
      role: "Product Owner",
      linkedIn: "https://www.linkedin.com/in/samkrouwer",
    },
    {
      name: "Obada ElSharbatly",
      role: "Tech assistant",
      linkedIn: "https://www.linkedin.com/in/obada-elsharbatly/",
    },
  ];
  return (
    <motion.section
      ref={element}
      className="flex flexitems-center justify-center bg-lightBg/80 w-full min-h-[250px] py-4"
    >
      <motion.div
        variants={fade}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-center justify-center max-w-1440 mx-4 px-4 rounded-xl"
      >
        <motion.p className="w-[80%] text-center text-Fira text-bodyRegular font-bold text-accent my-12 md:w-[60%] md:text-subtitle">
          We are grateful to our mentors for their kindness and encouraging
          guidance.
        </motion.p>
        <ul className="w-[80%] flex flex-wrap items-center justify-center gap-x-4 gap-y-8 md:w-full md:gap-8">
          {mentors.map((mentor, index) => (
            <motion.li
              variants={{
                hidden: {
                  opacity: 0,
                },
                show: {
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    delay: index * 0.2,
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              animate={controls}
              key={mentor.name}
              className="transition duration-300 ease-in-out hover:scale-110"
            >
              <a href={mentor.linkedIn} className="text-center">
                <h5 className="text-bodyRegular text-darkFont/80 font-bold pb-2 md:text-bodyLarge underline underline-offset-4">
                  {mentor.name}
                </h5>
                <p className="text-bodySmall text-error font-bold md:text-bodyMd">
                  {mentor.role}
                </p>
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="flex flex-col justify-center items-center my-12"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 1.5,
                ease: "easeOut",
              },
            },
          }}
        >
          <h3 className="text-subtitle text-accent font-bold text-center mb-4 md:text-title4">
            Huge gratitude
          </h3>
          <p className="text-center text-[Lato] text-darkFont text-bodyRegular text-bold font-bold mb-2">
            All our mentors in{" "}
            <a
              href="https://www.hackyourfuture.net/"
              className="text-error font-bold text-bodyLarge hover:underline"
            >
              HYF
            </a>
            <br />
            HYF core-team
            <br />
            and class-34 mentor
          </p>
          <a href="https://www.linkedin.com/in/robvk/">
            <span className="text-bodyRegular font-bold text-error md:text-bodyLarge hover:underline">
              Rob van Kruijsdijk
            </span>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export default Thanks;
