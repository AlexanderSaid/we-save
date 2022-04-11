import React from "react";
import PropTypes from "prop-types";

import * as Si from "react-icons/si";

const StaffCard = ({ member }) => {
  const { photo, name, github, linkedIn } = member;
  return (
    <div className="staff-card-container w-32 flex items-center justify-center py-2  h-44 rounded border border-darkBg/80 border-8 shadow-xl bg-lightBg">
      <div className="staff-card h-full w-full flex flex-col items-center justify-center">
        <div className="staff-image flex items-center justify-center w-[90%] h-[60%] overflow-hidden">
          <img
            src={photo}
            alt={name}
            className="object-cover h-[100px] w-[100px] rounded"
          />
        </div>
        <div className="staff-name w-full h-[30%] text-center flex items-center justify-center ">
          <p className="w-fit text-bodySmall font-extrabold text-darkFont border-b-2 border-accent">
            {name}
          </p>
        </div>
        <div className="staff-contact w-full h-[10%] flex items-center justify-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Si.SiGithub className="staff-contact-icon" />
          </a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <Si.SiLinkedin className="staff-contact-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
StaffCard.propTypes = {
  member: PropTypes.object,
};
export default StaffCard;
