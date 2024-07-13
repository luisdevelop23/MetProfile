import React from "react";
import iconGreater from "../assets/icons/greater.svg";
import iconUser from "../assets/icons/user.svg";

const UPUser = ({ data }) => {
  const {
    primerNombre,
    segundoNombre,
    apellidoMaterno,
    apellidoPaterno,
    email,
    fecha_nacimiento,
    telefono,
    direccion,
    presentacion
  } = data;
  return (
    <div className="my-6">
      <div className="flex flex-col rounded-lg border-2 bg-white  p-4 md:p-0">
        <div className="flex justify-center flex-col items-center">
          <h2 className="py-4 text-center text-xl sm:text-left">
            {primerNombre} {segundoNombre} {apellidoPaterno} {apellidoMaterno}{" "}
          </h2>
          <img src={iconUser} className="w-40" alt="" />
        </div>
        <div className="">
          
          <div className="text-md flex flex-col gap-2 sm:grid-cols-2 md:gap-4 p-4">
            <div className="flex items-start flex-col text-left sm:justify-start">
              <span className="flex">
                <img src={iconGreater} className="w-4" alt="" />
                FechaNacimiento:
              </span>
              <span className="ml-4">{fecha_nacimiento}</span>
            </div>
            <div className="flex items-start flex-col text-left sm:justify-start">
              <span className="flex">
                <img src={iconGreater} className="w-4" alt="" />
                Correo:
              </span>
              <span>{email}</span>
            </div>
            <div className="flex items-start flex-col text-left sm:justify-start">
              <span className="flex">
                <img src={iconGreater} className="w-4" alt="" />
                Telefono:
              </span>
              <span className="ml-4">{telefono}</span>
            </div>
            <div className="flex items-start flex-col text-left sm:justify-start">
              <span className="flex">
                <img src={iconGreater} className="w-4" alt="" />
                Direccion:
              </span>
              <span className="ml-4">{direccion}</span>
            </div>
            <div className="flex i flex-col justify-center text-left sm:justify-start">
              <span className="flex">
                <img src={iconGreater} className="w-4" alt="" />
                Presentacion:
              </span>
              <span className="ml-4">{presentacion}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPUser;
