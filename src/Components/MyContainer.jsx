import React from "react";

const MyContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default MyContainer;
