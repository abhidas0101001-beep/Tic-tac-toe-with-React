import React from "react";

const Reset = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="font-extrabold text-lg border-2 rounded-sm m-2 py-0.5 px-1 text-[#39b9f5]"
    >
      Reset
    </button>
  );
};

export default Reset;
