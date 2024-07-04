import React, { useState } from "react";
import SmoothScroll from "smooth-scroll";
import PNRAlerta from "../components/PNRAlerta";
import PNRDatosDelUsuario from "../components/PNRDatosDelUsuario";
import PNRDatosEstudiantiles from "../components/PNRDatosEstudiantiles";
import PNRExperiencia from "../components/PNRExperiencia";
import PNRHabilidades from "../components/PNRHabilidades";
import validarFormulario from "../helpers/ValidarFormulario";
import SkillsRegister from "../utils/SkillsRegister";
import StudiesRegister from "../utils/StudiesRegister";
import UserRegister from "../utils/UserRegister";
import WorkExperienceRegister from "../utils/WorkExperienceRegister";
const CreateAccount = () => {
  const [DataPersonal, setDataPersonal] = useState({});
  const [Dthabilidades, setDtHabilidades] = useState([]);
  const [DtEstudiantiles, setDtEstudiantiles] = useState([]);
  const [Dtexperiencia, setDtExperiencia] = useState([]);
  const [textAlerta, setTextAlerta] = useState("");
  const [alertaEstado, setAlertaEstado] = useState(false);

  function showAlerta() {
    setAlertaEstado(!alertaEstado);
  }

  const RegistrarDatoss = async () => {
    let txt = validarFormulario(
      DataPersonal,
      Dthabilidades,
      DtEstudiantiles,
      Dtexperiencia,
    );

    setTextAlerta(txt);

    let textAlerta = txt;

    if (textAlerta !== "") {
      const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800, // Velocidad del scroll (en milisegundos)
        speedAsDuration: true, // Interpretar speed como duración (opcional)
      });

      // Ejemplo: Hacer scroll al inicio de la página
      scroll.animateScroll(0);
      setAlertaEstado(true);
      document.body.style.overflow = "hidden";
      return;
    }
    console.log("dd3", txt, textAlerta);

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
      }

      //?Verificamos si hay datos Estudiantiles
      if (DtEstudiantiles.length > 0) {
        const results = await StudiesRegister(DtEstudiantiles, idUser);
        console.log(results);
      }

      // ?Verificamos si hay datos Experiencia
      if (Dtexperiencia.length > 0) {
        const results = await WorkExperienceRegister(Dtexperiencia, idUser);
        console.log(results);
      }
    }
  };

  return (
    <div className="w-full bg-[#eeeeee] pb-8">
      {alertaEstado == true ? (
        <PNRAlerta textAlerta={textAlerta} showAlerta={showAlerta} />
      ) : (
        <></>
      )}

      <div className="10/12 mx-auto lg:w-9/12 xl:w-8/12">
        <h1 className="nnf-bold prc py-10 text-4xl text-center">Registrate</h1>
        <div className="mx-auto grid w-11/12 grid-cols-2 gap-y-9  md:gap-x-16 md:gap-y-4 border-4 bg-white px-4 md:px-20 pb-8 pt-6">
          <PNRDatosDelUsuario setDataPersonal={setDataPersonal} />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Habilidades{" "}
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <PNRHabilidades setDtHabilidades={setDtHabilidades} />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Datos Estudiantiles
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <PNRDatosEstudiantiles setDtEstudiantiles={setDtEstudiantiles} />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Experiencias Laborales
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <PNRExperiencia setDtExperiencia={setDtExperiencia} />
          {/* Validaciones y registro */}
          <div className="col-span-2 flex justify-end py-6">
            <button
              className="gb-prc nnf-bold nnf-bold logo w-[250px] mx-auto md:mx-0 py-3 text-2xl uppercase text-white duration-100 ease-linear md:py-5 lg:block"
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
