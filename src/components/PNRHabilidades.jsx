import React from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const PNRHabilidades = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Nombre de la habilidad{" "}
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
          Del 1 al 10, que tan bueno es{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <select name="" id="" className="border-2 focus:outline-none ">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
      </div>
    </>
  );
};

export default PNRHabilidades;
