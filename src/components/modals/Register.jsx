import React from "react";
import Inputs from "../inputs/Inputs";

const Register = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[17rem] rounded-md bg-yellow-400 absolute top-14 p-5 z-20 shadow-md shadow-black/50 700px:w-[20rem]">
        <h2 className="text-center mb-5 text-xl">Registrarse</h2>

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

        <div className="mb-2">
          <Inputs label={"Contraseña"} type={"password"} element={"password"} />
        </div>
      </div>
    </div>
  );
};

export default Register;
