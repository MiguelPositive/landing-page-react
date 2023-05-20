import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const store = createContext();

const Context = ({ children }) => {
  const [showMenu, setShowMenu] = useState(null);
  const [activeBlur, setActiveBlur] = useState("");
  return (
    <store.Provider
      value={{
        showMenu,
        setShowMenu,
        activeBlur,
        setActiveBlur,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
