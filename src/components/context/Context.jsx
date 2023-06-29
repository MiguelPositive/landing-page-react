import React from "react";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { userRegistered } from "../../windows/userRegistered";

export const store = createContext();

const Context = ({ children }) => {
  const [showMenu, setShowMenu] = useState(null);
  const [activeBlur, setActiveBlur] = useState("");

  const [showOptions, setShowOptions] = useState(false);

  const [showRegister, setShowRegister] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    try {
      await axios.post(
        "https://landing-page-backend-1ge5.onrender.com/create-user",
        {
          name,
          email,
          contact,
          user,
          password,
        }
      );

      userRegistered();
    } catch (error) {
      console.log(
        `ocurrio un error en el backend al intentar crear el usuario: ${error}`
      );
    }
  };

  return (
    <store.Provider
      value={{
        showMenu,
        setShowMenu,
        activeBlur,
        setActiveBlur,
        showOptions,
        setShowOptions,
        setShowRegister,
        showRegister,
        name,
        setName,
        email,
        setEmail,
        contact,
        setContact,
        user,
        setUser,
        password,
        setPassword,
        createUser,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
