import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const Banner = () => {
  const { activeBlur } = useContext(store);

  return (
    <div
      className={`relative z-0 w-full h-[10rem] bg-logo-banner bg-contain bg-center  rounded-md ${activeBlur}`}
    ></div>
  );
};

export default Banner;
