import React from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const PNRExperiencia = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Nombre de la institución{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Puesto{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none"
        />
      </div>

      {/* Fechas inicio Final */}
      <div className="0 flex gap-x-2">
        <div className="flex flex-col">
          <h2 className="nnf-regular flex">
            Fecha de Incio{" "}
            <span className="flex justify-center text-2xl font-bold">
              <img src={asterisk} className="w-4" />
            </span>
          </h2>
          <input
            type="date"
            placeholder="escribe aqui"
            className="border-2 pl-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="nnf-regular flex">
            Fecha Final{" "}
            <span className="flex justify-center text-2xl font-bold">
              <img src={asterisk} className="w-4" />
            </span>
          </h2>
          <input
            type="date"
            placeholder="escribe aqui"
            className="border-2 pl-4 focus:outline-none"
          />
        </div>
      </div>
      {/* Fin de Fechas inicio Final */}

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Descripción de tu Puesto{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <textarea
          name="descripcion"
          id="idDescripcion"
          placeholder="escribe aqui"
          cols="20"
          rows="3"
          className="border-2 pl-4 pt-2 focus:outline-none"
          style={{ resize: "none" }}
        ></textarea>
      </div>
    </>
  );
};

export default PNRExperiencia;
