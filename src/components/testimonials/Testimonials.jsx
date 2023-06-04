import React from "react";

const Testimonials = ({ name, photo, text }) => {
  console.log(photo);
  return (
    <div className="w-full h-full bg-[#9AE589] rounded-md shadow-xl shadow-black/50 p-6 overflow-hidden transition-all duration-150 hover:shadow-black/70 900px:hover:scale-105">
      <div className="flex flex-wrap-reverse justify-evenly items-center mb-5">
        <div
          id="image-testimony"
          className={`w-[calc(4rem+0.5em)] h-[calc(4rem+0.5em)] rounded-full img-test-${photo} bg-top bg-cover shadow-lg shadow-black/50 900px:w-[calc(8rem+0.5em)] 900px:h-[calc(8rem+0.5em)]`}
        ></div>
        <div
          id="title-tesyimony"
          className="text-3xl text-center font-bold mb-5 525px:mb-0 900px:mb-5"
        >
          <p className="">Acerca de {name}</p>
        </div>
      </div>

      <div>
        <p className="text-justify">{text}</p>
      </div>
    </div>
  );
};

export default Testimonials;
