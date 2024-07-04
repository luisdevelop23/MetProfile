import React, { useEffect, useState } from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const PNRExperiencia = ({ setDtExperiencia }) => {
  const [experiencia, setExperiencia] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiencia = [...experiencia];
    updatedExperiencia[index][name] = value;
    setExperiencia(updatedExperiencia);
  };

  const handleAddExperiencia = () => {
    setExperiencia([
      ...experiencia,
      {
        empresa: "",
        puesto: "",
        fechaInicio: "",
        fechaFin: "",
        descripcion: "",
      },
    ]);
  };

  const handleRemoveExperiencia = (index) => {
    const updatedExperiencia = experiencia.filter((_, i) => i !== index);
    setExperiencia(updatedExperiencia);
  };

  useEffect(() => {
    setDtExperiencia(experiencia);
  }, [experiencia, setDtExperiencia]);

  return (
    <>
      {experiencia.map((experiencia, index) => (
        <div key={index} className="col-span-2 md:grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h2 className="nnf-regular flex">
              Nombre de la Empresa {index + 1}
              <span className="flex justify-center text-2xl font-bold">
                <img src={asterisk} className="w-4" />
              </span>
            </h2>
            <input
              type="text"
              placeholder="escribe aqui"
              name="empresa"
              value={experiencia.empresa}
              onChange={(e) => handleChange(e, index)}
              className="border-2 pl-4 focus:outline-none"
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
              placeholder="escribe aqui"
              name="puesto"
              value={experiencia.puesto}
              onChange={(e) => handleChange(e, index)}
              className="border-2 pl-4 focus:outline-none"
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
                value={experiencia.fechaInicio}
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
                value={experiencia.fechaFin}
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

          <div className="flex flex-col">
            <h2 className="nnf-regular flex">
              Descripción de tu Puesto{" "}
              <span className="flex justify-center text-2xl font-bold">
                <img src={asterisk} className="w-4" />
              </span>
            </h2>
            <textarea
              name="descripcion"
              placeholder="escribe aqui"
              value={experiencia.descripcion}
              onChange={(e) => handleChange(e, index)}
              cols="20"
              rows="3"
              className="border-2 pl-4 pt-2 focus:outline-none"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <button
            className="my-2 mb-2 ml-2 rounded bg-red-500 px-2 py-1 text-white"
            onClick={() => handleRemoveExperiencia(index)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="col-span-2 flex">
        <button
          className="gb-prc nnf-bold px-4 py-1 text-white"
          onClick={handleAddExperiencia}
        >
          Agregar Habilidad <span className="ml-2">+</span>
        </button>
      </div>
    </>
  );
};

export default PNRExperiencia;
