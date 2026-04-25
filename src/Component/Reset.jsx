import React from "react";

const Reset = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="font-extrabold text-lg border-2 rounded-sm m-2 py-1.5 px-1 text-[#f76d6d]"
    >
      Reset
    </button>
  );
};

export default Reset;
