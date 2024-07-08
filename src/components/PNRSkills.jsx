import React, { useEffect, useState } from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const PNRSkills = ({ setDataSkills, CleanData }) => {
  const [Skills, setSkills] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updateSkills = [...Skills];
    updateSkills[index][name] = value;
    setSkills(updateSkills);
  };

  const handleAddSkills = () => {
    setSkills([...Skills, { habilidad: "", puntaje: "" }]);
  };

  const handleRemoveSkills = (index) => {
    const updateSkills = Skills.filter((_, i) => i !== index);
    setSkills(updateSkills);
  };

  useEffect(() => {
    setDataSkills(Skills);
  }, [Skills, setDataSkills]);

  useEffect(() => {
    if (CleanData) {
      setSkills([]);
    }
  }, [CleanData]);
  return (
    <>
      {Skills.map((Skills, index) => (
        <div key={index} className="col-span-2 flex flex-col gap-4 md:flex-row">
          <div className="px-4">
            <h2 className="nnf-regular flex">
              Nombre de la habilidad {index + 1}
              <span className="flex justify-center text-2xl font-bold">
                <img src={asterisk} className="w-4" />
              </span>
            </h2>
            <input
              type="text"
              placeholder="Escribe aquí"
              name="habilidad"
              value={Skills.habilidad}
              onChange={(e) => handleChange(e, index)}
              className="border-2 pl-4 focus:outline-none"
            />
          </div>
          <div className="px-4">
            <h2 className="nnf-regular flex">
              Del 1 al 10, qué tan bueno es{" "}
              <span className="flex justify-center text-2xl font-bold">
                <img src={asterisk} className="w-4" />
              </span>
            </h2>
            <select
              name="puntaje"
              value={Skills.puntaje}
              onChange={(e) => handleChange(e, index)}
              className="border-2 focus:outline-none"
            >
              <option value="">Selecciona un puntaje</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <button
            className="mx-auto my-2 mb-2 ml-2 rounded bg-red-500 px-2 py-1 text-white"
            onClick={() => handleRemoveSkills(index)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="col-span-2 flex">
        <button
          className="gb-prc nnf-bold px-4 py-1 text-white"
          onClick={handleAddSkills}
        >
          Agregar Habilidad <span className="ml-2">+</span>
        </button>
      </div>
    </>
  );
};

export default PNRSkills;
