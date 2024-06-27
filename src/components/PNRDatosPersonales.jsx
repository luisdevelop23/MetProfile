import React from "react";
import asterisk from "./../assets/icons/asterisk.svg";
const PNRDatosPersonales = () => {
  return (
    <>
      {/* Incio de los datos personales */}
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Primer Nombre{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none "
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Segundo Nombre{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none "
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Apellido Paterno{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none "
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Apellido Materno{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none "
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Dirección{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none "
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Telefono{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none "
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Fecha Nacimiento{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="date"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none "
        />
      </div>
      {/* Fin de los datos personales */}
    </>
  );
};

export default PNRDatosPersonales;
