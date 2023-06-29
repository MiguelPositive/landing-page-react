import React, { useEffect, useState } from "react";

const Inputs = ({ label, type, element }) => {
  const [padingPass, setPadingPass] = useState("pr-3");

  const [showEye, setShowEye] = useState(false);
  const [changeEye, setChangeEye] = useState("bi bi-eye-slash-fill");
  const [typeInput, setTypeInput] = useState("password");

  const handleChangeEye = () => {
    setShowEye(!showEye);
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
          type={element == "password" ? typeInput : "text"}
          className={`relative w-full border-none rounded-md focus:outline-none active:outline-none pl-3 
          ${padingPass}`}
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
