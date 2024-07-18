import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconHome from "../assets/icons/home.svg";
import iconRegister from "../assets/icons/register.svg";
import RedirectToUser from "../components/RedirectToUser";

const NotFoundPage = () => {
  const [username, setUsername] = useState("");
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div className="bg-fd flex h-[100vh] items-center justify-center">
      <div className="mt-10 w-10/12 rounded-lg border-2 bg-white py-32">
        <h1 className="text-center text-4xl font-bold text-[#3ecf8e]">
          404 - Pagina no encontrada
        </h1>
        <p className="text-center">La pagina que estas buscando no existe</p>
        <div className="flex items-center justify-center">
          <div className="flex py-10 flex-col gap-y-5 md:gap-y-0 md:flex-row">
            <input
              className="rounded-lg border bg-gray-200 px-5 py-3 md:px-10 focus:outline-none"
              type="text"
              value={username}
              onChange={handleInputChange}
              placeholder="Ingresa el nombre de usuario"
            />
            <RedirectToUser username={username} />
            
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link to="/home" className="flex h-[100px] w-[100px] md:h-[140px] md:w-[140px] flex-col items-center justify-center rounded-lg border bg-gray-200 font-semibold uppercase duration-150 hover:scale-105 hover:shadow-2xl">
            <div>
              <img src={iconHome} alt="" />
            </div>
            <h2>Inicio</h2>
          </Link>
          <Link to="/register" className="flex h-[100px] w-[100px] md:h-[140px] md:w-[140px] flex-col items-center justify-center rounded-lg border bg-gray-200 font-semibold uppercase transition-all duration-150 hover:scale-105 hover:shadow-2xl">
            <div>
              <img src={iconRegister} alt="" />
            </div>
            <h2>Registrarce</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
