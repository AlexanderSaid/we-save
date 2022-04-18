import React from "react";
const Thanks = () => {
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
    <section className="flex flexitems-center justify-center bg-lightBg/80 block w-full min-h-[250px] py-4">
      <div className="flex flex-col items-center justify-center max-w-1440 mx-4 px-4 rounded-xl">
        <p className="w-[80%] text-center text-Fira text-bodyRegular font-bold text-accent my-12 md:w-[60%] md:text-subtitle">
          We are grateful to our mentors for their kindness and encouraging
          guidance.
        </p>
        <ul className="w-[80%] flex flex-wrap items-center justify-center gap-x-4 gap-y-8 md:w-full md:gap-8">
          {mentors.map((mentor) => (
            <li
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
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center items-center my-12">
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
        </div>
      </div>
    </section>
  );
};
export default Thanks;
