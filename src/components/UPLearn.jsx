import React from "react";
import iconlearn from "../assets/icons/learn.svg";

const UPLearn = ({ data }) => {
  return (
    <>
      <h1 className="br-title group flex cursor-pointer flex-col text-3xl font-semibold">
        <span className="flex gap-1">
          Estudios <img src={iconlearn} className="" alt="" />
        </span>
        <span className="relative -bottom-1 h-1.5 w-1/12 rounded-full bg-[#3ecf8e] transition-all group-hover:w-2/12"></span>
      </h1>
      <div className="flex flex-col justify-center gap-y-6 p-8">
        <div className="grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2">
          {data.map((study) => {
            return (
              <div
                key={study.id}
                className="rounded-lg border-2 bg-white p-3 transition-all duration-200 hover:scale-105"
              >
                <h2 className="text-xl uppercase">{study.titulo}</h2>
                <h3 className="text-gray-400">{study.institucion}</h3>
                <div className="flex justify-center pt-2">
                  {
                    study.fecha_inicio!==null && study.fecha_fin!==null ?
                    <h3 className="text-gray-400">{study.anoInicio} - {study.anoFin}</h3>
                    :
                    <h3 className="text-gray-400">Estudiando</h3>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UPLearn;
