import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const Results = ({ img, title, text, reverse }) => {
  const { activeBlur } = useContext(store);

  return (
    <div
      className={`flex justify-center items-center gap-10 flex-wrap 900px:flex-nowrap 900px:justify-between 
       ${reverse ? "900px:flex-row-reverse" : ""} 
       ${activeBlur}`}
    >
      <div
        id="img-result"
        className={`w-screen 900px:w-[30rem] h-[20rem] rounded-md bg-cover shadow-md shadow-black/50 ${img}`}
      ></div>

      <div id="text-result" className="w-full 900px:w-[50%]">
        <p className="text-center text-2xl font-bold mb-3">{title}</p>
        <p className="text-justify">{text}</p>
      </div>
    </div>
  );
};

export default Results;
