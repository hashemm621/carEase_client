import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      
      <div className="w-16 h-16 border-4 border-t-[#1E90FF] border-b-[#1E90FF] border-gray-300 rounded-full animate-spin"></div>
      
      
      <p className="mt-4 text-gray-700 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default LoadingPage;
