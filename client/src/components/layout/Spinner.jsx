import React from "react";

function Spinner() {
  return (
    <div className="w-[100px] h-[100px] relative 	animation: spin 1s linear infinite">
      <div className="box-border absolute w-[100%] h-[100%] border-8 border-ring-transparent border-t border-accent border-t-[50%]"></div>
      <div className="border-8 border-ring-transparent  border-b border-accent"></div>
    </div>
  );
}

export default Spinner;
