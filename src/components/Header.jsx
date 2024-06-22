import React from "react";
//*img
import Logo from "../assets/icons/logogreend.svg";
const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center py-6 rounded-3xl">
      <div className="w-full lg:w-1/2 px-4 md:px-20 flex flex-col justify-center gap-y-3">
        <h1 className="text-3xl nnf-extra-bold prc logo ease-in-out duration-100 text-center md:text-left">
          MET PROFILE
        </h1>
        <p className="text-lg nnf-semi-bold px-2 md:text-left">
          Es la plataforma ideal para profesionales que desean destacar en
          línea. Crea y personaliza tu perfil profesional, conecta con
          oportunidades y expande tu red de contactos de manera efectiva y
          profesional.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="gb-prc hidden lg:block nnf-bold uppercase py-3 md:py-5 w-1/2 rounded-lg logo ease-linear duration-700">
            Crear tu perfil
          </button>
        </div>
      </div>
      <div className="w-full flex-col items-center lg:w-1/2 flex justify-center p-4 py-8 rounded-3xl">
        <img
          src={Logo}
          className="w-40 md:w-60 logo ease-in-out duration-700"
          alt=""
        />
        <button className="gb-prc mt-8 md:mt-6 lg:hidden nnf-bold uppercase py-3 md:py-5 w-1/2 md:w-1/3 rounded-lg logo ease-linear duration-700">
          Crear tu perfil
        </button>
      </div>
    </div>
  );
};

export default Header;
