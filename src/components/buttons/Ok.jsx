import React from "react";

const Ok = ({ action }) => {
  return (
    <div
      className="w-10 h-10 p-2 bg-[#6ABF45] flex justify-center items-center rounded-full cursor-pointer transition-all duration-100 hover:shadow-md hover:shadow-black/50 hover:-translate-y-1"
      onClick={action}
    >
      <i className="bi bi-check-lg text-2xl text-white"></i>
    </div>
  );
};

export default Ok;
