import React from "react";

const Session = ({ login, action }) => {
  return (
    <div
      className={` transition-all duration-100 cursor-pointer rounded-full text-lg text-white p-2 hover:font-bold hover:shadow-md hover:shadow-black/50 ${
        login ? "bg-[#74AD4F] " : "bg-[#5E34A3]"
      }`}
      onClick={action}
    >
      {login ? "Entrar" : "Registrarse"}

      <i
        className={`bi ${
          login ? " bi-box-arrow-in-right" : "bi-pencil-square"
        } text-lg ml-2`}
      ></i>
    </div>
  );
};

export default Session;
