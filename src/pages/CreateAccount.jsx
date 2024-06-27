import React from "react";
import PNRCorreoPasword from "../components/PNRCorreoPasword";
import PNRDatosEstudiantiles from "../components/PNRDatosEstudiantiles";
import PNRDatosPersonales from "../components/PNRDatosPersonales";
import PNRExperiencia from "../components/PNRExperiencia";
import PNRHabilidades from "../components/PNRHabilidades";
const CreateAccount = () => {
  return (
    <div className="w-full bg-[#eeeeee] pb-8">
      <div className="mx-auto w-10/12">
        <h1 className="nnf-bold prc py-10 text-4xl">Registrate</h1>
        <div className="mx-auto grid w-11/12 grid-cols-2 gap-x-16 gap-y-4 border-4 bg-white p-10 px-20 pb-8 pt-6">
          <h1 className="nnf-bold col-span-2 text-2xl">Datos Personales</h1>
          <PNRDatosPersonales />
          <h1 className="nnf-bold col-span-2 text-2xl">Datos Estudiantiles</h1>
          <PNRDatosEstudiantiles />
          <h1 className="nnf-bold col-span-2 text-2xl">Habilidades</h1>
          <PNRHabilidades />
          <h1 className="nnf-bold col-span-2 text-2xl">
            Experiencias Laborales
          </h1>
          <PNRExperiencia />
          <h1 className="nnf-bold col-span-2 text-2xl">
            Correo y Contraseña
          </h1>
          <PNRCorreoPasword />

          {/* Validaciones y registro */}
             <div className="flex justify-end col-span-2 py-6">
              <button className="gb-prc nnf-bold nnf-bold text-white  w-[250px] py-3 text-2xl uppercase duration-700 ease-linear md:py-5 lg:block">
                Crear tu perfil
              </button>
             </div>
          {/* Validaciones y registro */}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
