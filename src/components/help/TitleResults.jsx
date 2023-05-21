import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const TitleResults = () => {
  const { activeBlur } = useContext(store);

  return (
    <div
      className={`flex justify-center items-center text-center h-48 bg-[#94E959] text-3xl font-extrabold mb-5 ${activeBlur}`}
    >
      Resultados del progreso
    </div>
  );
};

export default TitleResults;
