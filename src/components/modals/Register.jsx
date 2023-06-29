import React from "react";
import Inputs from "../inputs/Inputs";
import Ok from "../buttons/Ok";
import Close from "../buttons/Close";

const Register = () => {
  return (
    <div className="hidden w-full h-full flex justify-center items-center">
      <div className="w-[17rem] rounded-md bg-[#FF6709] absolute top-8 p-5 z-20 shadow-md shadow-black/50 700px:w-[20rem]">
        <div className="relative">
          <Close />
        </div>
        <h2 className="text-center mt-5 mb-5 text-xl text-white">
          Registrarse
        </h2>

        <div className="mb-2">
          <Inputs label={"Nombre completo"} type={"text"} element={"name"} />
        </div>
        <div className="mb-2">
          <Inputs label={"Correo"} type={"email"} element={"email"} />
        </div>

        <div className="mb-2">
          <Inputs label={"Telefono"} type={"number"} element={"contact"} />
        </div>

        <div className="mb-2">
          <Inputs label={"Usuario"} type={"text"} element={"user"} />
        </div>

        <div className="mb-2 relative">
          <Inputs label={"Contraseña"} type={"password"} element={"password"} />
        </div>
        <div className="mb-3">
          <div className="flex justify-center items-center mt-5">
            <Ok />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
