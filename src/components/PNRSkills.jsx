import React, { useEffect, useState } from "react";

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
        <div key={index} className="col-span-1 flex flex-col gap-4 md:flex-row">
          <div className="px-4">
            <h2 className="nnf-regular flex">
              Cual es tu habilidad nr°{index + 1}
             
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
