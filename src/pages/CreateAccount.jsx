import React, { useState } from "react";
import SmoothScroll from "smooth-scroll";
//?Importamos los componentes
import PNRSkills from "../components/PNRSkills";
import RPAlert from "../components/RPAlert";
import RPJob from "../components/RPJob";
import RPStudy from "../components/RPStudy";
//?Funciones Registro Supabase
import RPRegisterCard from "../components/RPRegisterCard";
import RPUserData from "../components/RPUserData";
import validarFormulario from "../helpers/ValidarFormulario";
import SkillsRegister from "../utils/SkillsRegister";
import StudiesRegister from "../utils/StudiesRegister";
import UserRegister from "../utils/UserRegister";
import WorkExperienceRegister from "../utils/WorkExperienceRegister";
const CreateAccount = () => {
  //!Eliminar la informacion
  const [CleanData, setCleanData] = useState(false);
  //?Informacion de usuario
  const [PersonalData, setPersonalData] = useState({}); //?Datos personales
  const [DataSkills, setDataSkills] = useState([]); //?Habilidades
  const [StudentData, setStudentData] = useState([]); //?Estudios
  const [WorkExpData, setWorkExpData] = useState([]); //?Experiencia laboral
  // ?Alerta estado y texto
  const [TextAlert, setTextAlert] = useState(""); //?Texto de alerta
  const [AlertStatus, setAlertStatus] = useState(false);
  //?Registro de informacion de Card
  const [RegisterStatus, setRegisterStatus] = useState(false);
  const [RegisterValue, setRegisterValue] = useState(0);
  const [ErrorRegisterText, setErrorRegisterText] = useState("");
  //?USERDATA
  const [UserData, setUserData] = useState({});
  //? Imagen de usuario
  const [Image, setImage] = useState(null);

  function showAlert() {
    setAlertStatus(!AlertStatus);
    document.body.style.overflow = "auto";
  }
  function RegisterCardShow() {
    setRegisterStatus(false);
    document.body.style.overflow = "auto";
  }

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", Image);
    formData.append("upload_preset", "your_upload_preset"); // Configura tu upload preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
        formData,
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };
  const RegistrarDatoss = async () => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800, // Velocidad del scroll (en milisegundos)
      speedAsDuration: true, // Interpretar speed como duración (opcional)
    });
    let txt = validarFormulario(
      PersonalData,
      DataSkills,
      StudentData,
      WorkExpData,
    );
    setTextAlert(txt);

    if (txt !== "") {
      scroll.animateScroll(0);
      setAlertStatus(true);
      document.body.style.overflow = "hidden";
      return;
    }
    //?mostramos el loading de registro
    setRegisterStatus(true);
    setRegisterValue(0);

    scroll.animateScroll(0);
    document.body.style.overflow = "hidden";
    setTimeout(() => {}, 3000);

    // Subir imagen
    let imageUrl = null;
    if (Image) {
      imageUrl = await uploadImage();
      if (!imageUrl) {
        setRegisterValue(2);
        setErrorRegisterText("Error uploading image");
        return;
      }
      PersonalData.imageUrl = imageUrl; // Agregar URL de la imagen a los datos personales
    }

    // ?insertamos los datos personales usuario
    const { data, error } = await UserRegister(PersonalData);

    // ?insertamos los datos de skills usuario
    if (error) {
      alert(error.message);
      setRegisterValue(2);
      setErrorRegisterText(error.message);
      return;
    }
    //*asignamos el id del usuario a una variable
    const idUser = data[0].id;
    console.log(data[0]);

    // ?Verificamos si hay datos Habilidades
    if (DataSkills.length > 0) {
      const results = await SkillsRegister(DataSkills, idUser);
    }

    //?Verificamos si hay datos Estudiantiles
    if (StudentData.length > 0) {
      const results = await StudiesRegister(StudentData, idUser);
      // console.log(results);
    }

    // ?Verificamos si hay datos Experiencia
    if (WorkExpData.length > 0) {
      const results = await WorkExperienceRegister(WorkExpData, idUser);
      // console.log(results);
    }

    setCleanData(true);
    setRegisterValue(1);
    setUserData(data[0]);
    setCleanData(false);
    scroll.animateScroll(0);
  };

  return (
    <div className="w-full bg-[#eeeeee] pb-8">
      {AlertStatus == true ? (
        <RPAlert TextAlert={TextAlert} showAlert={showAlert} />
      ) : (
        <></>
      )}
      {RegisterStatus == true ? (
        <RPRegisterCard
          RegisterCardShow={RegisterCardShow}
          RegisterValue={RegisterValue}
          UserData={UserData}
          ErrorRegisterText={ErrorRegisterText}
        />
      ) : (
        <></>
      )}

      <div className="10/12 mx-auto lg:w-9/12 xl:w-8/12">
        <h1 className="nnf-bold prc py-10 text-center text-4xl">Registrate</h1>
        <div className="mx-auto grid w-11/12 grid-cols-2 gap-y-9 border-4 bg-white px-4 pb-8 pt-6 md:gap-x-16 md:gap-y-4 md:px-20">
          <RPUserData setPersonalData={setPersonalData} CleanData={CleanData} />
          <h1 className="nnf-bold col-span-2 text-2xl">
            Subir Imagen de Perfil
          </h1>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            // onChange={handleFileChange}
          />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Habilidades{" "}
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <PNRSkills setDataSkills={setDataSkills} CleanData={CleanData} />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Estudios tecnicos u Profesionales
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <RPStudy setStudentData={setStudentData} CleanData={CleanData} />

          <h1 className="nnf-bold col-span-2 text-2xl">
            Experiencias Laborales
            <span className="pl-2 text-sm text-gray-500">(Opcional)</span>
          </h1>
          <RPJob setWorkExpData={setWorkExpData} CleanData={CleanData} />
          {/* Validaciones y registro */}
          <div className="col-span-2 flex justify-end py-6">
            <button
              className="gb-prc nnf-bold nnf-bold logo mx-auto w-[250px] py-3 text-2xl uppercase text-white duration-100 ease-linear md:mx-0 md:py-5 lg:block"
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
