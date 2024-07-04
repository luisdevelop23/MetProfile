import React, { useEffect, useState } from "react";
import asterisk from "./../assets/icons/asterisk.svg";

const PNRDatosEstudiantiles = ({ setDtEstudiantiles }) => {
  const [estudios, setEstudios] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updateEstudios = [...estudios];
    updateEstudios[index][name] = value;
    setEstudios(updateEstudios);
  };

  const handleAddEstudios = () => {
    setEstudios([
      ...estudios,
      {
        institucion: "",
        titulo: "",
        fechaInicio: "",
        fechaFin: "",
      },
    ]);
  };

  const handleRemoveEstudios = (index) => {
    const updatedEstudios = estudios.filter((_, i) => i !== index);
    setEstudios(updatedEstudios);
  };

  useEffect(() => {
    setDtEstudiantiles(estudios);
  }, [estudios, setDtEstudiantiles]);

  return (
    <>
      {estudios.map((estudio, index) => (
        <div key={index} className="col-span-2 md:grid md:grid-cols-2 gap-4">
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
              value={estudio.institucion}
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
              value={estudio.titulo}
              onChange={(e) => handleChange(e, index)}
              placeholder="escribe aqui"
              className="border-2 pl-4 focus:outline-none"
            />
          </div>

          {/* Fechas inicio Final */}
          <div className="grid grid-cols-2 gap-4 col-span-3">
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
                value={estudio.fechaInicio}
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
                value={estudio.fechaFin}
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
            onClick={() => handleRemoveEstudios(index)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="col-span-2 flex">
        <button
          className="gb-prc nnf-bold px-4 py-1 text-white"
          onClick={handleAddEstudios}
        >
          Agregar Estudios <span className="ml-2">+</span>
        </button>
      </div>
    </>
  );
};

export default PNRDatosEstudiantiles;
