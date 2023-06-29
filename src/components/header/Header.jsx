import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/Context";
import Register from "../modals/Register";

const Header = () => {
  const { showMenu, setShowMenu, activeBlur, setActiveBlur } =
    useContext(store);

  const [animateMenu, setAnimateMenu] = useState("hidden");
  const [changeIcon, setChangeIcon] = useState("bi bi-list");

  const openMenu = () => {
    if (showMenu === null) {
      setShowMenu(true);
    } else if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  useEffect(() => {
    if (showMenu) {
      setActiveBlur("blur 900px:blur-none");
      setAnimateMenu("animate__bounceIn visible");
    } else if (showMenu === false) {
      setTimeout(() => {
        setActiveBlur("");
      }, 500);
      setAnimateMenu("animate__bounceOut");
    }
  }, [showMenu]);

  useEffect(() => {
    if (showMenu) {
      setTimeout(() => {
        setChangeIcon("bi bi-x-lg z-20");
      }, 500);
    } else if (showMenu === false) {
      setTimeout(() => {
        setChangeIcon("bi bi-list");
      }, 500);
    }
  }, [showMenu]);
  return (
    <div className="relative flex justify-start items-start 900px:justify-between">
      {/* <div
        id="social-networks"
        className={`flex justify-center items-center ${activeBlur} `}
      >
        <p className="mr-5">Sigueme</p>
        <div id="social-netoworks-icons" className="flex items-center gap-5">
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100092693829056&mibextid=ZbWKwL"
            >
              <div className="w-7 h-7 bg-logo-facebook bg-cover"></div>
            </a>
          </div>

          <div>
            <a
              target="_blank"
              href="https://instagram.com/esmerrojasr?igshid=MzNlNGNkZWQ4Mg=="
            >
              <div className="w-7 h-7 bg-logo-instagram bg-cover"></div>
            </a>
          </div>

          <div>
            <a target="_blank" href="https://twitter.com/Esmerrojasr">
              <div className="w-7 h-7 bg-logo-twitter bg-cover"></div>
            </a>
          </div>
        </div>
      </div> */}

      <div className="rounded-full border-2 border-[#FF6709]  p-2 cursor-pointer transition-all duration-100 hover:font-bold hover:text-[#FF6709]">
        <i class="mr-2 bi bi-person-circle"></i>
        Unete
      </div>

      <i
        id="button-menu"
        className={`${changeIcon} absolute top-0 right-0 bi bi-list text-3xl cursor-pointer 900px:hidden`}
        onClick={openMenu}
      ></i>

      <div
        id="items-menu"
        className={`${animateMenu}
       animate__animated absolute z-10 top-0 -right-2 text-xl rounded-md shadow-md w-[92vw] bg-white 350px:w-[80vw] 400px:w-[60vw] 450px:w-[50vw] 750px:w-[40vw] 900px:static 900px:flex 900px:justify-end 900px:items-center 900px:gap-5 900px:w-[60vw] 900px:shadow-none 900px:rounded-s-none`}
      >
        <a href="">
          <div className="text-center mt-5 mb-3 900px:m-0 animation-all duration-75 900px:hover:font-extrabold">
            ¿Quién soy?
          </div>
        </a>

        <a href="">
          <div className="text-center mb-3 animation-all duration-75 900px:m-0 900px:hover:font-bold">
            Por la comunidad
          </div>
        </a>

        <a href="">
          <div className="text-center mb-3 animation-all duration-75 900px:m-0 900px:hover:font-bold">
            Resultados
          </div>
        </a>

        <a href="">
          <div className="text-center mb-5 animation-all duration-75 900px:m-0 900px:hover:font-bold">
            Testimonios
          </div>
        </a>
        <a href="">
          <div className="text-center mb-5 animation-all duration-75 900px:m-0 900px:hover:font-bold">
            Grupo de trabajo
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
