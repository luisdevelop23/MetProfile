import React from 'react'

const PNRExperiencia = () => {
  return (
    <>
      <h1 className="nnf-bold col-span-2 text-2xl">
        Experiencias Laborales
      </h1>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Intitución{" "}
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

      {/* Fechas inicio Final */}
      <div className="flex gap-x-2  0">
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
            className="border-2 pl-4"
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
            className="border-2 pl-4"
          />
        </div>
      </div>
      {/* Fin de Fechas inicio Final */}

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Descripción{" "}
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
  )
}

export default PNRExperiencia