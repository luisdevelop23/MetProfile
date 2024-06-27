import React from "react";
//*img
import Logo from "../assets/icons/logogreend.svg";
const Header = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-between rounded-3xl py-6 pt-20 lg:flex-row">
      <div className="flex w-full flex-col justify-center gap-y-3 px-4 md:px-20 lg:w-4/6">
        <h1 className="nnf-extra-bold prc logo text-center text-6xl duration-100 ease-in-out md:text-left">
          MET PROFILE
        </h1>
        <p className="nnf-semi-bold px-2 py-3 text-xl md:text-left">
          Es la plataforma ideal para profesionales que desean destacar en
          línea. Crea y personaliza tu perfil profesional, conecta con
          oportunidades y expande tu red de contactos de manera efectiva y
          profesional.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="gb-prc nnf-bold nnf-bold logo hidden w-1/2 rounded-lg py-3 text-2xl uppercase duration-700 ease-linear md:py-5 lg:block">
            Crear tu perfil
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-3xl p-4 py-8 lg:w-2/6">
        <img
          src={Logo}
          className="logo w-40 duration-700 ease-in-out md:w-72"
          alt=""
        />
        <button className="gb-prc nnf-bold logo mt-8 w-1/2 rounded-lg py-3 uppercase duration-700 ease-linear md:mt-6 md:w-1/3 md:py-5 lg:hidden">
          Crear tu perfil
        </button>
      </div>
    </div>
  );
};

export default Header;
