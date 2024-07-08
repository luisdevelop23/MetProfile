import React, { useEffect, useState } from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const RPStudy = ({ setStudentData, CleanData }) => {
  const [study, setStudy] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatestudy = [...study];
    updatestudy[index][name] = value;
    setStudy(updatestudy);
  };

  const handleAddstudys = () => {
    setStudy([
      ...study,
      {
        institucion: "",
        titulo: "",
        fechaInicio: "",
        fechaFin: "",
      },
    ]);
  };

  const handleRemovestudy = (index) => {
    const updatestudy = study.filter((_, i) => i !== index);
    setStudy(updatestudy);
  };

  useEffect(() => {
    setStudentData(study);
  }, [study, setStudentData]);

  useEffect(() => {
    if (CleanData) {
      setStudy([]);
    }
  }, [CleanData]);

  return (
    <>
      {study.map((study, index) => (
        <div key={index} className="col-span-2 gap-4 md:grid md:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="nnf-regular flex">
              Institución{" "}
              <span className="flex justify-center text-2xl font-bold">
                <img src={asterisk} className="w-4" />
              </span>
            </h2>
            <input
              type="text"
              name="institucion"
              value={study.institucion}
              onChange={(e) => handleChange(e, index)}
              placeholder="escribe aqui"
              className="border-2 pl-4 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="nnf-regular flex">
              Título{" "}
              <span className="flex justify-center text-2xl font-bold">
                <img src={asterisk} className="w-4" />
              </span>
            </h2>
            <input
              type="text"
              name="titulo"
              value={study.titulo}
              onChange={(e) => handleChange(e, index)}
              placeholder="escribe aqui"
              className="border-2 pl-4 focus:outline-none"
            />
          </div>

          {/* Fechas inicio Final */}
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <h2 className="nnf-regular flex">
                Fecha de Inicio{" "}
                <span className="flex justify-center text-2xl font-bold">
                  <img src={asterisk} className="w-4" />
                </span>
              </h2>
              <input
                type="date"
                name="fechaInicio"
                value={study.fechaInicio}
                onChange={(e) => handleChange(e, index)}
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
                name="fechaFin"
                value={study.fechaFin}
                onChange={(e) => handleChange(e, index)}
                className="border-2 pl-4 focus:outline-none"
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
          <button
            className="my-2 mb-2 ml-2 rounded bg-red-500 px-2 py-1 text-white"
            onClick={() => handleRemovestudy(index)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="col-span-2 flex">
        <button
          className="gb-prc nnf-bold px-4 py-1 text-white"
          onClick={handleAddstudys}
        >
          Agregar Estudios <span className="ml-2">+</span>
        </button>
      </div>
    </>
  );
};

export default RPStudy;
