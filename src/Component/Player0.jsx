import React from "react";

const Player0 = (props) => {
  return (
    <div>
      <div
        className={`font-extrabold text-lg border-2 rounded-sm m-2 py-1.5 px-1 
        ${props.winner === "0" ? "text-[#f5d939]" : "text-[#39B9F5]"}`}
      >
        <p>player0</p>
        <p>{props.timer}ms</p>
        <p className="font-medium">Win={props.winner}</p>
      </div>
    </div>
  );
};

export default Player0;
