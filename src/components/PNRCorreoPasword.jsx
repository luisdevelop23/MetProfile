import React from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const PNRCorreoPasword = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Correo Electronico{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="email"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Contraseña{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="password"
          placeholder="escribe aqui"
          className="border-2 pl-4 focus:outline-none"
        />
      </div>
    </>
  );
};

export default PNRCorreoPasword;
