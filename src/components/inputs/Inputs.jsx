import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const Inputs = ({ label, type, element }) => {
  const [padingPass, setPadingPass] = useState("pr-3");

  const [showEye, setShowEye] = useState(false);
  const [changeEye, setChangeEye] = useState("bi bi-eye-slash-fill");
  const [typeInput, setTypeInput] = useState("password");

  const [value, setValue] = useState("");

  const { setName, setEmail, setContact, setUser, setPassword, showRegister } =
    useContext(store);

  const handleChangeEye = () => {
    setShowEye(!showEye);
  };

  const handleChangeValues = (e) => {
    setValue(e.target.value);
    switch (true) {
      case element == "name":
        setName(e.target.value);

        break;

      case element == "email":
        setEmail(e.target.value);
        break;

      case element == "contact":
        setContact(e.target.value);
        break;

      case element == "user":
        setUser(e.target.value);
        break;

      case element == "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (element == "password") {
      setPadingPass("pr-10");
    } else {
      setPadingPass("pr-3");
    }
  }, []);

  useEffect(() => {
    if (showEye) {
      setChangeEye("bi bi-eye-fill");
      setTypeInput("text");
    } else {
      setChangeEye("bi bi-eye-slash-fill");
      setTypeInput("password");
    }
  }, [showEye]);

  useEffect(() => {
    if (!showRegister) {
      setValue("");
    }
  }, [showRegister]);
  return (
    <div className=" text-xl">
      <div className="mb-2">
        <label htmlFor="input" className="text-white">
          {label}
        </label>
      </div>

      <div>
        <input
          id="input"
          type={element == "password" ? typeInput : type}
          value={value}
          className={`relative w-full border-none rounded-md focus:outline-none active:outline-none pl-3 
          ${padingPass}`}
          onChange={handleChangeValues}
        />

        {element == "password" ? (
          <i
            className={`${changeEye} absolute bottom-2 right-2 cursor-pointer`}
            onClick={handleChangeEye}
          ></i>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Inputs;
