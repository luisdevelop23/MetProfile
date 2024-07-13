import React, { useEffect, useState } from "react";
import viewfalse from "./../assets/icons/viewfalse.svg";
import viewtrue from "./../assets/icons/viewtrue.svg";
const RPUserData = ({ setPersonalData, CleanData }) => {
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
    Presentacion: "",
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
    setPersonalData(formData);
  }, [formData, setPersonalData]);

  useEffect(() => {
    if (CleanData) {
      setFormData({});
    }
  }, [CleanData]);

  return (
    <>
      {/* Incio de los datos personales */}
      <h1 className="nnf-bold col-span-2 text-2xl">Usuario y Contraseña</h1>
      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">ID Usuario </h2>
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
          className="border-2 pl-2 focus:outline-none"
        />
      </div>
      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">Contraseña </h2>
        <div className="col-span-2 flex">
          <input
            type={passwordVisible ? "text" : "password"}
            name="Contraseña"
            placeholder="escribe una contraseña segura"
            value={formData.Contraseña}
            onChange={handleChange}
            className="w-full border-2 pl-2 focus:outline-none"
          />
          <button
            className="flex items-center bg-slate-300 px-2"
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
        <h2 className="nnf-regular flex">Primer Nombre </h2>
        <input
          type="text"
          name="PNombre"
          placeholder=""
          value={formData.PNombre}
          onChange={handleChange}
          className="border-2 pl-2 focus:outline-none"
        />
      </div>

      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">Segundo Nombre </h2>
        <input
          type="text"
          name="SNombre"
          placeholder=""
          value={formData.SNombre}
          onChange={handleChange}
          className="border-2 pl-2 focus:outline-none"
        />
      </div>

      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">Apellido Paterno </h2>
        <input
          type="text"
          name="PApellido"
          placeholder=""
          value={formData.PApellido}
          onChange={handleChange}
          className="border-2 pl-2 focus:outline-none"
        />
      </div>

      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">Apellido Materno </h2>
        <input
          type="text"
          name="SApellido"
          placeholder=""
          value={formData.SApellido}
          onChange={handleChange}
          className="border-2 pl-2 focus:outline-none"
        />
      </div>

      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">Dirección </h2>
        <input
          type="text"
          name="Direccion"
          placeholder=""
          value={formData.Direccion}
          onChange={handleChange}
          className="border-2 pl-2 focus:outline-none"
        />
      </div>

      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">Telefono </h2>
        <input
          type="number"
          name="Telefono"
          placeholder=""
          value={formData.Telefono}
          onChange={handleChange}
          className="border-2 pl-2 focus:outline-none"
          maxLength={20}
        />
      </div>

      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">Fecha Nacimiento </h2>
        <input
          type="date"
          name="FechaNacimiento"
          placeholder="escribe aqui"
          value={formData.FechaNacimiento}
          onChange={handleChange}
          className="border-2 pl-2 focus:outline-none"
        />
      </div>

      <div className="col-span-2 flex flex-col md:col-span-1">
        <h2 className="nnf-regular flex">Correo Electronico </h2>
        <input
          type="email"
          name="Correo"
          placeholder=""
          value={formData.Correo}
          onChange={handleChange}
          className="border-2 pl-2 focus:outline-none"
        />
      </div>
      <div className="col-span-2 flex flex-col md:col-span-2">
        <h2 className="nnf-regular flex">Presentacion</h2>
        <textarea
          name="Presentacion"
          placeholder="como te describirias"
          value={formData.Presentacion}
          onChange={handleChange}
          cols="20"
          rows="3"
          className="w-full border-2 pl-2 pt-2 focus:outline-none"
          style={{ resize: "none" }}
        ></textarea>
      </div>
      {/* Fin de los datos personales */}
    </>
  );
};

export default RPUserData;
