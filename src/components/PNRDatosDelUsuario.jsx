import React, { useEffect, useState } from "react";
import asterisk from "./../assets/icons/asterisk.svg";
import viewfalse from "./../assets/icons/viewfalse.svg";
import viewtrue from "./../assets/icons/viewtrue.svg";
const PNRDatosDelUsuario = ({ setDataPersonal }) => {
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

  const [passwordVisible, setPasswordVisible] = useState(false);
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
      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">
          ID Usuario{" "}
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
                [name]: value.substring(0, 15), // Limitar a 8 caracteres
              });
            }
          }}
          className="border-2 pl-4 focus:outline-none"
        />
      </div>
      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">
          Contraseña{" "}
          <span className="flex justify-center text-2xl font-bold">
            <img src={asterisk} className="w-4" />
          </span>
        </h2>
        <div className="col-span-2 flex">
          <input
            type={passwordVisible ? "text" : "password"}
            name="Contraseña"
            placeholder="escribe aqui"
            value={formData.Contraseña}
            onChange={handleChange}
            className="border-2 pl-4 w-full focus:outline-none"
          />
          <button
            className="flex items-center  bg-slate-300 px-2"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? (
              <img src={viewfalse} className="w-6" alt="" />
            ) : (
              <img src={viewtrue} className="w-6" alt="" />
            )}
          </button>
        </div>
      </div>

      <h1 className="nnf-bold col-span-2 text-2xl">Datos Personales</h1>
      <div className="col-span-2 flex flex-col md:col-span-1">
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

      <div className="col-span-2 flex flex-col md:col-span-1">
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

      <div className="col-span-2 flex flex-col md:col-span-1">
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

      <div className="col-span-2 flex flex-col md:col-span-1">
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

      <div className="col-span-2 flex flex-col md:col-span-1">
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

      <div className="col-span-2 flex flex-col md:col-span-1">
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
          className="border-2 pl-4 focus:outline-none"
          maxLength={20}
        />
      </div>

      <div className="col-span-2 flex flex-col md:col-span-1">
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

      <div className="col-span-2 flex flex-col md:col-span-1">
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
