import React, { useEffect, useState } from "react";
import asterisk from "./../assets/icons/asterisk.svg";
const PNRDatosDelUsuario = ({setDataPersonal}) => {
  const [formData, setFormData] = useState({
    IdUsuario: "",
    Contraseña: "",
    PNombre: "",
    SNombre: "",
    PApellido: "",
    SApellido: "",
    Correo: "",
    Telefono: "",
    Direccion: "",
    FechaNacimiento: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  useEffect(() => {
    setDataPersonal(formData);
  }, [formData, setDataPersonal]);

  return (
    <>
      {/* Incio de los datos personales */}
      <h1 className="nnf-bold col-span-2 text-2xl">Usuario y Contraseña</h1>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          ID usuario Nombre{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          name="IdUsuario"
          placeholder="Como Deseas ser llamado?"
          value={formData.IdUsuario}
          onChange={(e) => {
            const { name, value } = e.target;
            // Validar que no haya saltos de línea ni espacios
            if (!value.includes("\n") && !value.includes(" ")) {
              setFormData({
                ...formData,
                [name]: value.substring(0, 8), // Limitar a 8 caracteres
              });
            }
          }}
          className="w-[300px] border-2 pl-4 focus:outline-none"
          maxLength={10}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Contraseña{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="password"
          name="Contraseña"
          placeholder="escribe aqui"
          value={formData.Contraseña}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>
      <h1 className="nnf-bold col-span-2 text-2xl">Datos Personales</h1>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Primer Nombre{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          name="PNombre"
          placeholder="escribe aqui"
          value={formData.PNombre}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Segundo Nombre{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          name="SNombre"
          placeholder="escribe aqui"
          value={formData.SNombre}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Apellido Paterno{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          name="PApellido"
          placeholder="escribe aqui"
          value={formData.PApellido}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Apellido Materno{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          name="SApellido"
          placeholder="escribe aqui"
          value={formData.SApellido}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Dirección{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="text"
          name="Direccion"
          placeholder="escribe aqui"
          value={formData.Direccion}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Telefono{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="number"
          name="Telefono"
          placeholder="escribe aqui"
          value={formData.Telefono}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none "
          maxLength={20}
        />
      </div>

      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Fecha Nacimiento{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="date"
          name="FechaNacimiento"
          placeholder="escribe aqui"
          value={formData.FechaNacimiento}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="nnf-regular flex">
          Correo Electronico{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <input
          type="email"
          name="Correo"
          placeholder="escribe aqui"
          value={formData.Correo}
          onChange={handleChange}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>

      {/* Fin de los datos personales */}
    </>
  );
};

export default PNRDatosDelUsuario;
