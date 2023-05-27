import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const Iam = () => {
  const { activeBlur } = useContext(store);

  return (
    <div className={`${activeBlur}`}>
      <div className="flex justify-center items-center mb-6">
        <div
          id="image-i-am"
          className="w-[10rem] h-[10rem] bg-img-perfil bg-cover bg-top rounded-full shadow-md shadow-black/95"
        ></div>
      </div>

      <div id="text-i-am" className="text-justify">
        <p className="mb-3">
          <b> Esmer Rojas Rubriche</b>, nací en Bucaramanga, el 20 de marzo de
          1975 Casado y padre de dos hijos. Bachiller técnico e Ingeniero de
          Sistemas con énfasis en Telecomunicaciones.{" "}
          <b>
            Soy un Líder Social, con sensibilidad y gran empeño en ayudar a los
            más necesitados y excluidos, con la mirada fija en los niños y
            adultos mayores necesitados
          </b>
          , tengo gran conciencia por el medio ambiente, me gustan los deportes
          especialmente el fútbol.
        </p>

        <p className="mb-3">
          Me considero buena persona y un buen amigo, me duele el dolor de los
          que sufren por eso mi liderazgo se fundamenta en la acogida, la
          humildad y la fe en Dios.
        </p>

        <p>
          <b>
            Me rijo por principios de servicio, honestidad y transparencia.{" "}
          </b>
          Considero que el fortalecimiento de la familia, poder recibir una
          buena educación tanto en valores como académicamente, unidos al
          deporte y el buen uso del tiempo libre son fundamentales para el
          desarrollo sostenible de las comunidades.
        </p>
      </div>
    </div>
  );
};

export default Iam;
