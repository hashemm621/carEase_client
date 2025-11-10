
import React from "react";

const Spinner = ({ size = 16, color1 = "#E81C2E", color2 = "#0000FF" }) => {
  return (
    <div
      className={`inline-block relative w-${size} h-${size} animate-spin`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        className="absolute rounded-full border-4 border-t-transparent border-b-transparent"
        style={{
          width: "100%",
          height: "100%",
          borderColor: `${color1} ${color2} ${color1} ${color2}`,
        }}
      ></div>
    </div>
  );
};

export default Spinner;
