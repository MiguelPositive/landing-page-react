import React from "react";

const Close = ({ action }) => {
  return (
    <div
      className="absolute right-0 h-10 w-10 flex justify-center items-center bg-[#B63A22] cursor-pointer transition-all duration-100 rounded-full hover:shadow-md hover:shadow-black/50 hover:-translate-y-1"
      onClick={action}
    >
      <i class="bi bi-x-lg text-white"></i>
    </div>
  );
};

export default Close;
