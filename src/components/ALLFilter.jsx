import React from "react";

const ALLFilter = () => {
  return (
    <div className="mx-auto w-11/12">
      <h2 className="text-2xl py-2 font-bold">Opciones:</h2>
      <div className="mx-auto flex w-10/12 flex-col rounded-md border-2 p-5 font-semibold">
        <button className="group relative m-6 flex w-10/12 flex-col  text-left text-xl">
          <span>Inicio</span>
          <span className="relative -bottom-1 h-1.5 w-full bg-gray-200 transition-all group-hover:w-full"></span>
          <span className="absolute -bottom-1 left-0 h-1.5 w-0 bg-[#3ecf8e] transition-all group-hover:w-full"></span>
        </button>
        <button className="group relative m-6 flex w-10/12 flex-col  text-left text-xl">
          <span>Empleos</span>
          <span className="relative -bottom-1 h-1.5 w-full bg-gray-200 transition-all group-hover:w-full"></span>
          <span className="absolute -bottom-1 left-0 h-1.5 w-0 bg-[#3ecf8e] transition-all group-hover:w-full"></span>
        </button>
        <button className="group relative m-6 flex w-10/12 flex-col  text-left text-xl">
          <span>Perfiles</span>
          <span className="relative -bottom-1 h-1.5 w-full bg-gray-200 transition-all group-hover:w-full"></span>
          <span className="absolute -bottom-1 left-0 h-1.5 w-0 bg-[#3ecf8e] transition-all group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default ALLFilter;
