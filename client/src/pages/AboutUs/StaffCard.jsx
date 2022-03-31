import React from "react";

const StaffCard = () => {
  return (
    <div className="staff-card-container w-36 flex items-center justify-center p-2.5 h-52 rounded border border-darkFont">
      <div className="staff-card h-full w-full flex flex-col items-center justify-center border border-darkFont">
        <div className="staff-image w-full h-[50%] border border-darkFont"></div>
        <div className="staff-name w-full h-[20%] border border-darkFont text-center flex items-center justify-center">
          <p>Full Name</p>
        </div>
        <div className="staff-contact w-full h-[30%] border border-darkFont flex items-center justify-center">
          Contact links
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
