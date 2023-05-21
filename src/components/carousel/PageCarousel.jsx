import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";
import { Carousel } from "flowbite-react";

const PageCarousel = () => {
  const { activeBlur } = useContext(store);

  return (
    <div className={`h-64 sm:h-64 xl:h-80 2xl:h-96 ${activeBlur}`}>
      <Carousel>
        <div className="flex h-full items-center justify-center bg-img-1 bg-cover bg-button dark:bg-gray-700 dark:text-white"></div>
        <div className="flex h-full items-center justify-center bg-img-2 bg-cover dark:bg-gray-700 dark:text-white"></div>
        <div className="flex h-full items-center justify-center bg-img-3 bg-cover dark:bg-gray-700 dark:text-white"></div>
        <div className="flex h-full items-center justify-center bg-img-4 bg-cover dark:bg-gray-700 dark:text-white"></div>
      </Carousel>
    </div>
  );
};

export default PageCarousel;
