import React from "react";

const ComunityVideo = () => {
  return (
    <div className="flex justify-center items-center flex-wrap-reverse 900px:flex-nowrap 900px:gap-10">
      <div id="container-video" className="w-full h-[20rem] 900px:w-[60%]">
        <iframe
          className="h-full w-full rounded-md mt-5 900px:mt-0"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4FgnPwdgWAQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div id="text-video" className="900px:w-[40%]">
        <p className="text-center mb-2 text-2xl font-bold">Titulo del video</p>
        <p className="text-justify">
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
