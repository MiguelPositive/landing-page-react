import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const ComunityVideo = () => {
  const { activeBlur } = useContext(store);
  return (
    <div
      className={`flex justify-center items-center flex-wrap-reverse 900px:flex-nowrap 900px:gap-10 ${activeBlur}`}
    >
      <div
        id="container-video"
        className="w-full h-full 900px:w-[60%] flex justify-center rounded-md overflow-hidden"
      >
        <div
          className="fb-video rounded-md"
          data-href="https://www.facebook.com/BarrioLaJoyaSomosTodos/videos/2108908209301779/"
          data-width="500"
          data-show-text="false"
        ></div>
      </div>

      <div id="text-video" className="900px:w-[40%]">
        <p className="text-center mb-2 text-2xl font-bold">Titulo del video</p>
        <p className="text-justify mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex vel
          ratione fugit nisi, cupiditate ullam cumque sit id, debitis vero
          placeat architecto officia aperiam inventore quisquam nobis quis rerum
          est?
        </p>
      </div>
    </div>
  );
};

export default ComunityVideo;
// className="h-full w-full rounded-md mt-5 900px:mt-0"
