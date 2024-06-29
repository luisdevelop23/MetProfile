import React, { useState } from "react";
import PNRDatosDelUsuario from "../components/PNRDatosDelUsuario";
import PNRDatosEstudiantiles from "../components/PNRDatosEstudiantiles";
import PNRExperiencia from "../components/PNRExperiencia";
import PNRHabilidades from "../components/PNRHabilidades";
import StudiesRegister from "../utils/StudiesRegister";
import UserRegister from "../utils/UserRegister";
import WorkExperienceRegister from "../utils/WorkExperienceRegister";
const CreateAccount = () => {
  const [DataPersonal, setDataPersonal] = useState({});
  const [Dthabilidades, setDtHabilidades] = useState([]);
  const [DtEstudiantiles, setDtEstudiantiles] = useState([]);
  const [Dtexperiencia, setDtExperiencia] = useState([]);
  
  function Validation() {
    // ?Verificamos si hay datos personales
    

  }
  const RegistrarDatoss = async () => {
    if(Validation)return

    console.log(Dtexperiencia);
    // return;
    // ?Verificamos si hay datos personales
    if (DataPersonal) {
      // ?Insetamos los datos personales usuario
      const { data, error } = await UserRegister(DataPersonal);
      if (error) {
        alert(error.message);
        return;
      }
      //*asignamos el id del usuario a una variable
      const idUser = data[0].id;

      // ?Verificamos si hay datos Habilidades
      if (Dthabilidades.length > 0) {
        const results = await SkillsRegister(Dthabilidades, idUser);
        // console.log(results);
        if (results[0].error == null) {
          return;
        }
      }

      //?Verificamos si hay datos Estudiantiles
      if (DtEstudiantiles.length > 0) {
        const results = await StudiesRegister(DtEstudiantiles, idUser);
        // console.log(results);
        if (results[0].error == null) {
          return;
        }
      }

      // ?Verificamos si hay datos Experiencia
      if (Dtexperiencia.length > 0) {
        const results = await WorkExperienceRegister(Dtexperiencia, idUser);
        console.log(results);
        if (results[0].error == null) {
          return;
        }
      }
    }
  };

  return (
    <div className="w-full bg-[#eeeeee] pb-8">
      <div className="mx-auto w-10/12">
        <h1 className="nnf-bold prc py-10 text-4xl">Registrate</h1>
        <div className="mx-auto grid w-11/12 grid-cols-2 gap-x-16 gap-y-4 border-4 bg-white p-10 px-20 pb-8 pt-6">
          <PNRDatosDelUsuario setDataPersonal={setDataPersonal} />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Datos Estudiantiles
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <PNRDatosEstudiantiles setDtEstudiantiles={setDtEstudiantiles} />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Habilidades{" "}
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <PNRHabilidades setDtHabilidades={setDtHabilidades} />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Experiencias Laborales
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <PNRExperiencia  setDtExperiencia={setDtExperiencia}/>
          {/* Validaciones y registro */}
          <div className="col-span-2 flex justify-end py-6">
            <button
              className="gb-prc nnf-bold nnf-bold logo w-[250px] py-3 text-2xl uppercase text-white duration-100 ease-linear md:py-5 lg:block"
              onClick={RegistrarDatoss}
            >
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
