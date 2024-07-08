import React from "react";
import cvico from "../assets/icons/cv-gr.svg";
import infico from "../assets/icons/inf-gr.svg";
import panelico from "../assets/icons/panel-gr.svg";
import perico from "../assets/icons/pers-gr.svg";
import userico from "../assets/icons/user-gr.svg";
const Info = () => {
  return (
    <div className="bg-fd sm:px-10 lg:pt-24">
      <h1 className="nnf-extra-bold prc text-center md:text-4xl">
        Por que Crear tu perfil Profesional
      </h1>
      <p className="nnf-semi-bold text-center text-lg">
        Crea y personaliza tu perfil profesional, conecta con oportunidades y
        expande tu red de contactos de manera efectiva y profesional.
      </p>
      {/*Incio de los cards */}
      <div className="bg-fd-2 mt-8 grid grid-cols-1 gap-10 px-10 py-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="logo flex flex-col justify-between rounded-3xl border-4 border-[#3ecf8e] bg-white p-4 duration-700">
          <h2 className="nnf-semi-bold nnf-regular text-center text-2xl">
            Accesibilidad y Actualización
          </h2>
          <img
            src={cvico}
            className="sm:[120px] mx-auto h-[120px] lg:h-[200px]"
            alt=""
          />
          <p className="nnf-light py-2 text-left">
            Un CV digital es fácil de compartir y actualizar en tiempo real.
            Olvídate de versiones obsoletas y asegúrate de que siempre estés
            presentando tu experiencia más reciente.
          </p>
          <button className="gb-prc nnf-bold rounded-lg py-2 uppercase duration-700 ease-linear">
            Informacion
          </button>
        </div>

        <div className="logo flex flex-col justify-between rounded-3xl border-4 border-[#3ecf8e] bg-white p-4 duration-700">
          <h2 className="nnf-semi-bold nnf-regular text-center text-2xl">
            Red de Contactos
          </h2>
          <img
            src={panelico}
            className="sm:[120px] mx-auto h-[120px] lg:h-[200px]"
            alt=""
          />
          <p className="nnf-light py-2 text-left">
            Un CV profesional en línea facilita la conexión con colegas,
            reclutadores y oportunidades laborales. Aprovecha las plataformas
            digitales para expandir tu red de contactos y abrir puertas a nuevas
            oportunidades.
          </p>
          <button className="gb-prc nnf-bold rounded-lg py-2 uppercase duration-700 ease-linear">
            Informacion
          </button>
        </div>

        <div className="logo flex flex-col justify-between rounded-3xl border-4 border-[#3ecf8e] bg-white p-4 duration-700">
          <h2 className="nnf-semi-bold nnf-regular text-center text-2xl">
            Profesionalismo
          </h2>
          <img
            src={perico}
            className="sm:[120px] mx-auto h-[120px] lg:h-[200px]"
            alt=""
          />
          <p className="nnf-light py-2 text-left">
            Un CV virtual bien diseñado refleja tu profesionalismo y atención al
            detalle. Destaca tus habilidades y logros de manera clara y
            atractiva, impresionando a empleadores y clientes potenciales.
          </p>
          <button className="gb-prc nnf-bold rounded-lg py-2 uppercase duration-700 ease-linear">
            Informacion
          </button>
        </div>

        <div className="logo flex flex-col justify-between rounded-3xl border-4 border-[#3ecf8e] bg-white p-4 duration-700">
          <h2 className="nnf-semi-bold nnf-regular text-center text-2xl">
            Identidad Digital
          </h2>
          <img
            src={userico}
            className="sm:[120px] mx-auto h-[120px] lg:h-[200px]"
            alt=""
          />
          <p className="nnf-light py-2 text-left">
            Tu CV virtual es una extensión de tu identidad profesional en línea.
            Construye una marca personal sólida que te diferencie y te haga
            memorable en el mercado laboral.
          </p>
          <button className="gb-prc nnf-bold rounded-lg py-2 uppercase duration-700 ease-linear">
            Informacion
          </button>
        </div>
      </div>

      {/* Fin de los cards */}

      {/*aun no se que como llamarlo xd */}
      <div className="bg-fd-2 mx-auto mt-20 flex w-full flex-col items-center md:flex-row md:py-10">
        <div className="flex w-full flex-col justify-center md:w-1/2 md:gap-4 md:px-4">
          <h1 className="nnf-extra-bold prc text-center md:text-left md:text-2xl lg:text-3xl">
            Crea tu CV Profesional con MetProfile
          </h1>
          <p className="nnf-semi-bold justify-normal px-5 pt-2 text-[12px] md:text-left md:text-[13px] lg:text-[16px]">
            En MetProfile, te ayudamos a crear un CV profesional que destaque tu
            experiencia y habilidades. Nuestra plataforma te ofrece herramientas
            intuitivas para diseñar y personalizar tu perfil, asegurando que tu
            identidad profesional se refleje de manera clara y atractiva. Con
            MetProfile, tu CV siempre estará accesible y actualizado,
            facilitando la conexión con empleadores y oportunidades laborales.
          </p>
        </div>
        <div className="w-full justify-center md:flex md:w-1/2 py-8">
          <img
            src={infico}
            className="mx-auto h-[170px] md:h-[250px] lg:h-[340px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
