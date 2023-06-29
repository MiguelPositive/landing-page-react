import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const store = createContext();

const Context = ({ children }) => {
  const [showMenu, setShowMenu] = useState(null);
  const [activeBlur, setActiveBlur] = useState("");

  const [showOptions, setShowOptions] = useState(false);
  return (
    <store.Provider
      value={{
        showMenu,
        setShowMenu,
        activeBlur,
        setActiveBlur,
        showOptions,
        setShowOptions,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
