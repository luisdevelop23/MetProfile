import React from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const PNRHabilidades = () => {
  return (
    <>
      <h1 className="nnf-bold col-span-2 text-2xl">Datos Estudiantiles</h1>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Titulo{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4"
        />
      </div>
    </>
  );
};

export default PNRHabilidades;
