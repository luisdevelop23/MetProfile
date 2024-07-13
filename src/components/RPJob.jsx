import React, { useEffect, useState } from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const RPJob = ({ setWorkExpData, CleanData }) => {
  const [Job, setJob] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updateJob = [...Job];
    updateJob[index][name] = value;
    setJob(updateJob);
  };

  const handleAddJob = () => {
    setJob([
      ...Job,
      {
        empresa: "",
        puesto: "",
        fechaInicio: "",
        fechaFin: "",
        descripcion: "",
      },
    ]);
  };

  const handleRemoveJob = (index) => {
    const updateJob = Job.filter((_, i) => i !== index);
    setJob(updateJob);
  };

  useEffect(() => {
    setWorkExpData(Job);
  }, [Job, setWorkExpData]);

  useEffect(() => {
    if (CleanData) {
      setJob([]);
    }
  }, [CleanData]);

  return (
    <>
      {Job.map((Job, index) => (
        <div key={index} className="col-span-2 gap-4 md:grid md:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="nnf-regular flex">
              Empresa {index + 1}
              <span className="flex justify-center text-2xl font-bold">
                <img src={asterisk} className="w-4" />
              </span>
            </h2>
            <input
              type="text"
              placeholder="Nombre de la empresa"
              name="empresa"
              value={Job.empresa}
              onChange={(e) => handleChange(e, index)}
              className="border-2 pl-2 focus:outline-none"
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
              placeholder="Que puesto realizaste en la empresa"
              name="puesto"
              value={Job.puesto}
              onChange={(e) => handleChange(e, index)}
              className="border-2 pl-2 focus:outline-none"
            />
          </div>

          {/* Fechas inicio Final */}
          <div className="grid grid-cols-2 gap-x-2">
            <div className="flex flex-col">
              <h2 className="nnf-regular flex">
                Fecha de Incio{" "}
                <span className="flex justify-center text-2xl font-bold">
                  <img src={asterisk} className="w-4" />
                </span>
              </h2>
              <input
                type="date"
                name="fechaInicio"
                value={Job.fechaInicio}
                onChange={(e) => handleChange(e, index)}
                className="border-2 pl-2 focus:outline-none"
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
                name="fechaFin"
                value={Job.fechaFin}
                onChange={(e) => handleChange(e, index)}
                className="border-2 pl-2 focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <p className="nnf-light text-[12px] text-gray-400">
                (La Fecha Final es opciona, si no la colocas entendere que
                sigues laburando)
              </p>
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
              placeholder="Describe tu trabajo"
              value={Job.descripcion}
              onChange={(e) => handleChange(e, index)}
              cols="20"
              rows="3"
              className="border-2 pl-2 pt-2 focus:outline-none"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <button
            className="my-2 mb-2 ml-2 rounded bg-red-500 px-2 py-1 text-white"
            onClick={() => handleRemoveJob(index)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="col-span-2 flex">
        <button
          className="gb-prc nnf-bold px-4 py-1 text-white"
          onClick={handleAddJob}
        >
          Agregar Habilidad <span className="ml-2">+</span>
        </button>
      </div>
    </>
  );
};

export default RPJob;
