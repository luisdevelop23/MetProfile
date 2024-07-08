import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import iconEnterPrise from "../assets/icons/enterprise.svg";
import iconGithub from "../assets/icons/github.svg";
import iconGreater from "../assets/icons/greater.svg";
import iconlearn from "../assets/icons/learn.svg";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconSkills from "../assets/icons/skills.svg";
import iconUser from "../assets/icons/user.svg";
import searchUserData from "../utils/SearchUser";

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { userId } = useParams();
  console.log("userId", userId);

  useEffect(() => {
    async function fetchData() {
      const data = await searchUserData(userId);
      setUserData(data);
    }
    fetchData();
  }, [userId]);
  console.log(userData)

  if (!userData) return <div>Loading...</div>;


  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="w-11/12  lg:p-8 mx-auto">

          <h1 className="br-title group flex cursor-pointer flex-col text-3xl font-semibold">
            Sobre Mi
            <span className="relative -bottom-1 h-1.5 w-1/12 rounded-full bg-[#3ecf8e] transition-all group-hover:w-2/12"></span>
          </h1>

          <div className="my-6 p-8">
            <div className="flex flex-col sm:flex-row rounded-lg border-2 bg-white p-6">
              <div className="flex justify-center w-full sm:w-3/12">
                <img src={iconUser} className="w-40" alt="" />
              </div>
              <div className="w-full sm:w-9/12">
                <h2 className="py-4 text-xl text-center sm:text-left">
                  Nombre1 Nombre2 Apellido1 Apellido2
                </h2>
                <div className="text-md grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <div className="text-left flex items-center justify-center sm:justify-start">
                    <span className="flex">
                      <img src={iconGreater} className="w-4" alt="" />
                      FechaNacimiento:
                    </span>
                    <span className="ml-4">dd/mm/aaaa</span>
                  </div>
                  <div className="text-left flex items-center justify-center sm:justify-start ">
                    <span className="flex">
                      <img src={iconGreater} className="w-4" alt="" />
                      Correo:
                    </span>
                    <span>mail@mail</span>
                  </div>
                  <div className="text-left flex items-center justify-center sm:justify-start">
                    <span className="flex">
                      <img src={iconGreater} className="w-4" alt="" />
                      Telefono:
                    </span>
                    <span className="ml-4">123456789</span>
                  </div>
                  <div className="text-left flex items-center justify-center sm:justify-start">
                    <span className="flex">
                      <img src={iconGreater} className="w-4" alt="" />
                      Direccion:
                    </span>
                    <span className="ml-4">calle 123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <h1 className="br-title group flex cursor-pointer flex-col text-3xl font-semibold">
            <span className="flex gap-1">
              Habilidades <img src={iconSkills} className="" alt="" />
            </span>
            <span className="relative -bottom-1 h-1.5 w-1/12 rounded-full bg-[#3ecf8e] transition-all group-hover:w-2/12"></span>
          </h1>
          <div className="flex justify-center py-8">
            <div className="grid w-11/12 grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid grid-cols-2 rounded-lg border-2 bg-white p-6 hover:scale-105 transition-all duration-200">
                <h3 className="col-span-1 text-left text-lg">Habilidades</h3>
                <h3 className="col-span-1 text-right text-lg">10/10</h3>
                <div className="col-span-2 w-full py-2">
                  <div className="w-full rounded-full bg-gray-200">
                    <div className="w-[90%] rounded-full bg-[#3ecf8e] p-[0.4rem]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* experiencias */}
          <h1 className="br-title group flex cursor-pointer flex-col text-3xl font-semibold">
            <span className="flex gap-1">
              Experiencia <img src={iconEnterPrise} className="" alt="" />
            </span>
            <span className="relative -bottom-1 h-1.5 w-1/12 rounded-full bg-[#3ecf8e] transition-all group-hover:w-2/12"></span>
          </h1>
          <div className="flex flex-col justify-center gap-y-6 p-8">
            <div className="w-11/12 gap-4 mx-auto">
              <h2 className="text-xl uppercase py-2">Empresa</h2>
              <div className="grid grid-cols-1 rounded-lg border-2 bg-white p-3 hover:scale-105 transition-all duration-200">
                <div className="col-span-1 flex justify-between">
                  <h2 className="capitalize-text pl-3 text-xl text-gray-700">
                    Puesto
                  </h2>
                  <h3 className="text-gray-400">00/00/0000 a 00/00/0000</h3>
                  {/* <h3 className="text-gray-400">Trabajando</h3> */}
                </div>
                <p className="col-span-1 mx-4 mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                  eveniet. Ab quas quisquam fugit maxime vel? Facilis, quae quas
                  veniam neque incidunt sit tempora, eos quam nihil soluta maxime
                  alias.
                </p>
              </div>
            </div>
          </div>

          {/* estudios */}
          <h1 className="br-title group flex cursor-pointer flex-col text-3xl font-semibold">
            <span className="flex gap-1">
              Estudios <img src={iconlearn} className="" alt="" />
            </span>
            <span className="relative -bottom-1 h-1.5 w-1/12 rounded-full bg-[#3ecf8e] transition-all group-hover:w-2/12"></span>
          </h1>
          <div className="flex flex-col justify-center gap-y-6 p-8">
            <div className="grid w-11/12 grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-3 border-2 rounded-lg hover:scale-105 transition-all duration-200">
                <h2 className="text-xl uppercase">Titulo</h2>
                <h3 className="text-gray-400">Intitucion</h3>
                <div className="flex justify-center pt-2">
                  <h3 className="text-gray-400">00/00/0000 a 00/00/0000</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="w-full bg-white py-8 border-t-2">
          <div className="flex justify-center">
            <h2 className="nnf-regular text-[21px] text-[#3ecf8e] font-bold">Creado por : LuisDevelop</h2>
          </div>
          <div className="flex justify-center gap-7">
            <a href="https://www.linkedin.com/in/luisdevelop23/" target="_blank" rel="noopener noreferrer">
              <img src={iconLinkedin} className="w-10" alt="" />
            </a>
            <a href="https://github.com/luisdevelop23" target="_blank" rel="noopener noreferrer">
              <img src={iconGithub} className="w-10" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
