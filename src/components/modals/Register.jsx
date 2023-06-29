import { useState } from "react";
import { useEffect } from "react";
import Inputs from "../inputs/Inputs";
import Ok from "../buttons/Ok";
import Close from "../buttons/Close";
import { useContext } from "react";
import { store } from "../context/Context";

const Register = () => {
  const {
    setShowRegister,
    showRegister,
    setActiveBlur,
    showOptions,
    setShowOptions,
    setName,
    setEmail,
    setContact,
    setUser,
    setPassword,
    createUser,
  } = useContext(store);

  const [registerAnimation, setRegisterAnimation] = useState("");
  const [hiddenRegister, setHiddenRegister] = useState("hidden");

  const close = () => {
    setShowRegister(!showRegister);
  };

  const sendRegister = () => {
    // console.log(name);
    // console.log(email);
    // console.log(contact);
    // console.log(user);
    // console.log(password);

    createUser();
    close();

    setName("");
    setEmail("");
    setContact("");
    setUser("");
    setPassword("");
  };
  useEffect(() => {
    if (showRegister) {
      setHiddenRegister("");
      setRegisterAnimation("animate__bounceIn");
      setActiveBlur("blur pointer-events-none select-none");
      setShowOptions(!showOptions);
    } else {
      setRegisterAnimation("animate__bounceOut");

      setTimeout(() => {
        setHiddenRegister("hidden");
        setActiveBlur("");
      }, 500);
    }
  }, [showRegister]);

  return (
    <div
      className={`relative w-full h-full flex justify-center items-center animate__animated z-20 ${hiddenRegister} 
      ${registerAnimation}`}
    >
      <div className="w-[17rem] rounded-md bg-[#FF6709] absolute -top-10 p-5 shadow-md shadow-black/50 350px:w-[20rem]">
        <div className="relative">
          <Close action={close} />
        </div>
        <h2 className="text-center mt-5 mb-5 text-xl text-white font-bold">
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
            <Ok action={sendRegister} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
