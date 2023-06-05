import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const TitleResults = ({ title, bgColor, textColor }) => {
  const { activeBlur } = useContext(store);

  return (
    <div
      className={`flex justify-center items-center text-center h-48 bg-[${bgColor}] text-3xl text-${textColor} font-bold mb-5 rounded-md ${activeBlur}`}
    >
      {title}
    </div>
  );
};

export default TitleResults;
